import React, { useState, useEffect } from 'react';
import Adminnav from '../Adminhome/Adminnav';
import './adminviewproduct.scss';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, CircularProgress } from '@mui/material';
import { Buffer } from 'buffer';
import LoadingIcons from 'react-loading-icons';
const Adminviewproduct = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch('http://localhost:5000/product/adminproductview/')
      .then(response => response.json())
      .then(data => {
        // Handle the fetched data
        setProducts(data || []); // Ensure data is an array or initialize as an empty array
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setError(error.message);
        setLoading(false);
      });
  };

  return (
    <div className='adminprolist'>
      <div className="adminprolistContainer">
        <Adminnav />
        <div>
          <h2 className='adhead'> Product View</h2>
          {loading ? (
           <div className="loading-animation">
           <LoadingIcons.BallTriangle stroke="green" />
         </div>
          ) : (
            <div className='bb'>
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Image</TableCell>
                      <TableCell>ProductName</TableCell>
                      <TableCell>Price</TableCell>
                      <TableCell>Quantity</TableCell>
                      <TableCell>Description</TableCell>
                      <TableCell>Category</TableCell>
                      <TableCell>Seller</TableCell>
                      <TableCell>Status</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {products.map((value, index) => (
                      <TableRow key={index}>
                        <TableCell className='imgad' >
                          {value.Photo && <img src={`data:image/jpeg;base64,${value.Photo.data}`} alt="Product" />}
                        </TableCell>
                        <TableCell>{value.Productname}</TableCell>
                        <TableCell>{value.Productprice}</TableCell>
                        <TableCell>{value.Quantity}</TableCell>
                        <TableCell>{value.Description}</TableCell>
                        <TableCell>{value.category[0]?.Categoryname || 'No Category'}</TableCell>
                        <TableCell>{value.seller[0]?.name || 'Unknown Seller'}</TableCell>
                        <TableCell>{value.Status}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Adminviewproduct;
