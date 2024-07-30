import React from 'react'
import Navbar from "../../components/Navbar/Navbar"
import Features from '../../components/Features/Features.js';
import Footer from '../../components/Footer/Footer.js';
import Hero from '../../components/Hero/Hero.js';
import ContactUs from '../../components/ContactUs/ContactUs.js';

const Home = () => {

  return (<>
    <Navbar/>
    <Hero />
    <Features />
    <ContactUs/>
    <Footer />
  </>
  )
}

export default Home