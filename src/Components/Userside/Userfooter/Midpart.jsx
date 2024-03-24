import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './midepart.scss';
import Banner from './Banner';

import { FaCartPlus } from 'react-icons/fa';
import { MdOutlineFavorite } from 'react-icons/md';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import baseUrl from '../../../Api';
import LoadingIcons from 'react-loading-icons';
const Midpart = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

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

  return (
    <div>
      <Banner />
      <h2 className='hd'>Fresh Deals</h2>
      <section className='newsLetterSection'>
        <div className='container-fluid'>
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
                        <h2 className="profile-name">{value.Productname} <span className='dashline'>  &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; </span>
                          <span className='price'>Price: {value.Productprice}</span> </h2>
                        <p className="recentlyquantity">
                          Quantity: {value.Quantity}&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;Category: {value.prod[0]?.Categoryname}
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
                        <a className="tocart" >
                          <FaCartPlus />
                        </a>
                        <a className="buynow" >
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
