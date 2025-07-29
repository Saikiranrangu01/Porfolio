import React from 'react'
import './Footer.css'
import footer_logo from '../../assets/footer_logo.png'
import user_icon from '../../assets/user_icon.svg'
import linkedin from '../../assets/linkedin.png'
import github from '../../assets/github.png'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                <img src={footer_logo} alt="" />
                <p>Iam full-stack developer from india graduated in 2024</p>
            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                    <img src={user_icon} alt="" />
                    <input type="email" placeholder='Enter your email'/>
                </div>

                <div className="footer-subscribe">Subscribe</div>


            </div>
            
        </div>
        <hr />
        
        <div className="footer-bottom">
            <p className="footer-bottom-left">© 2025 Rangu Saikiran. All rights reserved.</p>
            <div className="footer-bottom-right">
                <p>Terms of services</p>
                <p>privacy policy</p>
                <div className='icon-footer'><a href="https://github.com/Saikiranrangu01" target='_blank'><img src={github} alt="" /></a></div>
                <div className='icon-footer'><a href="https://www.linkedin.com/in/saikiran-rangu/" target='_blank'><img src={linkedin} alt="" /></a></div>
                
                
                
            </div>
        </div>

    </div>
  )
}

export default Footer