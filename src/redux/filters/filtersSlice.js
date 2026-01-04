import { createSlice } from "@reduxjs/toolkit";

const initialState = {
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
    setDates(state, action) {
      const [startDate, endDate] = action.payload;
      state.dates.startDate = startDate;
      state.dates.endDate = endDate;
      state.page = 1;
    },
    setFilter(state, action) {
      state.page = 1;
      for (const key in action.payload) {
        state.filters[key] = action.payload[key];
      }
    },
    setPage(state, action) {
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
