import React from 'react';
import './footer.scss'
import Icon1 from '../../../imgs/icon-1.svg'
import Icon2 from '../../../imgs/icon-2.svg'
import Icon3 from '../../../imgs/icon-3.svg'
import Icon4 from '../../../imgs/icon-4.svg'
import Icon5 from '../../../imgs/icon-5.svg'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import HeadphonesOutlinedIcon from '@mui/icons-material/HeadphonesOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';
import { Link } from 'react-router-dom';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
const Footer = () => {
  return (
   
<div>
        
        <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
        <div className='col'>
                <h2>Contact Us</h2>
                <p><LocationOnOutlinedIcon className='ficon' />Address: 96 Aparment Chalakudy, 680307</p>
                <p><EmailOutlinedIcon className='ficon' />Email: ecogindiaprivate@gmail.com</p>
                <p><HeadphonesOutlinedIcon className='ficon' />Phone: +91 9845289464</p>
                <p><WatchLaterOutlinedIcon className='ficon' />Hours: 10:00-19:00, Mon-Sat</p>
         </div>
        

        <div className="col">
          <h2>Follow Us</h2>
          <h6>Connect with us on social media</h6>
          <div className="social-icons">
            <br></br>

            <ul className='ul'>
      <li className="item">
        <a href="#">
        < img src="https://i.ibb.co/kM23JqZ/insta.jpg" className='iconfooter' alt="insta" border="0"/>
        
        </a>
      </li>
      <li className="item">
        <a href="#">
      <img src="https://i.ibb.co/d5K6Jwz/face.png" className='iconfooter' alt="face" border="0"/>
        </a>
      </li>
      <li className="item">
        <a href="#">
        <img src="https://i.ibb.co/7RwF90F/you.png" className='iconfooter' alt="you" border="0"/>
        </a>
      </li>
      <li className="item">
        <a href="#">
        <img src="https://i.ibb.co/0nmqSGD/fhfd.jpg" className='iconfooter' alt="fhfd" border="0"/>
        </a>
      </li>
    </ul>
            {/* <a href="#" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a> */}
            
          
        </div>
        <div >
          <br></br>
          <p  className='fcustarr'><SupportAgentIcon/>1800-9002-1934<br></br> 24/7 Support center&nbsp;&nbsp;</p>
          
          </div>

        </div>
        <div className="col">
          <h2>Quick Links</h2>
          <ul>
            <li><Link  to="/userside/:id" style={{ textDecoration: "none" }}>Home</Link></li>
            
            <li><Link  to="/about" style={{ textDecoration: "none" }}>About Us</Link></li>
            <li><Link  to="/sellerlogin" style={{ textDecoration: "none" }}>Become a Seller</Link></li>
          </ul><br></br><br></br>
          <p  className='fcustarrange'><SupportAgentIcon/>1800-3002-9824 <br></br> 24/7 Support center&nbsp;&nbsp;</p>
        </div>
        <div className='col'>
               <h3>Popular</h3>
      <ul className="footer-list mb-sm-5 mb-md-0">
      
      <li><a href="/popularPage#section-delivery">Delivery Information</a></li>
<li><a href="/popularPage#section-privacy">Privacy Policy</a></li>
<li><a href="/popularPage#section-terms">Terms &amp; Conditions</a></li>
<li><a href="/popularPage#section-contact">Contact Us</a></li>
<li><a href="/popularPage#section-return">Return Policy</a></li>
<li><a href="/popularPage#section-cancel">Cancellation Policy</a></li>

                                        </ul>
                                    </div>
      </div>
</div>
      <div className="footer-bottom">
        <p>&copy; 2024 Eco-G Organic Products. All rights reserved.</p>
      </div>
      
    </footer>
       
    
    </div>
  );
};

export default Footer;
