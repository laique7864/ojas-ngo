import React, { useState } from "react";
import { AdminLoginService } from "../../services/admin.service";
import { useNavigate } from "react-router-dom";
// import { Formik, Form } from 'formik';
// import { ToastContainer, toast } from 'react-toastify';

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const Login = () => {
  const navigate = useNavigate();

  const [inputField, setInputField] = useState({
    email: "",
    password: "",
  });

  const handelOnchange = (event) => {
    setInputField((prev) => {
      let helper = { ...prev };
      helper[event.target.name] = event.target.value;
      return helper;
    });
  };
  const [agreed, setAgreed] = useState(false);

  const userhandleSubmite = async (e) => {
    e.preventDefault();
    const data = await AdminLoginService(inputField);
    console.log(data.data);
    if (data.data.status === 400) {
      alert("err");
    } else {
      const objString = JSON.stringify(data.data);
      localStorage.setItem("user", objString);
      navigate("/admin");
    }

    // const data= await  AdminLoginService()
  };
  

  return (
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
        <h2 className="text-3xl font-bold tracking-tight text-1C6FB sm:text-4xl font-sans mb-2">
          User Login
        </h2>
      </div>
      <div className=" border border-1C6FB p-8">
        <form
          className="mx-auto mt-16 max-w-xl sm:mt-20"
          onSubmit={userhandleSubmite}
        >
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label
                htmlFor="email"
                className="block text-sm font-semibold leading-6 text-1C6FB"
              >
                Email
              </label>
              <div className="mt-2.5">
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={inputField.email}
                  autoComplete="email"
                  onChange={handelOnchange}
                  className="block w-full rounded-md border border-1C6FB px-3.5 py-2 text-1C6FB shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="email"
                className="block text-sm font-semibold leading-6 text-1C6FB"
              >
                Password
              </label>
              <div className="mt-2.5">
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={inputField.password}
                  onChange={handelOnchange}
                  autoComplete="password"
                  className="block w-full rounded-md border border-1C6FB px-3.5 py-2 text-1C6FB shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="block w-20 rounded-md mb-2 bg-1C6FB px-3.5 py-2.5 text-center text-sm font-semibold text-white mt-6 shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
