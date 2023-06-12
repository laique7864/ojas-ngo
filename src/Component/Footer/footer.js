import React from 'react'
import img from '../images/instagram.png'
import img2 from '../images/facebook.png'
import img3 from '../images/twituer.png'
import img4 from '../images/location.png'
import img5 from '../images/server.png'
import img6 from "../images/sms.png"
import img7 from '../images/phone.png'
import img8 from '../../assets/Navbarlogo/OJAS.png'

function Footer() {
  return (
    <>
      <div className='bg-blue-500 flex sm:justify-around justify-between  flex-col sm:flex-row items-center rounded-t-3xl gap-1'>
        {/* <div className='w-24 h-24 rounded-tr-3xl rounded-tl-3xl'></div> */}
        <div className='my-0.5'>
          <img  className='h-24 min-h-full' src={img8}/>
        </div>
        <div className='text-white'>Terms & Conditions</div>
        <div className='flex justify-center place-items-center  flex-col gap-3'>
          <div className='flex justify-between gap-2'>
            <img src={img} alt='' className='cursor-pointer' />
            <img src={img2} alt='' className='cursor-pointer' />
            <img src={img3} alt='' className='cursor-pointer' />
          </div>
          <div>
            <p className='mb-1 text-white cursor-pointer text-1.6 '>Privacy Policy</p>
            <p className='text-white cursor-pointer text-1.6 '>Copyright Reserved for OJAS.B.U.S.B.S PBN</p>
            <p className='mr-6 text-white text-1.6 '>Disclaimer</p>
          </div>
        </div>
        <div className='flex'>
        
          {/* <p className='text-white text-1.6 '>Refund Policy</p> */}
        </div>
        <div className='flex justify-center place-items-center  flex-col gap-1'>
          <div className='flex mb-2'>
            <img src={img4} alt='' className='mr-3' />
            <p className='text-white text-1.6 '>H.S 1146, Rameshwar Plot, Parbhani-431401(MH)</p>
          </div>
          <div className='flex mb-2'>
            <img src={img5} alt='' className='mr-3' />
            <p className='text-white text-1.6 '>www.ojaspbn.in</p>
          </div>
          <div className='flex mb-2'>
            <img src={img6} alt='' className='mr-3' />
            <p className='text-white text-1.6 '>ojassansthapbn@gmail.com</p>
          </div>
          <div className='flex mb-2'>
            <img src={img7} alt='' className='mr-3' />
            <p className='text-white text-1.6 '> +91-9420114282</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
