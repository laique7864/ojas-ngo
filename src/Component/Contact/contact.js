import React, { useState } from "react";
// import "./contact.scss";


const Contact = () => {

  const [inputField, setInputField] = useState({
    name: "",
    mobileNo: "",
    email: "",
    topic: "",
    description: "",

  })
  const handelOnchange = (event) => {


    setInputField((prev) => {

      let helper = { ...prev }
      helper[event.target.name] = event.target.value
      return helper
    })
  }



  const userhandleSubmite = (e) => {
    e.preventDefault()
    console.log(inputField)
    setInputField({
      name: "",
      mobileNo: "",
      email: "",
      topic: "",
      description: "",
    })
  }

  return (

    <>
      {/* <form>
        <div className="mt-10">
          <h1 className="flex align-item justify-center text-blue-800 text-2xl">Contact Us</h1>
          <div className="border-2  border-indigo-500/100 mt-5">

            <div className="flex justify-around   mt-12">
              <label className="ml-8 text-blue-600 font-semibold" >Name<span className=" text-red-600">*</span>:</label>
              <input className="w-80 h-9" type="text" name="name" value={inputField.name} onChange={handelOnchange} />

              <label className="ml-8 text-blue-600 font-semibold" >Mobile No<span className="text-red-600">*</span>:</label>
              <input className="w-80 h-9 mr-20" type="number" name="mobileNo" value={inputField.mobileNo} onChange={handelOnchange} />
            </div>


            <hr className="max-w-[76%] border-1   border-blue-800/100 mt-6 ml-40 "></hr>

            <div className="flex justify-around  mt-12">

              <label className="ml-8 text-blue-600 font-semibold ">Email<span className="text-red-600">*</span>:</label>
              <input className="w-80 h-9" type="email" name="email" value={inputField.email} onChange={handelOnchange} />

              <label className="ml-8 text-blue-600 font-semibold">Topic <span className="text-red-600">*</span> :</label>
              <input className="w-80 h-9  mr-20" type="text" name="topic" value={inputField.topic} onChange={handelOnchange} />
            </div>



            <hr className="max-w-[76%] border-1  border-blue-800 mt-6 ml-40 "></hr>

            <div className="mt-12  flex justify-evenly ">
              <label className="  text-blue-600 font-semibold">Description<span className="text-red-600">*</span>:</label>
              <textarea className="h-96 w-8/12 border-2 mb-8  border-indigo-500/100 mr-20" name="describtion" value={inputField.describtion} onChange={handelOnchange}></textarea>
            </div>
            <div className="flex items-center justify-center mb-8">
              <button className=" flex justify-center  rounded-2xl bg-blue-500 p-2 text-white " type="submite" onClick={userhandleSubmite}>Submit</button>
            </div>
          </div>
        </div>
        
      </form> */}
      <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-1C6FB sm:text-4xl font-sans mb-2">Contact Us</h2>
        </div>
        <div className=" border border-1C6FB p-8">
          <form action="#" method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>
                <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-1C6FB">
                  Name
                </label>
                <div className="mt-2.5">
                  <input
                  onChange={handelOnchange}
                    type="text"
                    name="name"
                    id="first-name"
                    autoComplete="given-name"
                    className="block w-full rounded-md border border-1C6FB px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-1C6FB">
                  Mobile No
                </label>
                <div className="mt-2.5">
                  <input
                  onChange={handelOnchange}
                    type="number"
                    name="mobileNo"
                    id="last-name"
                    autoComplete="family-name"
                    className="block w-full rounded-md border border-1C6FB px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-1C6FB">
                  Email
                </label>
                <div className="mt-2.5">
                  <input
                  onChange={handelOnchange}
                    type="email"
                    name="email"
                    id="last-name"
                    autoComplete="family-name"
                    className="block w-full rounded-md border border-1C6FB px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-1C6FB">
                  Topic
                </label>
                <div className="mt-2.5">
                  <input
                  onChange={handelOnchange}
                    type="text"
                    name="topic"
                    id="last-name"
                    autoComplete="family-name"
                    className="block w-full rounded-md border border-1C6FB px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>


              <div className="sm:col-span-2">
                <label htmlFor="message" className="block text-sm font-semibold leading-6 text-1C6FB">
                Description
                </label>
                <div className="mt-2.5">
                  <textarea
                  onChange={handelOnchange}
                    name="description"
                    id="message"
                    rows={4}
                    className="block w-full rounded-md border border-1C6FB px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    defaultValue={''}
                  />
                </div>
              </div>


            </div>
            <div className="mt-10">
              <button
              onClick={userhandleSubmite}
                type="submit"
                className="block w-full rounded-md bg-1C6FB px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>

    </>
  );
};

export default Contact;