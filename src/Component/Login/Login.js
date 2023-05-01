import React from "react";
import './Login.scss'

const Login =()=>{
    return(
        <>
        <h1 className="heding">Registration Form</h1>
        <div className="main-div">
            <label className="lab-div">Name</label>
            <input type='text' />
            <label className="lab-div-emsil">Email</label>
            <input type='text' />
            <label className="lab-div">Password</label>
            <input type='text' />
            <button className="btn">Login</button>  
        </div>
        </>
    )
}


export default Login