import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Flexslide from './Components/Userside/Userhome/Flexslide';
import Home from './Components/Sellerside/Sellerhome/Home';
import Usersignup from './Components/Userside/Userlogin/Usersignup';
import Footer from './Components/Userside/Userfooter/Footer';
import Midpart from './Components/Userside/Userfooter/Midpart';
import Cart from './Components/Userside/Userhome/Cart';
import CategoryFilter from './Components/Userside/Userfilter/CategoryFilter';
import CategoryPage from './Components/Userside/Userfilter/CategoryPage';
import Sellerlogin from './Components/Sellerside/Sellerlogin/Sellerlogin';
import Sellersignup from './Components/Sellerside/Sellerlogin/Sellersignup';
import Login from './Components/Userside/Userlogin/Login';
import Addproduct from './Components/Sellerside/Selleradd/Addproduct';
import Recentlyadd from './Components/Sellerside/Selleradd/Rcentlyadd';
import Productlist from './Components/Sellerside/Selleradd/Productlist';
import Adminlogin from './Components/Adminside/Adminlogin/Adminlogin';

import Adminviewproduct from './Components/Adminside/Adminadd/Adminviewproduct';
import Addcategory from './Components/Adminside/Adminadd/Addcategory';

import CategoryView from './Components/Adminside/Adminadd/Categoryview';
import Productview from './Components/Sellerside/Selleradd/Productview';

import Order from './Components/Userside/Userhome/Order';
import Aboutus from './Components/Userside/Userhome/Aboutus';
import Categoryedit from './Components/Adminside/Adminadd/Categoryedit';
import Incomingorder from './Components/Sellerside/Selleradd/Incomingorder';
import Profile from './Components/Sellerside/Sellerprofile/Profile';
import Orderview from './Components/Userside/Userhome/Orderview';
import Usersentry from './Components/Adminside/Adminadd/Usersentry';
import Sellerentry from './Components/Adminside/Adminadd/Sellerentry';
import Userprofile from './Components/Userside/Userhome/Userprofile';

function App() {
  const sellerId = localStorage.getItem('sellerId');
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* Userside */}
          <Route path='/signup' element={<Usersignup />} />
          <Route path='/' element={<Login />} />
          <Route path='/userside/:id' element={<Flexslide /> } />
          <Route path='/footer' element={<Footer />} />
          <Route path='/mid' element={<Midpart />} />
          <Route path='/cart' element={ <Cart /> } />
           <Route path='/oview' element={<Order /> } />
           <Route path='/about' element={<Aboutus />  }/>
         <Route path='/filter' element={<CategoryFilter />} />
          <Route path='/category/:category' element={ <CategoryPage />} />
          <Route path='/order' element={ <Orderview /> } />

          <Route path='/uprofile/:id' element={<Userprofile method='get' />} />
          

          
          {/* Sellerside */}
          <Route path='/seller/:id' element={<Home />} />
          <Route path='/sellersignup' element={<Sellersignup />} />
          <Route path='/sellerlogin' element={<Sellerlogin />} />
          <Route path='/add' element={<Addproduct method='post' />} />
          <Route path='/pview/:id' element={<Productview method='get' sellerId={sellerId} />} />
          <Route path='/productlist' element={<Productlist method='get'/>} />
          <Route path='/products' element={<Recentlyadd />} />
          <Route path="/profile/:id" element={<Profile />} />
          <Route path='/sellerorder' element={<Incomingorder />} />

          {/* Admin */}
          <Route path='/alogin' element={<Adminlogin />} />
          
          <Route path='/category'element={<Addcategory method='post'/>} />
          <Route path='/viewcategory' element={<CategoryView method='get' />} />
          <Route path='/adminallproduct' element={<Adminviewproduct />} />   
          <Route path='/userlog' element={<Usersentry />} />  
          <Route path='/sellerlog' element={<Sellerentry />} /> 
          <Route path='/cedit' element={<Categoryedit />} />     
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;