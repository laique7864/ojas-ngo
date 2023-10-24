import React, { useRef, useState } from "react";
// import "./contact.scss";
import emailjs from "@emailjs/browser";
import ConfirmationModel from "./ConfirmationModel";
import { Alert } from "@mui/material";

const Contact = () => {
  const form = useRef();
  const [open, setOpen] = React.useState(false);
  const [errors, setErrors] = useState({
    mobileNo: false,
    user_name: false,
    user_email: false,
    subject: false,
    message: false,
  });


  const handleClose = () => {
    setOpen(false);
  };

  function validateForm() {
    const newErrors = {
      mobileNo: inputField.mobileNo === "" || !/^\d{10}$/.test(inputField.mobileNo),
      user_name: inputField.user_name === "",
      user_email: inputField.user_email === "",
      subject: inputField.subject === "",
      message: inputField.message === ""
    };
    setErrors(newErrors);
    return Object.values(newErrors).some((error) => error);
  }

  const [inputField, setInputField] = useState({
    user_name: "",
    mobileNo: "",
    user_email: "",
    subject: "",
    message: "",
  });
  const handelOnchange = (event) => {
    setInputField((prev) => {
      let helper = { ...prev };
      helper[event.target.name] = event.target.value;
      return helper;
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (!validateForm()) {
      emailjs
        .sendForm(
          "service_8t044ec",
          "template_4ezaxm3",
          form.current,
          "vopG0C0jqRjNecHLg"
        )
        .then(
          (result) => {
            setOpen(true);
          },
          (error) => {}
        );
    }
  };

  return (
    <>
      {/* service_4ao53cc */}
      {/* "service_4ao53cc","template_wjo8kok" */}
      <div className="isolate bg-white px-6 py-24 sm:py-3 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-1C6FB sm:text-4xl font-sans mb-2">
            Contact Us
          </h2>
        </div>
        <div className=" border border-1C6FB p-8">
          <form
            ref={form}
            action="#"
            method="POST"
            className="mx-auto mt-16 max-w-xl sm:mt-2"
            onSubmit={sendEmail}
          >
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="first-name"
                  className="block text-sm font-semibold leading-6 text-1C6FB"
                >
                  Name
                </label>
                <div className="mt-2.5">
                  <input
                    onChange={handelOnchange}
                    type="text"
                    name="user_name"
                    id="first-name"
                    autoComplete="given-name"
                    className="block w-full rounded-md border border-1C6FB px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                  />
                  {errors.user_name  && <p className="text-red-700">Please Enter your Name</p>}
                </div>
              </div>
              <div>
                <label
                  htmlFor="last-name"
                  className="block text-sm font-semibold leading-6 text-1C6FB"
                >
                  Mobile No
                </label>
                <div className="mt-2.5">
                  <input
                    onChange={handelOnchange}
                    type="number"
                    name="mobileNo"
                    id="last-name"
                    autoComplete="family-name"
                    className="block w-full rounded-md border border-1C6FB px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                  />
                {errors.mobileNo  && <p className="text-red-700">Mobile Number is Required</p>}  
                </div>
              </div>
              <div>
                <label
                  htmlFor="last-name"
                  className="block text-sm font-semibold leading-6 text-1C6FB"
                >
                  Email
                </label>
                <div className="mt-2.5">
                  <input
                    onChange={handelOnchange}
                    type="email"
                    name="user_email"
                    autoComplete="family-name"
                    className="block w-full rounded-md border border-1C6FB px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                  />
                  {errors.user_email && <p className="text-red-700">Please Enter your Email</p>}
                </div>
              </div>
              <div>
                <label
                  htmlFor="last-name"
                  className="block text-sm font-semibold leading-6 text-1C6FB"
                >
                  Topic
                </label>
                <div className="mt-2.5">
                  <input
                    onChange={handelOnchange}
                    type="text"
                    name="subject"
                    id="last-name"
                    autoComplete="family-name"
                    className="block w-full rounded-md border border-1C6FB px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                  />
                  {errors.subject && <p className="text-red-700">Please Enter Topic</p>}
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold leading-6 text-1C6FB"
                >
                  Description
                </label>
                <div className="mt-2.5">
                  <textarea
                    onChange={handelOnchange}
                    name="message"
                    id="message"
                    rows={4}
                    className="block w-full rounded-md border border-1C6FB px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                    // defaultValue={""}
                  />
                  {errors.message && <p className="text-red-700">Please Enter Description</p>}
                </div>
              </div>
            </div>
            <div className="mt-10">
              <button
                value="Send"
                type="submit"
                className="block w-full rounded-md bg-1C6FB px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
        {open ? (
          <ConfirmationModel open={open} handleClose={handleClose} />
        ) : null}
      </div>
    </>
  );
};

export default Contact;
