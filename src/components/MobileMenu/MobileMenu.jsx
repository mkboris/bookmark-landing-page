import styles from "./MobileMenu.module.css";
import Logo from "../Logo/Logo";
import Button from "../Button/Button";
import Social from "../Social/Social";

function MobileMenu({ onCloseMenu }) {
  return (
    <div className={styles.menuContainer}>
      <LogoBtn onCloseMenu={onCloseMenu} />
      <Menu />
      <Social />
    </div>
  );
}

export default MobileMenu;

function LogoBtn({ onCloseMenu }) {
  return (
    <div className={styles.logoBtn}>
      <Logo>
        <img src="src/assets/logo-bookmark-white.svg" alt="Bookmark" />
      </Logo>

      <CloseBtn onCloseMenu={onCloseMenu} />
    </div>
  );
}

function CloseBtn({ onCloseMenu }) {
  return (
    <button className={styles.closeBtn} onClick={onCloseMenu}>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15">
        <path
          fill="#FFF"
          fillRule="evenodd"
          d="M8 5.379L13.303.075l2.122 2.122L10.12 7.5l5.304 5.303-2.122 2.122L8 9.62l-5.303 5.304-2.122-2.122L5.88 7.5.575 2.197 2.697.075 8 5.38z"
        />
      </svg>
    </button>
  );
}

function Menu() {
  return (
    <nav className={styles.menu}>
      <ul>
        <a href="#">
          <li>Features</li>
        </a>
        <a href="#" className={styles.menuPrice}>
          <li>Pricing</li>
        </a>
        <a href="#">
          <li>Contact</li>
        </a>
      </ul>

      <Button type="loginMobile">Login</Button>
    </nav>
  );
}
