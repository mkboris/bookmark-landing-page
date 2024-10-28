import styles from "./Logo.module.css";

function Logo({ children }) {
  return (
    <a
      href="https://bookmark-landing-page-five-flax.vercel.app/"
      className={styles.logo}
    >
      {children}
    </a>
  );
}

export default Logo;
