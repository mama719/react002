import { Link } from "react-router-dom"
import {useSelector} from "react-redux"
import { useState } from "react"

const Home = () => {

    const { user }  = useSelector(state => state.user)

    const [post , setPost] = useState([{id : 0 , data : "hope" , likes : 0 , comments : [{text : "gg" , id : ""}] , share : 0 } ,
        { id : 1 , data : "Love" , likes : 0 , comments : [{text : "" , id : ""}] , share : 0 } ,
        { id : 2 , data : "Hate" , likes : 0 , comments : [{text : "" , id : ""}] , share : 0 } ,
        { id : 3 , data : "Sorrow" , likes : 0 , comments : [{text : "" , id : ""}] , share : 0 }])

    const [pp , setPp] = useState("")
 
    const [id , setId] = useState(0)

    const [s , setS] = useState(false)

    console.log(post[id].data)

    const shift = () => {
        if (id == post.length - 1){
            setId(0)
            console.log("hey You")
        } else {
            console.log(id)
            setId(id + 1)
        }
    }

    const pst = () => {
        setPost([...post , {id : post.length , data : pp  , likes : 0 , comments : [{text : "" , id : ""}] , share : 0 }])
        setS(!s)
    }

    console.log("-------------------")

    return (
        <> 
            {

                s &&
                <div className="absolute justify-center flex items-center w-[100%] h-[100%] bg-blue-500/70">
                    <div className="border border-solid border-black opacity-[1] p-[10px] rounded-[10px] flex-col">
                        <div className="m-[5px]">
                            <textarea onChange={e => setPp(e.target.value)} className="h-[200px] " name="post" ></textarea>
                        </div>
                        <div className="flex w-[100%] justify-around items-center">
                            <button onClick={() => setS(!s) } className="border border-solid border-black p-[10px] rounded-[10px] bg-red-100 hover:bg-red-500 hover:font-bold">Close</button>
                            <button onClick={pst} className="border border-solid border-black p-[10px] rounded-[10px] bg-green-100 hover:bg-green-500 hover:font-bold">Post</button>
                        </div>
                    </div>
                </div>
            }
            { localStorage.getItem("tk") 
            
            ?

            <div className="border border-black border-solid h-screen w-[100%] flex-row">
                <div className="border border-black border-solid h-[20%] flex justify-around items-center">
                        <div>{user && user.firstName} { user && user.lastName}</div>
                        <div>{user && user.email}</div>
                    <div className=" h-[100%] w-[25%] flex center items-center">
                        <div>
                            <div><button onClick={() => { localStorage.setItem("tk" , "") }} className="border border-solid border-solid p-[10px] m-[5px] hover:font-bold bg-green-200 rounded-[10px] hover:bg-green-500">Logout</button></div>
                            <div><button className="border border-solid border-solid p-[10px] m-[5px] hover:font-bold bg-red-200 rounded-[10px] hover:bg-red-500">Delete</button></div>
                        </div>
                    </div>
                </div>
                <div className="border border-black border-solid h-[80%]">
                    <div className="border border-black border-solid h-[10%] flex items-center justify-around ">
                        <div>Option</div>
                        <div>Online</div>
                        <div className="border border-black border-solid flex justify-center items-center p-[10px] m-[5px] rounded-[20px] w-[20%] hover:border-2 hover:font-bold">
                            <button onClick={() => setS(!s) } className="">Post</button>
                        </div>
                    </div>
                    <div className="border border-solid border-black h-[100%] flex justify-center items-center">
                        <div className="border border-black border-solid p-[10px] max-w-[60%] m-[5px] rounded-[10px] ">
                            {`${post[id].data}`}
                        </div>
                        <div className="p-[10px] m-[5px] rounded-[10px] flex-col">
                            <div className="border border-black border-solid rounded-[10px] m-[5px] flex justify-center items-center"> <button onClick={ () => setPost( p => {p.map( v => {v.id === id ? {...v , likes : v.likes + 1 } : v } )} ) }>{post[id].likes} Like </button> </div>
                            <div className="border border-black border-solid rounded-[10px] m-[5px] flex justify-center items-center">{post[id].comments.length} Comment</div>
                            <div className="border border-black border-solid rounded-[10px] m-[5px] flex justify-center items-center">{post[id].share} Share</div>
                        </div>
                        <div className="border border-solid border-black p-[10px] m-[5px] rounded-[10px]">
                            <button onClick={shift}> Arrow Down</button>
                        </div>
                    </div>
                </div>
            </div>

            :

            <div className="border border-black border-solid h-screen w-full flex flex-col">    
                <div className="border border-black border-solid h-[20%] flex justify-center items-center">
                    <div className="text-[50px] font-serif">Welcome To <span className="font-bold">Galaxy's</span> Spot</div>
                </div>
                <div className="border border-black boder-solid h-[80%] flex">
                    <div className="border border-black border-solid h-[100%] w-[60%] p-[10px] ">
                        option
                    </div>
                    <div className="border border-black border-solid h-[100%] w-[40%] p-[10px] flex-col">
                        <Link to="/cie/login"><div className="border border-black border-solid p-[10px] flex justify-center items-center m-[10px] rounded-[10px] font-">Login</div></Link>
                        <Link to="/cie/signup"><div className="border border-black border-solid p-[10px] flex justify-center items-center m-[10px] rounded-[10px]">Signup</div></Link>
                    </div>
                </div>
            </div>
            }
            
        </>
    )
}

export default Home