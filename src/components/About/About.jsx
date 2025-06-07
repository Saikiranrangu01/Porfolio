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
                    <p>I completed my Bachelor’s degree in 2024. Over the past two years, I have been training in the MERN stack at NextWave, where I honed my skills in building full-stack web applications. My experience includes developing a food order app, a student registration system, a YouTube clone, a Spotify clone, a to-do list application, and various React and JavaScript-based form pages. I am passionate about learning new technologies and am eager to start my career as a developer.</p>
                </div>

                <div className="about-skills">
                    <div className="about-skill"><p>Libraries: React.js,Express.js</p><hr style={{width:"60%"}} /></div>
                    <div className="about-skill"><p>Backend: Node.js</p><hr style={{width:"70%"}} /></div>
                    <div className="about-skill"><p>Frontend: HTML,CSS,JavaScript,</p><hr style={{width:"60%"}} /></div>
                    <div className="about-skill"><p>Programming Languages:Python,C</p><hr style={{width:"60%"}} /></div>
                    <div className="about-skill"><p>Database: SQL, mongoDB</p><hr style={{width:"70%"}} /></div>
                    <div className="about-skill"><p>Tools: Vscode, vercel</p><hr style={{width:"60%"}} /></div>
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
                <h1>7+</h1>
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