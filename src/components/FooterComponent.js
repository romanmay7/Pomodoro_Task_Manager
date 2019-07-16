import React from 'react';
import logo from '../logo.svg';
//import {Link} from 'react-router-dom';
function Footer(props) {
return(
  <div className="footer">
    <div className="container">
     <div className="row justify-content-center">

      <div className="col-7 col-sm-5">
      
      <address>

        <br />
       <div className="footerinfo">
       
       <div className="col justify-content-left">
       <h4> Contact Information</h4>
      <i className="fa fa-github fa-lg"></i>: <a href="https://github.com/RomanMayer7?tab=repositories">https://github.com/RomanMayer7?tab=repositories</a><br></br>
      <i className="fa fa-linkedin"></i>: <a href="https://www.linkedin.com/in/roman-mayerson-165b06178/">https://www.linkedin.com/in/roman-mayerson-165b06178/</a>
      </div>

      <img src={logo} className="App-logo" alt="logo" />
      <p>Powered by React © 2019 Roman Mayerson</p>
      </div>
      </address>
      </div>

</div>

</div>
</div>
)
}
export default Footer;

        /*
        <li><Link to='/home'>Home</Link></li>
        <li><Link to='/aboutus'>About Us</Link></li>
        <li><Link to='/menu'>Menu</Link></li>
        <li><Link to='/contactus'>Contact Us</Link></li>*/