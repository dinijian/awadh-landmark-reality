
import './Contact.css';
function Contact(){
    return(

<div className='contact'>

<div class='col-sm-3'>
Awadh Landmark Reality Pvt. Ltd. is a company with rich experience in real estate advisory that believes each real estate experience should be a simple and successful execution from a Dream to Reality. Our team of Real Estate advisors is driven by the fundamental values of customer satisfaction, credibility and professionalism Awadh Landmark Reality Pvt. Ltd.  has some of the best professionals in real estate industry who specialize in finding property just as per your requirement.
    </div>
    <div class='col-sm-3'>
        <a href="" target='_blank'>NRI Services</a><br/>
        <a href="" target='_blank'>News</a><br/>
        <a href="" target='_blank'>Events</a><br/>
        <a href="" target='_blank'>Awards</a><br/>
        <a href="" target='_blank'>Careers</a><br/>
    </div>
    <div class='col-sm-3'>
        <a href="" target='_blank'>Terms</a><br/>
        <a href="" target='_blank'>Privacy</a><br/>
        <a href="" target='_blank'>FAQs</a><br/>
        <a href="" target='_blank'>Our Services</a><br/>
        <a href="" target='_blank'>Contact</a><br/>
    </div>
    <div class='col-sm-3'>
        <h2>Subscribe To Our Newsletter</h2>
        <div class="container">
 
  <form className='form-det'>
    <div class="form-group">
      <label for="email">Email:</label>
      <input type="email" class="form-control" id="email" placeholder="Enter email" name="email" />
    </div>
    <div class="form-group">
      <label for="pwd">Password:</label>
      <input type="password" class="form-control" id="pwd" placeholder="Enter password" name="pwd" />
    </div>
    <div class="checkbox">
      <label><input type="checkbox" name="remember" /> Terms And Conditions</label>
    </div>
    <button type="submit" class="btn btn-default">Submit</button>
  </form>
</div>

    </div>
</div>


    );
}
export default Contact;