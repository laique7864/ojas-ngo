import React, { useEffect, useState } from "react";
import "./Contain.css";
import img from "../../assets/Navbarlogo/Ellipse 4.png";
import freeMedicl from "../../assets/Navbarlogo/free medical chek up.png";
import Sanitation from "../../assets/fifithobject.jpeg";
import urineTest from "../../assets/Navbarlogo/blod and urine test.jpg";
import foodDistribution from "../../assets/Navbarlogo/food distribution ngo.jpg";
import creerguidance from "../../assets/Navbarlogo/career guidance.jpeg";
import ima1 from "../../assets/Navbarlogo/fisrtslide.png";
import ima2 from "../../assets/Navbarlogo/secondSlide.png";
import ima3 from "../../assets/Navbarlogo/thirdSlide.png";
import ima4 from "../../assets/Navbarlogo/FourthSlide.png";
import ima5 from "../../assets/Navbarlogo/fifthSlide.png";
import Sir from "../../assets/Navbarlogo/LMC.BODY.png";
import Sejal from "../../assets/Navbarlogo/LMC3.png";
import {  useMediaQuery } from "@mui/material";
import { getEventByQuery, getPostsAll } from "../../services/admin.service";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";


import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useNavigate } from "react-router-dom";

const mainImageSlider = [ima1, ima2, ima3, ima4, ima5];
const ObjectiveSlider = [
  {
    image: urineTest,
    text: "FREE BLOOD CHECKUP CAMPS",
  },  {
    image: foodDistribution,
    text: "FOOD DISTRIBUTION  TO POOR",
  },  {
    image: creerguidance,
    text: "CAREER GUIIDANCE",
  },  {
    image: freeMedicl,
    text: "FREE Medical CHECKUP CAMPS",
  },  {
    image: Sanitation,
    text: "SANITATION",
  },
];

