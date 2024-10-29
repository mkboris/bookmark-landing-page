import { useState } from "react";
import styles from "./AccordionEl.module.css";
import Button from "../Button/Button";

const faqs = [
  {
    question: "What is Bookmark?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.",
  },
  {
    question: "How can I request a new browser?",
    answer:
      "Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.",
  },
  {
    question: "Is there a mobile app?",
    answer:
      "Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulu dolor, ut condimentum urna vulputate eget.",
  },
  {
    question: "What about other Chromium browsers?",
    answer:
      "Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque non ut velit.",
  },
];

function AccordionEl() {
  return (
    <section className={styles.section}>
      <div className={styles.accIntro}>
        <h2 className="secHeading">Frequently Asked Questions</h2>
        <p className="paragraph">
          Here are some of our FAQs. If you have any other questions you’d like
          answered please feel free to email us.
        </p>
      </div>

      <Accordion data={faqs} />

      <Button type="info">More Info</Button>
    </section>
  );
}

export default AccordionEl;

function Accordion({ data }) {
  const [curOpen, setCurOpen] = useState(null);

  return (
    <div className={styles.accordion}>
      {data.map((el) => (
        <AccordionItem
          curOpen={curOpen}
          onOpen={setCurOpen}
          question={el.question}
          key={el.question}
        >
          {el.answer}
        </AccordionItem>
      ))}
    </div>
  );
}

function AccordionItem({ question, curOpen, onOpen, children }) {
  const isOpen = question === curOpen;

  function handleToggle() {
    onOpen(isOpen ? null : question);
  }

  return (
    <div className={styles.item} onClick={handleToggle}>
      <hr className={styles.line} />
      <div className={styles.quesIcon}>
        <Button
          type="accordion"
          onClick={handleToggle}
          aria-expanded={isOpen}
          aria-controls={`accordion-content-${question}`}
          id={`accordion-header-${question}`}
        >
          {question}
        </Button>
        {isOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12">
            <path
              fill="none"
              stroke="#FA5959"
              strokeWidth="3"
              d="M1 10l8-8 8 8"
            />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12">
            <path
              fill="none"
              stroke="#5267DF"
              strokeWidth="3"
              d="M1 1l8 8 8-8"
            />
          </svg>
        )}
      </div>

      <div
        id={`accordion-content-${question}`}
        role="region"
        aria-labelledby={`accordion-header-${question}`}
        style={{ display: isOpen ? "flex" : "none" }}
      >
        <p className={styles.answer}>{children}</p>
      </div>
    </div>
  );
}
