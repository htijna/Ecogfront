import React, { useEffect, useState } from 'react';
import axios from 'axios';
import baseUrl from '../../../Api';
import Flexdraw from './Flexdraw';
import Footer from '../Userfooter/Footer';
import { LineChart } from '@mui/x-charts';
import { BarChart } from '@mui/icons-material';
import Userwidget from './Userwidget';
import profilePhoto from '../Userimg/profilephoto.jpg'
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PlaceIcon from '@mui/icons-material/Place';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
const Userprofile = () => {
  
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const userId = localStorage.getItem('userId');
    if (userId) {
      axios.get(`${baseUrl}/auth/userprofile?userId=${userId}`)
        .then(response => {
          setProfile(response.data);
        })
        .catch(err => {
          setError(err.message);
          console.error('Error fetching user profile:', err);
        });
    }
  }, []); // Add an empty dependency array

  return (
    <div><Flexdraw/>
    <div className='single'>
      <div className='singleContainer'>
        
        <div className="top">
          <div className="left">
            <h1 className="title">PROFILE</h1>
            {error && <div className="error">{error}</div>}
            {profile && (
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
                <button  className='updatepro'>Update Profile</button>
              </div>
            )}
          </div>
          <div className="right">
         
  <h3>Dashboard</h3>
  
  <Userwidget/>
       

          </div>
        </div>
       
        
      </div>
    </div>
<Footer/>
    </div>
  );
}

export default Userprofile;
