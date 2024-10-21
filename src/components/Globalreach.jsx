import React from 'react'
import { sales } from '../constants'

const Globalreach = () => {
  return (
    <>
        <div className='flex flex-col text-3xl text-bold'>
            <h1 className=' text-4xl mx-auto text-white mb-12 mt-12'>Our Global Reach</h1>
            <img src="https://cdn.prod.website-files.com/666d72683a4b91a97f66baa2/667d869b2c134a5364a3a3b4_global%20fpt.png" alt="Hello" className='w-[714px] h-[378px] mx-auto mt-8 mb-4'/>
  
        </div>

        <div className="py-12 text-center">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
                {sales.map((sale, index) => (
                    <div 
                    key={index} 
                    className=" bg-gradient-to-r from-[#060606] to-[#0e0e0e] text-white rounded-lg shadow-lg p-6 border border-gray-700"
                    >
                        <h3 className="text-3xl font-semibold">{sale.amount}</h3>
                        <p className="text-gray-300 text-lg font-semibold mt-2">{sale.testimonial}</p>
                    </div>
                ))}
            </div>
        </div>
    </>
  )
}

export default Globalreach