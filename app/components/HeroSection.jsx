"use client";
import React from 'react';
import "./hero.css"
const HeroSection = (props) => {
  const{title,subtitle,svg} = props.data;
  return (
    <div>
      <div
        className="main-container relative min-h-[60vh] w-full flex flex-wrap justify-center flex-1">
          <div className="first  h-full w-full md:w-1/2 m-auto  flex items-center justify-center  ">
<div className="center-container w-3/4 h-full  relative z-10">
  <h1 className='capitalize w-full text-3xl my-3 font-semibold'>{title}</h1>
<p className='text-sm text-normal text-justify'>{subtitle}</p>
<button className='bg-black rounded-xl text-sm py-1 my-4 px-4 text-white font-semibold'> Explore Moves</button>
</div>
          </div>
          <div className="first  h-full w-full md:w-1/2 m-auto ">
    <img src={svg} className='object-contain relative z-10   h-full m-auto ' width={"270px"} alt="" />
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" className='absolute bottom-0 ' viewBox="0 0 1440 320">
    <path fill="#f3f4f5" fillOpacity="1" d="M0,192L60,176C120,160,240,128,360,112C480,96,600,96,720,122.7C840,149,960,203,1080,208C1200,213,1320,171,1380,149.3L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
  </svg>

  
        </div>
    </div>
  );
};

export default HeroSection;
