import React, { useState } from "react";
import './Login.scss'
import { Formik, Form } from 'formik';
import { ToastContainer, toast } from 'react-toastify';



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
   
    function validateForm() {
        const user = document.getElementById("name");
        const email = document.getElementById("email");
        const password = document.getElementById("password");
    
        if (user.value === "") {
          alert("Please enter your name.");
          // nameInput.focus();
          return false;
        }
    
        if (email.value === "") {
          alert("Please enter your email.");
          // emailInput.focus();
          return false;
        }
    
        if (password.value.length < 8) {
          alert("Password must be at least 8 characters.");
          password.focus();
          return false;
        }
    
        return true;
      }
      const userhandleSubmite=()=>{
        console.log(inputField)
        console.log(validateForm)
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
            <input type='text' name="user" value={inputField.name} onChange={handelOnchange} required/>
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