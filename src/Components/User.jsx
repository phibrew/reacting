import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const User = () => {
  return (
    <div className='w-1/2 m-auto mt-10'>
      <h1 className='text-3xl text-cyan-600 py-3 px-1'>User</h1>
      <button className='bg-pink-300 p-1 rounded-md m-2 ml-1 text-zinc-700'>Explore More</button>
      <div className='flex flex-col w-1/2 gap-2'>
        <Link className='text-2xl bg-zinc-300 p-3 rounded hover:bg-red-400' to={"/user/Chimp"}>Chimp</Link>
        <Link className='text-2xl bg-zinc-300 p-3 rounded hover:bg-red-400' to={"/user/Munks"}>Munks</Link>
        <Link className='text-2xl bg-zinc-300 p-3 rounded hover:bg-red-400' to={"/user/Oueer"}>Queer</Link>
      </div>
      <hr />
      <Outlet/>
    </div>
  )
}

export default User
