import React, { useEffect, useState } from 'react'
import './Contain.css'
import img from '../../assets/Navbarlogo/Ellipse 4.png'
import img2 from '../../assets/Navbarlogo/5x5h-removebg-preview.png'
import freeMedicl from '../../assets/Navbarlogo/free medical chek up.png'
import urineTest from '../../assets/Navbarlogo/blod and urine test.jpg'
import foodDistribution from '../../assets/Navbarlogo/food distribution ngo.jpg'
import creerguidance from '../../assets/Navbarlogo/career guidance.jpeg'
import ima1 from '../../assets/Navbarlogo/fisrtslide.png'
import ima2 from '../../assets/Navbarlogo/secondSlide.png'
import ima3 from '../../assets/Navbarlogo/thirdSlide.png'
import ima4 from '../../assets/Navbarlogo/FourthSlide.png'
import ima5 from '../../assets/Navbarlogo/fifthSlide.png'
import road from '../../assets/Navbarlogo/road ngo.jpg'
import Sir from '../../assets/Navbarlogo/LMC.BODY.png'
import Sejal from '../../assets/Navbarlogo/LMC3.png'
import { IconButton, useMediaQuery } from '@mui/material'
import { ChevronLeft, ChevronRight } from '@mui/icons-material'
import { getEventByQuery, getPostsAll } from '../../services/admin.service'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useTheme } from '@emotion/react'

const mainImageSlider =[
  ima1,
  ima2,
  ima3,
  ima4,
  ima5,


]


