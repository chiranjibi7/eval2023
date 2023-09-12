import React from 'react';
import {IoIosArrowDropleft} from "react-icons/io"

function Header() {
  return (
    <div className='w-full flex items-center gap-4 p-6 bg-blue-500 text-white'>
        <IoIosArrowDropleft size={35} color='white'/>
        <p className='text-2xl font-bold'>Withdrawal Method</p>
    </div>
  )
}

export default Header