const Contain = () => {
  
  const isMobile = useMediaQuery("(max-width: 600px)");
  const navigate = useNavigate();
  const [completedEvent, setCompletedEvent] = useState([]);
  const [dataRow, setDataRow] = useState([]);

  const getComletedEvent = async () => {
    const data = await getEventByQuery("Completed");
    setCompletedEvent(data.data.Events);
  };
  const getUpcominEvent = async () => {
    const data = await getEventByQuery("Upcoming");
    setCompletedEvent(data.data.Events);
  };

  const fetchData = async () => {
    const data = await getPostsAll();
    
    setDataRow(data.data.Events);
  };

  useEffect(() => {
    fetchData();
    getUpcominEvent();
   
  }, []);
  return (
    <>
      <div className="flex justify-center items-center h-600 w-1440 custimise-swipe">
        <Swiper
          
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          
          slidesPerView={1}
          navigation
          mousewheel={{
            forceToAxis: true,
          }}
          autoplay={{ delay: 4000 }}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {mainImageSlider.map((item, index) => (
            <SwiperSlide key={index}>
              <img
                src={item}
                className="h-full w-full object-cover"
                alt="image description"
              />
            </SwiperSlide>
          ))}
          ...
        </Swiper>
      </div>
      <div>
        <h3 className="Main-Contain-text text-center font-bold mt-1  text-blue-600/100">
          Upcoming Events
        </h3>
      </div>
      <div class="  mt-2">
        
        <Swiper
          
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
         
          slidesPerView={isMobile ? 1 : 3}
          navigation
          mousewheel={{
            forceToAxis: true,
          }}
          autoplay={{ delay: 2000 }}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          {completedEvent.map((item) => {
            return (
              <SwiperSlide>
                <div className=" pl-14 mb-11 h-80">
                  <div class="w-10/12 h-80 bg-FFFFFF border  border-1C6FB">
                    <img src={item.img} className="h-full" />
                  </div>
                  <p className="text-025FB5 w-10/12 font-sans text-center">
                    {item.name}
                  </p>
                </div>
              </SwiperSlide>
            );
          })}
          ...
        </Swiper>
      </div>
      <div className="bottom-heading mb-1">
        <p className="text-gray-800 ">Empower Change, Donate Today, Transforming Lives with Your Support!</p>
        <button className=" hover:bg-indigo-500 " onClick={() => navigate("/DonationForm")}>Donate</button>
      </div>
      <div className="p-2">
        <div className="Latest-Text text-center">
          <h3 className="text-blue-600/100   font-bold">Latest Activity</h3>
        </div>
        <div class="grid flex-col bg-white overflow-y-scroll gap-12 items-center justify-center w-full h-1211 p-4 mx-auto border-2 rounded-lg border-0966BB ">
          {dataRow.map((item) => {
            return (
              <>
                <div
                  className="max-w-md mx-auto bg-slate-50 rounded-xl   md:max-w-3xl mt-8"
                  style={{
                    boxShadow:
                      "rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
                  }}
                >
                  <h1 className="text-blue-600/100  font-bold text-center">
                    {item.name}
                  </h1>

                  <div className="md:flex">
                    <div className="md:shrink-0 flex items-center justify-center">
                      <img
                        className="h-80"
                        src={item.img}
                        alt="Modern building architecture"
                      />
                    </div>
                    <div className="p-8">
                      <p className="mt-2 text-slate-500 text-justify indent-1.5 whitespace-normal">{item.description}</p>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>

      <div className="flex items-center justify-center font-sans text-025FB5 text-2xl mb-10">
        Abouts Us
      </div>

      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="md:flex">
          <div className="md:shrink-0 flex items-center justify-center">
            <img
              className="h-48"
              src={img}
              alt="Modern building architecture"
            />
          </div>
          <div className="p-8">
            <p className="mt-2 text-slate-500">
              OJAS (a Hindi word that means “Energy”) is an NGO, We are a
              not-for-profit Organization registered in June 2020 under The
              Indian Trust Act 1882. We have been on a philanthropic journey
              since June 2020 and operating at scale since August 2020. We have
              already completed three years in June 2023.
            </p>
            <p className=" text-slate-500">
              Our areas of intervention include: Health & Nutrition, Awreness of
              Safe Drinking Water, Clean Environment, Sanitation & Hygiene,
              Women Empowerment, Child & Women Education, Art and Culture;
              Sports and Emergency Preparedness and Response, & Work in Various
              Programs on Health & Education.
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="bottom-heading">
          <p className="text-gray-800">"Empower Change, Donate Today, Transforming Lives with Your Support!"</p>
          <button className=" hover:bg-indigo-500 " onClick={() => navigate("/DonationForm")}>Donate</button>
        </div>
        <h4 className="flex items-center justify-center text-025FB5 mb-8 text-2xl font-sans">
          Our Objective
        </h4>
        <div className=" mb-3 ">
          <Swiper
            
            modules={[Navigation, Pagination, Scrollbar, A11y]}
           
            slidesPerView={isMobile ? 2 : 4}
            navigation
            autoplay={{ delay: 2000 }}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            {ObjectiveSlider.map((item) => {
              return (
                <SwiperSlide
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <div class="mb-8 ">
                    <img
                      className="rounded-full w-40 h-40"
                      alt=""
                      src={item.image}
                    />
                    <p className="text-025FB5 font-sans text-center mt-4">
                      {item.text}
                    </p>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>

      <div className="flex items-center justify-center font-sans text-025FB5 text-2xl mb-10">
        Testimonial
      </div>
      <div className="flex justify-center flex-col mb-11 sm:flex-row">
        <div class="sm:w-2/5 w-full bg-FFFFFF border border-1C6FB mr-3.5 flex flex-col justify-between">
          <div className="sliding-element">
            <p>This element will slide in when first rendered.</p>
          </div>
         
          <p className=" italic text-sky-400 ml-4 text-2.6 overflow-hidden text-justify">
            Testimonial : I am honored to share my heartfelt testimonial about
            my life-changing experience with OJAS. From the very beginning, this
            remarkable organization has been dedicated to transforming lives and
            communities through its unwavering commitment to social justice and
            sustainable development. Today, I stand as a proud testament to
            their incredible work, and I cannot thank them enough for the
            profound impact they have had on my life, being as a Social
            Activist.
          </p>

          <div style={{ display: "flex", alignItems: "center" }}>
            <div>
              <img className="w-100 h-28  rounded-full" src={Sir} />
            </div>
            <p className="mt-24 ml-5 text-blue-500">Prof. Sambhaji Sawandkar</p>
          </div>
        </div>
        <div class="sm:w-2/5  w-full bg-FFFFFF border border-1C6FB  mr-3.5 flex flex-col justify-between sm:mt-0 mt-1.5">
          
          <p className="mt-4 italic text-sky-400 ml-4 text-2.6 overflow-hidden text-justify">
            Testimonial : [ Empowerment and Education ] Education is the
            cornerstone of progress, and OJAS understands this fundamental
            truth. They provided me with opportunities for personal and
            professional growth through educational programs tailored to my
            needs. Whether it was vocational training, scholarships, or
            mentorship programs, OJAS NGO equipped me with the tools to enhance
            my skills, broaden my horizons, and unlock new possibilities. They
            believed in my potential and empowered me to dream bigger, helping
            me shape a brighter future for myself and my family.
          </p>
          <div style={{ display: "flex", alignItems: "center" }}>
            <div>
              <img className="w-100 h-28  rounded-full" src={Sejal} />
            </div>
            <p className="mt-24 ml-5 text-blue-500">Miss Sejal Matra</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contain;
