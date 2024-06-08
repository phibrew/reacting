import React, { useState } from 'react'
import axios from 'axios';

const Show = () => {
  const [products, setProducts] = useState([]);
  const GetProducts = ()=>{
    const api = ("https://fakestoreapi.com/products");
    axios
      .get(api)
      .then(
      (products)=>{
        setProducts(products.data);
        console.log(products);
      }
    ).catch(err=>console.log(err));
  };
  return (
    <div>
        <button onClick={GetProducts} 
        className='bg-red-400 tracking-wider m-4 p-2 rounded text-zinc-100'>
          Call the api data</button>
        <ul className='m-4'>
          {products.length > 0 ? (
            products.map((p, i) => (
              <li className='rounded bg-red-300 w-1/4 mt-2 p-2 text-cyan-800' key={i}>{p.title}</li>
            ))
          ) : <h1>Loading...</h1>}
        </ul>
    </div>
  )
}

export default Show
