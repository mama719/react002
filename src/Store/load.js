import { createSlice } from "@reduxjs/toolkit"

const load = createSlice({
    name : "load" , initialState : { load : false } , 
    reducers : {  
        showLoader : (state) => {state.load = true ; } ,
        hideLoader : (state) => {state.load = false ; }  
    }
})

export const { showLoader , hideLoader } = load.actions ;
export default load.reducer ;