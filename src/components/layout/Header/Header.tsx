import { useState } from "react";

import Navigation from "./Navigation";
import Logo from "../../shared/Logo/Logo";

import css from "./Header.module.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={css.container}>
      <Logo />
      <div className={css.desktopMenu}>
        <Navigation color="black" />
      </div>
      <button
        className={css.menuButton}
        onClick={() => {
          setIsMenuOpen(true);
        }}
      >
        <svg className={css.icon} width={24} height={16}>
          <use href="/sprite.svg#icon-menu"></use>
        </svg>
      </button>
      {isMenuOpen && (
        <Navigation
          color="white"
          onClose={() => {
            setIsMenuOpen(false);
          }}
          isMobile={isMenuOpen}
        />
      )}
    </header>
  );
};

export default Header;
