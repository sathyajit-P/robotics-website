import React from 'react';
import { client } from '../constants';

const Clients = () => {
  return (
    <div className="py-12 text-center">
      <h2 className="text-white text-4xl font-bold mb-32">What Our Clients Say</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        {client.map((client, index) => (
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
