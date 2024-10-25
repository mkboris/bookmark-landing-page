import styles from "./Hero.module.css";
import Button from "../Button/Button";

function Hero() {
  return (
    <div className={styles.hero}>
      <Intro />
      <Illustration />
    </div>
  );
}

export default Hero;

function Intro() {
  return (
    <section className={styles.intro}>
      <h1 className={styles.heading}>A Simple Bookmark Manager</h1>
      <p className="paragraph">
        A clean and simple interface to organize your favourite websites. Open a
        new browser tab and see your sites load instantly. Try it for free.
      </p>

      <div className={styles.btnContainer}>
        <Button type="heroChrome">Get it on Chrome</Button>
        <Button type="heroFire">Get it on Firefox</Button>
      </div>
    </section>
  );
}

function Illustration() {
  return (
    // <div className={styles.illustContainer}>
    <img
      className={styles.heroImg}
      src="src/assets/illustration-hero.svg"
      alt=""
    />
    //   <div className={styles.bgBlue}></div>
    // </div>
  );
}
