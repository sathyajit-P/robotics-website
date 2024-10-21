import React from 'react';
import { Link } from 'react-router-dom';
import { services } from '../../constants';

const ServicesSection = () => {
  return (
    <>
      <h2 className="text-white text-4xl font-bold text-center mb-32">Services That Go the Extra Mile</h2>
      <div className="min-h-40 grid grid-cols-1 md:grid-cols-3 justify-items-center mx-6 mt-8 px-4 md:px-0 mb-16">
        {services.map((service, index) => (
          <Link to='/services' key={index} className='no-underline'>
            <div
              className="max-w-sm rounded overflow-hidden shadow-lg border border-[#ffffff1a] bg-gradient-to-r from-[#060606] to-[#0e0e0e] hover:bg-gradient-to-r hover:from-gray-700 hover:to-gray-800 mb-6">
              {/* {console.log(service.image)} */}
              <img src={service.image} alt={service.title} className='w-[80px] h-[100px] ml-4 overflow-auto mb-10' />
              <div className="px-6 py-4">
                <div className="font-bold text-xl text-white mb-2">{service.title}</div>
                <p className="text-white text-base">
                  {service.description}.
                </p>
              </div>
            {/* <div class="px-6 pt-4 pb-2">
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
            </div> */}
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default ServicesSection;
