import React from "react";
import clsx from "clsx";

import css from "./ReviewsSection.module.css";

const ReviewsSection = () => {
  return (
    <section>
      <h2>What our clients say</h2>
      <ul className={css.list}>
        <li className={css.item}>
          <div className={css.wrapper}>
            <svg className={css.icon} width={32} height={32}>
              <use href="/sprite.svg#icon-blue-quotes"></use>
            </svg>
            <p className={css.message}>
              The booking process was super easy, and the car was spotless.
              Definitely renting again!
            </p>
          </div>
          <div>
            <img
              className={css.image}
              width={64}
              src="/images/User1.jpg"
              alt=""
            />
            <h3 className={css.title}>Emily Johnson</h3>
          </div>
        </li>
        <li className={css.item}>
          <div className={clsx(css.wrapper, css.wrapperAccent)}>
            <svg className={css.icon} width={32} height={32}>
              <use href="/sprite.svg#icon-gray-quotes"></use>
            </svg>
            <p className={css.messageAccent}>
              Excellent service and a wide selection of cars. I felt safe and
              comfortable the whole trip.
            </p>
          </div>
          <div>
            <img
              className={css.image}
              width={64}
              src="/images/User2.jpg"
              alt=""
            />
            <h3 className={css.title}>Sophie Williams</h3>
          </div>
        </li>
        <li className={css.item}>
          <div className={css.wrapper}>
            <svg className={css.icon} width={32} height={32}>
              <use href="/sprite.svg#icon-blue-quotes"></use>
            </svg>
            <p className={css.message}>
              Affordable prices and top-notch support. They saved my trip!
            </p>
          </div>
          <div>
            <img
              className={css.image}
              width={64}
              src="/images/User3.jpg"
              alt=""
            />
            <h3 className={css.title}>Ava Wilson</h3>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default ReviewsSection;
