import React from "react";
import { useDispatch } from "react-redux";

import css from "./PriceTable.module.css";
import { setOpen } from "/src/redux/modal/modalSlice";

const PriceTable = ({ prices, carId }) => {
  const dispatch = useDispatch();

  return (
    <>
      <table className={css.table}>
        <thead className={css.tableHead}>
          <tr>
            <th scope="col" className={css.tableTitle}>
              Rental period
            </th>
            <th scope="col" className={css.tableTitle}>
              Price /per day
            </th>
          </tr>
        </thead>
        <tbody className={css.tableBody}>
          <tr>
            <td colSpan={2} className={css.tableSeparator}></td>
          </tr>
          <tr>
            <td>1-6 days</td>
            <td>{prices.dailyPrice}$</td>
          </tr>
          <tr>
            <td>7-13 days</td>
            <td>{prices.weekendPrice}$</td>
          </tr>
          <tr>
            <td>14-29 days</td>
            <td>{prices.weeklyPrice}$</td>
          </tr>
          <tr>
            <td>30+ days</td>
            <td>{prices.monthlyPrice}$</td>
          </tr>
        </tbody>
      </table>
      <button
        className={css.selectBtn}
        onClick={() =>
          dispatch(
            setOpen({
              component: "SearchBarModal",
              props: { carId: carId.toString() },
            })
          )
        }
      >
        Select Dates
      </button>
    </>
  );
};

export default PriceTable;
