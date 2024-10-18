import React from 'react';

const clients = [
  {
    name: "Frederik Ebert",
    title: "CEO, Emancro",
    testimonial: `The team at Black Coffee Robotics demonstrated their competence in ROS2 as well as fundamental robotics concepts throughout the work. They delved into an existing code base, made necessary improvements, and delivered well-documented software. They bring together a great blend of robotics knowledge, software engineering, and project execution. I look forward to continuing our engagement further.`
  },
  {
    name: "James Coleman",
    title: "CEO, Sandpoint Hydrographic",
    testimonial: `A fantastic team whose robotics knowledge is as impressive as their communication skills and collaboration. Starting with the most high-level, abstract concepts, they not only rapidly distilled them into concrete robotics requirements but delivered readable, well-designed, and highly effective code. A truly talented and professional group - I look forward to working with them again.`
  },
  {
    name: "Shahid Memon",
    title: "CTO, Unbox Robotics",
    testimonial: `They are detail oriented & have always delivered on time. Project documentation is done well. They are very quick in understanding new components & devices which we keep on experimenting on our autonomous robot. They are always available whenever we need them. We are surely looking forward to collaborating with them in the next phase too.`
  }
];

const Clients = () => {
  return (
    <div className="py-12 text-center">
      <h2 className="text-white text-4xl font-bold mb-32">What Our Clients Say</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        {clients.map((client, index) => (
          <div 
            key={index} 
            className=" bg-gradient-to-r from-[#060606] to-[#0e0e0e] text-white rounded-lg shadow-lg p-6 border border-gray-700"
          >
            <div className="h-24 w-24 bg-gray-700 rounded-full mx-auto mb-4"></div>
            <h3 className="text-xl font-semibold">{client.name}</h3>
            <p className="text-gray-400">{client.title}</p>
            <p className="text-gray-300 text-sm italic mt-4">"{client.testimonial}"</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Clients;
