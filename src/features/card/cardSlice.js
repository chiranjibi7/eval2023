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
    name:"",
    phone:"",
    address:""
};

const cardSlice=createSlice({
    name:"card",
    initialState,
    reducers:{
      setCardNumber:(state,action)=>{
        state.card=action.payload;
        state.name="Peter Pan";
        state.phone= "+1 (437) 989-0360";
        state.address = "31 Merganser Cres, Toronto, ON"
      }
    },
    extraReducers:{

    }
});

export const {setCardNumber}=cardSlice.actions;
export default cardSlice.reducer;