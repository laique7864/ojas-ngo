import React from 'react'
import img from '../images/Events-img1.png'
import img2 from '../images/Events-img2.png'

function Events() {
  return (
    <>
      <h1 className='text-025FB5 font-sans flex items-center justify-center mt-5 text-lg'>Upcoming Events</h1>
      <di className='flex items-center justify-center flex-col'>
        <div className='flex items-start border w-4/6 border-0966BB mt-5 h-60'>
          <img src={img} alt='' className='w-60 ml-5 mt-7' />
          <div className='ml-16 mt-7'>
            <h3 className='mb-2 font-bold'>Books Distribution for School Students</h3>
            <p className='mb-2'>Location: KVES School, Parbhani</p>
            <p>Date: 20th March, 2023</p>
          </div>
        </div>
        <div className='flex items-start border w-4/6 border-0966BB mt-5 mb-5 h-60'>
          <img src={img2} alt='' className='w-60 ml-5 mt-7' />
          <div className='ml-16 mt-7'>
            <h3 className='mb-2 font-bold'>Career Guidance for Students</h3>
            <p className='mb-2'>Location: KVES School, Parbhani</p>
            <p>Date: 30th March, 2023</p>
          </div>
        </div>
      </di>
    </>
  )
}

export default Events
