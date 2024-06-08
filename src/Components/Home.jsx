import React, { useEffect, useState } from 'react'

const Home = () => {
  const [first, setFirst] = useState("This is the first state.");
  const [second, setSecond] = useState("This is the second state.");

  useEffect(()=>{
    console.log("Home component created!");
    return ()=> console.log("Home component destroyed!");
  },[second]);  

  return (
    <div className='p-4 m-auto'>
      <h1>Home</h1>
      <h1>{first}</h1>
      <button onClick={()=>setFirst("First state changed!")} 
      className='bg-sky-200 p-2 rounded text-green-900'
      >First button state change.</button>

      <br /> <br />
      <h1>{second}</h1>
      <button onClick={()=>setSecond("Second state changed!")} 
      className='bg-red-200 p-2 rounded text-blue-900'
      >First button state change.</button>
      {/* <h1 className='text-3xl text-cyan-600 py-3 px-1'>Home</h1> */}
      {/* <p className='p-1 text-sm text-zinc-600'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel alias beatae commodi nostrum. Lorem ipsum dolor sit amet consectetur adipisicing elit. A possimus cumque ipsam in accusantium repudiandae provident sit repellendus eligendi consequatur commodi, nam facere modi, omnis sapiente, vitae explicabo debitis ratione?</p>
      <button className='bg-pink-300 p-1 rounded-md m-2 ml-1 text-zinc-700'>Explore More</button> */}
    </div>
  )
}

export default Home
