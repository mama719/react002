
import { BrowserRouter as Router , Routes , Route } from "react-router-dom" ;
import "./index.css"

import Home  from "./pages/home/Home.jsx" ;
import Signup from "./pages/signup/Signup.jsx" ;
import Login from "./pages/login/Login.jsx" ;
import { useSelector } from "react-redux" ;
import {ToastContainer} from "react-toastify"
import Load from "./Loader/Load.jsx"
import Proute from "./Loader/Proute.jsx"

function App() {

  const { load } = useSelector(state => state.load) ;

  return (
    <>
    <ToastContainer></ToastContainer>
      Hello World
    { load && <Load /> }
    <Router>
      <Routes>
        <Route path="/cie/signup" element={<Signup/>} />
        <Route path="/cie/login" element={<Login/>}/>
        <Route path="/" element={<Proute><Home/></Proute>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
