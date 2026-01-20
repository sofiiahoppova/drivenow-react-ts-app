import { FiltersState } from "@/redux/filters/filtersSlice";
import { Filters } from "@/types";

export const buildFiltersPayload = (state: FiltersState): Filters | null => {
  const { filters, page, perPage, dates } = state;

  if (!dates.startDate || !dates.endDate) return null;

  const payload: Filters = {
    page,
    perPage,
    startDate: dates.startDate,
    endDate: dates.endDate,
  };

  if (filters.brand) payload.brand = filters.brand;
  if (filters.seats) payload.seats = Number(filters.seats);
  if (filters.transmission)
    payload.transmission = filters.transmission as "automatic" | "manual";
  if (filters.carClass)
    payload.carClass = filters.carClass as
      | "economy"
      | "compact"
      | "midsize"
      | "SUV"
      | "premium";

  return payload;
};
