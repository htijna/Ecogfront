import React, { useState } from 'react';
import axios from 'axios';
import baseUrl from '../../../Api';

import { TextField } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';

const Selleredit = ({ profile, onUpdateSuccess, onCancel }) => {
  // State management
  const [formData, setFormData] = useState(profile);
  const { sellerId } = useParams(); // Get sellerId from URL params
  const navigate = useNavigate();

  // Event handler for form input changes
  const handleInputChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Event handler for form submission
  const handleFormSubmit = e => {
    e.preventDefault();
    const sellerId = localStorage.getItem('sellerId');
    if (sellerId) {
      axios
        .put(`${baseUrl}/sauth/editseller/${sellerId}`, formData) // Update API endpoint
        .then(response => {
          onUpdateSuccess(response.data);
          // Display success message
          alert('Profile updated successfully');
          // Navigate to the profile page
          navigate(`/profile/${sellerId}`); // Navigate to the correct route
        })
        .catch(err => {
          console.error('Error updating seller profile:', err);
          // Display error message
          alert('Failed to update profile. Please try again.');
        });
    }
  };

  // Render function
  return (
    <div>
      <div className='background-img'>
        <div className='user-profile-form'>
          <form onSubmit={handleFormSubmit} className="form-grid">
            {/* Input fields */}
            <label>Name : &nbsp;
              <TextField
                id="outlined-basic"
                variant="outlined"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Name"
                required
                className='qwe'
              />
            </label>
             
            <label>Mobile No :&nbsp;
              <TextField
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Phone"
                required
                className='qwe'
              />
            </label>

            <label>Email :&nbsp;&nbsp;&nbsp;
              <TextField
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email"
                required
                className='qwe'
              />
            </label>
          
            <label>Address : 
              <br></br>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <textarea rows={3}
                type="text"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                placeholder="Address"
                required
                className='zxc'
              />
            </label>
           
            <button type="submit" className='adbc'>Update Profile</button>
            <button type="button" className='adbc' onClick={onCancel}>Cancel</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Selleredit;
