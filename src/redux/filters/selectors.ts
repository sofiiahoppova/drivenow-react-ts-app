import { RootState } from "../store";

export const selectDates = (state: RootState) => state.filters.dates;
export const selectFilters = (state: RootState) => state.filters.filters;
export const selectPage = (state: RootState) => state.filters.page;
