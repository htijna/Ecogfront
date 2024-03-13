import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { AreaChart, Area, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import baseUrl from '../../../Api';

const Chart = ({ aspect, title }) => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    fetchOrders();
  }, []);
  
  const fetchOrders = async () => {
    const sellerId = localStorage.getItem('sellerId');
    if (sellerId) {
      try {
        const response = await axios.get(`${baseUrl}/sellerview/sellervieworder?sellerId=${sellerId}`);
        setChartData(response.data);
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    } else {
      console.error('seller ID not found in localStorage');
    }
  };

  return (
    <div className='chart'>
    <div className="title">{title} </div>
     <ResponsiveContainer width="100%" aspect={aspect} >

     <AreaChart width={730} height={250} data={chartData}
margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
<defs>
  <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
    <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
    <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
  </linearGradient>
 
</defs>
<XAxis dataKey="name" stroke='grey' interval={0}  tickMargin={10} />


<CartesianGrid strokeDasharray="3 3" className='chartGrid' />
<Tooltip />

<Area type="monotone" dataKey="Total" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />


</AreaChart>
    </ResponsiveContainer>
  </div>
  )
}

export default Chart;
