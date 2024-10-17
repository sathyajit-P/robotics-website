import { useEffect } from 'react';
import React,{useState} from 'react';
import './animations.css';

const products = [
    {
      name: "delivery robots",
      image: "https://cdn.prod.website-files.com/666d72683a4b91a97f66baa2/66979afdbcb5b0b65f0bf14e_Untitled%20design%20(1).png",
    },
    {
      name: "floor cleaners",
      image: "https://cdn.prod.website-files.com/666d72683a4b91a97f66baa2/66979afd5dc0aa855606bb83_Untitled%20design%20(3).png",
    },
    {
      name: "robotic arms",
      image: "https://cdn.prod.website-files.com/666d72683a4b91a97f66baa2/66979afda50c6b926e13bf58_Untitled%20design.png",
    },
    // Add more products here...
  ];

// const HeroSection = () => {
//     const [currentProductIndex, setCurrentProductIndex] = useState(0);
//     const [isAnimating, setIsAnimating] = useState(false);

//     const nextProduct = () => {
//         setIsAnimating(true); // Start animation
//         setTimeout(() => {
//           setIsAnimating(false); // Reset animation after transition
//           setCurrentProductIndex((prevIndex) =>
//             prevIndex === products.length - 1 ? 0 : prevIndex + 1
//           );
//         }, 500); // Duration of the animation (0.5 second)
//       };
    
//       useEffect(() => {
//         // Cycle through products every 3 seconds
//         const interval = setInterval(nextProduct, 3000);
//         return () => clearInterval(interval);
//       }, []);
    
//       const currentProduct = products[currentProductIndex];

//   return (
//     <div className="text-white flex justify-center items-center mt-8">
//       {/* Text Section */}
//       <div className="w-1/2 text-center flex flex-col items-center ml-24">
//         <h1 className="text-8xl sm:text-6xl font-bold ">
//           Transforming ideas into
//           <span> autonomous</span>
//         </h1>
//         <h1 className={`text-2xl sm:text-6xl font-bold mb-12 mt-4 transition-opacity duration-500 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
//           <span className="text-yellow-400">{currentProduct.name}.</span>
//         </h1>
//         <p className="text-lg sm:text-xl text-gray-300 mb-8">
//           We make <span className="text-yellow-400">software for autonomous robots.</span><br />
//           Build your robots better, faster, and cheaper!
//         </p>
//         {/* Button */}
//         <button className='px-6 py-2 border text-white border-white rounded-full hover:bg-white hover:text-slate-700 transition duration-500'>Get In Touch &rarr;</button>
//       </div>
//       {/* Image Section */}
//       <div className="w-1/2 mt-12">
//       <img 
//         src={currentProduct.image}  
//         alt={currentProduct.name} 
//         className={`w-full max-w-md bg-transparent transition-transform duration-1000 ${isAnimating ? 'animate-slide-up' : 'animate-slide-down'}`}/>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;


const HeroSection = () => {
    const [currentProductIndex, setCurrentProductIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
  
    // Function to transition to the next product
    const nextProduct = () => {
      setIsAnimating(true); // Start animation
      setTimeout(() => {
        setIsAnimating(false); // End animation
        setCurrentProductIndex((prevIndex) =>
          prevIndex === products.length - 1 ? 0 : prevIndex + 1
        );
      }, 500); // Time this to match the animation duration (500ms)
    };
  
    useEffect(() => {
      const interval = setInterval(nextProduct, 3000); // Change every 3 seconds
      return () => clearInterval(interval); // Clean up the interval on component unmount
    }, []);
  
    const currentProduct = products[currentProductIndex];
  
    return (
      <div className="text-white flex justify-center items-center mt-8">
        {/* Left Section (Text) */}
        <div className="w-1/2 px-8">
          <h1 className="text-4xl sm:text-6xl font-bold">
            Transforming ideas into
            <span className="text-yellow-400"> autonomous</span>
          </h1>
          <h1
            className={`text-4xl sm:text-6xl font-bold mb-6 mt-2 transform transition-all duration-500 ${
              isAnimating ? 'animate-slide-out' : 'animate-slide-in'
            }`}
          >
            <span className="text-yellow-400">{currentProduct.name}.</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 mb-8">
            We make <span className="text-yellow-400">software for autonomous robots.</span><br />
            Build your robots better, faster, and cheaper!
          </p>
          <button className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition duration-300">
            Get In Touch →
          </button>
        </div>
  
        {/* Right Section (Image) */}
        <div className="w-1/2 flex justify-center relative">
          <img
            src={currentProduct.image}
            alt={currentProduct.name}
            className={`absolute w-3/4 transition-transform duration-500 transform ${
              isAnimating ? 'animate-slide-down' : 'animate-slide-up'
            }`}
          />
        </div>
      </div>
    );
  };
  
  export default HeroSection;