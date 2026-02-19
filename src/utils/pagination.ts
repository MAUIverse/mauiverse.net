export type PaginationSlice<T> = {
  currentPage: number;
  entries: T[];
};

export type PaginationResult<T> = {
  totalPages: number;
  pages: PaginationSlice<T>[];
};

export type PaginatedStaticPath<
  TParams extends Record<string, string>,
  TEntry,
  TExtraProps extends Record<string, unknown> = {},
> = {
  params: TParams;
  props: {
    entries: TEntry[];
    currentPage: number;
    totalPages: number;
  } & TExtraProps;
};

export function paginateEntries<T>(entries: T[], pageSize: number): PaginationResult<T> {
  const totalPages = Math.max(1, Math.ceil(entries.length / pageSize));
  const pages: PaginationSlice<T>[] = [];

  for (let currentPage = 1; currentPage <= totalPages; currentPage++) {
    const start = (currentPage - 1) * pageSize;
    pages.push({
      currentPage,
      entries: entries.slice(start, start + pageSize),
    });
  }

  return { totalPages, pages };
}

export function buildPaginatedStaticPaths<
  TEntry,
  TParams extends Record<string, string>,
  TExtraProps extends Record<string, unknown> = {},
>(
  pages: PaginationSlice<TEntry>[],
  totalPages: number,
  mapPage: (page: PaginationSlice<TEntry>) => {
    params: TParams;
    props?: TExtraProps;
  }
): PaginatedStaticPath<TParams, TEntry, TExtraProps>[] {
  const paths: PaginatedStaticPath<TParams, TEntry, TExtraProps>[] = [];

  for (const page of pages.slice(1)) {
    const mapped = mapPage(page);
    paths.push({
      params: mapped.params,
      props: {
        entries: page.entries,
        currentPage: page.currentPage,
        totalPages,
        ...(mapped.props ?? ({} as TExtraProps)),
      },
    });
  }

  return paths;
}