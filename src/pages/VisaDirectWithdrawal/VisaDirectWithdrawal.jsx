import React from 'react';
import {Header} from "../../shared/ui";
import {VisaImageIcon,AmountInfo} from "../../components/VisaDirectWithdrawal";
import Button from '@mui/material/Button';
import {useNavigate} from "react-router-dom";

function VisaDirectWithdrawal() {
  const navigate= useNavigate();
  return (
    <div>
        <header>
            <Header title="Visa Direct Withdrawal"/>
        </header>
        <main className='w-full h-screen flex flex-col bg-gray-100 p-5'>
            <VisaImageIcon/>
            <div className=' w-full flex flex-col items-center gap-4 my-5'>
              <p className='font-bold text-2xl'>Successful Transaction</p>
              <p className='text-zinc-500 text-lg text-center'>Your Visa direct transaction has been successfully completed</p>
            </div>
            <AmountInfo/>
            <div className='mt-12 self-center'>
            <Button variant="contained" size='large' onClick={()=>navigate("/")}>Home</Button>
            </div>
        </main>
    </div>
  )
}

export default VisaDirectWithdrawal