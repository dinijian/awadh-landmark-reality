import './Search.css';
import React from 'react';


class Search extends React.Component{



  
  render(){

    

    return(
<div className='search-content' id='search-content'>

<div class="container">
  <h2>Search For Your Dream Home</h2>
  <p>Be A Step Closer To Living Your Dreams</p>
  <form>
    <div class="form-group">
      <label for="sel1">Location</label>
      <select class="form-control" id="sel1">
        <option>Mumbai</option>
        <option>Delhi</option>
        <option>Agra</option>
        <option>Lucknow</option>
      </select>
      <br/>

      <label for="sel1">Possession Type</label>
      <select class="form-control" id="sel1">
        <option>Ready To Move In</option>
        <option>Work In Full Progress</option>
        <option>Upcoming Projects</option>
        
      </select>
<br/>
      

<label >Price Range</label>
<input id="ex1" data-slider-id='ex1Slider' type="range" data-slider-min="0" data-slider-max="20" data-slider-step="1" data-slider-value="10"/>
      
      <br/>
      <input type="submit" class="btn btn-info" value="Submit Button"></input>

    </div>
  </form>
</div>


</div>

    )
  }
}
   

export default Search;