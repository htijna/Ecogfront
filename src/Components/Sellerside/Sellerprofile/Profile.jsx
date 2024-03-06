import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './profile.scss';
import Sellernavbar from '../Sellerhome/Sellernavbar';
import Chart from '../Sellerhome/Chart';
import baseUrl from '../../../Api'; // Assuming you have the baseUrl imported
import { useParams } from 'react-router-dom';

const Profile = () => {
  const [profile, setProfile] = useState(null); // Initialize profile state as null
  const { id } = useParams(); // Get the id parameter from the route URL

  console.log("ID parameter:", id); // Log the value of the id parameter

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get(`${baseUrl}/sauth/profileview/${id}`);
        setProfile(response.data);
      } catch (error) {
        console.error('Error fetching seller profile:', error);
        // Handle error
      }
    };

    fetchProfile();
  }, [id]); // Fetch profile whenever the id parameter changes

  return (
    <div className='single'>
      <div className='singleContainer'>
        <Sellernavbar />
        <div className="top">
          <div className="left">
            <h1 className="title">PROFILE</h1>
            {profile !== null && (
              <div className="details">
                <h1 className="itemTitle">{profile.name}</h1>
                <div className="detailItem">
                  <span className="itemKey">Email :</span>
                  <span className="itemValue">{profile.email}</span><br />
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone :</span>
                  <span className="itemValue">{profile.phone}</span><br />
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address :</span>
                  <span className="itemValue">{profile.address}</span>
                </div>
              </div>
            )}
          </div>
          <div className="right">
            <Chart aspect={3 / 1} title="Last Transactions" />
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
