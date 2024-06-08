import React from 'react';
import axios from 'axios';
import Home from './Components/Home';
import Show from './Components/Show';
import Service from './Components/Service';
import { Routes, Route, Link } from 'react-router-dom';
// import Nav from './Components/Nav'
// import Routing from './Utils/Routing'
// import Cards from './Components/Cards'
// import Form from './Components/Form'

function App(){
  return (
    <div className='w-full h-screen'>
      <nav className='flex justify-center gap-10 text-xl text-blue-700 '>
        <Link to='/' className='hover:text-green-700'>Home</Link>
        <Link to='/service' className='hover:text-green-700'>Service</Link>
        <Link to='/show' className='hover:text-green-700'>Show</Link>
      </nav>    
        {/* <hr className='my-10'/>          */}
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/service' element={<Service/>}/>
        <Route path='/show' element={<Show/>} />
      </Routes>
    </div>  
  );

  // return (
  //   <>  
  //   <div className='w-full h-screen'>
  //     <Nav/>
  //     <Routing/>
  //   </div>
  //   </>
  // );

  // const[user, setUser]=useState([]);
  // const handleFormSubmit = (data)=>{
  //   setUser([...user, data]);
  // }
  // const handleRemoveId = (id)=>{
  //   setUser(user.filter((item, index) => index!=id));
  // }
  // return (
  //   <div className='w-full h-screen p-10 bg-zinc-200 flex flex-col justify-center gap-8'>
  //     <Cards user={user} handleRemoveId={handleRemoveId}/>
  //     <Form handleFormSubmit={handleFormSubmit}/>
  //   </div>
  // );
} 

export default App; 