import React from 'react'
import Paper from '@mui/material/Paper';
import {BsPencilFill} from "react-icons/bs";
import ExpiryInfo from './ExpiryInfo';

function UserCardDetail({name,phone,address}) {
  return (
   <>
       <Paper elevation={0}>
    <div className='flex flex-col p-2 gap-4 rounded-xl'>
      <div className='self-end'>
        <BsPencilFill size={20}/>
      </div>
      <div className='flex justify-between'>
        <p>Card Holder Name</p>
        <p className='font-bold'>{name}</p>
      </div>
      <div className='flex justify-between'>
        <p>Phone Number</p>
        <p className='font-bold'>{phone}</p>
      </div>
      <div className='flex gap-6'>
        <p>Address</p>
        <p className='font-bold'>{address}</p>
      </div>
    </div>
  </Paper>
  <ExpiryInfo/>
   </>
  )
}

export default UserCardDetail