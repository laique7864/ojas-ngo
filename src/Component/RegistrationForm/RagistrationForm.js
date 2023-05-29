import React, { useState } from 'react'

function RegistrationForm() {
       
    const [inputField, setInputField] = useState({
        name: '',
        fatherName: '',
        dateOfBirth: '',
        gender: '',
        profession: '',
        bloodGroup: '',
        state: '',
        district: '',
        mobileNo: '',
        alternatNo: '',
        address: '',
        pincode: '',
        email: '',
        profile: '',
        adharCard: '',
        voterId: '',
        otherDocument: ''
    })
   
  
    const handelOnchange=(event)=>{
     
        setInputField((prev)=>{
            let helper = {...prev}
         helper[event.target.name] = event.target.value
         return helper
        })
   
    }

    async function handleOnSubmit(e) {
      e.preventDefault()
      const formData = new FormData();
      formData.append("name", inputField.name)
      formData.append("address", inputField.address)
      formData.append("email", inputField.email)
      formData.append("bloodgroup", inputField.bloodGroup)
      formData.append("state", inputField.state)
      formData.append("profile", inputField.profile)
      formData.append("otherDocument", inputField.otherDocument)
      formData.append("voterId", inputField.voterId)
      formData.append("adharCard", inputField.adharCard)
      formData.append("alternatNo", inputField.alternatNo)
      formData.append("mobileNo", inputField.mobileNo)
      formData.append("district", inputField.district)
      formData.append("profession",inputField.profession)
      formData.append("gender",inputField.gender)
      formData.append('dateOfBirth' , inputField.dateOfBirth)
      formData.append('fatherName' , inputField.fatherName)

      
  }



    return (
        <>

           
    <div className="isolate bg-white px-6 py-24 sm:py-3 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-1C6FB sm:text-4xl font-sans mb-2">Registration Form</h2>
        </div>
        <div className=" border border-1C6FB p-8">
          <form action="#" method="POST" className="mx-auto mt-16 max-w-xl sm:mt-3">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                 <div>
                <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-1C6FB">
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
                    className="block w-full rounded-md border border-1C6FB px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-1C6FB">
                Father Name* :
                </label>
                <div className="mt-2.5">
                  <input
                  onChange={handelOnchange}
                  value={inputField.fatherName}
                    type="text"
                    name="mobileNo"
                    id="last-name"
                    autoComplete="family-name"
                    className="block w-full rounded-md border border-1C6FB px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-1C6FB">
                Date of Birth * :
                </label>
                <div className="mt-2.5">
                  <input
                  onChange={handelOnchange}
                  value={inputField.dateOfBirth} 
                    type="email"
                    name="email"
                    id="last-name"
                    autoComplete="family-name"
                    className="block w-full rounded-md border border-1C6FB px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
                
              </div>
              <div>
                <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-1C6FB">
                Gender* :
                </label>
                <div className="mt-2.5">
                  <input
                  onChange={handelOnchange}
                  value={inputField.gender}
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
                Profession :
                </label>
                <div className="mt-2.5">
                  <input
                  onChange={handelOnchange}
                  value={inputField.profession}
                    type="text"
                    name="mobileNo"
                    id="last-name"
                    autoComplete="family-name"
                    className="block w-full rounded-md border border-1C6FB px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-1C6FB">
                Blood Group* :
                </label>
                <div className="mt-2.5">
                  <input
                  onChange={handelOnchange}
                  value={inputField.bloodGroup}
                    type="text"
                    name="topic"
                    id="last-name"
                    autoComplete="family-name"
                    className="block w-full rounded-md border border-1C6FB px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
                
              </div>
              <div>
                <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-1C6FB">
                State * :
                </label>
                <div className="mt-2.5">
                  <input
                  onChange={handelOnchange}
                  value={inputField.state}
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
                District* :
                </label>
                <div className="mt-2.5">
                  <input
                  onChange={handelOnchange}
                  value={inputField.district}
                    type="text"
                    name="mobileNo"
                    id="last-name"
                    autoComplete="family-name"
                    className="block w-full rounded-md border border-1C6FB px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
                
              </div>
              <div>
                <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-1C6FB">
                Mobile No * :
                </label>
                <div className="mt-2.5">
                  <input
                  onChange={handelOnchange}
                  value={inputField.mobileNo} 
                    type="number"
                    name="name"
                    id="first-name"
                    autoComplete="given-name"
                    className="block w-full rounded-md border border-1C6FB px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-1C6FB">
                Alternate No :
                </label>
                <div className="mt-2.5">
                  <input
                  onChange={handelOnchange}
                  value={inputField.alternatNo}
                    type="number"
                    name="mobileNo"
                    id="last-name"
                    autoComplete="family-name"
                    className="block w-full rounded-md border border-1C6FB px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="message" className="block text-sm font-semibold leading-6 text-1C6FB">
                Address * :
                </label>
                <div className="mt-2.5">
                  <textarea
                  onChange={handelOnchange}
                  value={inputField.address}
                    name="description"
                    id="message"
                    rows={4}
                    className="block w-full rounded-md border border-1C6FB px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    defaultValue={''}
                  />
                </div>
                
              </div>
              <div>
                <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-1C6FB">
                Pin Code* :
                </label>
                <div className="mt-2.5">
                  <input
                  onChange={handelOnchange}
                  value={inputField.pincode}
                    type="number"
                    name="name"
                    id="first-name"
                    autoComplete="given-name"
                    className="block w-full rounded-md border border-1C6FB px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-1C6FB">
                Email *:
                </label>
                <div className="mt-2.5">
                  <input
                  onChange={handelOnchange}
                  value={inputField.email}
                    type="text"
                    name="mobileNo"
                    id="last-name"
                    autoComplete="family-name"
                    className="block w-full rounded-md border border-1C6FB px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-1C6FB">
                Profile Picture* :
                </label>
                <div className="mt-2.5">
                  <input
                  onChange={handelOnchange}
                  value={inputField.profile}
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
                Aadhaar Card* :
                </label>
                <div className="mt-2.5">
                  <input
                  onChange={handelOnchange}
                  value={inputField.adharCard} 
                    type="number"
                    name="mobileNo"
                    id="last-name"
                    autoComplete="family-name"
                    className="block w-full rounded-md border border-1C6FB px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-1C6FB">
                Voter Id* :
                </label>
                <div className="mt-2.5">
                  <input
                  onChange={handelOnchange}
                  value={inputField.voterid}
                    type="number"
                    name="name"
                    id="first-name"
                    autoComplete="given-name"
                    className="block w-full rounded-md border border-1C6FB px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-1C6FB">
                Other Document :
                </label>
                <div className="mt-2.5">
                  <input
                  onChange={handelOnchange}
                  value={inputField.otherDocument}
                    type="number"
                    name="mobileNo"
                    id="last-name"
                    autoComplete="family-name"
                    className="block w-full rounded-md border border-1C6FB px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

            </div>
            <div className="mt-10">
              <button
              onClick={handleOnSubmit}
                type="submit"
                className="block w-full rounded-md bg-1C6FB px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
               Register
              </button>
            </div>
          </form>
        </div>
      </div>
        </>
    )
}

export default RegistrationForm
