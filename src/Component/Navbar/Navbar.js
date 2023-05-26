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
    { name: 'Verified Members', href: '#' },
    { name: 'Events', href: 'Events' },
    { name: 'Donors list', href: 'DonorList' },
    // { name: 'President Desk', href: '#' },
    { name: 'Manajment ', href: 'Manajment' },
    { name: 'Contact us', href: 'Contact' },
    { name: 'Login', href: 'Login' },
   
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
        
        <div className='bg-blue-500 flex items-center justify-around sm:h-14 h-20	'>
          
          <div className='flex items-center '>
         
            <img src={tirenga} alt='' className='absolute top-0 left-14 sm:max-w-full sm:w-40	 w-16'  />
            
          
            {/* <h1 >LOG0</h1> */}
          </div>
          {/* <div></div> */}
    
          <div className='hidden sm:flex items-center w-2/6'>
            <a href='!' className='mr-14 text-white'>Follow Us</a>
            <div className='contents '>
              <img src={img} alt='' className=' mr-6 cursor-pointer' />
              <img src={img2} alt='' className='mr-6 cursor-pointer' />
              <img src={img3} alt='' className='mr-6 cursor-pointer' />
            </div>
          </div>
          <div className='w-24  flex flex-col' >
            <span className='mr-7 text-white'>Contact:22548963</span>
            <span className='text-white'>helpdesk@xyz.com</span>
          </div>
          <div className='sm:hidden block'>

          <label className="burger left-4 "  for="burger"  >
                  <input type="checkbox" id="burger" checked={currentState} onChange={openNav}/>
                <span className='bg-orange-500' ></span>
              <span className='bg-white'></span>
                   <span className='bg-green-600'></span>
             </label>
          </div>
        
        </div>
        <div className='h-24 hidden sm:flex   items-center justify-end shadow-md'>
          {/* Navigation Links */}
          <div className="hidden sm:block ">
            <div className="flex space-x-4">
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
        <div id="mySidenav" className="sidenav  sm:hidden" style={{ top: "10vh"}}>
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

      </div>
      {/* <Contain/> */}
    </>
  )
}

export default Navbar