import { useState } from "react";
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

  return (
    <header className={styles.header}>
      <Logo className={styles.logo}>
        <img src="../src/assets/logo-bookmark.svg" alt="Bookmark" />
      </Logo>
      <NavBar />
      <HamburgerBtn onShowMenu={handleShowMenu} />
      {showMenu && <MobileMenu onCloseMenu={handleCloseMenu} />}
    </header>
  );
}

export default Header;

function NavBar() {
  return (
    <nav className={styles.nav}>
      <ul>
        <a href="#">
          <li>Features</li>
        </a>
        <a href="#">
          <li>Pricing</li>
        </a>
        <a href="#">
          <li>Contact</li>
        </a>
      </ul>

      <Button type="login">Login</Button>
    </nav>
  );
}

function HamburgerBtn({ onShowMenu }) {
  return (
    <button className={styles.hamBtn} onClick={onShowMenu}>
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="15">
        <path
          fill="#242A45"
          fillRule="evenodd"
          d="M0 0h18v3H0V0zm0 6h18v3H0V6zm0 6h18v3H0v-3z"
        />
      </svg>
    </button>
  );
}
