import React, { useState } from 'react';

const accordionData = [
  {
    question: "Do you only work with ROS/ROS2, or can you handle other frameworks?",
    description: "While ROS (Robot Operating System) and ROS2 are our bread and butter and are widely used in the robotics community, we're not limited to these frameworks. Our approach is fundamentally technology-agnostic, allowing us to adapt to the specific needs of each project."
  },
  {
    question: "What types of robots have you worked with, and can you handle unique or specialized robotic systems?",
    description: "Yes, we specialize in tailoring robotics solutions to fit unique industry needs. Whether it's manufacturing, healthcare, or logistics, we have the expertise to deliver highly customized and functional robots."
  },
  {
    question: "What is your experience with hybrid robotic systems?",
    description: "We have considerable experience with hybrid systems that involve both hardware and software integration. We excel at blending ROS components with other technologies to achieve superior performance and flexibility."
  },
  {
    question: "Do you offer post-development support for the robotics systems?",
    description: "Absolutely. Our services extend beyond development, offering post-deployment support, maintenance, and updates to ensure the long-term success of your robotics solutions."
  }
];

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
