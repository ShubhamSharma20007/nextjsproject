"use client"
import React from 'react'
import Header from '@/app/components/header'
import { useEffect } from 'react'
const page = ({params}) => {
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
     
      
      <h1>I am page section {params.id}</h1>
    </div>
  )
}

export default page
