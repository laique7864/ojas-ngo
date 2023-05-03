import React, { useState } from "react";
import './Login.scss'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login =()=>{
    const [data, setData] = useState([])
    const [inputField,setInputField]=useState({
        user:"",
        email:"",
        password:"",
})
  
    const handelOnchange=(event)=>{
     
        setInputField((prev)=>{
            let helper = {...prev}
         helper[event.target.name] = event.target.value
         return helper
        })
   
    }
     

    const userhandleSubmite=()=>{
        console.log(inputField)
    }
 
    return(
        <>
        <h1 className="heding">User Login</h1>
        <ToastContainer />
        <div className="main-div">
            <label className="lab-div">Name</label>
            <input type='text' name="user" value={inputField.name} onChange={handelOnchange} />
            <label className="lab-div-emsil">Email</label>
            <input type='text'  name="email"  value={inputField.email} onChange={handelOnchange} />
            <label className="lab-div">Password</label>
            <input type='text'  name="password" value={inputField.password} onChange={handelOnchange} />
            
            <button className="junaid" onClick={userhandleSubmite} ><a>Login</a></button> 
            
           
        </div>
       
        </>
    )
}


export default Login