import React, { useEffect } from 'react'
import axios from 'axios';

const Service = () => {
    useEffect(()=>{
        console.log("Service component mounted")
        return ()=>{
            console.log("Service component unmounted")
        }
    });
const PostProducts = ()=>{
    const api = ("https://fakestoreapi.com/products");
    axios
        .post(api, {
        title: 'test product',
        price: 13.5,
        description: 'lorem ipsum set',
        image: 'https://i.pravatar.cc',
        category: 'electronic'
        })
        .then(
        (products)=>{
            console.log(products);
        })
        .catch(err=>console.log(err));
    };
  return (
    <div>
      <button onClick={PostProducts} 
        className='bg-blue-400 tracking-wider m-4 p-2 rounded text-zinc-100'>
          Post the api data</button> 
    </div>
  )
}

export default Service
