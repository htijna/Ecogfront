import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import './sellersignup.scss'


const api = axios.create({
  baseURL: 'http://localhost:5000', // Adjust this URL based on your server configuration
});
  
const Sellersignup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    password: '',
  });

  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    let updatedValue = value;
    if (name === 'name' || name === 'address') {
      // Capitalize the first letter of the value if the field name is 'name' or 'address'
      updatedValue = value.charAt(0).toUpperCase() + value.slice(1);
    }
    setFormData({ ...formData, [name]: updatedValue });
  };
  
  const handleSignup = async (e) => {
    e.preventDefault();
  
    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    // Check if the email is valid
    if (!emailRegex.test(formData.email)) {
      setErrorMessage('Please enter a valid email address.');
      setSuccessMessage('');
      return;
    }
  
    try {
      const response = await api.post('/sauth/sellersignup', formData);
      console.log('Signup successful', response.data);
      // Handle success, e.g., show success message, redirect to login page
      setSuccessMessage('Signup successful. You can now log in.');
      setErrorMessage('');
      setFormData({
        name: '',
        email: '',
        phone: '',
        address: '',
        password: '',
      });
      navigate('/sellerlogin');
    } catch (error) {
      console.error('Signup failed', error.response ? error.response.data : error.message);
      // Handle error, e.g., show error message
      setErrorMessage(error.response ? error.response.data.message : 'Signup failed. Please try again.');
      setSuccessMessage('');
    }
  };

  return (
    <div><br></br>
    <div className='sellersignupppostion'>
      
    <div className="sellersignuppcontainer">
      <div className="sellersignuppimage-section">
        <div className="sellersignuppimage-wrapper">
          <img className='background-seller' src={require('../../../imgs/seller3.jpg')} alt="" />
        </div>
       
      </div>
      <div className="sellersignuppform-section">
        <div className="sellersignuppform-wrapper">
          {/* <div className="sellersignupplogo-container">
            <a href="#" className="sellersignupplogo-container">
              <img src={require('../image/ecog.png')} alt="Logo" />
            </a>
          </div> */}
         
          <h2>Hey Seller   </h2>      
          <p>Join the Green Revolution: Become an Ecog Seller Today!.</p>
          <div className="sellersignuppinput-container">
          {successMessage && <p className="success-message">{successMessage}</p>}
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            <div className="sellersignuppform-group">
              <label htmlFor="name">Business Name</label>
              <input type="text" name='name' id="name" autoComplete="off" value={formData.name} onChange={handleChange} />
            </div>
             <div className="sellersignuppform-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" autoComplete="off"  name="email" value={formData.email} onChange={handleChange} />
            </div>
            <div className="sellersignuppform-group">
              <label htmlFor="password">Password</label>
              <input type="password"  id="password"  name="password" value={formData.password} onChange={handleChange} />
            </div>
            <div className="sellersignuppform-group">
              <label htmlFor="phoneno">Phone No</label>
              <input type="tel" name='phone' id="phone" autoComplete="off" value={formData.phone} onChange={handleChange} />
            </div>
             <div className="sellersignuppform-group">
              <label htmlFor="address" >Address</label>
              <textarea  id="address" name='address' rows={3} autoComplete="off" value={formData.address} onChange={handleChange} />
            </div>

          </div>
         
          <button className="sellersignupplogin-btn"  onClick={handleSignup}>Sign Up</button>
          <div className="selleror-dividers">or</div>
        
          <Link to="/sellerlogin" style={{textDecoration:"none"}}> 
          {/* <h4 className='sellerform'> Log in </h4> */}
          <button className="sellersignuplog-btn">Log in</button>
          </Link>
        </div>
      </div>
    </div>
  </div></div>
  )
}
  
  
export default Sellersignup