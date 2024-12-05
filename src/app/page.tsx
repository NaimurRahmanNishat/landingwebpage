import About from '@/components/About';
import Blog from '@/components/Blog';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import React from 'react'

const page = () => {
  return (
    <div>
      <Navbar/>
      <div>
      {/* Navbar */}
      <Navbar />

      {/* Sections */}
      <section id="home">
        <Hero/>
      </section>

      <section id="about">
        <About/>
      </section>

      <section id="blog">
        <Blog/>
      </section>

      <section id="contact">
        <Contact/>
      </section>
    </div>
      <Footer/>
    </div>
  )
}

export default page;