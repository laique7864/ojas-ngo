import React from 'react'
import img from '../images/instagram.png'
import img2 from '../images/facebook.png'
import img3 from '../images/twituer.png'
import img4 from '../images/location.png'
import img5 from '../images/server.png'
import img6 from "../images/sms.png"
import img7 from '../images/phone.png'
import img8 from '../../Navbarlogo/5x5h-removebg-preview.png'

function Footer() {
  return (
    <>
      <div className='bg-blue-500 flex sm:justify-around justify-between mb-4 flex-col sm:flex-row items-center rounded-t-3xl'>
        {/* <div className='w-24 h-24 rounded-tr-3xl rounded-tl-3xl'></div> */}
        <div style={{ width: '100px', height: '100px', borderRadius: '50px', backgroundColor: 'white' }}>
          <img  className='h-24 min-h-full' src={img8}/>
        </div>
        <div className='text-white'>Terms & Conditions</div>
        <div>
          <div className='flex justify-between mb-2'>
            <img src={img} alt='' className='cursor-pointer' />
            <img src={img2} alt='' className='cursor-pointer' />
            <img src={img3} alt='' className='cursor-pointer' />
          </div>
          <div>
            <p className='mb-1 text-white cursor-pointer text-1.6 '>Privacy Policy</p>
            <p className='text-white cursor-pointer text-1.6 '>All rights reserved</p>
          </div>
        </div>
        <div className='flex'>
          <p className='mr-6 text-white text-1.6 '>Disclaimer</p>
          <p className='text-white text-1.6 '>Refund Policy</p>
        </div>
        <div>
          <div className='flex mb-2'>
            <img src={img4} alt='' className='mr-3' />
            <p className='text-white text-1.6 '>Office Address</p>
          </div>
          <div className='flex mb-2'>
            <img src={img5} alt='' className='mr-3' />
            <p className='text-white text-1.6 '>www.ngo.com</p>
          </div>
          <div className='flex mb-2'>
            <img src={img6} alt='' className='mr-3' />
            <p className='text-white text-1.6 '>ngo@abcfoundation.org</p>
          </div>
          <div className='flex mb-2'>
            <img src={img7} alt='' className='mr-3' />
            {/* <p className='text-white text-1.6 '>9876543210</p> */}
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
