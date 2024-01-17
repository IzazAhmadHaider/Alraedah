import { IconChevronDown, IconChevronUp } from '@tabler/icons-react';
import React, { useState } from 'react';

const Faqs = ({ questionsAndAnswers }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="accordion w-[70%]">
      <h1 className="text-3xl font-normal mb-4">FAQ's</h1>
      {questionsAndAnswers.map((item, index) => (
        <div key={index} className="mb-2">
          <div
            className=" bg-white p-2 cursor-pointer rounded-xl shadow-md text-lg font-medium relative overflow-hidden"
            onClick={() => toggleAccordion(index)}
          >
            <div className="flex justify-between items-center my-1 text-[#3d3a3a]">
              <div>{item.question}</div>
              <div>{activeIndex === index ? <IconChevronUp color='blue' /> : <IconChevronDown />}</div>
            </div>
            <div
              className={` p-2  text-gray-400 ${
                activeIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              {item.answer}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Faqs;
