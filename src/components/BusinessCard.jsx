import React from 'react'
import About from './About'
import Skills from './Skills'
import Footer from './Footer'
import ButtonMailto from './ButtonMailTo'
import Profile from '../assets/profile.jpg'

const BusinessCard = () => {
  return (
    <div className='flex flex-col p-4 items-center text-white'>
      <div className='mb-2'>
        <img src={Profile} style={{ height: "250px", width: "200px" }} alt="Portfolio" />
      </div>
      <div className='text-center'>
        <p className='text-2xl'>Pothireddy Pravallika</p>
        <p className='text-red-400'>Mern Stack Developer</p>
      </div>
      <div>
        <a href={'Resume.pdf'} download={'Resume.pdf'}>
          <button
            className="text-white bg-red-500 hover:bg-red-400 focus:outline-none font-medium rounded-md text-sm px-5 py-2.5 me-4 mt-4 mb-2 mx-auto">
            Resume
          </button>
        </a>
        <ButtonMailto label="Write me an E-Mail" mailto="mailto:pothireddy.pravallika10@gmail.com" />
        {/* <button
          className="text-white bg-red-500 hover:bg-red-400 focus:outline-none font-medium rounded-md text-sm px-5 py-2.5 me-2 mt-4 mb-2 mx-auto">
          Email
        </button> */}
      </div>
      <About />
      <Skills />
      <Footer />
    </div>
  )
}

export default BusinessCard