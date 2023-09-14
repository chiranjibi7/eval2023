import React from 'react'
import Paper from '@mui/material/Paper';

function AmountInfo() {
  return (
    <Paper elevation={0}>
    <div className='flex flex-col p-2 gap-4 rounded-xl'>
      <div className='flex justify-between'>
        <p className='text-xl'>Amount Withdrawn:</p>
        <p className='font-bold text-xl'>$ 3,000</p>
      </div>
      <div className='flex justify-between'>
        <p className='text-xl'>Confirmation Code:</p>
        <p className='font-bold text-xl'>2784100995</p>
      </div>
        <p className='text-zinc-400 text-lg text-center'>You will see a credit of $3,000.00 from "Payper Inc." on your statement for your card ending in 0927.</p>
    </div>
  </Paper>
  )
}

export default AmountInfo