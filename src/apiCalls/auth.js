import { axiosInstance } from "./index.js"

import axios from "axios"

export const sign = async (user) => {
    try{
        console.log("Hello")
        const res = await axiosInstance.post("/api/signup" , user) 
        console.log("Worlds")
        return res.data  
    } catch (err) {
        return err
    }
} 

export const login = async (user) => {
    try{
        console.log("Hello")
        const res = await axiosInstance.post("/api/login" , user)
        return res.data
    }catch (err) {
        return err
    }
}