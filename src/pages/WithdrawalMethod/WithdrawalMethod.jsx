import React from 'react';
import {Header, WithdrawalTypes} from "../../components/WithdrawalMethod";
import Button from '@mui/material/Button';

function WithdrawalMethod() {
  return (
    <div className='w-full'>
       <header>
            <Header/>
       </header>
       <main className='w-full h-screen flex flex-col bg-gray-100 p-5'>
            <p className='text-2xl text-center mt-5'>How would you like us to transfer your money?</p>
            <WithdrawalTypes/>
            <div className='flex flex-col mt-9 gap-4'>
                <Button variant="contained" size='large'>Continue</Button>
                <Button variant="text" size="large">Cancel</Button>
            </div>
       </main>
    </div>
  )
}

export default WithdrawalMethod