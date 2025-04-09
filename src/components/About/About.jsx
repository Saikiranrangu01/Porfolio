import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/profile_img.jpg'

const About = () => {
  return (
    <div id = "about" className='about'>
        <div className="about-title">
            <h1>About me</h1>
            <img src={theme_pattern} alt="" />
        </div>

        <div className="about-sections">
            <div className="about-left">
                <img src={profile_img} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>I’m a passionate front-end develope with a strong background in JavaScript, HTML, CSS, Bootstrap, and React.js. worked on various projects like a portfolio website, Spotify clone, weather app using API, and a full-stack food delivery app.</p>
                    <p> I love building things that are functional, user-friendly, and visually appealing.</p>
                </div>

                <div className="about-skills">
                    <div className="about-skill"><p>React.js</p><hr style={{width:"50%"}} /></div>
                    <div className="about-skill"><p>Express.js</p><hr style={{width:"70%"}} /></div>
                    <div className="about-skill"><p>JavaScript</p><hr style={{width:"60%"}} /></div>
                    <div className="about-skill"><p>python</p><hr style={{width:"50%"}} /></div>
                    <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"50%"}} /></div>
                </div>
            </div>
        </div>
        <div className="about-achievements">
            
            <div className="about-achievement">
                <h1>Fresher</h1>
                <p>No Experience</p>
            </div>
            <hr />


            <div className="about-achievement">
                <h1>Fresher</h1>
                <p>No Experience</p>
            </div>
            <hr />

            <div className="about-achievement">
                <h1>Fresher</h1>
                <p>No Experience</p>
            </div>
            <hr />

            <div className="about-achievement">
                <h1>Fresher</h1>
                <p>No Experience</p>
            </div>
            <hr />
        </div>

    </div>
  )
}

export default About