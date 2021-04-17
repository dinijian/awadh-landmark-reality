import React from 'react'
import { Element } from 'react-scroll'

import './About.css';
import logo from './Images/Logo.jpeg';



export default function About() {
  return (
    <React.Fragment>
    
      <Element id='about' name='example-destination'>
      <div className='About'>
        <div className='about-header'>
            About Us
        </div>

        <div className='about-content'>
            <div class='container-fluid'>
                <div class='row'>
                <div class='col-sm-8'>
            <span>
            Awadh Landmark Reality Pvt. Ltd. is a real estate consulting company serving <span1>all over Lucknow.</span1> It is our efficient and effective solution that has given us domestic and global giants as satisfied clients. <br/>
Awadh Landmark Reality Pvt. Ltd. has earned a strong reputation in the real estate industry as we strongly work for the satisfaction of our customers. 
We have catered to numerous<span1>national and international clients</span1> belonging to various business domains.<br/> As a real estate company we have been redefining the standards of real estate and with our years of experience, we offer a wide range of services to fulfill our clients' needs. 
We make it our business to understand your financial requirements. We have already served the premier corporate houses in the both domestic and international arena.<br/> Our expertise is to make your money work for you and manage your investment portfolio. 

            </span>
            </div>
           <div class='col-sm-4'>
           <img src={logo} alt="Logo" class="img-responsive"></img>
           </div>
                </div>
            </div>
            
        </div>
</div>
      </Element>
      

    </React.Fragment>
  )
}

