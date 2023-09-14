import React,{ useState } from 'react';
import { Header } from '../../shared/ui';
import Button from '@mui/material/Button';
import { PaymentInput,EligibleBanks, UserCardDetail, ErrorModal } from '../../components/CardInformation';
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

function CardInformation() {
    const navigate=useNavigate();
    const {card,expiry}=useSelector(state=>state.card);
    const [isError, setIsError]=useState(false);
    const [user, setUser]=useState({
        name:"",
        phone:"",
        address:""
    })
    const handleProceed=()=>{
       if(expiry!=="09/27"){
        if(card==="1111 2222 3333 4444") {
            setIsError(false);
            setUser(prevUser=>{
             return {...prevUser, name:"Peter Pan", phone:"+1 (437) 989-0360", address:"31 Merganser Cres, Toronto, ON"}
            })
         }
         else  setIsError(true);
       } else{
        navigate("/visadirectwithdrawal");
       }
    }
  return (
    <div className='w-full bg-gray-100'>
        <header>
            <Header title="Card Information" path="/"/>
        </header>
        <main className='w-full flex flex-col items-center bg-gray-100 p-5 gap-2'>
            <img height={150} width={150} src="data:image/png;base64,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"/>
            <p className='text-2xl text-center mt-5'>Please enter your card number.</p>    
            {(!isError && user.name && user.phone && user.address) ? 
            <UserCardDetail name={user.name} phone={user.phone} address={user.address}/> :
            <PaymentInput/>
            }
            <EligibleBanks/>
            <div className='mt-9'>
                <Button variant="contained" size='large' onClick={handleProceed}>Continue</Button>
            </div>
            {isError && <ErrorModal setIsError={setIsError}/>}
       </main>
    </div>
  )
}

export default CardInformation