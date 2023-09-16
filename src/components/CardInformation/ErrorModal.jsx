import React from 'react';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import Button from '@mui/material/Button';

function ErrorModal({setIsError}) {
  return (
          <Dialog open={true}>
            <div className='p-2 md:p-5'>
            <p className='text-base text-center md:text-4xl font-bold my-2 md:my-4'>Card not enabled for Visa Direct</p>
            <p className='text-base text-center md:text-2xl'>Your Visa branded card is not enabled for this payout method.</p>
            <p className='text-base text-center md:text-2xl'>Please try entering a new card number or select a different payout option.</p>
            <div className='w-full flex justify-center items-center mt-3 md:my-6'>
            <Button className='w-1/2' variant="contained" size='large' onClick={()=>setIsError(false)}>Ok</Button>
            </div>
            </div>
          </Dialog>
  )
}

export default ErrorModal