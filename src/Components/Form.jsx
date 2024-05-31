import React from 'react'
import { useForm } from 'react-hook-form';

function Form({handleFormSubmit}) {
  const {register, handleSubmit} = useForm();
  return (
    <div className='mt-10 flex justify-center '>
        <form className='flex gap-10' onSubmit={handleSubmit(data=>handleFormSubmit(data))}>
          <input {...register('name')} className='px-4 py-1 rounded text-base font-semibold outline-none' type="text" placeholder='name'/>
          <input {...register('email')} className='px-4 py-1 rounded text-base font-semibold outline-none' type="text" placeholder='email'/>
          <input {...register('image')} className='px-4 py-1 rounded text-base font-semibold outline-none' type="text" placeholder='image url'/>
          <input className='bg-blue-500 px-5 rounded-md text-white font-semibold' type="submit" />
        </form>
    </div>
  )
}

export default Form
