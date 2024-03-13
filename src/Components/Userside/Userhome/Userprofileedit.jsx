import React from 'react';
import Flexdraw from './Flexdraw';
import Footer from '../Userfooter/Footer';
import { TextField } from '@mui/material';
import './userprofile.scss'; // Import other styles if needed

const Userprofileedit = () => {
  return (
    <div>
      <Flexdraw /> <h2 className='profile-edit-heading'>Profile Edit</h2>
      <div className='backgrounfimg'>
      <div className='user-profile-form '>
      <br></br>
        <div className='form-group'>
          
          <label>Name</label>
          <TextField id="outlined-basic" variant="outlined" />
        </div><br></br>
        <div className='form-group'>
          <label>Email</label>
          <TextField id="outlined-basic" variant="outlined" />
        </div><br></br>
        <div className='form-group'>
          <label>Mobile No</label>
          <TextField id="outlined-basic" variant="outlined" />
        </div><br></br>
        <div className='form-group'>
          <label>Address</label>
          <TextField
    multiline
    rows={2} id="outlined-basic" variant="outlined"  />
        </div><br></br>
        <button className='adbc'>Update Profile</button>
      </div></div>
      <Footer />
    </div>
  );
};

export default Userprofileedit;
