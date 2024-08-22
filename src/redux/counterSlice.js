import { createSlice } from "@reduxjs/toolkit";
//to initialize the file as slice we use a method createSlice()
export const counterSlice = createSlice({
    //name has no iportance
    name:'counterApp',
    //initial state creation
    initialState:{
        value:0
    },
    reducers:{
        //logic to update values
        //actons are created inside the reducers
        incriment:(state,data)=>{
            if(!data.payload){

                state.value+=1;
            }else{

                state.value+=data.payload;
            }
        },
        decrement:(state,data)=>{
            if(!data.payload){

                state.value-=1;
            }else{

                state.value-=data.payload;
            }
        },
        reset:(state)=>{
            state.value = 0;
        }
        
    }
}); 
export const {incriment,decrement,reset} = counterSlice.actions;
export default counterSlice.reducer;