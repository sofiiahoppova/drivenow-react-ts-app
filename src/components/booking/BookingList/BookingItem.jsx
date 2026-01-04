import React from "react";

import css from "./BookingItem.module.css";

const BookingItem = ({ booking }) => {
  return (
    <div key={booking.id} className={css.container}>
      <div className={css.wrapper}>
        <h3 className={css.mainTitle}>Booking #{booking.id}</h3>
        <p className={css.title}>
          {booking.car.brand} {booking.car.model}
          {`(${booking.car.carClass})`}
        </p>
        <p className={css.text}>{booking.plan}</p>
      </div>
      <div className={css.wrapper}>
        <p className={css.text}>
          PickUp Date: {booking.startDate.split("T")[0]}
        </p>
        <p className={css.text}>
          DropOff Date: {booking.endDate.split("T")[0]}
        </p>
      </div>
      <div className={css.wrapper}>
        <button className={css.basicBtn} disabled>
          Update
        </button>
        <button
          className={css.transBtn}
          onClick={() =>
            dispatch(
              setOpen({
                component: "DeleteBookingModal",
                props: { id: booking.id },
              })
            )
          }
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default BookingItem;
