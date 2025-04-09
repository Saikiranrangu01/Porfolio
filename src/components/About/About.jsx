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
                    <p>Hi, I'm a passionate Full-Stack Web Developer with a strong foundation in both frontend and backend technologies.</p>
                    <p> I love building things that are functional, user-friendly, and visually appealing.</p>
                </div>

                <div className="about-skills">
                    <div className="about-skill"><p>React.js</p><hr style={{width:"60%"}} /></div>
                    <div className="about-skill"><p>Node.js,Express.js</p><hr style={{width:"70%"}} /></div>
                    <div className="about-skill"><p>Bootstrap,TailwindCSS,SQL</p><hr style={{width:"60%"}} /></div>
                    <div className="about-skill"><p>JavaScript,python,C</p><hr style={{width:"60%"}} /></div>
                    <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"80%"}} /></div>
                </div>
            </div>
        </div>
        <div className="about-achievements">
            
            <div className="about-achievement">
                <h1>Fresher</h1>
                <p></p>
            </div>
            <hr />


            <div className="about-achievement">
                <h1>6+</h1>
                <p>PROJECTS COMPLETED</p>
            </div>
            <hr />

            <div className="about-achievement">
                <h1>SOLVED 300+</h1>
                <p>CODING ON NEXTWAVE</p>
            </div>
            <hr />

            <div className="about-achievement">
                <h1>INTERNSHIP</h1>
                <p>NULLCLASS</p>
            </div>
            <hr />
        </div>

    </div>
  )
}

export default About