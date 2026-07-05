import React from 'react'
import Navbar from '../components/Navbar'
import Home_HeroSection from '../components/layout/Home_HeroSection'
import Home_AboutSection from '../components/layout/Home_AboutSection'
import Home_PetDetailsSection from '../components/layout/Home_PetDetailsSection'
import Home_ProductdetailsSection from '../components/layout/Home_ProductdetailsSection'
import Home_ContactSection from '../components/layout/Home_ContactSection'
import Home_ReviewSections from '../components/layout/Home_ReviewSections'
import Footer from '../components/static_component/Footer'

const Home = () => {
  return (
    <div className='w-screen h-screen '>
        <Navbar/>
        <Home_HeroSection/>
        <Home_AboutSection/>
        <Home_PetDetailsSection/>
        <Home_ProductdetailsSection/>
        <Home_ReviewSections/>
        <Home_ContactSection/>
        <Footer/>
    </div>
  )
}

export default Home