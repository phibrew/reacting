import React from 'react'

  function Card({item, id, handleRemoveId}) {
    const {name, email, image} = item;
    return (
      <>
        {
          console.log(image)
        }
        <div className='w-48 h-56 bg-white flex flex-col items-center rounded-md'>
          <div className='image w-[3vw] h-[3vw] m-1 bg-zinc-200 rounded-full overflow-hidden'>
          <img className='w-full h-full object-cover' src={image}/>
          </div>
          <h1 className='text-xl font-semibold text-center leading-none'>{name}</h1>
          <h3 className='opacity-60'>{email}</h3>
          <p className='text-center font-semibold leading-1 tracking-tight'>Lorem, ipsum dolor elit. Labore, voluptate! Similique laboriosam tempore.</p>
          <button onClick={()=>handleRemoveId(id)} className='bg-red-600 rounded-full px-2 py-1 m-2 text-white'>Remove it</button>
        </div>
      </>
  )
}

export default Card
