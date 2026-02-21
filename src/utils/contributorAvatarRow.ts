export function fitContributorAvatarRows(root: ParentNode = document): void {
  const avatarRows = Array.from(root.querySelectorAll('[data-contributor-avatar-row]'));

  for (const row of avatarRows) {
    const avatars = Array.from(row.querySelectorAll('[data-contributor-avatar]'));
    if (avatars.length === 0) continue;

    const rowStyles = window.getComputedStyle(row as Element);
    const gap = Number.parseFloat(rowStyles.columnGap || rowStyles.gap || '0') || 0;
    const avatarWidth = (avatars[0] as HTMLElement).getBoundingClientRect().width;

    if (avatarWidth <= 0) continue;

    const availableWidth = (row as HTMLElement).clientWidth;
    const fitCount = Math.max(0, Math.floor((availableWidth + gap) / (avatarWidth + gap)));

    avatars.forEach((avatar, index) => {
      avatar.classList.toggle('hidden', index >= fitCount);
    });
  }
}
