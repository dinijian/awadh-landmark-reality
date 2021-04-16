import React, { Component } from 'react'
import Scroll from 'react-scroll'

import './Navbar.css';
import About from './About';
import logo from './Images/Logo.jpeg';

const ScrollLink = Scroll.ScrollLink



class Navbar extends Component {
  
render(){
  
  var element = document.getElementById("example-destination");
  function Func() {
    element.scrollIntoView();
  }
    return(
<>

        <div className='header'>
            <div className='header-left' >
                <div class='container-fluid'>
                <div class='row'>
                <i class="col-sm" class="fa fa-phone" aria-hidden="true"></i>
            1234567890
            <i class="col-sm" class="fa fa-phone" aria-hidden="true"></i>
            9876543210
                </div>
                </div>
               
            
            </div>
            <div className='header-right'>
                <div className='social'>
                    <div class='container-fluid'>
                    <span >Find us here:</span>
                    <div class='row'>
                <a href="" target='_blank' class="col-sm col-xs"><i class="fab fa-instagram" ></i></a>    
                <a href="" target='_blank' class="col-sm col-xs"> <i class="fab fa-facebook" ></i></a> 
                <a href="" target='_blank' class="col-sm col-xs"> <i class="fab fa-twitter" ></i></a> 
                <a href="" target='_blank' class="col-sm col-xs"> <i class="fab fa-youtube" ></i></a> 
                <a href="" target='_blank' class="col-sm col-xs"> <i class="fab fa-linkedin-in"></i></a> 
                    </div>
                
                    </div>
                   
                </div>
            </div>
        </div>
        
        <nav class="navbar navbar-inverse ">
        <div class="container-fluid">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>                        
            </button>
            <a class="navbar-brand" href="#"><img src={logo} alt="Logo" ></img></a>
          </div>
          <div class="collapse navbar-collapse" id="myNavbar">
            <ul class="nav navbar-nav">
              <li class="active"><a href="#">Home</a></li>
              <li><a href='#' onclick="return Func();">About</a></li>
              <li>
              
              </li>
              <li class="dropdown">
                <a class="dropdown-toggle" data-toggle="dropdown" href="#">Projects <span class="caret"></span></a>
                <ul class="dropdown-menu ">
                  <li><a  href='#'>Ready To Move</a></li>
                  <li><a href="#">Work In Full Progress</a></li>
                  <li><a href="#">Search Your Home</a></li>
                </ul>
              </li>
              <li><a href="#">Video Tour</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
            <ul class="nav navbar-nav navbar-right">
              <li><a href="#"><span class="glyphicon glyphicon-user"></span> Sign Up</a></li>
              <li><a href="#"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
            </ul>
          </div>
        </div>
      </nav>

      
</>

    );
}
}
export default Navbar;