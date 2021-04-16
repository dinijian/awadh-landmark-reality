import './Content.css';
import Azea from './Images/Azea Botenica.jpeg';
import Sage from './Images/Sage City.jpeg';

import SG from './Images/Shiva Greens.jpeg';
import SSB from './Images/Sri Sai Basera.jpeg';
import TH from './Images/The Hive.jpg';
function Content(){
    return(

<div className='content'>
    <div class='container-fluid'>
        <div class='row'>
        <div class='col-sm-5 col-xs-6'  id='content-left'>
<span> Our Motto:<br/>
        Customer Satisfaction At Any Cost </span>
    </div>
    
       
    <div class='col-sm-7 col-xs-6'>
 <h2>Our Projects</h2>
 <div className='container1'>
     
 <div id="myCarousel" class="carousel slide" data-ride="carousel">
    
    <ol class="carousel-indicators">
      <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
      <li data-target="#myCarousel" data-slide-to="1"></li>
      <li data-target="#myCarousel" data-slide-to="2"></li>
      <li data-target="#myCarousel" data-slide-to="2"></li>
      <li data-target="#myCarousel" data-slide-to="2"></li>
    </ol>

    
    <div class="carousel-inner">

      <div class="item active">
        <img src={Azea} alt="Azea Botenica"  />
        <div class="carousel-caption">
          <h3>Azea Botenica</h3>
         
        </div>
      </div>

      <div class="item">
        <img src={Sage} alt="Sage City"  />
        <div class="carousel-caption">
          <h3>Sage City</h3>
          
        </div>
      </div>
    
      <div class="item">
        <img src={SG} alt="Shiva Greens"  />
        <div class="carousel-caption">
          <h3>Shiva Greens</h3>
       
        </div>
      </div>

      <div class="item">
        <img src={TH} alt="The Hive"  />
        <div class="carousel-caption">
          <h3>The Hive</h3>
         
        </div>
      </div>

      <div class="item">
        <img src={SSB} alt="The Hive"  />
        <div class="carousel-caption">
          <h3>Sri Sai Basera</h3>
          
        </div>
      </div>
  
    </div>

    
    <a class="left carousel-control" href="#myCarousel" data-slide="prev">
      <span class="glyphicon glyphicon-chevron-left"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="right carousel-control" href="#myCarousel" data-slide="next">
      <span class="glyphicon glyphicon-chevron-right"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>

 </div>
  
</div>

        </div>
    
    </div>
    </div>
    


    );
}
export default Content;