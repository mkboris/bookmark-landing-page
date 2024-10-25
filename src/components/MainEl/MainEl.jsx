import styles from "./MainEl.module.css";
import Hero from "../Hero/Hero";
import Tabbed from "../Tabbed/Tabbed";

function MainEl() {
  return (
    <main>
      <Hero />
      <Tabbed />
    </main>
  );
}

export default MainEl;
