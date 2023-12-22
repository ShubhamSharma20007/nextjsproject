import Image from 'next/image'
import HeroSection from './components/HeroSection'

export default function Home() {
  const data = {
    title:"let's watch Movie Together",
    subtitle:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident vero accusamus, quaerat ex iure sapiente incidunt tempora debitis expedita totam.",
    svg: "./undraw_woman_ffrd.svg"
  }
  return (
   <>
   <HeroSection data={data}></HeroSection>
   </>
  )
}
