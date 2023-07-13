import React, { useRef, useState } from "react";
// import "./contact.scss";
import emailjs from '@emailjs/browser';


const Contact = () => {
  const form = useRef();

  const [inputField, setInputField] = useState({
    user_name: "",
    mobileNo: "",
    user_email: "",
    subject: "",
    message: "",

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
    // setInputField({
    //   name: "",
    //   mobileNo: "",
    //   user_email: "",
    //   topic: "",
    //   message: "",
    // })
  }
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_4ao53cc', 'template_wjo8kok', form.current,'lUSyhPDk2MUfqlnWe')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (

    <>
    {/* service_4ao53cc */}
    {/* "service_4ao53cc","template_wjo8kok" */}
      <div className="isolate bg-white px-6 py-24 sm:py-3 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-1C6FB sm:text-4xl font-sans mb-2">Contact Us</h2>
        </div>
        <div className=" border border-1C6FB p-8">
          <form ref={form} action="#" method="POST" className="mx-auto mt-16 max-w-xl sm:mt-2" onSubmit={sendEmail}>
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>
                <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-1C6FB">
                  Name
                </label>
                <div className="mt-2.5">
                  <input
                  onChange={handelOnchange}
                    type="text"
                    name="user_name"
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
                    name="user_email"
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
                    name="subject"
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
                  name="message" 
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
             value="Send"
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