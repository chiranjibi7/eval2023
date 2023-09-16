import React, {useState} from 'react'
import Paper from '@mui/material/Paper';

function WithdrawalType(props) {
    const {image, title, description, icon}=props;

    const [bgColor, setBgColor]=useState("#ffffff");
    const [iconVisible, setIconVisible]=useState(false);

    const handleWithdrawalType=()=>{
            setIconVisible(prevVisibleState=>!prevVisibleState);
            setBgColor(prevBgColor=>{
                if(prevBgColor==="#dbeafe") return "#ffffff";
                else return "#dbeafe";
            })  
    };

  return (
        <Paper elevation={0}>
          <div className='flex items-center p-2 md:p-5 gap-4 md:gap-8' style={{background:`${bgColor}`}} onClick={handleWithdrawalType}>
            <img src={image} height={50} width={50}/>
            <div>
                <p className='font-bold text-base md:text-3xl'>{title}</p>
                <p className='text-zinc-400 text-sm md:text-2xl'>{description}</p>
            </div>
            {iconVisible && icon}
          </div>
        </Paper>
  );
}

export default WithdrawalType