import React from 'react'
import { FaPhone } from "react-icons/fa";

import { MdLanguage } from "react-icons/md";

function Navbar() {
  return (
   <>
   <div>
    <nav>
        <div className='flex space-x-2 justify-center items-center bg-[#fff] h-[5rem] shadow-sm'>
            <span><button className='px-5 py-3 text-white m-auto bg-blue-900 rounded-full'>Apply now</button></span>
            <span><button className='flex  items-center justify-center space-x-3 px-5 py-3  m-auto border-[2px] text-blue-900 font-medium border-blue-900 rounded-full'><span>8001249000</span> <FaPhone /></button></span>
            <span><button className='flex  items-center justify-center space-x-3 px-5 py-3  m-auto text-blue-900 font-medium '><span>ع </span><MdLanguage /></button></span>
        </div>
    </nav>
   </div>
   </>
  )
}

export default Navbar
