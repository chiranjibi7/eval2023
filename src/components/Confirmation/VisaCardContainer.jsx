import React from "react";
import Paper from "@mui/material/Paper";
import Switch from '@mui/material/Switch';
import Button from '@mui/material/Button';

function VisaCardContainer() {
  return (
    <div className="flex flex-col items-center">
      <div className="block absolute bottom-90 left-15 z-50">
      <img
        src="https://www.rbcroyalbank.com/credit-cards/app/assets/cards/clo_classiclowrate_en_sm@2x.png"
        width={210} 
      />
      </div>
      <Paper elevation={0} className="w-4/5 absolute bottom-80 left-15 z-010">
        <div className="w-full flex h-28 justify-center items-center p-2 rounded-xl ">
          <p className="text-xl text-zinc-500 grow shrink-0">Preffered payout method</p>
          <Switch/>
        </div>
      </Paper>
      <div className='absolute bottom-40 left-15'>
            <Button variant="contained" size='large'>Continue</Button>
       </div>
    </div>
  );
}

export default VisaCardContainer;
