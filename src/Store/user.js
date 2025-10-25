import {createSlice} from "@reduxjs/toolkit"

const name = createSlice({
    name : "user" , initialState : { user : "" } ,
    reducers : {
        setUser : (state, action) => { state.user = action.payload } 
    }
})

export const { setUser } = name.actions 
export default name.reducer
