import React, { useState } from "react";
import { Range } from "react-range";

import css from "./RangeBar.module.css";

const RangeBar = ({ min = 40, max = 500, step = 10 }) => {
  const [values, setValues] = useState([min, max]);

  return (
    <div className={css.container}>
      <p className={css.label}>Price Range($)</p>
      <Range
        label="Price Range"
        step={step}
        min={min}
        max={max}
        values={values}
        onChange={(values) => setValues(values)}
        renderTrack={({ props, children }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: "2px",
              width: "100%",
              backgroundColor: "#fff",
            }}
          >
            {children}
          </div>
        )}
        renderThumb={({ props, index }) => (
          <div
            {...props}
            key={props.key}
            className={css.sliderThumb}
            style={{
              ...props.style,
              height: "12px",
              width: "12px",
              borderRadius: "6px",
              backgroundColor: "#fff",
              outline: "none",
            }}
          >
            <span className={css.thumbLabel}>{values[index]}</span>
          </div>
        )}
      />
    </div>
  );
};

export default RangeBar;
