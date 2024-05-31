import React from 'react'
import Card from './Card'
function Cards({user, handleRemoveId}) {
  return (
    <div className='w-full h-96 max-h-96 overflow-auto p-4 flex justify-center flex-wrap gap-4'>
      {
        user.map((item, index) => {
          return <Card key={index} item={item} id = {index}
            handleRemoveId={handleRemoveId}/>
        })
      }
    </div>
  )
}

export default Cards
