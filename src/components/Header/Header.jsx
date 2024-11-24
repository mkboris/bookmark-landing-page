import { useEffect, useState } from "react";
import { AnimatePresence } from "motion/react";

import styles from "./Header.module.css";
import Logo from "../Logo/Logo";
import Button from "../Button/Button";
import MobileMenu from "../MobileMenu/MobileMenu";

function Header() {
  const [showMenu, setShowMenu] = useState(false);

  function handleShowMenu() {
    setShowMenu(true);
  }

  function handleCloseMenu() {
    setShowMenu(false);
  }

  useEffect(() => {
    function handleResize() {
      const isLargeScreen = window.matchMedia("(min-width: 50rem)").matches;

      if (isLargeScreen) {
        document.body.classList.remove("no-scroll");
      } else if (showMenu) {
        document.body.classList.add("no-scroll");
      }
    }

    if (showMenu) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
      document.body.classList.remove("no-scroll");
    };
  }, [showMenu]);

  return (
    <header className={styles.header}>
      <Logo className={styles.logo}>
        <img src="/logo-bookmark.svg" alt="Bookmark" />
      </Logo>
      <NavBar />
      <HamburgerBtn onShowMenu={handleShowMenu} />
      <AnimatePresence>
        {showMenu && <MobileMenu onCloseMenu={handleCloseMenu} />}
      </AnimatePresence>
    </header>
  );
}

export default Header;

function NavBar() {
  return (
    <nav className={styles.nav} aria-label="Main navigation">
      <ul>
        <li>
          <a href="#features">Features</a>
        </li>
        <li>
          <a href="#">Pricing</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <Button type="login">Login</Button>
    </nav>
  );
}

function HamburgerBtn({ onShowMenu }) {
  return (
    <button
      className={styles.hamBtn}
      onClick={onShowMenu}
      aria-label="Open mobile menu"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="15">
        <path
          fill="var(--VeryDarkBlue)"
          fillRule="evenodd"
          d="M0 0h18v3H0V0zm0 6h18v3H0V6zm0 6h18v3H0v-3z"
        />
      </svg>
    </button>
  );
}
