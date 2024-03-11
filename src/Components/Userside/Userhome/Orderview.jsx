import React, { useEffect, useState } from 'react';
import axios from 'axios';
import moment from 'moment';
import { Link } from 'react-router-dom';
import baseUrl from '../../../Api';
import Flexdraw from './Flexdraw';
import Footer from '../Userfooter/Footer';

const Orderview = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchOrders(); // Fetch orders once on component mount
  }, []);
   
  const fetchOrders = async () => {
    const userId = localStorage.getItem('userId');
    if (userId) {
      try {
        const response = await axios.get(`${baseUrl}/sellerview/myorder?userId=${userId}`);
        setOrders(response.data);
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    } else {
      console.error('userID not found in localStorage');
    }
  };
  

  return (
    <div className="midall">
      <Flexdraw />
      <br />
      <h2 className="hd">My Orders</h2>
      {orders.length === 0 ? (
        <p className='nocart'>No items in the orders...!</p>
      ) : (
        <div className="cart-box">
          <table>
            <thead>
              <tr>
                <th>Product Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Description</th>
                <th>Status</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((item, index) => (
                <tr key={index}>
                  <td>
                    <Link to={`/products/${item.productId}`}>
                      {item.productName}
                    </Link>
                  </td>
                  <td>{item.productPrice}</td>
                  <td>{item.productQuantity}</td>
                  <td>{item.productDescription}</td>
                  <td>{item.status}</td>
                  <td>{item.orderDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      <div className="homefooterbottom"></div>
      <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> 
      <Footer />
    </div>
  );
};

export default Orderview;
