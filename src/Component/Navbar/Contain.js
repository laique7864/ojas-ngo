import React from 'react'
// import './Contain.css'
import img from '../../Navbarlogo/Ellipse 4.png'
import img2 from '../../Navbarlogo/5x5h-removebg-preview.png'
import freeMedicl from '../../Navbarlogo/free medical chek up.png'
import urineTest from '../../Navbarlogo/blod and urine test.jpg'
import foodDistribution from '../../Navbarlogo/food distribution ngo.jpg'
import creerguidance from '../../Navbarlogo/career guidance.jpeg'
import road from '../../Navbarlogo/road ngo.jpg'
import Sir from '../../Navbarlogo/JK-SAWAND.png'
import Sejal from '../../Navbarlogo/JK-SEJAL.png'



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
                    <img src={img} className='Abouts-Img' />
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
                    <div class="w-60 h-60 border mr-3.5 border-1C6FB rounded-full">
                        <img className='w-60 h-60  mr-3.5 rounded-full' src={freeMedicl}/>
                    </div>
                    <div class="w-60 h-60 border mr-3.5 border-1C6FB rounded-full">
                    <img className='w-60 h-60  mr-3.5 rounded-full' src={urineTest}/>
                    </div>
                    <div class="w-60 h-60 border mr-3.5 border-1C6FB rounded-full">
                    <img className='w-60 h-60  mr-3.5 rounded-full' src={foodDistribution}/>
                    </div>
                    <div class="w-60 h-60 border mr-3.5 border-1C6FB rounded-full">
                    <img className='w-60 h-60  mr-3.5 rounded-full' src={creerguidance}/>
                    </div>
                    <div class="w-60 h-60 border  border-1C6FB rounded-full">
                    <img className='w-60 h-60  mr-3.5 rounded-full' src={road}/>
                    </div>
                </div>
                <div className='flex items-center justify-evenly mb-8'>
                    <p className='text-025FB5 font-sans'>Free Meical Chek Up</p>
                    <p className='text-025FB5 font-sans'>Free Blood And Urine Test</p>
                    <p className='text-025FB5 font-sans'>Food Distribution</p>
                    <p className='text-025FB5 font-sans'>Career Guidance To Youth</p>
                    <p className='text-025FB5 font-sans'>Road Rules Awareness For Student</p>
                </div>
            </div>
            <div className='flex items-center justify-center font-sans text-025FB5 text-2xl mb-10'>Testimonial</div>
            <div className='flex justify-center mb-11'>
                <div class="w-2/5 h-80 bg-FFFFFF border border-1C6FB mr-3.5">
                 {/* <div class="border-b-2 border-gray-400 w-4/5 mb-8 mt-11 ml-6"></div>
                    <div class="border-b-2 border-gray-400 w-4/5 mb-8 ml-6"></div>
                    <div class="border-b-2 border-gray-400 w-4/5 mb-8 ml-6"></div>

                    <div class="border-b-2 border-gray-400 w-4/5 ml-6"></div> */}
                    <p className='mt-4 italic text-sky-400 ml-4 '>Testimonial : I am honored to share my heartfelt testimonial about my life-changing experience with OJAS. From the very beginning, this remarkable organization has
                         been dedicated to transforming lives and communities through its unwavering commitment to social justice and sustainable development. Today, I stand as a proud testament to their 
                         incredible work, and I cannot thank them enough for the profound impact they have had on my life.</p>
                         

                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <div style={{ width: '100px', height: '100px', borderRadius: '50px', backgroundColor: 'blue', marginTop: '3rem', marginLeft: '2rem' }}>
                          <img className='w-40 h-28  rounded-full'src={Sir}/>
                        </div>
                        <p className='mt-24 ml-5 text-blue-500'>Prof. Sambhaji Sawandkar</p>
                    </div> 
                    
                </div>
                 <div class="w-2/5 h-80 bg-FFFFFF border border-1C6FB  mr-3.5">
                    {/* <div class="border-b-2 border-gray-400 w-4/5 mb-8 mt-11 ml-11"></div>
                    <div class="border-b-2 border-gray-400 w-4/5 mb-8 ml-11"></div>
                    <div class="border-b-2 border-gray-400 w-4/5 mb-8 ml-11"></div>
                    <div class="border-b-2 border-gray-400 w-4/5 ml-11"></div> */}
                            <p className='mt-4 italic text-sky-400 ml-4'>Testimonial : [ Empowerment and Education ] Education is the cornerstone of progress, and OJAS understands this fundamental truth. They provided me with opportunities for personal 
                            and professional growth through educational programs tailored to my needs. Whether it was vocational training, scholarships, or mentorship programs,
                            [NGO Name] equipped me with the tools to enhance my skills, broaden my horizons, and unlock new possibilities. They believed in my potential and empowered me to dream bigger, helping me shape a brighter future for myself and my family.</p>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <div style={{ width: '100px', height: '100px', borderRadius: '50px', backgroundColor: 'blue', marginTop: '3rem', marginLeft: '2rem' }}>
                        <img className='w-40 h-28  rounded-full'src={Sejal}/>
                        </div>
                        <p className='mt-24 ml-5 text-blue-500'>Miss Sejal G. Matra</p>
                    </div>
                </div> 
            </div>
        </>
    )
}

export default Contain