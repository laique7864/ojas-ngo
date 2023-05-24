import React from 'react'
// import img from '../../Navbarlogo/Rectangle 81.png'

const  Icard=()=> {
  return (
    <div className='snap-x'>
        <div className='h-96 w-96 border-2 border-indigo-500/100 ml-96 '>
            
          {/* <img src={img} className='ml-56'/> */}
          <div className='h-28 w-28 rounded-full bg-sky-500/100 ml-36'></div>
          <p className='flex justify-center'>Moin Shaikh</p>
          <p className='flex justify-center'>Director</p>
          <div>
          <label >Code:</label>
          <input type="text" className='w-80' />
          <label >Email:</label>
          <input type="text" className='w-80' />
          <label >Phone:</label>
          <input type="number" className='w-80' />
          
          </div>
          
        </div>
    </div>
  )
}

export default Icard