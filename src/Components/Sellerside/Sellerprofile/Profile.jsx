import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './profile.scss';
import Sellernavbar from '../Sellerhome/Sellernavbar';
import Chart from '../Sellerhome/Chart';
import { useParams } from 'react-router-dom';
import baseUrl from '../../../Api';

const Profile = () => {
  const { id } = useParams();
  const [profile, setProfile] = useState(null);
  const [sellerId, setSellerId] = useState(null);

  useEffect(() => {
    setSellerId(id); // Set sellerId state with the id from params
  }, [id]);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get(`${baseUrl}/sauth/profileview/${id}`);
        setProfile(response.data);
      } catch (error) {
        console.error('Error fetching profile:', error);
      }
    };

    fetchProfile();
  }, [sellerId]);

  // Fetch profile data again when navigating back to the profile page
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get(`${baseUrl}/sauth/profileview/${id}`);
        setProfile(response.data);
      } catch (error) {
        console.error('Error fetching profile:', error);
      }
    };

    // Check if the profile data is already fetched to avoid unnecessary requests
    if (!profile || profile._id !== id) {
      fetchProfile();
    }
  }, [id, profile]);

  return (
    <div className='single'>
      <div className='singleContainer'>
      <Sellernavbar sellerId={sellerId} />
        <div className="top">
          <div className="left">
            <h1 className="title">PROFILE</h1>
            {profile && (
              <div className="details">
                <h1 className="itemTitle">{profile.name}</h1>
                <div className="detailItem">
                  <span className="itemKey">Email :&nbsp;&nbsp;</span>
                  <span className="itemValue">{profile.email}</span><br></br>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone :&nbsp;&nbsp;</span>
                  <span className="itemValue">{profile.phone}</span><br></br>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address :&nbsp;&nbsp;</span>
                  <span className="itemValue">{profile.address}</span>
                </div>
              </div>
            )}
          </div>
          <div className="right">
            <Chart aspect={3/1} title="Last Transactions" />
          </div>
        </div>
        <div className="bottom">
          <h1 className="title">Recently Joined</h1>
        </div>
      </div>
    </div>
  );
}

export default Profile;
