import { motion } from "motion/react";

import styles from "./MobileMenu.module.css";
import Logo from "../Logo/Logo";
import Button from "../Button/Button";
import Social from "../Social/Social";

function MobileMenu({ onCloseMenu }) {
  const menuVariants = {
    hidden: { opacity: 0, x: "100%" },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 300, damping: 30 },
    },
    exit: {
      opacity: 0,
      x: "100%",
      transition: { type: "tween", duration: 0.3 },
    },
  };

  return (
    <motion.div
      className={styles.menuContainer}
      variants={menuVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <LogoBtn onCloseMenu={onCloseMenu} />
      <MobileNav />
      <Social />
    </motion.div>
  );
}

export default MobileMenu;

function LogoBtn({ onCloseMenu }) {
  return (
    <div className={styles.logoBtn}>
      <Logo>
        <img src="/logo-bookmark-white.svg" alt="Bookmark" />
      </Logo>

      <CloseBtn onCloseMenu={onCloseMenu} />
    </div>
  );
}

function CloseBtn({ onCloseMenu }) {
  return (
    <button
      className={styles.closeBtn}
      onClick={onCloseMenu}
      aria-label="Close mobile menu"
    >
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

function MobileNav() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <a href="#features">Features</a>
        </li>
        <li>
          <a href="#" className={styles.navPrice}>
            Pricing
          </a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <Button type="loginMobile">Login</Button>
    </nav>
  );
}
