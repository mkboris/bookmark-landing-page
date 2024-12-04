import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

import styles from "./AccordionEl.module.css";
import Button from "../Button/Button";

const faqs = [
  {
    id: "faq1",
    question: "What is Bookmark?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.",
  },
  {
    id: "faq2",
    question: "How can I request a new browser?",
    answer:
      "Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.",
  },
  {
    id: "faq3",
    question: "Is there a mobile app?",
    answer:
      "Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulu dolor, ut condimentum urna vulputate eget.",
  },
  {
    id: "faq4",
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
          id={el.id}
          question={el.question}
          key={el.id}
        >
          {el.answer}
        </AccordionItem>
      ))}
    </div>
  );
}

const accordionVariants = {
  open: { opacity: 1, height: "auto" },
  collapsed: { opacity: 0, height: 0 },
};

function AccordionItem({ id, question, curOpen, onOpen, children }) {
  const isOpen = id === curOpen;

  function handleToggle() {
    onOpen(isOpen ? null : id);
  }

  return (
    <div className={styles.item} onClick={handleToggle}>
      <hr className={styles.line} />
      <div className={styles.quesIcon}>
        <Button
          type="accordion"
          onClick={handleToggle}
          aria-expanded={isOpen}
          aria-controls={`accordion-content-${id}`}
          id={`accordion-header-${id}`}
        >
          {question}
        </Button>

        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="12"
          initial={{ rotate: 0 }}
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <path
            fill="none"
            stroke={isOpen ? "var(--SoftRed)" : "var(--SoftBlue)"}
            strokeWidth="3"
            d="M1 1l8 8 8-8"
          />
        </motion.svg>
      </div>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={`accordion-content-${id}`}
            role="region"
            aria-labelledby={`accordion-header-${id}`}
            className={styles.answerContainer}
            variants={accordionVariants}
            initial="collapsed"
            animate="open"
            exit="collapsed"
            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <p className={styles.answer}>{children}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
