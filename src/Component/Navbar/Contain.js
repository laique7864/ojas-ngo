import React from 'react'
// import './Contain.css'
import img from '../../Navbarlogo/Ellipse 4.png'
const Contain = () => {

    return (
        <>
            <div className="flex justify-center items-center h-600 w-1440">
  <img src={require('../../Navbarlogo/Rectangle.png')} className="h-full w-full object-cover" alt="image description" />
  <p className="absolute text-center text-white z-10 font-sans w-80 text-4xl">Your small help can light up someone’s life</p>
</div>
            <div>
                <h3 className='Main-Contain-text'>Upcoming Events</h3>
            </div>
            <div class="flex justify-center space-x-3">
            <div class="w-30per h-80 bg-FFFFFF border border-1C6FB"></div>
            <div class="w-30per h-80 bg-FFFFFF border border-1C6FB"></div>
            <div class="w-30per h-80 bg-FFFFFF border border-1C6FB"></div>
           
                {/* <div class="w-96 h-1/5 border-2 border-blue-500"></div>
                <div class="w-96 h-1/5 border-2 border-blue-500"></div>
                <div class="w-96 h-1/5 border-2 border-blue-500"></div> */}
                {/* <div className='text'>

                </div> */}

            </div>
            <div class="flex justify-center space-x-3">
                <h4 className='w-30per text-center'>Blood Donation Camp</h4>
                <h4 className='w-30per text-center'>Blood Donation Camp</h4>
                <h4 className='w-30per text-center'>Blood Donation Camp</h4>
                {/* <h4 className='w-30per'>Blood Donation Camp</h4> */}
            </div>
            {/* <div className='text'>
                <p>Blood Donation Camp</p>
                <p>Books Distribution</p>
                <p>Career Guidance</p>
            </div> */}

            <div >
                <div className='Latest-Text text-center'>
                    <h3>Latest Activity</h3>
                </div>
                <div class="flex flex-col items-center justify-center w-1233 h-1211 mx-auto border-2 rounded-lg border-0966BB">
</div>
            </div>

            <div className='Main-Abouts'>   
                <h3>About Us</h3>
            </div>
            <div className='Abouts-Main-contain'>
                <div className='flex items-center'> 
                    <img src={img} className='Abouts-Img h-56 w-56 ml-12'   />
                    <p> MainU.S. However, should an NGO wish to obtain legal benefits such as exemption from state 
                    and federal taxes, it should incorporate and register as an NGO under the relevant laws of the state in which it's located.
          An NGO doesn't have to incorporate. For instance, to form a charitable NGO, all that's required  (as is for any charitable trust) is a legal contract and deed that conveys property.While no federal government involvement comes into play, states in the U.S.  may require NGOs with religious, educational, or charitable missions that may ask for donations to register with a state charity.</p>
                </div>
                {/* <div>

                
                </div> */}
            </div>
            <div>
                <h4 className='flex items-center justify-center text-025FB5 mb-9 text-2xl font-sans'>Our Objective</h4>
                <div className='flex justify-center mb-4'>
                    <div class="w-60 h-60 border mr-3.5 border-1C6FB rounded-full"></div>
                    <div class="w-60 h-60 border mr-3.5 border-1C6FB rounded-full"></div>
                    <div class="w-60 h-60 border mr-3.5 border-1C6FB rounded-full"></div>
                    <div class="w-60 h-60 border mr-3.5 border-1C6FB rounded-full"></div>
                    <div class="w-60 h-60 border  border-1C6FB rounded-full"></div>
                </div>
                <div className='flex items-center justify-evenly mb-8'>
                    <p className='text-025FB5 font-sans'>Providing Food</p>
                    <p className='text-025FB5 font-sans'>Provide Clothes</p>
                    <p className='text-025FB5 font-sans'>Financial Support</p>
                    <p className='text-025FB5 font-sans'>Medical Support</p>
                    <p className='text-025FB5 font-sans'>Help Needy</p>
                </div>
            </div>
            <div className='flex items-center justify-center font-sans text-025FB5 text-2xl mb-10'>Testimonial</div>
            <div className='flex justify-center mb-11'>
                <div class="w-2/5 h-80  bg-FFFFFF border border-1C6FB mr-3.5">
                    <div class="border-b-2 border-gray-400 w-4/5 mb-8 mt-11 ml-6"></div>
                    <div class="border-b-2 border-gray-400 w-4/5 mb-8 ml-6"></div>
                    <div class="border-b-2 border-gray-400 w-4/5 mb-8 ml-6"></div>
                    <div class="border-b-2 border-gray-400 w-4/5 ml-6"></div>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <div style={{ width: '100px', height: '100px', borderRadius: '50px', backgroundColor: 'blue', marginTop: '3rem', marginLeft: '2rem' }}>
                        </div>
                        <p className='mt-24 ml-5 text-blue-500'>Moin Shaikh,Member</p>
                    </div>

                </div>
                <div class="w-2/5 h-80 bg-FFFFFF border border-1C6FB">
                    <div class="border-b-2 border-gray-400 w-4/5 mb-8 mt-11 ml-11"></div>
                    <div class="border-b-2 border-gray-400 w-4/5 mb-8 ml-11"></div>
                    <div class="border-b-2 border-gray-400 w-4/5 mb-8 ml-11"></div>
                    <div class="border-b-2 border-gray-400 w-4/5 ml-11"></div>

                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <div style={{ width: '100px', height: '100px', borderRadius: '50px', backgroundColor: 'blue', marginTop: '3rem', marginLeft: '2rem' }}>
                        </div>
                        <p className='mt-24 ml-5 text-blue-500'>Afreen Nagdade, Member</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contain