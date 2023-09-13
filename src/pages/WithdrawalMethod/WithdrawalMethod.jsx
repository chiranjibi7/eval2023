import React from 'react';
import {WithdrawalTypes} from "../../components/WithdrawalMethod";
import { Header } from '../../shared/ui';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";

function WithdrawalMethod() {

  const navigate = useNavigate();
  return (
    <div className='w-full'>
       <header>
            <Header title="Withdrawal Method" path="/"/>
       </header>
       <main className='w-full h-screen flex flex-col bg-gray-100 p-5'>
            <p className='text-2xl text-center mt-5'>How would you like us to transfer your money?</p>
            <WithdrawalTypes/>
            <div className='flex flex-col mt-9 gap-4'>
                <Button variant="contained" size='large' onClick={()=>navigate("/cardinfo")}>Continue</Button>
                <Button variant="text" size="large">Cancel</Button>
            </div>
       </main>
    </div>
  )
}

export default WithdrawalMethod