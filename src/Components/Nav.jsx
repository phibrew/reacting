import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <nav>
        {/* <a href="/home">Home</a> */}
        <div className='flex justify-center gap-5 text-xl'>
          <NavLink style={(e)=> {
            return {
              color: e.isActive ? 'tomato' : ''
            };
          }}  
          to={"/"}>Home</NavLink>
          <NavLink className={(e)=>{
            return [
              e.isActive? 'text-red-400' : '',
              e.isActive? 'font-bold' : ''
            ].join(' ');
          }}
          to={"/user"}>User</NavLink>
          <NavLink className={(e)=>{
            return [
              e.isActive? 'text-red-400' : '',
              e.isActive? 'font-bold' : ''
            ].join(' ');
          }} 
          to={"/about"}>About</NavLink>
        </div>
      </nav>
  )
}

export default Nav
