import {createSlice} from "@reduxjs/toolkit";

const theme = createSlice({
    name:"theme",
    initialState:{
        isLight:true,
    },
    reducers :{
        setLight:(initialState, action) =>{
            initialState.isLight = !initialState.isLight
        }
    }
})

export const {setLight} = theme.actions;
export default theme.reducer;
