import React from 'react'
import './Footer.css'
import Ellipse from'../../FooterLogo/Ellipse.png'
import Navbarlogo from '../../Navbarlogo/instagram.png'
import Navbarlog01 from '../../Navbarlogo/facebook.png'
import Navbarlogo2 from '../../Navbarlogo/twitter.png'
import Vector from '../../FooterLogo/Vector.png'
import world from '../../FooterLogo/world.png'
import phone from '../../FooterLogo/phone.png'
import email from '../../FooterLogo/email.png'



const Footers = () => {
  return (
    <>
      <div className='main-footer'>
        <div className='logo'>
          <img src={Ellipse} ></img>
        </div>


        <div className='item'>
          <span>Terms & Condition</span>
        </div>
        <div className='info'>
          <ul>
            <li><img src={Navbarlogo} ></img></li>
            <li><img src={Navbarlog01} ></img></li>
            <li><img src={Navbarlogo2} ></img></li>
          </ul>
          <p >Privacy Policy </p>
          <p> All rights reserved</p>

        </div>
        <div className='dif'>
          <span>Disclaimer &emsp; Refund Policy</span>
        </div>
        <div className='ser'>
        <p><img src={Vector} />  &ensp;   Office Address</p><br/>
        <p><img src={world} /> &ensp;www.ngo.com</p><br/>
        <p><img src={email} /> &ensp;ngo@abcf</p><br/>
        <p><img src={phone} /> &ensp;9876543210</p><br/>
      </div>
      </div>
     


    </>
  )
}

export default Footers