import React from "react";

import css from "./CarFeaturesList.module.css";
import clsx from "clsx";

const CarFeaturesList = ({ car, size = null }) => {
  return (
    <ul className={css.list}>
      <li className={css.listItem}>
        <p className={clsx(size && css.small, css.text)}>{car.year}</p>
      </li>
      <li className={css.listItem}>
        <svg className={css.icon} width={24} height={24}>
          <use href="/sprite.svg#icon-seat"></use>
        </svg>
        <p className={clsx(size && css.small, css.text)}>{car.seats}</p>
      </li>
      <li className={css.listItem}>
        <svg className={css.icon} width={24} height={24}>
          <use href="/sprite.svg#icon-gas"></use>
        </svg>
        <p className={clsx(size && css.small, css.text)}>{car.fuelType}</p>
      </li>
      <li className={css.listItem}>
        <svg className={css.icon} width={24} height={24}>
          <use href="/sprite.svg#icon-AT"></use>
        </svg>
        <p className={clsx(size && css.small, css.text)}>{car.transmission}</p>
      </li>
      <li className={css.listItem}>
        <svg className={css.icon} width={24} height={24}>
          <use href="/sprite.svg#icon-can"></use>
        </svg>
        <p className={clsx(size && css.small, css.text)}>
          {car.consumption}l /100km
        </p>
      </li>
    </ul>
  );
};

export default CarFeaturesList;
