import React from "react";
import css from "./AboutUsSection.module.css";

const AboutUsSection = () => {
  return (
    <section className={css.container} id="about">
      <h2 className={css.title}>About Us</h2>
      <div className={css.contentWrapper}>
        <p className={css.description}>
          For over 10 years, we`ve been helping people find the perfect car for
          every occasion — whether it`s a quick city ride or a long road trip.
          Our mission is simple: accessibility, reliability, and care for every
          customer. We believe that every journey should be comfortable and
          enjoyable.
        </p>
        <ul className={css.list}>
          <li className={css.item}>
            <span className={css.accentText}>10+</span>
            <p className={css.text}>years of experience</p>
          </li>
          <li className={css.item}>
            <span className={css.accentText}>200+</span>
            <p className={css.text}>premium cars available</p>
          </li>
          <li className={css.item}>
            <span className={css.accentText}>1000+</span>
            <p className={css.text}>satisfied and thankful clients</p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default AboutUsSection;
