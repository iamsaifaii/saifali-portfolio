import { useState } from 'react'
import './App.css'
import Navbar from './component/Navbar/Navbar'
import Hero from './component/Hero/Hero'
import LinkBox from './component/LinkBox/LinkBox'
import AboutSection from './component/AboutMeSection/AboutMeSection'
import ProjectHeader from './component/ProjectHeader/ProjectHeader'
import ProjectSlider from './component/Swiper/ProjectSlider'
import Midsection from './component/Midsection/Midsection'
import MeasDesigner from './component/MeasDesigner/MeasDesigner'
import Contact from './component/Contact/Contact'
import Skills from './component/Skills/Skills'
import Footer from './component/Footer.jsx/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Navbar/>
        <Hero/>
        <AboutSection/>
        <Skills/>
        <ProjectHeader/>
        <ProjectSlider/>
        <Midsection/>
        <MeasDesigner/>
        <Contact/>
        <Footer/>
      </div>
    </>
  )
}
export default App