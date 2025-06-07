import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'


const Hero = () => {
  
  return (
    <div id='home' className='hero'>
        <img src={profile_img} alt="" />
        <h1><span>I am Rangu Saikiran</span></h1>
        <p>"Open to Full-Stack Developer roles"</p>
        <div className="hero-action">
            <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>contact with me</AnchorLink></div>
            <div className="hero-resume" onClick={() => window.open('/resume.pdf', '_blank')}>My Resume</div>
        </div>
    </div>
  )
}

export default Hero