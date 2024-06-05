import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '/src/Components/Home.jsx'
import User from '/src/Components/User.jsx'
import About from '/src/Components/About.jsx'
import UserDetail from '../Components/UserDetail'

const Routing = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/user" element={<User />}>
          <Route path="/user/:name" element={<UserDetail />}></Route>
        </Route>
        <Route path="/about" element={<About />}></Route>        
    </Routes>
  )
}

export default Routing
