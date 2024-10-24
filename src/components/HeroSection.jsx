import React,{useState,useEffect,useRef} from 'react';
import './animations.css';
import { products } from '../../constants';

const HeroSection = () => {
    const [currentProductIndex, setCurrentProductIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    const heroRef = useRef();
  
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
      <div ref={heroRef} className="min-h-screen text-white flex justify-center items-center">
        {/* Left Section (Text) */}
        <div className="w-1/2 text-center flex flex-col items-center ml-24">
          <h1 className="text-4xl sm:text-6xl font-bold">
            Transforming ideas into <span>autonomous</span>
          </h1>
          <h1
            className={`text-2xl sm:text-6xl font-bold mb-12 mt-4 transform transition-all duration-500 ${
              isAnimating ? 'animate-slide-out' : 'animate-slide-in'
            }`}
          >
            <span className="text-yellow-400">{currentProduct.name}.</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 mb-8">
            We make <span className="text-yellow-400">software for autonomous robots.</span><br />
            Build your robots better, faster, and cheaper!
          </p>
          <button className="px-6 py-2 border text-white border-white rounded-full hover:bg-white hover:text-slate-700 transition duration-500">
            Get In Touch →
          </button>
        </div>
  
        {/* Right Section (Image) */}
        <div className="w-1/2 mt-12">
          <img
            src={currentProduct.image}
            alt={currentProduct.name}
            className={`w-full max-w-md transition-transform duration-500 transform ${
              isAnimating ? 'animate-slide-down' : 'animate-slide-up'
            }`}
          />
        </div>
      </div>
    );
  };
  
  export default HeroSection;