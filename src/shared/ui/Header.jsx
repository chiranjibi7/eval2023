import React from 'react';
import {IoIosArrowDropleft} from "react-icons/io";
import { useNavigate } from "react-router-dom";

function Header({title,path}) {
  const navigate = useNavigate();
  return (
    <div className='w-full flex items-center gap-4 p-6 bg-blue-500 text-white md:gap-8'>
       {path &&  <IoIosArrowDropleft size={35} color='white' onClick={()=>navigate(`${path}`)}/>}
        <p className='text-2xl md:text-4xl md:text-center font-bold'>{title}</p>
    </div>
  )
}

export default Header