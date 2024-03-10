import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { FaCartPlus } from 'react-icons/fa';
import { MdOutlineFavorite } from 'react-icons/md';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import LoadingIcons from 'react-loading-icons';
import Flexdraw from '../Userhome/Flexdraw';
import Footer from '../Userfooter/Footer';
import baseUrl from '../../../Api';
import './products.scss';

const CategoryPage = () => {
  const { category } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/');
    }
  }, [navigate]);

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`${baseUrl}/product/productview`)
      .then(response => {
        const filteredProducts = response.data.filter(
          item => item.prod && item.prod[0]?.Categoryname.toLowerCase() === category.toLowerCase()
        );
        setProducts(filteredProducts);
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
        setLoading(false);
      });
  }, [category]);

  const addToCart = (product) => {
    const userId = localStorage.getItem('userId');
    if (!userId) {
      console.error('User ID not found in localStorage');
      return;
    }
  
    const productDetails = {
      userId: userId,
      productId: product._id,
      productName: product.Productname,
      productPrice: product.Productprice,
      productQuantity: product.Quantity,
      productDescription: product.Description,
    };
  
    axios.post(`${baseUrl}/cart/cartnew`, productDetails)
      .then(response => {
        console.log('Item added to cart:', response.data);
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
      productName: product.Productname,
      productPrice: product.Productprice,
      productQuantity: product.Quantity,
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
      <Flexdraw />
      {loading ? (
        <div className="loading-animation">
          <LoadingIcons.BallTriangle stroke="green" />
        </div>
      ) : (
        <div>
          <h1 className="headcate">{category}</h1>
          <div className="bodyproduct">
            <div className="grid">
              {products.map((value, index) => (
                <div className="cardproduct" key={index}>
                  <div className="image-container">
                    {value.Photo && <img src={`data:image/jpeg;base64,${value.Photo.data}`} alt="Product" />}
                  </div>
                  <div className="content">
                    <h2 className="profile-name">{value.Productname} <span className='dashline'>  &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; </span>
                      <span className='price'>Price: {value.Productprice}</span> </h2>
                    <p className="quantity">
                      Quantity: {value.Quantity}&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;Category: {value.prod[0]?.Categoryname}
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
      )}
    </div>
  );
};

export default CategoryPage;
