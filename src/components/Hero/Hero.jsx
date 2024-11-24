import styles from "./Hero.module.css";
import Button from "../Button/Button";

function Hero() {
  return (
    <section className={styles.hero}>
      <Intro />
      <Illustration />
    </section>
  );
}

export default Hero;

function Intro() {
  return (
    <div className={styles.intro}>
      <h1 className={styles.heading}>A Simple Bookmark Manager</h1>
      <p className="paragraph">
        A clean and simple interface to organize your favourite websites. Open a
        new browser tab and see your sites load instantly. Try it for free.
      </p>

      <div className={styles.btnContainer}>
        <Button type="heroChrome">Get it on Chrome</Button>
        <Button type="heroFire">Get it on Firefox</Button>
      </div>
    </div>
  );
}

function Illustration() {
  return (
    <div className={styles.imgWrap}>
      <img src="/illustration-hero.svg" alt="" />
    </div>
  );
}
