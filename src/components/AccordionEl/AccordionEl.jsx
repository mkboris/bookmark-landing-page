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
      "Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros alique convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.",
  },
  {
    question: "Is there a mobile app?",
    answer:
      "Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulu dolor, ut condimentum urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin ex et ultricies bibendum.",
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
      {data.map((el, i) => (
        <AccordionItem
          curOpen={curOpen}
          onOpen={setCurOpen}
          question={el.question}
          num={i}
          key={el.question}
        >
          {el.answer}
        </AccordionItem>
      ))}
    </div>
  );
}

function AccordionItem({ num, question, curOpen, onOpen, children }) {
  const isOpen = num === curOpen;

  function handleToogle() {
    onOpen(isOpen ? null : num);
  }

  return (
    <div className={styles.item} onClick={handleToogle}>
      <hr className={styles.line} />
      <div className={styles.quesIcon}>
        <Button
          type="accordion"
          onClick={handleToogle}
          aria-expanded={isOpen}
          aria-controls={`accordion-content-${num}`}
          id={`accordion-header-${num}`}
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
        id={`accordion-content-${num}`}
        role="region"
        aria-labelledby={`accordion-header-${num}`}
        style={{ display: isOpen ? "flex" : "none" }}
      >
        <p className={styles.answer}>{children}</p>
      </div>
    </div>
  );
}
