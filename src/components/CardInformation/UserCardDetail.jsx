import React from 'react'
import Paper from '@mui/material/Paper';
import {BsPencilFill} from "react-icons/bs";
import ExpiryInfo from './ExpiryInfo';

function UserCardDetail({name,phone,address}) {
  return (
   <>
       <Paper elevation={0}>
    <div className='flex flex-col p-2 md:p-6 gap-4 rounded-xl'>
      <div className='self-end'>
        <BsPencilFill size={20}/>
      </div>
      <div className='flex justify-between'>
        <p className='md:text-2xl'>Card Holder Name</p>
        <p className='font-bold md:text-xl'>{name}</p>
      </div>
      <div className='flex justify-between'>
        <p className='md:text-2xl'>Phone Number</p>
        <p className='font-bold md:text-xl'>{phone}</p>
      </div>
      <div className='flex gap-6'>
        <p className='md:text-2xl'>Address</p>
        <p className='font-bold md:text-xl'>{address}</p>
      </div>
    </div>
  </Paper>
  <ExpiryInfo/>
   </>
  )
}

export default UserCardDetail