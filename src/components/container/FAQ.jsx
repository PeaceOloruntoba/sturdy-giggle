import { useState } from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

const FaqItem = ({ question, answer, isOpen, onClick }) => (
  <div className="border-b border-yellow-600 last:border-0">
    <div
      className="p-4 flex justify-between items-center cursor-pointer hover:bg-gray-100 transition-colors duration-200"
      onClick={onClick}
    >
      <h2 className="text-lg font-semibold text-gray-800">{question}</h2>
      <div className="text-xl">
        {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
      </div>
    </div>
    <div
      className={`overflow-hidden transition-all duration-300 ease-in-out ${
        isOpen ? "max-h-[200px] opacity-100" : "max-h-0 opacity-0"
      }`}
    >
      <div className="p-4 text-gray-700 text-sm bg-gray-50">
        <p>{answer}</p>
      </div>
    </div>
  </div>
);

export default function Faq({ faqs }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="w-full max-w-3xl mx-auto bg-white rounded-lg shadow-lg border border-yellow-600">
      {faqs.map((faq, index) => (
        <FaqItem
          key={index}
          question={faq.question}
          answer={faq.answer}
          isOpen={activeIndex === index}
          onClick={() => toggleAccordion(index)}
        />
      ))}
    </div>
  );
}
