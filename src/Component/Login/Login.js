import React, { useState } from "react";
import './Login.scss'
// import { Formik, Form } from 'formik';
// import { ToastContainer, toast } from 'react-toastify';


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
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
    const [agreed, setAgreed] = useState(false)


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
    //    <div>
    //    {/* <ToastContainer /> */}
    // {/* //    <Form> */}
    //     <h1 className="heding">User Login</h1>
    //     <div className="main-div">
    //         <div>
    //         <label className="lab-div">Name</label>
    //         <input type='text' name="name" value={inputField.name} onChange={handelOnchange} required/>
    //         </div>
           
    //         <label className="lab-div-emsil">Email</label>
    //         <input type='text'  name="email"  value={inputField.email} onChange={handelOnchange} required />
    //         <label className="lab-div">Password</label>
    //         <input type='text'  name="password" value={inputField.password} onChange={handelOnchange} required/>
            
    //         <button className="junaid" onClick={userhandleSubmite} ><a>Login</a></button> 
            
           
    //     </div>
    //     {/* </Form> */}
    //     </div>
        // </Formik>

        <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
        {/* <div
          className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
          aria-hidden="true"
        >
          <div
            // className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
        
          />
        </div> */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-1C6FB sm:text-4xl font-sans mb-2">User Login</h2>
        </div>
        <div className=" border border-1C6FB p-8">
        <form action="#" method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">

   
            <div className="sm:col-span-2">
              <label htmlFor="email" className="block text-sm font-semibold leading-6 text-1C6FB">
              Username
              </label>
              <div className="mt-2.5">
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="email"
                  className="block w-full rounded-md  px-3.5 py-2 text-1C6FB shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 border border-1C6FB"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="email" className="block text-sm font-semibold leading-6 text-1C6FB">
              Email
              </label>
              <div className="mt-2.5">
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="email"
                  className="block w-full rounded-md border border-1C6FB px-3.5 py-2 text-1C6FB shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="email" className="block text-sm font-semibold leading-6 text-1C6FB">
              Password
              </label>
              <div className="mt-2.5">
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="email"
                  className="block w-full rounded-md border border-1C6FB px-3.5 py-2 text-1C6FB shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
      
        
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="block w-20 rounded-md mb-2 bg-1C6FB px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
                Login
            </button>
          </div>
        </form>
        </div>
      </div>
    )
}


export default Login