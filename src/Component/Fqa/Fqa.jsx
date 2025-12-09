import React, { useState } from "react";
import styles from "./style.module.css";    

export default function Fqa() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Is Al-Qamar Factory certified with ISO 9001:2015?",
      answer:
        "Yes, Al-Qamar Factory is officially certified with ISO 9001:2015 by Brilliant Certification, confirming its compliance with an internationally recognized quality management system.",
    },
    {
      question: "What is the scope of the ISO quality certification?",
      answer:
        "The certification covers the manufacture of plastics, plastic mats, and export, meaning all production and export processes are under a certified quality system.",
    },
    {
      question:
        "Is the factory a member of any official industrial organization in Egypt?",
      answer:
        "Yes, the factory is a registered member of the Chemical Industries Chamber – Federation of Egyptian Industries with membership number 3338, and its registered activity is plastic mats.",
    },
    {
      question: "Are the certifications and approvals still valid?",
      answer:
        "Yes, the certificates are valid. The ISO certificate was issued on July 10, 2025, valid until July 9, 2026, and the chamber membership is valid until December 31, 2025.",
    },
    {
      question: "What distinguishes Al-Qamar products from others?",
      answer:
        "The products feature high durability, resistance to wear, moisture, and fading, consistent quality according to ISO standards, multiple design options including classic and traditional Egyptian patterns, easy cleaning and use, and the ability to meet large export orders on schedule.",
    },
  ];

  return (
    <section className="mb-5">
      <div className={styles.faqContainer}>
        <h2 className={styles.faqTitle}>Frequently Asked Questions</h2>

        {faqs.map((faq, index) => (
          <div key={index} className={styles.faqItem}>
            
            <div
              className={`${styles.faqQuestion} ${
                openIndex === index ? styles.faqQuestionActive : ""
              }`}
              onClick={() => toggleFAQ(index)}
            >
              <span>{faq.question}</span>
              <span className={styles.faqArrow}>▼</span>
            </div>

            <div
              className={`${styles.faqAnswer} ${
                openIndex === index ? styles.faqAnswerOpen : ""
              }`}
            >
              {faq.answer}
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}
