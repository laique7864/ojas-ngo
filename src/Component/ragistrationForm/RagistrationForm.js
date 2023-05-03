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
        adress: '',
        pincode: '',
        email: '',
        profilepicture: '',
        adharcard: '',
        voterid: '',
        otherdocument: ''
    })
    const handleOnSubmit = ()=>{
        console.log(inputField);
    }

    const handleOnchange = (event) => {
        setInputField((e) => {
            e[event.target.name] = event.target.value
            return 
        })
    }

    return (
        <>
            <h2 className='flex items-center justify-center font-sans mb-7 mt-5 text-2xl text-025FB5'>Registration Form</h2>
            <div style={{ boxSizing: 'border-box', border: '1px solid #025FB5', width: '75rem', marginLeft: '6rem', marginBottom: '3rem' }}>
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
                    <input type='number' name='mobileno' onChange={handleOnchange} value={inputField.mobileno} placeholder='Number' className='w-56 h-7' />

                    <label className='text-025FB5 w-64'>Alternate No :</label>
                    <input type='text' name='alternateno' onChange={handleOnchange} value={inputField.alternatno} className='w-56 h-7' />
                </div>
                <div style={{ border: '1px solid #025FB5', width: '60rem', marginLeft: '8rem', marginBottom: '2rem', marginTop: '0.7rem' }}></div>

                <div className='flex ml-12'>
                    <label className='text-025FB5 w-64'>Address<span className='text-red-600'>*</span> :</label>
                    <textarea style={{
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
                    }} onSubmit={handleOnSubmit}>Register</button>
                </div>
            </div>
        </>
    )
}

export default RagistrationForm
