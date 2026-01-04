import React from "react";
import { Link } from "react-router-dom";

import css from "./HeroSection.module.css";

const HeroSection = () => {
  return (
    <section className={css.container}>
      <div className={css.wrapper}>
        <h1 className={css.title}>Rent a car. Easy. Safe. Reliable.</h1>
        <p className={css.description}>
          Travel in comfort — from city rides to long trips, choose the car that
          fits your journey.
        </p>
      </div>

      <ul className={css.list}>
        <li className={css.item}>
          <Link className={css.link} to="/signup">
            Register
          </Link>
        </li>
        <li className={css.item}>
          <Link className={css.link} to="/autopark">
            Book a car
          </Link>
        </li>
      </ul>
    </section>
  );
};

export default HeroSection;
