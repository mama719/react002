import { axiosInstance } from "./index.js" 

export const prof = async () => {
    try{
        const res = await axiosInstance.get("/api/profile")
        return res.data
    } catch (err) {
        return err
    }
}