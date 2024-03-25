import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaCartPlus } from 'react-icons/fa';
import { MdOutlineFavorite } from 'react-icons/md';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import baseUrl from '../../../Api';
import LoadingIcons from 'react-loading-icons';
import { useNavigate, useParams } from 'react-router-dom';
import Footer from '../Userfooter/Footer';
import Flexdraw from './Flexdraw';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import {Buffer} from 'buffer';

const Wishlist = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { category } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetchWishlist();
  }, []);

  const fetchWishlist = async () => {
    const userId = localStorage.getItem('userId');
    if (userId) {
      try {
        const response = await axios.get(`${baseUrl}/wish/viewfavor?userId=${userId}`);
        setProducts(response.data);
        setLoading(false); // Set loading to false when data is fetched
      } catch (error) {
        console.error('Error fetching wishlist:', error);
        setLoading(false); // Set loading to false in case of an error
      }
    } else {
      console.error('User ID not found in localStorage');
      setLoading(false); // Set loading to false if userId is not found
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
                  <h2 className="profile-name">{value.productName} 
                   </h2>
                   
                    <p className="price">
                    &nbsp;&nbsp;&nbsp;   Price: {value.productPrice}&nbsp;&nbsp;&nbsp;
                  </p>

                  <p className='description'>
                    Description :  {value.productDescription} 
                  </p>
                </div><br></br>
                <div className="cart">
                <a className="favour" >
                    <MdOutlineFavorite />
                  </a>
                  <a className="tocart" onClick={() => addToCart(value)}>
                    <AddShoppingCartIcon />
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
}

export default Wishlist;
