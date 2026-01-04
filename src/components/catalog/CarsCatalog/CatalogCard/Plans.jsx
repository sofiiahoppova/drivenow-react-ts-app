import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import clsx from "clsx";

import { selectDates } from "/src/redux/filters/selectors";
import { calculateDays } from "/src/utils/calculateDays";

import css from "./Plans.module.css";

const Plans = ({ car }) => {
  const dates = useSelector(selectDates);
  const days = calculateDays(dates.startDate, dates.endDate);

  let period = "";
  let basicPrice = 0;

  if (days <= 6) {
    period = "1-6 days";
    basicPrice = car.prices.dailyPrice;
  } else if (days <= 13) {
    period = "7-13 days";
    basicPrice = car.prices.weekendPrice;
  } else if (days <= 29) {
    period = "14-29 days";
    basicPrice = car.prices.weeklyPrice;
  } else {
    period = "30+ days";
    basicPrice = car.prices.monthlyPrice;
  }

  const coveragePrice = basicPrice + basicPrice * 0.3;

  return (
    <ul className={css.container}>
      <li className={css.item}>
        <div className={css.wrapper}>
          <div className={css.titleWrapper}>
            <h3 className={css.title}>Basic Plan</h3>
            <a href="/policies#plans" className={css.link}>
              <svg className={css.icon} width={20} height={20}>
                <use href="/sprite.svg#icon-info"></use>
              </svg>
            </a>
          </div>

          <p className={css.text}>
            <span className={css.boldText}>{basicPrice} $</span> / per day{" "}
            {`(${period})`}
          </p>
          <p className={css.price}>
            {basicPrice * days} $ for {days} days
          </p>
          <div className={css.depositWrapper}>
            <p className={css.deposit}>
              Deposit: <span className={css.accentRed}>700 $</span>
            </p>
          </div>
        </div>
        <Link to={`/booking/${car.id}?plan=basic`}>
          <button className={css.bookBtn}>Book Now</button>
        </Link>
      </li>
      <li className={css.item}>
        <div className={css.wrapper}>
          <div className={css.titleWrapper}>
            <h3 className={css.title}>Full Coverage</h3>
            <a href="/policies#plans" className={css.link}>
              <svg className={css.icon} width={20} height={20}>
                <use href="/sprite.svg#icon-info"></use>
              </svg>
            </a>
          </div>

          <p className={css.text}>
            <span className={css.boldText}>{coveragePrice} $</span> / per day{" "}
            {`(${period})`}
          </p>
          <p className={css.price}>
            {coveragePrice * days} $ for {days} days
          </p>
          <div className={css.depositWrapper}>
            <p className={css.deposit}>
              Deposit: <span className={css.accentGreen}>FREE</span>
            </p>
          </div>
        </div>
        <Link to={`/booking/${car.id}?plan=full`}>
          <button className={clsx(css.bookBtn, css.accentBtn)}>Book Now</button>
        </Link>
      </li>
    </ul>
  );
};

export default Plans;
