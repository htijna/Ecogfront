import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Navigate, useLocation } from 'react-router-dom';
import LoadingIcons from 'react-loading-icons';
import { MdOutlineFavorite } from 'react-icons/md';
import { FaCartPlus } from 'react-icons/fa';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import Flexdraw from './Flexdraw';
import Footer from './../Userfooter/Footer'; 
import baseUrl from '../../../Api';
import { Buffer } from 'buffer';
import NotFound from './NotFound';

const SearchResults = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const location = useLocation();
  const [nothingFound, setNothingFound] = useState(false);

  useEffect(() => {
    const query = new URLSearchParams(location.search).get('query');
    setSearchQuery(query);
    if (query) {
      fetchData(query);
    }
  }, [location.search]);

  const fetchData = (query) => {
    // Perform fetch operation based on the search query
    fetch(`http://localhost:5000/product/search?query=${encodeURIComponent(query)}`)
      .then(response => response.json())
      .then(data => {
        setSearchResults(data || []);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
      
  if(nothingFound){
    return (
      <div>
        <Flexdraw/>
        <NotFound/>
        <Footer/>
      </div>
    )
  }
  };
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
      productQuantity: product.Quantity,
      productDescription: product.Description,
    };
  
    axios.post(`${baseUrl}/cart/cartnew`, productDetails)
      .then(response => {
        console.log('Item added to cart:', productDetails);
        alert('Adding ...');
        Navigate('/cart');
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
      productQuantity: product.Quantity,
      productDescription: product.Description
    };
    
    axios.post(`${baseUrl}/ordered/neworder`, productDetails)
      .then(response => {
        console.log('Ordering:', response.data);
        Navigate('/oview');
      })
      .catch(error => {
        console.error('Error in Ordering', error);
      });
  };
  
  return (
    
    <div>
      <Flexdraw />
      <h2>Search Results for "{searchQuery}"</h2>
      
      <div className="bodyproduct">
        <div className="grid">
          {searchResults.map((value, index) => (
            <div className="cardproduct" key={index}>
              <div className="image-container">
              {value.Photo && <img src={`data:image/jpeg;base64,${Buffer.from(value.Photo.data).toString('base64')}`} alt="Product" />}
              </div>
              <div className="content">
                <h2 className="profile-name">{value.Productname} <span className='dashline'>  &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; </span>
                  <span className='price'>Price: ${value.Productprice}</span> </h2>
                <p className="quantity">
                  Qty: {value.Quantity}
                </p>
                <p className='description'>
                  Description :  {value.Description}
                </p>
              </div>
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
      <Footer />
    </div>
  );
};

export default SearchResults;