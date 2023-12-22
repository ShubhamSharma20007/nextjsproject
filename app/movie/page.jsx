"use client"
import React, { useEffect } from 'react'
import Card from '../components/Card'
const movie = () => {
  const [data, setData] = React.useState([])

  const fecthData =async()=>{

const url = 'https://dummyjson.com/products';
try {
	const response = await fetch(url,{
    method:'GET',
    headers:{
      'Content-Type':'application/json',
      'Accept':'application/json'
    }
  });
	const result = await response.json();
 
	setData(result.products)
} catch (error) {
	console.error(error);
}
  }
  useEffect(()=>{
    fecthData();
  })


  return (
    <div>
      <Card data = {data}></Card>
   
    </div>
  )
}

export default movie
