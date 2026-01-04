import React from "react";
import clsx from "clsx";

import Logo from "../../shared/Logo/Logo";

import css from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={css.container}>
      <div className={css.wrapper}>
        <Logo color="white" />
        <p className={css.description}>
          DriveNow is where comfort meets style. Choose your car,
          <br />
          hit the road, and make every trip unforgettable.
        </p>
      </div>
      <span className={css.line} />
      <div className={css.secondWrapper}>
        <p className={clsx(css.description, css.leftAlign)}>
          &#169; 2025 DriveNow Car Rental. All rights reserved.
        </p>
        <ul className={css.iconsList}>
          <li>
            <a href="https://www.instagram.com/" target="_blank">
              <svg className={css.icon} width={24} height={24}>
                <use href="/sprite.svg#icon-instagram"></use>
              </svg>
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/" target="_blank">
              <svg className={css.icon} width={24} height={24}>
                <use href="/sprite.svg#icon-facebook"></use>
              </svg>
            </a>
          </li>
          <li>
            <a href="https://www.whatsapp.com/" target="_blank">
              <svg className={css.icon} width={24} height={24}>
                <use href="/sprite.svg#icon-whatsapp"></use>
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
