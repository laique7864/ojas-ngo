import React, { useState } from "react";
import './Login.scss'
import { Formik, Form } from 'formik';
import { ToastContainer, toast } from 'react-toastify';



const Login =()=>{
  
    const [inputField,setInputField]=useState({
        name:"",
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
        setInputField({
         name:"",
          email:"",
          password:"",
        })
    }
 
    return(
        // <Formik
        // initialValues={{
        //     firstName: '',
        //     lastName: '',
        //     userName: '',
        //     }}
        //     onSubmit={ response => {
             
        //         response = Object.assign(response)
               
        //         console.log(response,"kkkkkkkkkk");
        //         if ( response===firstName) {
        //             toast.success("Student Registered Successfully")
                
                    
        //         } else {
        //             toast.error(data.error.response.data.message.error)

        //         }

        //    }}>
       <div>
       {/* <ToastContainer /> */}
    {/* //    <Form> */}
        <h1 className="heding">User Login</h1>
        <div className="main-div">
            <label className="lab-div">Name</label>
            <input type='text' name="name" value={inputField.name} onChange={handelOnchange} required/>
            <label className="lab-div-emsil">Email</label>
            <input type='text'  name="email"  value={inputField.email} onChange={handelOnchange} required />
            <label className="lab-div">Password</label>
            <input type='text'  name="password" value={inputField.password} onChange={handelOnchange} required/>
            
            <button className="junaid" onClick={userhandleSubmite} ><a>Login</a></button> 
            
           
        </div>
        {/* </Form> */}
        </div>
        // </Formik>
    )
}


export default Login