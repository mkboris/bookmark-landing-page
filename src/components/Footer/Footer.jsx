import styles from "./Footer.module.css";
import Logo from "../Logo/Logo";
import Social from "../Social/Social";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrap}>
        <div className={styles.logoNav}>
          <Logo>
            <img src="/logo-bookmark-footer.svg" alt="Bookmark" />
          </Logo>
          <NavBar />
        </div>
        <Social />
      </div>
    </footer>
  );
}

export default Footer;

function NavBar() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <a href="#">Features</a>
        </li>
        <li>
          <a href="#">Pricing</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav>
  );
}
