import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import { setExpiry } from '../../features/card/cardSlice';

function ExpiryInfo() {
    const dispatch=useDispatch();
    const {expiry}= useSelector(state=>state.card)
  return (
   <div className='w-full flex flex-col gap-4'>
     <div className="w-full flex justify-between items-center bg-white p-2">
         <img src="https://pbs.twimg.com/profile_images/1418204216481533956/LOp0jw6__400x400.png" height={20} width={50}/>
         <p className='text-zinc-400'>1111 2222 3333 4444</p>
         <p className='text-green-500'>Instant</p>
    </div>
     <input
     className="outline-none border-none rounded-xl bg-white p-3 w-1/2"
     value={expiry} 
     onChange={(e) => dispatch(setExpiry(e.target.value))}
    placeholder='Expiry'
   />
   </div>
  )
}

export default ExpiryInfo