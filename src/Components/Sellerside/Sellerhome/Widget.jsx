import React, { useEffect, useState } from 'react';
import "./widget.scss";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { Link } from 'react-router-dom';
import baseUrl from '../../../Api';
import axios from 'axios';

const Widget = () => {
  const [orders, setOrders] = useState([]); 
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    fetchOrders();
    fetchProducts();
  }, []);

  const fetchOrders = async () => {
    const sellerId = localStorage.getItem('sellerId');
    if (sellerId) {
      try {
        const response = await axios.get(`${baseUrl}/sellerview/sellervieworder?sellerId=${sellerId}`);
        setOrders(response.data);
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    } else {
      console.error('Seller ID not found in localStorage');
    }
  };
  
  const fetchProducts = async () => {
    const sellerId = localStorage.getItem('sellerId');
    if (sellerId) {
      try {
        const response = await axios.get(`${baseUrl}/product/productview?sellerId=${sellerId}`);
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    } else {
      console.error('Seller ID not found in localStorage');
    }
  };

  const totalProducts = products.length;
  const totalOrders = orders.length;

  return (
    <div>
      <div className='widget'>
        <div className="widgetleft">
          <span className="title">Product</span>
          <span className="counter">Total Products: {totalProducts}</span>
          <span className="link"><Link to="/productlist">View All Products<KeyboardArrowUpIcon /></Link></span>
        </div>
        <div className="widgetright">
          <ShoppingCartOutlinedIcon className='icon34'/>
        </div>
      </div>

      <br />

      <div className='widget'>
        <div className="widgetleft">
          <span className="title">Orders</span>
          <span className="counter">Total Orders: {totalOrders}</span>
          <span className="link"><Link to='/sellerorder'>View All Orders<KeyboardArrowUpIcon /></Link></span>
        </div>
        <div className="widgetright">
          <CurrencyRupeeIcon className='icon44' />
        </div>
      </div>
    </div>
  );
}

export default Widget;
