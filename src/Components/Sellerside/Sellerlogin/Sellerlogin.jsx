import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './sellerlogin.scss';

const Sellerlogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  
  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:5000/sauth/sellerlogin', {
        email,
        password,
      });

      console.log('Login successful', response.data);
      localStorage.setItem('token', response.data.token);
      navigate(`/profile/${response.data._id}`); // navigate to the profile page with seller's ID
    } catch (error) {
      console.error('Login failed', error.response.data);
      if (error.response.status === 401) {
        setErrorMessage('Invalid email or password');
      } else {
        setErrorMessage(error.response.data.message);
      }
    }
  };

  return (
    <div className="sellerpostion">
      <div className="sellercontainer">
        <div className="sellerimage-section">
          <div className="sellerimage-wrapper">
            <img src={require('./seller2.jpg')} alt="not found" />
          </div>
          <div className="sellercontent-container">
            <h1 className="sellersection-heading">THE BEST MARKETING OF ALL IS <span>HAPPY CLIENTS..</span></h1>
            <p className="sellersection-paragraph">Eat well Feel good.</p>
          </div>
        </div>
        <div className="sellerform-section">
          <div className="sellerform-wrapper">
            <h2>Welcome Sellers! 👋🏻</h2>
            <p>Enter your credentials to access your account.</p>
            <div className="sellerinput-container">
              {errorMessage && <p className="error-message">{errorMessage}</p>}
              <div className="sellerform-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" autoComplete="off" placeholder="Email"
                  value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className="sellerform-group">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" placeholder="Password"
                  value={password} onChange={(e) => setPassword(e.target.value)} />
              </div>
            </div>
            <div className="sellerremember-forgot">
              <div className="sellerremember-me">
                <input type="checkbox" defaultValue="remember-me" id="remember-me" />
                <label htmlFor="remember-me">Remember me</label>
              </div>
              <a href="#">Forgot password?</a>
            </div>
            <button className="sellerlogin-btn" onClick={handleLogin}>Log In</button>
            <div className="selleror-divider">or</div>
            <div className='sellersign'>
              <Link to="/sellersignup" style={{ textDecoration: "none" }}>
                <button className="sellergoogle-signin">Sign Up</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sellerlogin;