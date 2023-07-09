import React from 'react'
import img from '../images/Events-img1.png'
import img2 from '../images/Events-img2.png'
import { getEventAll } from '../../services/admin.service'

function Events() {
  const [dataRow,setDataRow] = React.useState([])
  const fetchData = async() =>{
    const data = await getEventAll()
    console.log(data.data);
    setDataRow(data.data.Events);
   }
   React.useEffect(() => {
    fetchData()
},[])
  return (
    <>
      {/* <h1 className='text-025FB5 font-sans flex items-center justify-center mt-5 text-lg'>Upcoming Events</h1>
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
      </di> */}
      <div class="flex justify-center place-items-center p-3  sm:p-8 flex-col gap-6" >
    {dataRow.map((item)=>{
      return (
        <div class="grid grid-cols-1 sm:grid-cols-2  gap-6  border border-0966BB w-3/4">
        <div class="flex justify-center  rounded-xl p-6 "> 
         <img src={item.img} alt='' className='w-60 ml-5 mt-7' /></div>
        <div class="flex justify-center text-black flex-col  rounded-xl p-6 ">
            <h3 className='mb-2 font-bold'>{item.name}</h3>
                <p className='mb-2'>Location: {item.location}</p>
                <p>Date: {item.date}</p></div>
    
      </div>
      )
    })

    }  
 
  {/* <div class="grid grid-cols-1 sm:grid-cols-2  gap-6  border border-0966BB w-3/4">
    <div class="flex justify-center  rounded-xl p-6 ">  <img src={img} alt='' className='w-60 ml-5 mt-7' /></div>
    <div class="flex justify-center text-black flex-col  rounded-xl p-6 ">
        <h3 className='mb-2 font-bold'>Event 1: Free Blood & Urine Testing Camp</h3>
            <p className='mb-2'> Location : Sawandkar Maths Classes Parbhani</p>
            <p>Date : 06-05-202</p></div>

  </div>


  max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl

  <div class="grid grid-cols-1 sm:grid-cols-2  gap-6  border border-0966BB w-3/4">
    <div class="flex justify-center  rounded-xl p-6 ">  <img src={img2} alt='' className='w-60 ml-5 mt-7' /></div>
    <div class="flex justify-center text-black flex-col  rounded-xl p-6 ">
        <h3 className='mb-2 font-bold'>Event 2: Free Cupping Therapy Camp For Labors</h3>
            <p className='mb-2'>Location :Shalimar Multipurpose Banquet Hall, Parbhani</p>
            <p> Date : 07-04-2023 </p></div>

  </div> */}
</div>
    </>
  )
}

export default Events
