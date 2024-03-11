import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import baseUrl from '../../../Api';
import Flexdraw from './Flexdraw';

const Userprofile = () => {
  const { id } = useParams();
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const userId = localStorage.getItem('userId');
    
    const fetchData = async () => {
      try {
        if (userId) {
          const response = await axios.get(`${baseUrl}/auth/userprofile?userId=${userId}`);
          console.log(response.data);
          setProfile(response.data);
        }
      } catch (err) {
        setError(err.message);
        console.log('Error fetching user profile:', err);
      }
    };
  
    fetchData();
  
  }, [ setProfile, setError, baseUrl]);
  






  return (
    <div className='single'>
      <div className='singleContainer'>
        <Flexdraw />
        <div className="top">
          <div className="left">
            <h1 className="title">PROFILE</h1>
            {error && <div className="error">{error}</div>}
            {profile && (Array.isArray(profile) ? (
              profile.map((user, index) => (
                <div key={index}>
                  <div className="details">
                    <h1 className="itemTitle">{user.name}</h1>
                    <div className="detailItem">
                      <span className="itemKey">Email :&nbsp;&nbsp;{user.email}</span>
                    </div><br />
                    <div className="detailItem">
                      <span className="itemKey">Phone :&nbsp;&nbsp;{user.phone}</span>
                    </div><br />
                    <div className="detailItem">
                      <span className="itemKey">Address :&nbsp;&nbsp;{user.address}</span>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="details">
                <h1 className="itemTitle">{profile.name}</h1>
                <div className="detailItem">
                  <span className="itemKey">Email :&nbsp;&nbsp;{profile.email}</span>
                </div><br />
                <div className="detailItem">
                  <span className="itemKey">Phone :&nbsp;&nbsp;{profile.phone}</span>
                </div><br />
                <div className="detailItem">
                  <span className="itemKey">Address :&nbsp;&nbsp;{profile.address}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="right">
            {/* Add any additional content for the right section */}
          </div>
        </div>
        <div className="bottom">
          <h1 className="title">Recently Joined</h1>
        </div>
      </div>
    </div>
  );
}

export default Userprofile;
