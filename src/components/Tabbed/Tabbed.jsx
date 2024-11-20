import { useState } from "react";
import styles from "./Tabbed.module.css";
import Button from "../Button/Button";

const content = [
  {
    feature: "Simple Bookmarking",
    summary: "Bookmark in one click",
    details:
      "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
    image: "/illustration-features-tab-1.svg",
  },
  {
    feature: "Speedy Searching",
    summary: "Intelligent search",
    details:
      "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
    image: "/illustration-features-tab-2.svg",
  },
  {
    feature: "Easy Sharing",
    summary: "Share your bookmarks",
    details:
      "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
    image: "/illustration-features-tab-3.svg",
  },
];

function Tabbed() {
  return (
    <section className={styles.section}>
      <TabbedIntro />
      <Tabs content={content} />
    </section>
  );
}

export default Tabbed;

function TabbedIntro() {
  return (
    <div>
      <h2 className="secHeading">Features</h2>
      <p className="paragraph">
        Our aim is to make it quick and easy for you to access your favourite
        websites. Your bookmarks sync between your devices so you can access
        them on the go.
      </p>
    </div>
  );
}

function Tabs({ content }) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className={styles.tabsWrap}>
      <div className={styles.tabs}>
        <hr className={styles.lineMobile} />
        <Tab num={0} activeTab={activeTab} onClick={setActiveTab}>
          Simple Bookmarking
        </Tab>
        <hr className={styles.lineMobile} />
        <Tab num={1} activeTab={activeTab} onClick={setActiveTab}>
          Speedy Searching
        </Tab>
        <hr className={styles.lineMobile} />
        <Tab num={2} activeTab={activeTab} onClick={setActiveTab}>
          Easy Sharing
        </Tab>
        <hr className={styles.lineMobile} />
      </div>

      <TabContent
        item={content.at(activeTab)}
        key={content.at(activeTab).feature}
      />
    </div>
  );
}

function Tab({ children, num, activeTab, onClick }) {
  return (
    <button
      className={`${styles.tabBtn} ${activeTab === num ? styles.active : ""}`}
      onClick={() => onClick(num)}
    >
      {children}
    </button>
  );
}

function TabContent({ item }) {
  return (
    <div className={styles.tabContentWrap}>
      <img src={item.image} alt="" />

      <div className={styles.tabContent}>
        <div>
          <h2 className="secHeading">{item.summary}</h2>
          <p className="paragraph">{item.details}</p>
        </div>
        <Button type="info">More Info</Button>
      </div>
    </div>
  );
}
