import { Link } from "react-router-dom"
import { useEffect , useState } from "react"
import { sign } from "../../apiCalls/auth.js"
import { toast } from "react-toastify"
import { useDispatch } from "react-redux"
import { hideLoader , showLoader } from "../../Store/load.js"

const Signup = () => {

    const [ user , setUser] = useState({ 
        firstName : "" , lastName : "" , email : "" , password : "" , profilePic : null 
    })

    const dis = useDispatch()

    const onSub = async e => {
        e.preventDefault() ;
        
        const formData = new FormData() ;
        formData.append("firstname" , user.firstName) ;
        formData.append("lastname" , user.lastName)
        formData.append("email" , user.email) ;
        formData.append("password" , user.password) ;
        // formData.append("profilepic" , user.profilePic) ;

        dis(showLoader())
        const res = await sign(formData) 
        
        if (res.success === true) {
            dis(hideLoader())
            toast.success(res.message) 
        } else if (res.success === false) {
            dis(hideLoader())
            toast.warn(res.message) 
        } else {
            dis(hideLoader())
            toast.error("No Internet Connection")
        }

        
    }

    return (
        <>
            <div className="border border-black border-solid h-screen flex justify-center items-center">
                <form onSubmit={onSub} className="border border-black border-solid w-[50%] h-[60%] rounded-[10px] flex-row">
                    <div className="border border-black border-solid flex justify-center items-center p-[10px] text-[20px]">
                        Signup Page
                    </div>
                    <div className="border border-black border-solid flex flex-col p-[10px]">
                        <input onChange={e => setUser({...user, firstName : e.target.value}) } className="border border-solid border-black rounded-[10px] p-[10px] m-[5px]" type="text" placeholder="First Name" />
                        <input onChange={e => setUser({ ...user , lastName : e.target.value })} className="border border-solid border-black rounded-[10px] p-[10px] m-[5px]" type="text" placeholder="Last Name" />
                        <input onChange={e => setUser({ ...user , email : e.target.value })} className="border border-solid border-black rounded-[10px] p-[10px] m-[5px]" type="text" placeholder="Email" />
                        <input onChange={e => setUser({ ...user , password : e.target.value })} className="border border-solid border-black rounded-[10px] p-[10px] m-[5px]" type="text" placeholder="password" />
                        {/* <input onChange={e => setUser({ ...user , profilePic : e.target.files[0] })} className="border border-solid border-black rounded-[10px] p-[10px] m-[5px]" type="file" accept="image/*" /> */}
                    </div>
                    <div className="border border-black border-solid flex justify-center items-center"> 
                        <button className="border border-black border-solid p-[8px] w-[50%] flex justify-center items-center font-bold">
                            Submit
                        </button>
                    </div>
                    <div className="flex justify-center items-center m-[10px]">
                        <span><Link to="/cie/login"> <span className="text-blue-500 font-bold hover:text-red-500 hover:underline">Login ?</span></Link> If You Are Still New Around Here</span>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Signup 