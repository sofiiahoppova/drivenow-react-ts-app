import { useEffect } from "react";
import toast from "react-hot-toast";

import { Car } from "@/types";

import Loader from "@/components/shared/Loader/Loader";
import BasicCard from "./CatalogCard/BasicCard";
import Pagination from "./Pagination";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { fetchAllCars } from "@/redux/cars/operations";
import {
  selectDates,
  selectFilters,
  selectPage,
} from "@/redux/filters/selectors";
import {
  selectAllCars,
  selectCarsError,
  selectCarsStatus,
  selectPagination,
} from "@/redux/cars/selectors";

import css from "./CarsCatalog.module.css";
import { buildFiltersPayload } from "@/utils/buildFiltersPayload";

const CarsCatalog = () => {
  const dispatch = useAppDispatch();

  const { startDate, endDate } = useAppSelector(selectDates);
  const filters = useAppSelector(selectFilters);
  const page = useAppSelector(selectPage);
  const cars = useAppSelector(selectAllCars);
  const pagination = useAppSelector(selectPagination);
  const carsStatus = useAppSelector(selectCarsStatus);
  const error = useAppSelector(selectCarsError);

  useEffect(() => {
    const payload = buildFiltersPayload({
      filters,
      dates: { startDate, endDate },
      page,
      perPage: 8,
    });

    if (payload) {
      dispatch(fetchAllCars(payload));
    }
  }, [dispatch, page, filters, startDate, endDate]);

  useEffect(() => {
    window.scrollTo({
      top: 300,
      behavior: "smooth",
    });
  }, [page]);

  let content;

  if (carsStatus == "loading") {
    content = <Loader />;
  } else if (carsStatus == "succeeded") {
    content =
      pagination.totalItems >= 1 ? (
        cars.map((car: Car, index: number) => (
          <BasicCard key={index} car={car} />
        ))
      ) : (
        <p>
          There is no cars found for this filter results. Try other categories!
        </p>
      );
  } else if (carsStatus == "failed") {
    toast.error(error);
  }

  return (
    <section className={css.container}>
      <div className={css.list}>{content}</div>
      {pagination.totalPages > 1 && (
        <Pagination pages={pagination.totalPages} />
      )}
    </section>
  );
};

export default CarsCatalog;