const Contain = () => {
  const [next, setNext] = useState(false)
  const theme = useTheme()
  // const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isMobile = useMediaQuery("(max-width: 600px)");

  const [completedEvent, setCompletedEvent] = useState([])
  const [dataRow,setDataRow] = useState([])

  const imageStyle = {
    backgroundImage: "url('../../Navbarlogo/JK-SEJAL.png')",
    backgroundRepeat: 'no-repeat',
  };

  const sliderHandler = () => {
    setNext(!next)
  }
  const getComletedEvent = async () => {
    const data = await getEventByQuery("Completed")
    setCompletedEvent(data.data.Events);
  }
  const getUpcominEvent = async () => {
    const data = await getEventByQuery("Upcoming")
    setCompletedEvent(data.data.Events);

  }

  const fetchData = async () => {

    const data = await getPostsAll()

    setDataRow(data.data.Events);
}

  useEffect(() => {
    fetchData()
    getUpcominEvent()
    getComletedEvent()
  }, [])
  return (
    <>
      <div className="flex justify-center items-center h-600 w-1440 custimise-swipe">
      <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y ,Autoplay]}
      // spaceBetween={50}
      slidesPerView={1}
      navigation
      mousewheel={{  
        forceToAxis: true,
       }}
      autoplay={{ delay: 2000}}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
    >
     {mainImageSlider.map((item, index) => (
  <SwiperSlide key={index}  >
    <img src={item} className="h-full w-full object-cover" alt="image description" />
  </SwiperSlide>
))}
          ...
        </Swiper>
      </div>
      <div>
        <h3 className='Main-Contain-text text-center font-bold mt-8  text-blue-600/100'>Upcoming Events</h3>
      </div>
      <div class="  mt-4">

  

      </div>
      <div className='p-2' >
        <div className='Latest-Text text-center'>
          <h3 className='text-blue-600/100   font-bold'>Latest Activity</h3>
        </div>
        <div class="grid flex-col bg-white overflow-scroll gap-12 items-center justify-center w-full h-1211 p-4 mx-auto border-2 rounded-lg border-0966BB ">
          {dataRow.map((item)=>{
            return (
              <>

              
              <div className="max-w-md mx-auto bg-slate-50 rounded-xl   md:max-w-3xl mt-8" style={{boxShadow:"rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px"}}>
              <h1 className='text-blue-600/100  font-bold text-center'>{item.name}</h1>

              <div className="md:flex">
                
                <div className="md:shrink-0 flex items-center justify-center">
                  <img className="h-80" src={item.img} alt="Modern building architecture" />
                </div>
                <div className="p-8">
                  <p className="mt-2 text-slate-500">{item.description}</p>
                </div>
              </div>
            </div>
            </>

            )
          })

          }
    

        </div>
      </div>

      <div className='flex items-center justify-center font-sans text-025FB5 text-2xl mb-10'>Abouts Us</div>
     
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="md:flex">
          <div className="md:shrink-0 flex items-center justify-center">
            <img className="h-48" src={img} alt="Modern building architecture" />
          </div>
          <div className="p-8">
            <p className="mt-2 text-slate-500">OJAS (a Hindi word that means “Energy”) is an NGO, We are a
             not-for-profit Organization registered in June 2020 under 
            The Indian Trust Act 1882. We have been on a philanthropic journey since June 2020 
            and operating at scale since August 2020. We have already completed three years in June 2023.</p>
            <p className=" text-slate-500">Our areas of intervention include: Health & Nutrition, Awreness of Safe Drinking Water, Clean Environment, Sanitation & Hygiene, Women Empowerment, Child & Women Education, Art and Culture; Sports and Emergency Preparedness and Response, & Work in Various Programs on Health & Education.</p>
          </div>
        </div>
      </div>
      <div>

        <h4 className='flex items-center justify-center text-025FB5 mb-9 text-2xl font-sans'>Our Objective</h4>
      <div className=" mb-4 ">
          <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            // spaceBetween={50}
            slidesPerView={isMobile ? 2 : 4}
            navigation
            autoplay={{ delay: 2000 }}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
          >
            {completedEvent.map((item) => {
              return (
                <SwiperSlide             style={{display:"flex",justifyContent: "center"}}
                >
                  <div class="mb-8 ">
                    <img className='rounded-full w-40 h-40' alt='' src={freeMedicl} />
                    <p className='text-025FB5 font-sans text-center mt-4'>Free Meical Chek Up</p>
                  </div>

                </SwiperSlide>
              )
            })

            }
          
          </Swiper>

                </div> 
  


           </div>


        
 
      <div className='flex items-center justify-center font-sans text-025FB5 text-2xl mb-10'>Testimonial</div>
      <div className='flex justify-center flex-col mb-11 sm:flex-row'>
        <div class="sm:w-2/5 w-full bg-FFFFFF border border-1C6FB mr-3.5 flex flex-col justify-between">
          <div className="sliding-element">
            <p>This element will slide in when first rendered.</p>
          </div>
          {/* <div class="border-b-2 border-gray-400 w-4/5 mb-8 mt-11 ml-6"></div>
                    <div class="border-b-2 border-gray-400 w-4/5 mb-8 ml-6"></div>
                    <div class="border-b-2 border-gray-400 w-4/5 mb-8 ml-6"></div>

                    <div class="border-b-2 border-gray-400 w-4/5 ml-6"></div> */}
          <p className=' italic text-sky-400 ml-4 text-2.6 overflow-hidden'>Testimonial : I am honored to share my heartfelt testimonial about my life-changing experience with OJAS. From the very beginning, this remarkable organization has
            been dedicated to transforming lives and communities through its unwavering commitment to social justice and sustainable development. Today, I stand as a proud testament to their
            incredible work, and I cannot thank them enough for the profound impact they have had on my life, being as a Social Activist.</p>


          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div >
              <img className='w-100 h-28  rounded-full' src={Sir} />
            </div>
            <p className='mt-24 ml-5 text-blue-500'>Prof. Sambhaji Sawandkar</p>
          </div>

        </div>
        <div class="sm:w-2/5  w-full bg-FFFFFF border border-1C6FB  mr-3.5 flex flex-col justify-between sm:mt-0 mt-1.5">
          {/* <div class="border-b-2 border-gray-400 w-4/5 mb-8 mt-11 ml-11"></div>
                    <div class="border-b-2 border-gray-400 w-4/5 mb-8 ml-11"></div>
                    <div class="border-b-2 border-gray-400 w-4/5 mb-8 ml-11"></div>
                    <div class="border-b-2 border-gray-400 w-4/5 ml-11"></div> */}
          <p className='mt-4 italic text-sky-400 ml-4 text-2.6 overflow-hidden' >Testimonial : [ Empowerment and Education ] Education is the cornerstone of progress, and OJAS understands this fundamental truth. They provided me with opportunities for personal
            and professional growth through educational programs tailored to my needs. Whether it was vocational training, scholarships, or mentorship programs,
           OJAS NGO equipped me with the tools to enhance my skills, broaden my horizons, and unlock new possibilities. They believed in my potential and empowered me to dream bigger, helping me shape a brighter future for myself and my family.</p>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div >
              <img className='w-100 h-28  rounded-full' src={Sejal} />
            </div>
            <p className='mt-24 ml-5 text-blue-500'>Miss Sejal Matra</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contain