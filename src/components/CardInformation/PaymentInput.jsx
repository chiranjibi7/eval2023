import React from 'react';
import { CircularProgress } from '@mui/material';
import {useDispatch,useSelector} from "react-redux";
import { setCardNumber } from '../../features/card/cardSlice';

function PaymentInput() {
    const dispatch=useDispatch();
    const {card}=useSelector(state=>state.card);
    console.log(card)

    const handleCardDisplay = () => {
        const rawText = [...card.split(' ').join('')] // Remove old space
        const creditCard = [] // Create card as array
        rawText.forEach((t, i) => {
            if (i % 4 === 0 && i !== 0) creditCard.push(' ') // Add space
            creditCard.push(t)
        })
        return creditCard.join('') // Transform card array to string
    }
    console.log(handleCardDisplay())
  return (
        <div className="w-full flex justify-start items-center relative">
          <input
            className="w-full outline-none border-none rounded-xl bg-white p-4"
            value={handleCardDisplay()} 
            onChange={(e) => dispatch(setCardNumber(e.target.value))}
          />
          {card!="" && <CircularProgress
            size={25}
            className="absolute right-3 cursor-pointer w-10"
          />}
        </div>
  )
  
}

export default PaymentInput