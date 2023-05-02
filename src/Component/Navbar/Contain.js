import React from 'react'
import './Contain.css'
import img from '../../Navbarlogo/Ellipse 4.png'
const Contain = () => {

    return (
        <>
            <div className='Img'>
                <div className='Img-Text flex justify-center h-full items-center'>
                    <p className='text-4xl w-72 h-40 font-sans '>
                        Your small help
                        can light up
                        someone’s life

                    </p>

                </div>
            </div>
            <div>
                <h3 className='Main-Contain-text'>Upcoming Events</h3>
            </div>
            <div className='Main-Container-Box'>
                <div className='box1'></div>

                <div className='box2'></div>
                <div className='box3'></div>
                <div className='text'>

                </div>

            </div>
            <div className='text'>
                <p>Blood Donation Camp</p>
                <p>Books Distribution</p>
                <p>Career Guidance</p>
            </div>

            <div >
                <div className='Latest-Text'>
                    <h3>Latest Activity</h3>
                </div>
                <div className='Latest-Activety'>
                </div>
            </div>

            <div className='Main-Abouts'>
                <h3>About Us</h3>
            </div>
            <div className='Abouts-Main-contain'>
                <div>
                    <img src={img} className='Abouts-Img' />
                </div>
                <div style={{ marginTop: '4rem' }}>

                    <p> MainU.S. However, should an NGO wish to obtain legal benefits such as exemption from state </p>
                    <p>and federal taxes, it should incorporate and register as an NGO under the relevant laws of the state in which it's located.</p>
                    <p>  An NGO doesn't have to incorporate. For instance, to form a charitable NGO, all that's required </p>
                    <p> (as is for any charitable trust) is a legal contract and deed that conveys property.</p>
                    <p>While no federal government involvement comes into play, states in the U.S. </p>
                    <p> may require NGOs with religious, educational, or charitable missions that may ask for donations to register with a state charity.</p>
                </div>
            </div>
            <div>
                <h4>Our Objective</h4>
                <div className='flex justify-center'>
                    <div class="w-60 h-60 border mr-3.5 border-1C6FB rounded-full"></div>
                    <div class="w-60 h-60 border mr-3.5 border-1C6FB rounded-full"></div>
                    <div class="w-60 h-60 border mr-3.5 border-1C6FB rounded-full"></div>
                    <div class="w-60 h-60 border mr-3.5 border-1C6FB rounded-full"></div>
                    <div class="w-60 h-60 border  border-1C6FB rounded-full"></div>
                </div>
            </div>
            <div className='flex justify-center mb-11'>
                <div class="w-2/5 h-80  bg-FFFFFF border border-1C6FB mr-3.5">
                    <div class="border-b-2 border-gray-400 w-4/5 mb-8 mt-11 ml-6"></div>
                    <div class="border-b-2 border-gray-400 w-4/5 mb-8 ml-6"></div>
                    <div class="border-b-2 border-gray-400 w-4/5 mb-8 ml-6"></div>
                    <div class="border-b-2 border-gray-400 w-4/5 ml-6"></div>
                    <div style={{display:'flex',alignItems:'center'}}>
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

                    <div style={{display:'flex',alignItems:'center'}}>
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