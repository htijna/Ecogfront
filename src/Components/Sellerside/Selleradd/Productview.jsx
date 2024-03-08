import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import ToggleOffIcon from '@mui/icons-material/ToggleOff';
import ToggleOnIcon from '@mui/icons-material/ToggleOn';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import baseUrl from '../../../Api';

import {Buffer} from 'buffer';
import './product.scss'
import Productedit from './Productedit';
const Productview = () => {
  const [product, setProduct] = useState([]);
  const [selected, setSelected] = useState();
  const [update, setUpdate] = useState(false);

  useEffect(() => {
    axios.get(baseUrl + "/product/productview")
      .then(response => {
        console.log(response.data)
        setProduct(response.data)
      })
      .catch(err => console.log(err))
  }, [])

  const deletevalues =(id)=>{
    console.log("Inactive",id)
    axios.put(baseUrl + "/product/delete/"+id)
    .then((response)=>{
        alert("Inactive")
    window.location.reload(false);
    })
}

const activevalues =(id)=>{
  console.log("Active",id)
  axios.put(baseUrl + "/product/active/"+id)
  .then((response)=>{
      alert("ACTIVE")
  window.location.reload(false);
  })
}



  const updatevalues = (value) => {
    console.log("updated", value);
    setSelected(value);
    setUpdate(true);
  };

  var[productimg,setProductimg] = useState([]);

  // useEffect(()=>{
  //     axios.get(baseUrl+'/product/productnew')
  //     .then(response =>{
  //        setProductimg(response.data)
  //     })
  //     .catch(err=>console.log(err))
  // },[])

  
  var result=
    <div className='bb'>
      
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ProductName</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Category</TableCell>
              <TableCell>Image</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Edit</TableCell>
              <TableCell>Active</TableCell>
              <TableCell>Inactive</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {product.map((value, index) => {
              return (
                <TableRow key={index}>
                  <TableCell>{value.Productname}</TableCell>
                  <TableCell>{value.Productprice}</TableCell>
                  <TableCell>{value.Quantity}</TableCell>
                  <TableCell>{value.Description}</TableCell>
                  <TableCell>{value.prod[0].Categoryname}</TableCell>
                  <TableCell>
                     <img src={`data:image/jpeg;base64,${Buffer.from(value.Photo.data)}`} className='imgpro' alt='Error' />  </TableCell>
                  <TableCell>{value.Status}</TableCell>
                  <TableCell><ModeEditOutlineIcon color='success' onClick={() => updatevalues(value)} /></TableCell>
                  <TableCell><ToggleOnIcon color='primary' onClick={() => activevalues(value._id)} /></TableCell>
                  <TableCell><ToggleOffIcon color='error' onClick={() => deletevalues(value._id)} /></TableCell>
                  
                  
               
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
    if(update)
    {
      result=<Productedit data={selected} method='put'/>
    }
    return (result)
  
}

export default Productview;