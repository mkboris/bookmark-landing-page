import styles from "./Footer.module.css";
import Logo from "../Logo/Logo";
import Social from "../Social/Social";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrap}>
        <div className={styles.logoNav}>
          <Logo>
            <img src="/assets/logo-bookmark-footer.svg" alt="Bookmark" />
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
    </nav>
  );
}
