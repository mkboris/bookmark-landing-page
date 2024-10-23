import styles from "./Logo.module.css";

function Logo({ children }) {
  return (
    <a href="#" className={styles.logo}>
      {children}
    </a>
  );
}

export default Logo;
