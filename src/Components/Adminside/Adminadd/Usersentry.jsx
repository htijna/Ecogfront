import React, { useState, useEffect } from 'react';
import './addcategory.scss'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Adminnav from '../Adminhome/Adminnav';

import baseUrl from '../../../Api';

import LoadingIcons from 'react-loading-icons';

const Usersentry = () => {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch('http://localhost:5000/auth/userlog/')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        return response.json();
      })
      .then(data => {
        console.log('Fetched data:', data);
        setRows(data); // Assuming data is an array of rows
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setError(error.message);
        setLoading(false);
      });
  };

  if (loading) {
    return (
      <div>
        <Adminnav />
        <h2 className='gridhi'>User  Log</h2>
        <div className='load'>Loading...</div>
        <div className="loading-animation">
          <LoadingIcons.BallTriangle stroke="green" />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <Adminnav />
        <h2 className='gridhi'>Error: {error}</h2>
      </div>
    );
  }

  return (
    <div>
      <Adminnav />
      <h2 className='gridhi'>User  Log</h2>
      <TableContainer component={Paper} className='table'>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className='tableCell'>User ID</TableCell>
              <TableCell className='tableCell'>Name</TableCell>
              <TableCell className='tableCell'>Email</TableCell>
              <TableCell className='tableCell'>Address</TableCell>
              <TableCell className='tableCell'>Mobile NO</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Array.isArray(rows) && rows.map((row) => (
              <TableRow key={row._id}> {/* Add key prop */}
                <TableCell className='tableCell'> {row._id}</TableCell>
                <TableCell className='tableCell'>
                  <div className="cellWrapper">
                    <img src={row.img} alt="" className="image" />
                    {row.name}
                  </div>
                </TableCell>
                <TableCell className='tableCell'>{row.email}</TableCell>
                <TableCell className='tableCell'>{row.address}</TableCell>
                <TableCell className='tableCell'>{row.phone}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      
    </div>
  );
};

export default Usersentry;
