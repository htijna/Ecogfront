

import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import StorefrontIcon from '@mui/icons-material/Storefront';
import ecog from '../../../imgs/ecog.png';
import CategoryIcon from '@mui/icons-material/Category';
import HomeIcon from '@mui/icons-material/Home';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import axios from 'axios';
import baseUrl from '../../../Api';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import StoreIcon from '@mui/icons-material/Store';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AssessmentIcon from '@mui/icons-material/Assessment';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SystemSecurityUpdateGoodIcon from '@mui/icons-material/SystemSecurityUpdateGood';
import TimelineIcon from '@mui/icons-material/Timeline';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';


import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import PreviewIcon from '@mui/icons-material/Preview';



const Sellernavbar = ({id}) => {
  const [searchQuery, setSearchQuery] = useState('');

  const navigate = useNavigate();
  useEffect(() => {
    const getToken = () => {
      return localStorage.getItem('token');
    };
  
    const token = getToken();
    if (!token) {
      navigate('/sellerlogin');
    } else {
      console.log('Token fetched:', token);
      const tokenParts = token.split('.');
      if (tokenParts.length !== 3) {
        console.error('Invalid token format');
        navigate('/sellerlogin');
        return;
      }
      const payload = tokenParts[1];
      console.log('Token Payload:', payload);
      try {
        const decodedPayload = atob(payload);
        console.log('Decoded Payload:', decodedPayload);
        const parsedPayload = JSON.parse(decodedPayload);
        const sellerId = parsedPayload.sellerId; 
        console.log('seller Id:', sellerId);
        // Further actions with userId if needed
      } catch (error) {
        console.error('Error decoding token payload:', error);
        navigate('/sellerlogin');
      }
    }
  }, [navigate]);
  


  const handleSearch = () => {
    console.log("Search query: ", searchQuery);
    // Implement your search functionality here
  };
  

  
  const handleLogout = () => {
      localStorage.removeItem("token");
      // Navigate to the login page
      navigate("/sellerlogin");
    };

    
 

  return (
    <div>
    <nav className="hnavbar">
      <div className="hlogo">
        <a href="#"><img src={ecog} className='hpi' alt="Your SVG" /></a>
      </div>
      <div className="hmenu">
        <div className="hmenu-links">
          <div className="husernavContainer">
            <div className="husersearchContainer">
              <input 
                type="text" 
                value={searchQuery} 
                onChange={(e) => setSearchQuery(e.target.value)} 
                placeholder="Search..." 
                className="husersearchInput" />
              <button 
                onClick={handleSearch} 
                className="husersearchButton" >
                <SearchIcon/>
              </button>
            </div>
          </div>
          {/* <Link to="/seller" style={{ textDecoration: "none" }}>
            <p className='hhicon'><DashboardIcon  />Dashboard</p></Link> */}

<Link to="/profile/:id" style={{ textDecoration: "none" }}>
  <p className='hhicon'><AccountCircleOutlinedIcon  />Profile</p>
</Link>



          <Link to="/products" style={{ textDecoration: "none" }}>
            <p className='hhicon'><AddBusinessIcon  />Add Product</p>
          </Link>
          <Link to="/productlist">
            <p className='hhicon'><StorefrontIcon  /> View Product</p>
          </Link>
          <Link to='/sellerorder'>
            <p className='hhicon'><LocalShippingIcon />Orders</p>
          </Link>
        </div> 
        <Link  to="/sellerlogin" style={{ textDecoration: "none" }}>
          <button onClick={handleLogout} className="hreg-in">Log out</button>
        </Link>
      </div>
      <div className="hmenu-btn">
        <MenuIcon />
      </div>
    </nav>
  </div>
  )
}

export default Sellernavbar
