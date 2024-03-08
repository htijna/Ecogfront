import axios from 'axios';
import React, { useState } from 'react';
import './adminlogin.scss'
import { useNavigate } from 'react-router-dom';
import baseurl from '../../../Api'

const Adminlogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
            try {
       

             const response = await axios.post(baseurl+'/adminAuth/admin', {
          username,
          password,
        });
                
          
                if (response.data.success) {
                  alert('Login successful');
                  console.log(response.data);
                  navigate('/userlog');
                } 
                else {
                  setError('Invalid Email and Password. Please try again.');
                  console.log(response.data);
        
                }
              } catch (err) {
                setError('Error occurred during login. Please try again.');
              }
  };


  return (
    <div className='adminuserpostion'>
      <div className="adminusercontainer">
        <div className="adminuserform-section">
          <div className="adminuserform-wrapper">
            <div className="adminuserlogo-container">
              <img src={require('./admin.jpg')} alt="Logo" />
            </div>  {error && <p className="adminerror-message">{error}</p>}
            <h2>who are you? Reveal yourself!</h2>
            <p> To access your Entity.</p>
            <div className="adminuserinput-container">
              <div className="adminuserform-group">
                <label htmlFor="email">Username</label>
                <input
                  type="username"
                  id="username"
                  autoComplete="off"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="adminuserform-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <button className="adminuserlogin-btn" onClick={handleLogin}>
              Log In
            </button>
          </div>
        </div>
      
      </div>
    </div>
  );
};

export default Adminlogin;