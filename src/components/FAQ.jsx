import React, { useState } from 'react';
import { accordionData } from '../constants';

const FAQ = () => {
    const [activeIndices, setActiveIndices] = useState([]); // this will store the indices of the sections which are active

    const toggleAccordion = (index) => {
      if (activeIndices.includes(index)) {
        // If the index is already active, close it
        setActiveIndices(activeIndices.filter((i) => i !== index));
      } else {
        // Add the index to keep the accordion open
        setActiveIndices([...activeIndices, index]);
      }
    };

  return (
    <div className="max-w-3xl mx-auto mb-8">
        <h1 className="text-4xl font-bold text-center text-white mt-16 mb-16">Frequently Asked Questions</h1>
        {accordionData.map((item, index) => (
            <div key={index} className="border-b border-gray-700 py-4">
                <div 
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleAccordion(index)}
                >
                    <h3 className="text-xl font-medium text-white">{item.question}</h3>
                    <span className="text-2xl min-w-10 min-h-10 rounded-full bg-gray-600 text-white flex items-center justify-center">{activeIndices.includes(index) ? '−' : '+'}</span>
                </div>
                {activeIndices.includes(index) && (
                    <p className="mt-2 text-gray-400">{item.description}</p>
                )}
            </div>
        ))}
    </div>
  );
};

export default FAQ;
