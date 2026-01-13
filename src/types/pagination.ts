export interface Pagination {
  hasNextPage: boolean;
  hasPrevPage: boolean;
  page: number;
  perPage: number;
  totalItems: number;
  totalPages: number;
}
