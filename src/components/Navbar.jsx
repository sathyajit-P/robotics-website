import React from 'react'

const Navbar = () => {
  return (
    <nav className='h-24 flex m-6'>
        <img src="https://cdn.prod.website-files.com/666d72683a4b91a97f66baa2/666d9547d0a2e3aee50ebb5f_5eba355ac3a6603c1730472c_nav%20bar%20BCR%20Logo-p-500.png" loading="eager" alt="Brand Logo" className="logo mr-40 cursor-pointer" href="#"></img>
        <ul className='flex'>
            <li className='px-5 self-center text-slate-500 hover:text-white transition duration-100'><a href='#'>Home</a></li>
            <li className='px-5 self-center text-slate-500 hover:text-white transition duration-100'><a href='#'>Services</a></li>
            <li className='px-5 self-center  text-slate-500 hover:text-white transition duration-100'><a href='#'>Blog</a></li>
            <li className='px-5 self-center  text-slate-500 hover:text-white transition duration-100'><a href='#'>Projects</a></li>
            <li className='px-5 self-center  text-slate-500 hover:text-white transition duration-100'><a href='#'>Team</a></li>
            <li className='px-5 mr-72 self-center  text-slate-500 hover:text-white transition duration-100'><a href='#'>Contact</a></li>
            <li className='px-5 self-center'><button className='px-6 py-2 border text-white border-white rounded-full hover:bg-white hover:text-slate-700 transition duration-500'>Get In Touch &rarr;</button></li>
        </ul>
    </nav>
  )
}

export default Navbar