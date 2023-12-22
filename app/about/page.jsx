import React from 'react'
import HeroSection from '../components/HeroSection'
const about = () => {
  const data={
title:"Our Story",
subtitle:"We are a team of designers and developers who are passionate about building beautiful and functional websites.",
svg:"./undraw_team_work_k-80-m.svg"
  }
  return (
    <div>
      <HeroSection data={data}></HeroSection>
      
    </div>
  ) 
}

export default about
