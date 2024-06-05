import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const UserDetail = () => {
  const e = useParams();
  const navigate = useNavigate();
  const HandleGoBack = ()=>{
    navigate(-1);
    //also can wrtie the previous url into it to go back...
  }
    return (
    <div className='m-auto mt-10'>
      <h1 className='text-3xl text-cyan-600 py-3 px-1'>UserDetail</h1>
      <h2 className='px-1 text-lg '>Hi! {e.name}</h2>
      <button onClick={HandleGoBack} 
      className='bg-pink-300 p-1 rounded-md m-2 ml-1 text-zinc-700'>
        Go Back
      </button>
    </div>
  )
}

export default UserDetail
