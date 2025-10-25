import { prof } from "../apiCalls/profile.js"
import {useDispatch} from "react-redux"
import { hideLoader , showLoader } from "../Store/load.js"
import { toast } from "react-toastify"
import { useEffect } from "react"
import { setUser } from "../Store/user.js" 

const Proute = ({children}) => {

    const dis = useDispatch() 

    const profile = async () => {

        dis(showLoader())
        const res = await prof()
        dis(setUser(res.data))
        console.log(res.data)
        if (res.success == true) {
            dis(hideLoader())
            toast.success(res.message)
        } else if (res.success == false) {
            dis(hideLoader())
            toast.warn(res.message) 
        } else {
            dis(hideLoader())
            toast.error("Please check Your Internet Connection")
        }
    }

    console.log("hello")
    useEffect(
        () => {
            profile()
        } , []
    )

    return (
        <div>
            {children}
        </div>
    )

}

export default Proute