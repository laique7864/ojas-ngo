import React, { useState } from 'react'
import './Navbar.css'
import img from '../images/instagram.png'
import img2 from '../images/facebook.png'
import img3 from '../images/twituer.png'
import tirenga from '../images/terenga.png'
import { Link } from 'react-router-dom'
// import Contain from '../../Component/Navbar/Contain'

const Navbar = () => {
  const navigation = [
    { name: 'Home', href: '#' },
    { name: 'Verified Members', href: '#' },
    { name: 'Events', href: '#' },
    { name: 'Donors list', href: 'DonorList' },
    { name: 'Management Team', href: '#' },
    { name: 'Contact us', href: 'Contact' },
    { name: 'Login', href: '#' },
  ];
  const [current, setCurrent] = useState(0);

  const handleHover = (index) => {
    setCurrent(index);
  };

  // const handleLeave = () => {
  //   setIsHovered(false);
  // };
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
  }
  return (
    <>
    <div>
      <div className='bg-blue-500 flex items-center justify-around h-14'>
        <div className='flex items-center'>
          <img src={tirenga} className='absolute top-0 left-14'/>
          {/* <h1 >LOG0</h1> */}
        </div>
        <div className='flex items-center w-2/6'>
          <a href='!' className='mr-14 text-white'>Follow Us</a>
          <div className='contents '>
          <img src={img} alt='' className=' mr-6' />
          <img src={img2} alt='' className='mr-6'/>
          <img src={img3} alt=''className='mr-6' />
          </div>
        </div>
        <div className='w-60'> 
        <span className='mr-7 text-white'>Contact:22548963</span>
        <span className='text-white'>helpdesk@xyz.com</span>
        </div>
      </div>
      <div  className='h-24 flex items-center justify-end'>
            {/* Navigation Links */}
            <div className="hidden sm:block sm:mr-11">
              <div className="flex space-x-4">
                {navigation.map((item ,index) => (
                  <Link
                  to={`/${item.href}`}
                  style={{
                    background: index === current && "linear-gradient(180deg, rgba(246, 118, 0, 0.6) 0%, rgba(255, 255, 255, 0.5) 52.08%, rgba(66, 248, 2, 0.4) 100%)", }}
                    key={item.name}
                    className={classNames(
                      item.current ? 'text-white' : 'text-025FB5  ',
                      'px-3 py-2 rounded-md text-xl'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                    onClick={()=>handleHover(index)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
      
      </div>
      {/* <Contain/> */}
    </>
  )
}

export default Navbar