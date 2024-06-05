import React from 'react';
import Nav from './Components/Nav'
import Routing from './Utils/Routing'
// import Cards from './Components/Cards'
// import Form from './Components/Form'

function App(){
  return (
    <>  
    <div className='w-full h-screen'>
      <Nav/>
      <Routing/>
    </div>
    </>
  );

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