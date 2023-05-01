import React from 'react'
import './Navbar.css'
import img from '../images/instagram.png'
import img2 from '../images/facebook.png'
import img3 from '../images/twituer.png'
// import Contain from '../../Component/Navbar/Contain'

const Navbar = () => {
  return (
    <>
      <div className='bg-blue-500 flex items-center'>
        <div className='flex items-center '>
          <h1 className='ml-20'>LOGIN</h1>
        </div>
        <div className='flex items-center ml-30'>
          <a href='!'>Follow Us</a>
          <img src={img} alt='' />
          <img src={img2} alt='' />
          <img src={img3} alt='' />
        </div>
      </div>
      {/* <Contain/> */}
    </>
  )
}

export default Navbar