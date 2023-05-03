import React, { useState } from "react";
import "./contact.scss";


const Contact = () => {
  
  const [inputField,setInputField]=useState({
    user:"",
    mobileNo:"",
    email:"",
    topic:"",
    describtion:"",

  })
  const handelOnchange=(event)=>{
   

    setInputField((prev)=>{
     
      let helper = {...prev}
      helper[event.target.name] = event.target.value
      return helper
     })
    }
  


  const userhandleSubmite=(e)=>{
    e.preventDefault()
    console.log(inputField)
  }

  return (
   
    <>
    <form>
    <div className="mt-10">
      <h1 className="flex align-item justify-center text-blue-800 text-2xl">Contact Us</h1>
      <div className="border-2  border-indigo-500/100 mt-5">

        <div className="flex justify-around   mt-12">
        <label className="ml-8 text-blue-600 font-semibold" >Name<span className=" text-red-600">*</span>:</label>
        <input className="w-80 h-9" type="text" name="user" value={inputField.name} onChange={handelOnchange}/>

        <label className="ml-8 text-blue-600 font-semibold" >Mobile No<span className="text-red-600">*</span>:</label>
        <input className="w-80 h-9 mr-20" type="number" name="mobileNo" value={inputField.mobileNo} onChange={handelOnchange}/>
        </div>
       

        <hr className="max-w-[76%] border-1   border-blue-800/100 mt-6 ml-40 "></hr>

        <div  className="flex justify-around  mt-12">

        <label className="ml-8 text-blue-600 font-semibold ">Email<span className="text-red-600">*</span>:</label>
        <input className="w-80 h-9" type="email" name="email" value={inputField.email}  onChange={handelOnchange}/>

        <label className="ml-8 text-blue-600 font-semibold">Topic <span className="text-red-600">*</span> :</label>
        <input className="w-80 h-9  mr-20" type="text" name="topic"  value={inputField.topic} onChange={handelOnchange}/>
        </div>

      

        <hr className="max-w-[76%] border-1  border-blue-800 mt-6 ml-40 "></hr>

        <div className="mt-12  flex justify-evenly ">
          <label className="  text-blue-600 font-semibold">Description<span className="text-red-600">*</span>:</label>
          <textarea className="h-96 w-8/12 border-2  border-indigo-500/100 mr-20" name="describtion" value={inputField.describtion} onChange={handelOnchange}></textarea>
        </div>
     
        <button className="rounded-2xl bg-blue-500 p-2 text-white" type="submite"  onClick={userhandleSubmite}>Submit</button>
      </div>
      </div>
      </form>
    </>
  );
  };

export default Contact;