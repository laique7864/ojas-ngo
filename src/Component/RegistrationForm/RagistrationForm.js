import React, { useRef, useState } from "react";
import { RegistrationMember, addEvent } from "../../services/admin.service";
import { ToastContainer, toast } from "react-toastify";
import ConfirmationModelRegistration from "./ConfirmationModelRegistration";

const RegistrationForm = () => {
  const form = useRef();
  const [open, setOpen] = React.useState(false);
  const [errors, setErrors] = useState({
    name: false,
    fatherName: false,
    dateOfBirth: false,
    gender: false,
    profession: false,
    bloodGroup: false,
    state: false,
    district: false,
    mobileNo: false,
    address: false,
    pincode: false,
    email: false,
    adharCard: false,
  });

  const handleClose = () => {
    setOpen(false);
  };

  function validateForm() {
    const newErrors = {
      name: inputField.name === "",
      fatherName: inputField.fatherName === "",
      dateOfBirth: inputField.dateOfBirth === "",
      gender: inputField.gender === "",
      profession: inputField.profession === "",
      bloodGroup: inputField.bloodGroup === "",
      state: inputField.state === "",
      district: inputField.district === "",
      mobileNo: inputField.name === "" || !/^\d{10}$/.test(inputField.mobileNo),
      address: inputField.address === "",
      pincode: inputField.pincode === "",
      email: inputField.email === "",
      adharCard: inputField.adharCard === "",
    };
    setErrors(newErrors);
    return Object.values(newErrors).some((error) => error);
  }

  const [profile, setProfile] = useState(null);
  const [inputField, setInputField] = useState({
    name: "",
    fatherName: "",
    dateOfBirth: "",
    gender: "",
    profession: "",
    bloodGroup: "",
    state: "",
    district: "",
    mobileNo: "",
    alternatNo: "",
    address: "",
    pincode: "",
    email: "",
    profile: "",
    adharCard: "",
  });

  const handelOnchange = (event) => {
    setInputField((prev) => {
      let helper = { ...prev };
      helper[event.target.name] = event.target.value;
      return helper;
    });
  };


  async function handleOnSubmit(e) {
    e.preventDefault();
    if (!validateForm()) {
      const formData = new FormData();

      formData.append("name", inputField.name);
      formData.append("address", inputField.address);
      formData.append("email", inputField.email);
      formData.append("bloodgroup", inputField.bloodGroup);
      formData.append("state", inputField.state);
      formData.append("image", profile);
      formData.append("adharCard", inputField.adharCard);
      formData.append("alternatNo", inputField.alternatNo);
      formData.append("mobileNo", inputField.mobileNo);
      formData.append("district", inputField.district);
      formData.append("profession", inputField.profession);
      formData.append("gender", inputField.gender);
      formData.append("dateOfBirth", inputField.dateOfBirth);
      formData.append("fatherName", inputField.fatherName);
      const data = await RegistrationMember(formData)
        .then((res) => {
          if (res.status === 201 || res.status === 200) {
            toast("Successfully Registred");
          } else {
          }
        })
        .catch((error) => {
          toast("An Error Occured");
        });
    }
  }

  return (
    <>
      <div className="isolate bg-white px-6 py-24 sm:py-3 lg:px-8">
        <ToastContainer />
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-1C6FB sm:text-4xl font-sans mb-2">
            Registration Form
          </h2>
        </div>
        <div className=" border border-1C6FB p-8">
          <form
            ref={form}
            action="#"
            method="POST"
            className="mx-auto mt-16 max-w-xl sm:mt-3"
            onSubmit={handleOnSubmit}
          >
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="first-name"
                  className="block text-sm font-semibold leading-6 text-1C6FB"
                >
                  Name* :
                </label>
                <div className="mt-2.5">
                  <input
                    onChange={handelOnchange}
                    value={inputField.name}
                    type="text"
                    name="name"
                    id="first-name"
                    autoComplete="given-name"
                    className="block w-full rounded-md border border-1C6FB px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                  />
                  {errors.name && (
                    <p className="text-red-700">Please Enter Your Name</p>
                  )}
                </div>
              </div>
              <div>
                <label
                  htmlFor="last-name"
                  className="block text-sm font-semibold leading-6 text-1C6FB"
                >
                  Father Name* :
                </label>
                <div className="mt-2.5">
                  <input
                    onChange={handelOnchange}
                    value={inputField.fatherName}
                    type="text"
                    name="fatherName"
                    id="last-name"
                    autoComplete="family-name"
                    className="block w-full rounded-md border border-1C6FB px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                  />
                  {errors.fatherName && (
                    <p className="text-red-700">
                      Please Enter Your Father's Name
                    </p>
                  )}
                </div>
              </div>
              <div>
                <label
                  htmlFor="last-name"
                  className="block text-sm font-semibold leading-6 text-1C6FB"
                >
                  Date of Birth * :
                </label>
                <div className="mt-2.5">
                  <input
                    onChange={handelOnchange}
                    value={inputField.dateOfBirth}
                    type="date"
                    name="dateOfBirth"
                    id="last-name"
                    autoComplete="family-name"
                    className="block w-full rounded-md border border-1C6FB px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                  />
                  {errors.dateOfBirth && (
                    <p className="text-red-700">
                      Please Enter Your Date of Birth
                    </p>
                  )}
                </div>
              </div>
              <div>
                <label
                  htmlFor="first-name"
                  className="block text-sm font-semibold leading-6 text-1C6FB"
                >
                  Gender* :
                </label>
                <div className="mt-2.5">
                  <select
                    id="country"
                    name="gender"
                    onChange={handelOnchange}
                    className="block w-full rounded-md border border-1C6FB px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                  >
                    {errors.gender && (
                      <p className="text-red-700">Select Your Gender</p>
                    )}
                    <option value="Male">Male</option>
                    <option value={"Female"}>Female</option>
                    <option value={"Other"}>Other</option>
                  </select>
                </div>
              </div>
              <div>
                <label
                  htmlFor="last-name"
                  className="block text-sm font-semibold leading-6 text-1C6FB"
                >
                  Profession :
                </label>
                <div className="mt-2.5">
                  <input
                    onChange={handelOnchange}
                    value={inputField.profession}
                    type="text"
                    name="profession"
                    id="last-name"
                    autoComplete="family-name"
                    className="block w-full rounded-md border border-1C6FB px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="last-name"
                  className="block text-sm font-semibold leading-6 text-1C6FB"
                >
                  Blood Group* :
                </label>
                <div className="mt-2.5">
                  <select
                    onChange={handelOnchange}
                    value={inputField.bloodGroup}
                    type="text"
                    name="bloodGroup"
                    id="last-name"
                    autoComplete="family-name"
                    className="block w-full rounded-md border border-1C6FB px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                  >
                    {errors.bloodGroup && (
                      <p className="text-red-700">Select Your Blood Group</p>
                    )}
                    <option value="A+">A+</option>
                    <option value={"A-"}>A-</option>
                    <option value={"B+"}>B+</option>
                    <option value="B-">B-</option>
                    <option value={"O+"}>O+</option>
                    <option value={"O-"}>O-</option>
                    <option value="AB+">AB+</option>
                    <option value={"AB-"}>AB-</option>
                  </select>
                </div>
              </div>
              <div>
                <label
                  htmlFor="first-name"
                  className="block text-sm font-semibold leading-6 text-1C6FB"
                >
                  State * :
                </label>
                <div className="mt-2.5">
                  <input
                    onChange={handelOnchange}
                    value={inputField.state}
                    type="text"
                    name="state"
                    id="first-name"
                    autoComplete="given-name"
                    className="block w-full rounded-md border border-1C6FB px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                  />
                  {errors.state && (
                    <p className="text-red-700">Please Enter Your State</p>
                  )}
                </div>
              </div>
              <div>
                <label
                  htmlFor="last-name"
                  className="block text-sm font-semibold leading-6 text-1C6FB"
                >
                  District* :
                </label>
                <div className="mt-2.5">
                  <input
                    onChange={handelOnchange}
                    value={inputField.district}
                    type="text"
                    name="district"
                    autoComplete="family-name"
                    className="block w-full rounded-md border border-1C6FB px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                  />
                  {errors.district && (
                    <p className="text-red-700">Please Enter Your District</p>
                  )}
                </div>
              </div>
              <div>
                <label
                  htmlFor="first-name"
                  className="block text-sm font-semibold leading-6 text-1C6FB"
                >
                  Mobile No * :
                </label>
                <div className="mt-2.5">
                  <input
                    onChange={handelOnchange}
                    value={inputField.mobileNo}
                    type="number"
                    name="mobileNo"
                    id="first-name"
                    autoComplete="given-name"
                    className="block w-full rounded-md border border-1C6FB px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                  />
                  {errors.mobileNo && (
                    <p className="text-red-700">
                      Please Enter Your Valid Mobile No.
                    </p>
                  )}
                </div>
              </div>
              <div>
                <label
                  htmlFor="last-name"
                  className="block text-sm font-semibold leading-6 text-1C6FB"
                >
                  Alternate No :
                </label>
                <div className="mt-2.5">
                  <input
                    onChange={handelOnchange}
                    value={inputField.alternatNo}
                    placeholder="Optional"
                    type="number"
                    name="alternatNo"
                    id="last-name"
                    autoComplete="family-name"
                    className="block w-full rounded-md border border-1C6FB px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold leading-6 text-1C6FB"
                >
                  Address * :
                </label>
                <div className="mt-2.5">
                  <textarea
                    onChange={handelOnchange}
                    value={inputField.address}
                    name="address"
                    id="message"
                    rows={4}
                    className="block w-full rounded-md border border-1C6FB px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                    defaultValue={""}
                  />
                  {errors.address && (
                    <p className="text-red-700">Please Enter your Address</p>
                  )}
                </div>
              </div>
              <div>
                <label
                  htmlFor="first-name"
                  className="block text-sm font-semibold leading-6 text-1C6FB"
                >
                  Pin Code* :
                </label>
                <div className="mt-2.5">
                  <input
                    onChange={handelOnchange}
                    value={inputField.pincode}
                    type="number"
                    name="pincode"
                    id="first-name"
                    autoComplete="given-name"
                    className="block w-full rounded-md border border-1C6FB px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                  />
                  {errors.pincode && (
                    <p className="text-red-700">Please Enter Your Pin Code</p>
                  )}
                </div>
              </div>
              <div>
                <label
                  htmlFor="last-name"
                  className="block text-sm font-semibold leading-6 text-1C6FB"
                >
                  Email *:
                </label>
                <div className="mt-2.5">
                  <input
                    onChange={handelOnchange}
                    value={inputField.email}
                    type="text"
                    name="email"
                    id="last-name"
                    autoComplete="family-name"
                    className="block w-full rounded-md border border-1C6FB px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                  />
                  {errors.email && (
                    <p className="text-red-700">Please Enter Your Email</p>
                  )}
                </div>
              </div>
              <div>
                <label
                  htmlFor="first-name"
                  className="block text-sm font-semibold leading-6 text-1C6FB"
                >
                  Profile Picture* :
                </label>
                <div className="mt-2.5">
                  <input
                    onChange={(e) => setProfile(e.target.files[0])}
                    type="file"
                    name="profile"
                    id="first-name"
                    autoComplete="given-name"
                    className="block w-full rounded-md border border-1C6FB px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                  />

                  <div className="preview-container rounded-full border h-20 w-20 mt-2">
                    {profile && (
                      <img
                        className="rounded-full h-20"
                        src={URL.createObjectURL(profile)}
                        alt="Profile Preview"
                      />
                    )}
                  </div>
                </div>
              </div>
              <div>
                <label
                  htmlFor="last-name"
                  className="block text-sm font-semibold leading-6 text-1C6FB"
                >
                  Aadhaar Card* :
                </label>
                <div className="mt-2.5">
                  <input
                    onChange={handelOnchange}
                    value={inputField.adharCard}
                    type="number"
                    name="adharCard"
                    id="last-name"
                    autoComplete="family-name"
                    className="block w-full rounded-md border border-1C6FB px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                  />
                  {errors.adharCard && <p className="text-red-700">Please Enter your Adhaar Number</p>}
                </div>
              </div>
            </div>
            <div className="mt-10">
              <button
                // onClick={handleOnSubmit}
                value="send"
                type="submit"
                className="block w-full rounded-md bg-1C6FB px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                Register
              </button>
            </div>
          </form>
        </div>
        {open ? (
          <ConfirmationModelRegistration
            open={open}
            handleClose={handleClose}
          />
        ) : null}
      </div>
    </>
  );
};

export default RegistrationForm;
