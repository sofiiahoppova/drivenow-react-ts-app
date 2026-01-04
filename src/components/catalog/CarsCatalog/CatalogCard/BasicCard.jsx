import React from "react";
import { useDispatch, useSelector } from "react-redux";

import PriceTable from "./PriceTable";
import Plans from "./Plans";
import CarFeaturesList from "./CarFeaturesList";

import { selectDates } from "/src/redux/filters/selectors";
import { setOpen } from "/src/redux/modal/modalSlice";

import css from "./BasicCard.module.css";

const BasicCard = ({ car }) => {
  const dispatch = useDispatch();
  const dates = useSelector(selectDates);

  return (
    <div className={css.container}>
      <div className={css.wrapper}>
        <div className={css.titleWrapper}>
          <h3 className={css.title}>
            {car.brand} <span className={css.lightTitle}>{car.model}</span>
          </h3>
          <div className={css.reviewsWrapper}>
            <svg className={css.icon} width={24} height={24}>
              <use href="/sprite.svg#icon-star"></use>
            </svg>
            <p className={css.rate}>{car.averageRating}</p>
            <button
              className={css.reviewsBtn}
              onClick={() =>
                dispatch(
                  setOpen({
                    component: "ReviewsList",
                    props: { reviews: car.reviews },
                  })
                )
              }
            >
              {car.reviewCount} reviews
            </button>
          </div>
        </div>
        <div className={css.classWrapper}>
          <p className={css.carClass}>{car.carClass}</p>
        </div>
      </div>
      <img
        src="/images/CarExample.png"
        alt={`${car.brand} ${car.model} photo`}
      />
      <CarFeaturesList car={car} />
      {dates.startDate && dates.endDate ? (
        <Plans car={car} />
      ) : (
        <PriceTable prices={car.prices} carId={car.id} />
      )}
    </div>
  );
};

export default BasicCard;
