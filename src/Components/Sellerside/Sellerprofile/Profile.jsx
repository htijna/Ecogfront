import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './profile.scss';
import Sellernavbar from '../Sellerhome/Sellernavbar';
import Widget from '../Sellerhome/Widget';
import profilePhoto from './profilephoto.jpg'
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PlaceIcon from '@mui/icons-material/Place';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

import baseUrl from '../../../Api';
import Footer from '../../Userside/Userfooter/Footer';
import Selleredit from './Selleredit';

const Profile = () => {
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState(null);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    const sellerId = localStorage.getItem('sellerId');
    if (sellerId) {
      axios.get(`${baseUrl}/sauth/sellerprofile?sellerId=${sellerId}`)
        .then(response => {
          setProfile(response.data);
        })
        .catch(err => {
          setError(err.message);
          console.error('Error fetching Seller profile:', err);
        });
    }
  }, []); // Add an empty dependency array

  const handleEditProfile = () => {
    setEditMode(true);
  };

  const handleUpdateSuccess = updatedProfile => {
    setProfile(updatedProfile);
    setEditMode(false);
  };

  const handleCancel = () => {
    setEditMode(false);
  };

  return (
    <div>
      <Sellernavbar />
      <div className='single'>
        <div className='singleContainer'>
          <div className="top">
            <div className="left">
              <h1 className="title">PROFILE</h1>
              {error && <div className="error">{error}</div>}
              {profile && !editMode && (
                <div className="details">
                  <h1 className="itemTitle">Hello 👋 {profile.name}</h1>
                  <br></br>
                  <div className="detailItem">
                    <span className="itemKey"><MailOutlineIcon className='iccc'/>&nbsp;&nbsp;Email :&nbsp;&nbsp;{profile.email}</span>
                  </div><br />
                  <div className="detailItem">
                    <span className="itemKey"><LocalPhoneIcon className='iccc' />&nbsp;&nbsp;Phone :&nbsp;&nbsp;{profile.phone}</span>
                  </div><br />
                  <div className="detailItem">
                    <span className="itemKey"><PlaceIcon className='iccc' />&nbsp;&nbsp;Address :&nbsp;&nbsp;{profile.address}</span>
                  </div>
                  <div className='imgprofiles'>
                    <img src={profilePhoto} className='imgprofiles'/>
                  </div>
                  <button className='updatepro' onClick={handleEditProfile}>Edit Profile</button>
                </div>
              )}
              {editMode && (
                <Selleredit
                  profile={profile}
                  onUpdateSuccess={handleUpdateSuccess}
                  onCancel={handleCancel}
                />
              )}
            </div>
            <div className="right">
              <h3>Dashboard</h3>
              <Widget/>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Profile;
