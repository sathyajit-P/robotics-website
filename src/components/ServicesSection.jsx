import React from 'react';

const services = [
  {
    title: "Zero-to-One Robot Innovation",
    image: "https://cdn.prod.website-files.com/666d72683a4b91a97f66baa2/6680398365848048a83918a7_special.svg", // Replace with the icon image or component
    description: "Innovative solutions for building robots from scratch."
  },
  {
    title: "Hyper-Realistic Robot Simulation",
    image: "https://cdn.prod.website-files.com/666d72683a4b91a97f66baa2/6680389effe1c1500fa33e3d_simu.svg", // Replace with the icon image or component
    description: "Advanced simulations for realistic robot behavior."
  },
  {
    title: "Specialized Robotics Solutions",
    image: "https://cdn.prod.website-files.com/666d72683a4b91a97f66baa2/668039d86ba918352b55ef58_robot%20arm.svg", // Replace with the icon image or component
    description: "Custom robotics solutions tailored for various industries."
  }
];

const ServicesSection = () => {
  return (
    <>
      <h2 className="text-white text-4xl font-bold text-center mb-20">Services That Go the Extra Mile</h2>
      <div className="min-h-40 grid grid-cols-1 md:grid-cols-3 justify-items-center mx-6 mt-8 px-4 md:px-0">
        {services.map((service, index) => (
          <div 
            key={index}
            className="max-w-sm rounded overflow-hidden shadow-lg border border-[#ffffff1a] bg-gradient-to-r from-[#060606] to-[#0e0e0e] mb-6">
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
        ))}
      </div>
    </>
  );
};

export default ServicesSection;
