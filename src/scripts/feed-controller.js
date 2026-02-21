/**
 * Community feed client-side controller.
 *
 * Enhances the static feed page with filtering, view switching, and dynamic
 * page sizes. JSON data is lazy-loaded from /community-feed/entries.json on
 * first interaction with any toolbar control.
 */
(() => {
  /* ------------------------------------------------------------------ */
  /*  DOM references                                                     */
  /* ------------------------------------------------------------------ */
  const feedRegion = document.querySelector('[data-feed-region]');
  if (!feedRegion) return; // bail if the page doesn't have the region

  const toolbars = Array.from(document.querySelectorAll('[data-feed-toolbar]'));
  if (!toolbars.length) return;

  const viewToggles = Array.from(document.querySelectorAll('[data-view-toggle]'));
  const typeFilters = Array.from(document.querySelectorAll('[data-type-filter]'));
  const pageSizeButtons = Array.from(document.querySelectorAll('[data-page-size]'));
  const sizeLabelsSmall = Array.from(document.querySelectorAll('[data-size-label="small"]'));
  const sizeLabelsLarge = Array.from(document.querySelectorAll('[data-size-label="large"]'));
  const statusElements = Array.from(document.querySelectorAll('[data-feed-status]'));

  /* ------------------------------------------------------------------ */
  /*  State                                                              */
  /* ------------------------------------------------------------------ */
  let allEntries = null;          // lazily loaded
  let loading = false;
  let viewMode = 'column';        // 'column' | 'grid'
  let contentTypeFilter = '';     // '' = all
  let pageSizeKey = 'small';      // 'small' | 'large'
  let currentPage = 1;

  const PAGE_SIZES = {
    column: { small: 12, large: 24 },
    grid:   { small: 16, large: 32 },
  };

  function getPageSize() {
    return PAGE_SIZES[viewMode][pageSizeKey];
  }

  /* ------------------------------------------------------------------ */
  /*  Data fetching                                                      */
  /* ------------------------------------------------------------------ */
  async function ensureData() {
    if (allEntries) return allEntries;
    if (loading) return null;
    loading = true;

    try {
      const response = await fetch('/community-feed/entries.json');
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      allEntries = await response.json();
    } catch (err) {
      console.error('Failed to load feed entries:', err);
      allEntries = null;
    } finally {
      loading = false;
    }
    return allEntries;
  }

  /* ------------------------------------------------------------------ */
  /*  Filtering & pagination                                             */
  /* ------------------------------------------------------------------ */
  function getFilteredEntries() {
    if (!allEntries) return [];
    if (!contentTypeFilter) return allEntries;
    return allEntries.filter((e) => e.contentType === contentTypeFilter);
  }

  function getTotalPages(filtered) {
    return Math.max(1, Math.ceil(filtered.length / getPageSize()));
  }

  function getPageEntries(filtered) {
    const size = getPageSize();
    const start = (currentPage - 1) * size;
    return filtered.slice(start, start + size);
  }

  /* ------------------------------------------------------------------ */
  /*  HTML helpers                                                       */
  /* ------------------------------------------------------------------ */
  function esc(str) {
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function renderAuthor(entry) {
    if (!entry.authorKey) return '';
    const img = `<img src="${esc(entry.authorImageSrc)}" alt="" width="24" height="24" class="h-6 w-6 rounded-full inline-block align-middle" loading="lazy" />`;
    const name = esc(entry.authorLabel);
    const inner = `<span class="inline-flex items-center gap-1.5">${img}<span>${name}</span></span>`;
    const linked = entry.authorProfileHref
      ? `<a href="${esc(entry.authorProfileHref)}" class="inline-flex items-center gap-1.5 hover:underline" aria-label="View ${name}'s profile">${img}<span>${name}</span></a>`
      : inner;
    return `${linked}<span class="text-muted-light" aria-hidden="true">·</span>`;
  }

  function renderCTA(entry) {
    const btnClass =
      'inline-flex w-fit items-center justify-center rounded-full border-2 border-brand-extra bg-brand-extra px-6 py-2.5 text-sm font-bold text-white transition hover:bg-brand-extraDark hover:border-brand-extraDark';
    if (entry.isInternal) {
      const label = entry.hasBody ? 'Read more' : 'Watch';
      return `<a href="/community-feed/${esc(entry.id)}/" class="${btnClass}">${label}</a>`;
    }
    const label = entry.isGitHub ? 'View on GitHub' : 'Visit link';
    return `<a href="${esc(entry.link)}" target="_blank" rel="noopener noreferrer" class="${btnClass}">${label}</a>`;
  }

  function renderTitle(entry) {
    if (entry.isInternal) {
      return `<a href="/community-feed/${esc(entry.id)}/" class="text-brand-dark text-xl font-header font-bold hover:text-brand transition-colors">${esc(entry.title)}</a>`;
    }
    return `<a href="${esc(entry.link)}" target="_blank" rel="noopener noreferrer" class="text-brand-dark text-xl font-header font-bold hover:text-brand transition-colors inline-flex items-center gap-2">${esc(entry.title)}<span class="inline-block text-muted-light" aria-hidden="true" title="External link"><i class="fa-solid fa-arrow-up-right-from-square h-4 w-4" aria-hidden="true"></i></span></a>`;
  }

  function renderVideoThumb(entry) {
    if (!entry.videoId) return '';
    return `<a href="/community-feed/${esc(entry.id)}/" class="flex-shrink-0 block w-64 sm:w-72 rounded overflow-hidden border border-edge aspect-video" aria-hidden="true"><img src="${esc(entry.videoThumbnailUrl)}" alt="" width="320" height="180" class="h-full w-full object-cover" loading="lazy" /></a>`;
  }

  /* ------------------------------------------------------------------ */
  /*  Column card (matches FeedEntries.astro)                           */
  /* ------------------------------------------------------------------ */
  function renderColumnCard(entry) {
    const flexDir = entry.videoId ? 'flex-row gap-6' : 'flex-col';
    return `
      <li class="rounded-lg border border-edge bg-surface p-6 shadow-sm">
        <div class="flex gap-3 ${flexDir}">
          <div class="flex flex-1 flex-col gap-3 min-w-0">
            ${renderTitle(entry)}
            <p class="text-muted-light text-sm flex flex-wrap items-center gap-x-2 gap-y-1">
              ${renderAuthor(entry)}
              <time datetime="${entry.dateISO}">${esc(entry.dateLabel)}</time>
            </p>
            <p class="text-muted text-base">${esc(entry.description)}</p>
            ${renderCTA(entry)}
          </div>
          ${renderVideoThumb(entry)}
        </div>
      </li>`;
  }

  /* ------------------------------------------------------------------ */
  /*  Grid card (compact 3-col layout)                                  */
  /* ------------------------------------------------------------------ */
  function renderGridCard(entry) {
    const href = entry.isInternal
      ? `/community-feed/${entry.id}/`
      : entry.link;
    const target = entry.isInternal ? '' : ' target="_blank" rel="noopener noreferrer"';
    const thumbnail = entry.videoId
      ? `<div class="rounded overflow-hidden border border-edge aspect-video mb-3"><img src="${esc(entry.videoThumbnailUrl)}" alt="" width="320" height="180" class="h-full w-full object-cover" loading="lazy" /></div>`
      : '';

    return `
      <li class="rounded-lg border border-edge bg-surface p-4 shadow-sm flex flex-col">
        ${thumbnail}
        <a href="${esc(href)}"${target} class="text-brand-dark text-base font-header font-bold hover:text-brand transition-colors line-clamp-2 mb-2">${esc(entry.title)}</a>
        <p class="text-muted-light text-xs flex flex-wrap items-center gap-x-1.5 gap-y-1 mb-2">
          ${entry.authorKey ? `<img src="${esc(entry.authorImageSrc)}" alt="" width="20" height="20" class="h-5 w-5 rounded-full inline-block" loading="lazy" /><span>${esc(entry.authorLabel)}</span><span class="text-muted-light" aria-hidden="true">·</span>` : ''}
          <time datetime="${entry.dateISO}">${esc(entry.dateLabel)}</time>
        </p>
        <p class="text-muted text-sm line-clamp-2">${esc(entry.description)}</p>
      </li>`;
  }

  /* ------------------------------------------------------------------ */
  /*  Pagination tokens (mirrors Pagination.astro logic)                */
  /* ------------------------------------------------------------------ */
  function getTokens(current, total) {
    if (total <= 1) return [1];
    if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);

    const tokens = [1];
    const start = Math.max(2, current - 2);
    const end = Math.min(total - 1, current + 2);
    if (start > 2) tokens.push('…');
    for (let i = start; i <= end; i++) tokens.push(i);
    if (end < total - 1) tokens.push('…');
    tokens.push(total);
    return tokens;
  }

  function renderPagination(current, total) {
    if (total <= 1) return '';

    const tokens = getTokens(current, total);

    const btnBase =
      'inline-flex h-10 w-10 items-center justify-center rounded-md border border-edge bg-surface text-muted hover:bg-surface-alt hover:text-brand transition cursor-pointer';
    const btnDisabled =
      'inline-flex h-10 w-10 items-center justify-center rounded-md border border-edge bg-surface-alt text-muted-light opacity-50';
    const numBase =
      'inline-flex h-10 min-w-10 items-center justify-center rounded-md border border-edge bg-surface px-3 text-muted hover:bg-surface-alt hover:text-brand transition cursor-pointer';
    const numActive =
      'inline-flex h-10 min-w-10 items-center justify-center rounded-md bg-brand-extra px-3 text-white font-semibold';

    const prevBtn =
      current > 1
        ? `<li><button type="button" class="${btnBase}" data-page-nav="${current - 1}" aria-label="Previous page" title="Previous page"><i class="fa-solid fa-chevron-left h-5 w-5" aria-hidden="true"></i></button></li>`
        : `<li><span class="${btnDisabled}" aria-disabled="true" title="Previous page"><i class="fa-solid fa-chevron-left h-5 w-5" aria-hidden="true"></i></span></li>`;

    const nextBtn =
      current < total
        ? `<li><button type="button" class="${btnBase}" data-page-nav="${current + 1}" aria-label="Next page" title="Next page"><i class="fa-solid fa-chevron-right h-5 w-5" aria-hidden="true"></i></button></li>`
        : `<li><span class="${btnDisabled}" aria-disabled="true" title="Next page"><i class="fa-solid fa-chevron-right h-5 w-5" aria-hidden="true"></i></span></li>`;

    const tokenHtml = tokens
      .map((t) => {
        if (t === '…') return `<li><span class="px-2 text-muted-light select-none" aria-hidden="true">…</span></li>`;
        if (t === current) return `<li><span class="${numActive}" aria-current="page">${t}</span></li>`;
        return `<li><button type="button" class="${numBase}" data-page-nav="${t}" aria-label="Go to page ${t}">${t}</button></li>`;
      })
      .join('');

    return `
      <nav class="mt-12 flex items-center justify-center" aria-label="Pagination">
        <ul class="flex items-center gap-2 flex-wrap justify-center">
          ${prevBtn}${tokenHtml}${nextBtn}
        </ul>
      </nav>`;
  }

  /* ------------------------------------------------------------------ */
  /*  Full render                                                        */
  /* ------------------------------------------------------------------ */
  function render() {
    const filtered = getFilteredEntries();
    const total = getTotalPages(filtered);

    // Clamp page
    if (currentPage > total) currentPage = total;
    if (currentPage < 1) currentPage = 1;

    const pageEntries = getPageEntries(filtered);

    // Status text
    const statusText = `${filtered.length} entries · Page ${currentPage} of ${total}`;

    for (const el of statusElements) {
      el.textContent = statusText;
    }

    // Entries
    let entriesHtml;
    if (viewMode === 'grid') {
      entriesHtml = `<ul class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" aria-label="Community feed posts">${pageEntries.map(renderGridCard).join('')}</ul>`;
    } else {
      entriesHtml = `<ul class="space-y-8" aria-label="Community feed posts">${pageEntries.map(renderColumnCard).join('')}</ul>`;
    }

    // Pagination
    const paginationHtml = renderPagination(currentPage, total);

    feedRegion.innerHTML = entriesHtml + paginationHtml;

    // Attach pagination click handlers
    feedRegion.querySelectorAll('[data-page-nav]').forEach((btn) => {
      btn.addEventListener('click', () => {
        currentPage = parseInt(btn.getAttribute('data-page-nav'), 10);
        render();
        feedRegion.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });
  }

  /* ------------------------------------------------------------------ */
  /*  Toolbar sync                                                       */
  /* ------------------------------------------------------------------ */
  function syncToolbars() {
    // View toggles
    for (const btn of viewToggles) {
      if (btn.getAttribute('data-view-toggle') === viewMode) {
        btn.setAttribute('data-active', '');
      } else {
        btn.removeAttribute('data-active');
      }
    }

    // Type filter selects
    for (const sel of typeFilters) {
      sel.value = contentTypeFilter;
    }

    // Page size buttons
    for (const btn of pageSizeButtons) {
      if (btn.getAttribute('data-page-size') === pageSizeKey) {
        btn.setAttribute('data-active', '');
      } else {
        btn.removeAttribute('data-active');
      }
    }

    // Size labels
    const sizes = PAGE_SIZES[viewMode];
    for (const el of sizeLabelsSmall) el.textContent = String(sizes.small);
    for (const el of sizeLabelsLarge) el.textContent = String(sizes.large);
  }

  /* ------------------------------------------------------------------ */
  /*  Event handlers                                                     */
  /* ------------------------------------------------------------------ */
  async function handleInteraction(callback) {
    const data = await ensureData();
    if (!data) return;
    callback();
    syncToolbars();
    render();
  }

  // View toggle
  for (const btn of viewToggles) {
    btn.addEventListener('click', () => {
      const mode = btn.getAttribute('data-view-toggle');
      handleInteraction(() => {
        viewMode = mode;
        pageSizeKey = 'small'; // reset to default for the new mode
        currentPage = 1;
      });
    });
  }

  // Content type filter
  for (const sel of typeFilters) {
    sel.addEventListener('change', () => {
      handleInteraction(() => {
        contentTypeFilter = sel.value;
        currentPage = 1;
      });
    });
  }

  // Page size toggle
  for (const btn of pageSizeButtons) {
    btn.addEventListener('click', () => {
      const key = btn.getAttribute('data-page-size');
      handleInteraction(() => {
        pageSizeKey = key;
        currentPage = 1;
      });
    });
  }

  // Initial sync of size labels (no data needed)
  syncToolbars();
})();
