import {createSlice,createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const userCardInfo=createAsyncThunk('card/userCardInfo',
    async(payload)=>{
        try {
            const response = await axios("");
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }
);

const initialState={
    card:"",
    expiry:""
};

const cardSlice=createSlice({
    name:"card",
    initialState,
    reducers:{
      setCardNumber:(state,action)=>{
        state.card=action.payload;
      },
      setExpiry:(state,action)=>{
        state.expiry=action.payload;
      }
    },
    extraReducers:{

    }
});

export const {setCardNumber,setExpiry}=cardSlice.actions;
export default cardSlice.reducer;