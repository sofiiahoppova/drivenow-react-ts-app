import React from "react";
import css from "./BenefitsSection.module.css";

const BenefitsSection = () => {
  return (
    <section className={css.container}>
      <h2 className={css.mainTitle}>Why choose us?</h2>
      <ul className={css.list}>
        <li className={css.item}>
          <img
            className={css.image}
            src="/images/car.png"
            alt="Electric car facing camera"
          />
          <h3 className={css.title}> Wide car selection </h3>
          <p className={css.description}>
            From compact city cars to premium rides.
          </p>
        </li>
        <li className={css.item}>
          <img
            className={css.image}
            src="/images/public-safety.png"
            alt="Sield protecting people"
          />
          <h3 className={css.title}> Safe & reliable </h3>
          <p className={css.description}>Every car is regularly serviced. </p>
        </li>
        <li className={css.item}>
          <img
            className={css.image}
            src="/images/hand.png"
            alt="Hand paying with credit card"
          />
          <h3 className={css.title}>Easy booking </h3>
          <p className={css.description}>
            Reserve online in just a few clicks.
          </p>
        </li>
        <li className={css.item}>
          <img
            className={css.image}
            src="/images/location-pin.png"
            alt="Location pin pointing into convinient place"
          />
          <h3 className={css.title}>Convenient locations</h3>
          <p className={css.description}>Cars available across the city. </p>
        </li>
        <li className={css.item}>
          <img
            className={css.image}
            src="/images/handshake.png"
            alt="Two person shaking their hands"
          />
          <h3 className={css.title}>Trusted experience </h3>
          <p className={css.description}>Over ten years in the market. </p>
        </li>
      </ul>
    </section>
  );
};

export default BenefitsSection;
