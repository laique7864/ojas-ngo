import React from 'react'
import './Navbar.css'
import img from '../images/instagram.png'
import img2 from '../images/facebook.png'
import img3 from '../images/twituer.png'
// import Contain from '../../Component/Navbar/Contain'

const Navbar = () => {
  return (
    <>
      <div className='bg-278CEA flex items-center h-9 justify-around' >
        <div className='flex items-center '>
          <h1 className='ml-20 text-white'>LOGIN</h1>
        </div>
        <div className='flex items-center '>
          <a href='!' className='text-xs text-white'>Follow Us</a>
          <img src={img} alt='' className='ml-10' />
          <img src={img2} alt='' className='ml-5' />
          <img src={img3} alt='' className='ml-5' />
        </div>
        <div className='flex justify-end items-center'>
          <p className='text-white'>Contact:22548963</p>
          <p className='ml-5 text-white'>helpdesk@xyz.com</p>
        </div>
      </div>

      <div>
        <ul className='flex justify-around items-center'>
          <li>HOME</li>
          <li>Verified Members</li>
          <li>Events</li>
          <li>Donors list</li>
          <li>Management Team </li>
          <li>Ragistration Form</li>
          <li>Upcoming Events</li>
          <li>Donation page</li>
          <li>Company Profile</li>
          <li>Contact us</li>
          <li>Login</li>
          
        </ul>
      </div>
      {/* <Contain/> */}
    </>
  )
}

export default Navbar