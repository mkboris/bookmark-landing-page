import styles from "./MainEl.module.css";
import Hero from "../Hero/Hero";
import Tabbed from "../Tabbed/Tabbed";
import Download from "../Download/Download";

function MainEl() {
  return (
    <main>
      <Hero />
      <Tabbed />
      <Download />
    </main>
  );
}

export default MainEl;
