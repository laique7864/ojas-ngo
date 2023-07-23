import React, { useEffect, useState } from 'react'
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
    { name: 'VerifiedMember', href: 'VerifiedMember' },
    { name: 'Events', href: 'Events' },
    { name: 'RegistrationForm', href: 'RegistrationForm' },
    { name: 'Donorslist', href: 'DonorList' },
    // { name: 'President Desk', href: '#' },
    { name: 'LMC-BODY ', href: 'Manajment' },
  
    { name: 'GovtRecogntions', href: 'GovtRecogntions' },
    { name: 'ContactUs', href: 'Contact' },
  ];
  const [current, setCurrent] = useState(0);
  const [currentState, setCurrentState] = useState(false);

  const handleHover = (index) => {
    setCurrent(index);
    setCurrentState(false);
    // closeNav()
  };
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

useEffect(()=>{
  if(currentState){
    document.getElementById("mySidenav").style.width = "300px";
  }else{
    document.getElementById("mySidenav").style.width = "0";
  }
},[currentState])
  function openNav(e) {
    setCurrentState(e.target.checked)


}

  // const handleLeave = () => {
  //   setIsHovered(false);
  // };
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
  }
  return (
    <>
      <div>
        
        <div className='bg-blue-500 flex items-center justify-end sm:h-14 h-20	'>
          
          <div className='flex items-center '>
          
            <img src={tirenga} alt='' className='absolute top-0 left-6 sm:max-w-full sm:w-40	 w-16 z-10'  />
            
          
            {/* <h1 >LOG0</h1> */}
          </div>
          {/* <div></div> */}
          
    
          <div className='hidden sm:flex items-center w-2/6'>
            {/* <div href='!' className=' text-white'></div> */}
            <div className='contents '>
            <a href=' https://www.instagram.com/busbsanstha/' target='blank'> <img src={img} alt='' className=' mr-6 cursor-pointer' /></a>
            <a href='https://www.facebook.com/profile.php?id=100064853946110&mibextid=ZbWKwL' target='blank'> <img src={img2} alt='' className='mr-6 cursor-pointer' /></a> 
              <img src={img3} alt='' className='mr-6 cursor-pointer' />
            
            </div>
          </div>

<div className='m-2' >
             <p className=' text-white'>Contact:9420114282</p>
  <p className='text-white'>Email:ojassansthapbn@gmail.com</p>
</div>
          <div className='sm:hidden block'>

          <label className="burger right-1 "  for="burger"  >
                  <input type="checkbox" id="burger" checked={currentState} onChange={openNav}/>
                <span className='bg-orange-500' ></span>
              <span className='bg-white'></span>
                   <span className='bg-orange-500'></span>
             </label>
          </div>
        
        </div>
        <div className='h-24 hidden sm:flex   items-center justify-end shadow-md'>
          {/* Navigation Links */}
          <div className="hidden sm:block ">
              {navigation.map((item, index) => (
                <Link
                  to={`/${item.href}`}
                  style={{
                   background: index === current && "linear-gradient(180deg, rgba(246, 118, 0, 0.6) 0%, rgba(255, 255, 255, 0.5) 52.08%, rgba(66, 248, 2, 0.4) 100%)",
                  }}
                  key={item.name}
                  className={classNames(
                    item.current ? 'text-white' : 'text-025FB5  ',
                    'px-3 py-2 rounded-md text-xl'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                  onClick={() => handleHover(index)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div id="mySidenav" className="sidenav  sm:hidden">
  {/* <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>&times;</a> */}
  {navigation.map((item, index) => (
                <Link
                  to={`/${item.href}`}
                  style={{
                   background: index === current && "linear-gradient(180deg, rgba(246, 118, 0, 0.6) 0%, rgba(255, 255, 255, 0.5) 52.08%, rgba(66, 248, 2, 0.4) 100%)",
                  }}
                  key={item.name}
                  className={classNames(
                    item.current ? 'text-white' : 'text-025FB5  ',
                    'px-3 py-2 rounded-md text-xl w-max ml-5'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                  onClick={() => handleHover(index)}
                >
                  {item.name}
                </Link>
              ))}




</div>

{/* <!-- Use any element to open the sidenav --> */}
{/* <span onClick={openNav}><img src="https://cdn4.iconfinder.com/data/icons/wirecons-free-vector-icons/32/menu-alt-512.png" width="40px" style={{paddingTop: "40px", paddingLeft: '40px'}} /></span> */}

      {/* <Contain/> */}
    </>
  )
}

export default Navbar