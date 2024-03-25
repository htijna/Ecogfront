import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './midepart.scss';
import Banner from './Banner';

import { FaCartPlus } from 'react-icons/fa';
import { MdOutlineFavorite } from 'react-icons/md';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import baseUrl from '../../../Api';
import LoadingIcons from 'react-loading-icons';
import { useNavigate, useParams } from 'react-router-dom';
const Midpart = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { category } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/');
    }
  }, [navigate]);

  useEffect(() => {
    axios.get(baseUrl + "/product/userallproduct")
      .then(response => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  // Slice the products array to get the last four products
  const lastFourProducts = products.slice(-4);

  // Loading spinner component
  const LoadingSpinner = () => (
    <div className="spinner-border text-primary" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  );
  const addToCart = (product) => {
    const userId = localStorage.getItem('userId');
    if (!userId) {
      console.error('User ID not found in localStorage');
      return;
    }
  
    const productDetails = {
      userId: userId,
      productId: product._id,
      sellerId:product.sellerId,
      productName: product.Productname,
      productPrice: product.Productprice,
      productDescription: product.Description,
    };
  
    axios.post(`${baseUrl}/cart/cartnew`, productDetails)
      .then(response => {
        console.log('Item added to cart:', productDetails);
        alert('Adding ...');
        navigate('/cart');
      })
      .catch(error => {
        console.error('Error adding item to cart:', error);
      });
  };
  

  const buyNow = (product) => {
    const userId = localStorage.getItem('userId');
    if (!userId) {
      console.error('User ID not found in localStorage');
      return;
    }
  
    const productDetails = {
      userId: userId,
      productId: product._id,
      sellerId:product.sellerId,
      productName: product.Productname,
      productPrice: product.Productprice,
      productDescription: product.Description
    };
    
    axios.post(`${baseUrl}/ordered/neworder`, productDetails)
      .then(response => {
        console.log('Ordering:', response.data);
        navigate('/oview');
      })
      .catch(error => {
        console.error('Error in Ordering', error);
      });
  };
  

  return (
    <div>
      <Banner />
    
      <section className='newsLetterSection'>
        
        <div className='container-fluid'>  <h2 className='hdd'>Fresh Deals</h2>  
          <div className='box d-flex align-items-center'> 
            {loading ? (
               <div className="loading-animation">
               <LoadingIcons.BallTriangle stroke="green" />
             </div>
            ) : (
              <div className="recentlybodyproduct">
             
                <div className="grid">
               
                  {lastFourProducts.map((value, index) => (
                    <div className="cardproduct" key={index}>
                      <div className="image-container">
                        {value.Photo && <img src={`data:image/jpeg;base64,${value.Photo.data}`} alt="Product" />}
                      </div>
                      <div className="content">
                        <h2 className="profile-name">{value.Productname}
                           </h2>
                        <p className="recentlyquantity">
                        <span className='price'>Price: {value.Productprice}</span>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;Category: {value.prod[0]?.Categoryname}
                        </p>
                        <p className='recentlydescription'>
                          Description :  {value.Description}
                        </p>
                      </div>
                      <br></br>
                      <div className="cart">
                        <a className="favour">
                          <MdOutlineFavorite />
                        </a>
                        <a className="tocart" onClick={() => addToCart(value)}>
                          <FaCartPlus />
                        </a>
                        <a className="buynow" onClick={() => buyNow(value)}>
                          <AiOutlineShoppingCart />
                        </a>
                      </div>
                    </div>
                  ))}
               </div>
              </div>
            )}
          </div> 
        </div>
      </section>
    </div>
  )
}

export default Midpart;
