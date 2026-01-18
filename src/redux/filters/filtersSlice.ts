import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface Filters {
  brand: string | null;
  seats: string | null;
  transmission: string | null;
  carClass: string | null;
}

interface FiltersState {
  dates: { startDate: string | null; endDate: string | null };
  filters: Filters;
  page: number;
  perPage: number;
}

const initialState: FiltersState = {
  dates: { startDate: null, endDate: null },
  filters: {
    brand: null,
    seats: null,
    transmission: null,
    carClass: null,
  },
  page: 1,
  perPage: 8,
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setDates(state, action: PayloadAction<[string, string]>) {
      const [startDate, endDate] = action.payload;
      state.dates.startDate = startDate;
      state.dates.endDate = endDate;
      state.page = 1;
    },
    setFilter(state, action: PayloadAction<Filters>) {
      state.page = 1;
      (Object.keys(action.payload) as (keyof Filters)[]).forEach((key) => {
        state.filters[key] = action.payload[key];
      });
    },
    setPage(state, action: PayloadAction<number>) {
      state.page = action.payload;
    },
    resetFilters(state) {
      state.filters = initialState.filters;
    },
  },
});

export const { setDates, setFilter, setPage, resetFilters } =
  filtersSlice.actions;

export default filtersSlice.reducer;
