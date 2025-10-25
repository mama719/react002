import {configureStore} from "@reduxjs/toolkit" 
import LoadReducer from "./load.js"
import userReducer from "./user.js"

export const store  = configureStore({ 
    reducer : { load : LoadReducer , user : userReducer }
})