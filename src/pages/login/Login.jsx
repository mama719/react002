import {useState, useEffect } from "react" 
import { Link, useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import {login} from "../../apiCalls/auth.js"
import { showLoader , hideLoader } from "../../Store/load.js"
import {useDispatch} from "react-redux"

const Login = () => {

    const [user , setUser] = useState({ email : "" , password : ""})

    const dis = useDispatch()

    const nav = useNavigate()

    const onSub = async e => {
        e.preventDefault() 
        try{
            const formData = new FormData() 
            formData.append("email" , user.email) 
            formData.append("password" , user.password) 

            dis(showLoader())
            const res = await login(formData)
            console.log("Hello mama")

            localStorage.setItem("tk" , res.token)

            if (res.success == true) {
                dis(hideLoader())
                toast.success(res.message)
                nav("/cie/home")
            } else if (res.success == false) {
                dis(hideLoader())
                toast.warn(res.message)
            } else {
                dis(hideLoader())
                toast.error("Please check Your Internet Connections")
            }

        } catch {
            toast.warning("Login Error")
        }
    }

    return (

        <>
            <div className="border border-black border-solid h-screen w-[100%] justify-center items-center flex" >
                <form onSubmit={onSub} className="border border-black border-solid w-[50%] h-[40%] flex-row">
                    <div className="w-[100%] border border-black border-solid flex justify-center items-center text-[20px] font-bold p-[10px]">Login</div>
                    <div className="overflow-hidden w-[100%] flex-row">
                        <input onChange={e => setUser({ ...user , email : e.target.value })} className="hover:border-2 border border-solid border-black w-[100%] p-[10px] my-[5px] rounded-[10px]" type="text" placeholder="email" />
                        <input onChange={e => setUser({ ...user , password : e.target.value })} className="hover:border-2 border border-solid border-black w-[100%] p-[10px] my-[5px] rounded-[10px]" type="text" placeholder="password" />
                    </div>
                    <div className="w-[100%] justify-center items-center flex p-[10px]">
                        <button className="font-bold hover:border-2 border border-solid border-black p-[10px] m-[5px] rounded-[20px] hover:scale-110">Submit</button>
                    </div>
                    <span><Link to="/cie/signup" className="text-blue-500 font-bold hover:underline hover:text-red-500">Sign_Up?</Link> If You Are Ne Over Here</span>
                </form>
            </div>
        </>
    )

}

export default Login 