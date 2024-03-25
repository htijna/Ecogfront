import React, { useState } from 'react';
import './login.scss';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    setLoading(true);
    try {
      const response = await axios.post('http://localhost:5000/auth/userlogin', {
        email,
        password,
      });

      console.log('Login successful', response.data);

      localStorage.setItem('token', response.data.token);
      localStorage.setItem('userId', response.data.userId); // Store user ID in local storage

      navigate(`/userside/${response.data.userId}`); // Redirect to user's dashboard using their ID
    } catch (error) {
      console.error('Login failed', error.response.data);
      // Handle login error
      setErrorMessage(error.response.data.message); // Assuming error.response.data.message contains error message from backend
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="userpostion">
      <div className="usercontainer">
        <div className="userimage-section">
          <div className="userimage-wrapper">
            <img src={require('../Userimg/ve.jpg')} alt="" />
          </div>
          <div className="usercontent-container">
            <h1 className="usersection-heading">
              IT'S ALWAYS BETTER WHEN IT'S <span>Natural..</span>
            </h1>
            <p className="usersection-paragraph">Eat well Feel good.</p>
          </div>
        </div>
        <div className="userform-section">
          <div className="userform-wrapper">
            <div className="userlogo-container">
              <a href="#not" className="userlogo-container">
                <img src={require('../../../imgs/ecog.png')} alt="Logo" />
              </a>
            </div>
            <h2>Welcome Back! </h2>
            <p>Enter your credentials to access your account.</p>

            <div className="userinput-container">
              <div className="userform-group">
                {errorMessage && <p className="error-message">{errorMessage}</p>}
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  autoComplete="off"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="userform-group">
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
            <br></br>
            <button className="userlogin-btn" onClick={handleLogin} disabled={loading}>
              {loading ? 'Logging In...' : 'Log In'}
            </button>
            <div className="useror-divider">or</div>
            <div className="usersign">
              <Link to="/signup" style={{ textDecoration: 'none' }}>
                <button className="usergoogle-signin">
                  <span>Sign Up</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
