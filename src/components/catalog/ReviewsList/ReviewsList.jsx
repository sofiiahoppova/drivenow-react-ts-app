import React from "react";

import css from "./ReviewsList.module.css";

const ReviewsList = ({ reviews }) => {
  return (
    <div className={css.container}>
      {reviews.map((review) => {
        return (
          <div key={review.id} className={css.wrapper}>
            <h3 className={css.title}>{review.user.fullName}</h3>
            <div className={css.ratingWrapper}>
              <svg className={css.icon} width={20} height={20}>
                <use href="/sprite.svg#icon-star"></use>
              </svg>
              <span className={css.rate}>{review.rating}</span>
            </div>
            <p className={css.text}>{review.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ReviewsList;
