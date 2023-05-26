import React, { useState } from 'react'

function RagistrationForm() {
       
    const [inputField, setInputField] = useState({
        name: '',
        fathername: '',
        dateofbirth: '',
        gender: '',
        profession: '',
        bloodgroup: '',
        state: '',
        district: '',
        mobileno: '',
        alternatno: '',
        address: '',
        pincode: '',
        email: '',
        profilepicture: '',
        adharcard: '',
        voterid: '',
        otherdocument: ''
    })
   
  
    const handelOnchange=(event)=>{
     
        setInputField((prev)=>{
            let helper = {...prev}
         helper[event.target.name] = event.target.value
         return helper
        })
   
    }

    const handleOnSubmit = (event)=>{
        event.preventDefault();
        console.log(inputField);
     
     
        setInputField({
            name: '',
            fathername: '',
            dateofbirth: '',
            gender: '',
            profession: '',
            bloodgroup: '',
            state: '',
            district: '',
            mobileno: '',
            alternatno: '',
            address: '',
            pincode: '',
            email: '',
            profilepicture: '',
            adharcard: '',
            voterid: '',
            otherdocument: ''
          });
       
    }



    return (
        <>
        {/* <div className='flex items-center flex-col mt-12 mb-8'>
            <h2 className='flex items-center justify-center font-sans mb-5 text-2xl text-025FB5'>Registration Form</h2>

            <div style={{ boxSizing: 'border-box', border: '1px solid #025FB5', width: '75rem' }} className='rounded-lg'>
                <div className='flex items-center justify-evenly mt-8'>
                    <label className='text-025FB5 w-64'>Name <span className='text-red-600'>*</span> :</label>
                    <input type='text' placeholder='Name' className='w-56 h-7' name='name' onChange={handleOnchange} value={inputField.name} />

                    <label className='text-025FB5 w-64'>Father Name<span className='text-red-600'>*</span> :</label>
                    <input type='text' placeholder='Father Name' name='fathername' onChange={handleOnchange} value={inputField.fathername} className='w-56 h-7' />
                </div>
                <div style={{ border: '1px solid #025FB5', width: '60rem', marginLeft: '8rem', marginBottom: '2rem', marginTop: '0.7rem' }}></div>

                <div className='flex items-center justify-evenly'>
                    <label className='text-025FB5 w-64'>Date of Birth<span className='text-red-600'>*</span> :</label>
                    <input type='date' name='dateofbirth' onChange={handleOnchange} value={inputField.dateofbirth} className='w-56 h-7' />

                    <label className='text-025FB5 w-64'>Gender<span className='text-red-600'>*</span> :</label>
                    <input type='text' name='gender' onChange={handleOnchange} value={inputField.gender} className='w-56 h-7' />
                </div>
                <div style={{ border: '1px solid #025FB5', width: '60rem', marginLeft: '8rem', marginBottom: '2rem', marginTop: '0.7rem' }}></div>

                <div className='flex items-center justify-evenly'>
                    <label className='text-025FB5 w-64'>Profession :</label>
                    <input type='text' name='profession' onChange={handleOnchange} value={inputField.profession} className='w-56 h-7' />

                    <label className='text-025FB5 w-64'>Blood Group<span className='text-red-600'>*</span> :</label>
                    <input type='text' name='bloodgroup' onChange={handleOnchange} value={inputField.bloodgroup} className='w-56 h-7' />
                </div>
                <div style={{ border: '1px solid #025FB5', width: '60rem', marginLeft: '8rem', marginBottom: '2rem', marginTop: '0.7rem' }}></div>

                <div className='flex items-center justify-evenly'>
                    <label className='text-025FB5 w-64'>State <span className='text-red-600'>*</span> :</label>
                    <input type='text' name='state' onChange={handleOnchange} value={inputField.state} className='w-56 h-7' />

                    <label className='text-025FB5 w-64'>District<span className='text-red-600'>*</span> :</label>
                    <input type='text' name='district' onChange={handleOnchange} value={inputField.district} placeholder='District' className='w-56 h-7' />
                </div>
                <div style={{ border: '1px solid #025FB5', width: '60rem', marginLeft: '8rem', marginBottom: '2rem', marginTop: '0.7rem' }}></div>

                <div className='flex items-center justify-evenly'>
                    <label className='text-025FB5 w-64'>Mobile No<span className='text-red-600'>*</span> :</label>
                    <input type='number' name='mobileno' onChange={handleOnchange} value={inputField.mobileno}   maxLength={10} placeholder='Number' className='w-56 h-7' />

                    <label className='text-025FB5 w-64'>Alternate No :</label>
                    <input type='text' name='alternatno' onChange={handleOnchange} value={inputField.alternatno} className='w-56 h-7' />
                </div>
                <div style={{ border: '1px solid #025FB5', width: '60rem', marginLeft: '8rem', marginBottom: '2rem', marginTop: '0.7rem' }}></div>

                <div className='flex ml-12'>
                    <label className='text-025FB5 w-64'>Address<span className='text-red-600'>*</span> :</label>
                    <textarea  name='address' onChange={handleOnchange} value={inputField.address} style={{
                        boxSizing: 'border-box', width: '50rem', border: '1px solid #025FB5',
                        height: '5rem', marginLeft: '3rem', marginBottom: '1rem'
                    }}
                    ></textarea>
                </div>
                <div style={{ border: '1px solid #025FB5', width: '60rem', marginLeft: '8rem', marginBottom: '2rem', marginTop: '0.7rem' }}></div>

                <div className='flex items-center justify-evenly'>
                    <label className='text-025FB5 w-64'>Pin Code<span className='text-red-600'>*</span> :</label>
                    <input type='text' name='pincode' onChange={handleOnchange} value={inputField.pincode} placeholder='Pin Code' className='w-56 h-7' />

                    <label className='text-025FB5 w-64'>Email :</label>
                    <input type='email' name='email' onChange={handleOnchange} value={inputField.email} placeholder='Email' className='w-56 h-7' />
                </div>
                <div style={{ border: '1px solid #025FB5', width: '60rem', marginLeft: '8rem', marginBottom: '2rem', marginTop: '0.7rem' }}></div>

                <div className='flex items-center justify-evenly'>
                    <label className='text-025FB5 w-64'>Profile Picture<span className='text-red-600'>*</span> :</label>
                    <input type='text' name='profilepicture' onChange={handleOnchange} value={inputField.profilepicture} className='w-56 h-7' />

                    <labelabel className='text-025FB5 w-64'>Aadhaar Card<span className='text-red-600'>*</span> :</labelabel>
                    <input type='text' name='adharcard' onChange={handleOnchange} value={inputField.adharcard} className='w-56 h-7' />
                </div>
                <div style={{ border: '1px solid #025FB5', width: '60rem', marginLeft: '8rem', marginBottom: '2rem', marginTop: '0.7rem' }}></div>

                <div className='flex items-center justify-evenly'>
                    <label className='text-025FB5 w-64'>Voter Id<span className='text-red-600'>*</span> :</label>
                    <input type='text' name='voterid' onChange={handleOnchange} value={inputField.voterid} className='w-56 h-7' />

                    <labelabel className='text-025FB5 w-64'>Other Document :</labelabel>
                    <input type='text' name='otherdocument' onChange={handleOnchange} value={inputField.otherdocument} className='w-56 h-7' />
                </div>
                <div style={{ border: '1px solid #025FB5', width: '60rem', marginLeft: '8rem', marginBottom: '2rem', marginTop: '0.7rem' }}></div>
                <div className='flex items-center justify-center font-sans mb-4'>
                    <button style={{
                        border: '1px solid #4FA9FB', backgroundColor: '#4FA9FB',
                        width: '10rem', height: '3rem', borderRadius: '2rem', color: 'white'
                    }} onClick={handleOnSubmit}>Register</button>
                </div>
            </div>
            </div> */}
           
    <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-1C6FB sm:text-4xl font-sans mb-2">Registration Form</h2>
        </div>
        <div className=" border border-1C6FB p-8">
          <form action="#" method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20">
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
                  value={inputField.fathername}
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
                  value={inputField.dateofbirth} 
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
                  value={inputField.bloodgroup}
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
                  value={inputField.mobileno} 
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
                  value={inputField.alternatno}
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
                  value={inputField.profilepicture}
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
                  value={inputField.adharcard} 
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
                  value={inputField.otherdocument}
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

export default RagistrationForm
