import styles from "./MainEl.module.css";
import Hero from "../Hero/Hero";
import Tabbed from "../Tabbed/Tabbed";
import Download from "../Download/Download";
import AccordionEl from "../AccordionEl/AccordionEl";
import SignUp from "../SignUp/SignUp";

function MainEl() {
  return (
    <main className={styles.main}>
      <Hero />
      <Tabbed />
      <Download />
      <AccordionEl />
      <SignUp />
    </main>
  );
}

export default MainEl;
