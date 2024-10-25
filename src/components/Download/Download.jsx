import styles from "./Download.module.css";
import Button from "../Button/Button";

function Download() {
  return (
    <section className={styles.section}>
      <div>
        <h2 className="secHeading">Download the extension</h2>
        <p className="paragraph">
          We’ve got more browsers in the pipeline. Please do let us know if
          you’ve got a favourite you’d like us to prioritize.
        </p>
      </div>

      <div className={styles.cardContainer}>
        <Card
          src="/assets/logo-chrome.svg"
          alt="Chrome Logo"
          heading="Add to Chrome"
          paragraph="Minimum version 62"
        />
        <Card
          src="/assets/logo-firefox.svg"
          alt="Firefox Logo"
          heading="Add to Firefox"
          paragraph="Minimum version 55"
        />
        <Card
          src="/assets/logo-opera.svg"
          alt="Opera Logo"
          heading="Add to Opera"
          paragraph="Minimum version 46"
        />
      </div>
    </section>
  );
}

export default Download;

function Card({ src, alt, heading, paragraph }) {
  return (
    <div className={styles.card}>
      <Image src={src} alt={alt} />
      <div className={styles.cardText}>
        <Heading>{heading}</Heading>
        <Paragraph>{paragraph}</Paragraph>
      </div>
      {/* <img src="assets/bg-dots.svg" alt="" /> */}
      <Button type="info">Add & Install Extension</Button>
    </div>
  );
}

function Image({ src, alt }) {
  return <img src={src} alt={alt} />;
}

function Heading({ children }) {
  return <h3 className={styles.cardHeading}>{children}</h3>;
}

function Paragraph({ children }) {
  return <p className={styles.cardParagraph}>{children}</p>;
}
