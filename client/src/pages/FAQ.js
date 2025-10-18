import React, { useEffect, useState } from "react";
import "../styles/FAQ.css";

const FAQ = () => {
  const [faqs, setFaqs] = useState([]);
  const [openQuestion, setOpenQuestion] = useState(null);

  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/faqs");
        const data = await response.json();
        setFaqs(data);
      } catch (error) {
        console.error("Error fetching FAQs:", error);
      }
    };

    fetchFaqs();
  }, []);

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h1>Frequently Asked Questions</h1>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div key={faq.id} className="faq-item">
            <div className="faq-question" onClick={() => toggleQuestion(index)}>
              {faq.question}
              <span className="faq-toggle">{openQuestion === index ? "-" : "+"}</span>
            </div>
            {openQuestion === index && <div className="faq-answer">{faq.answer}</div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
