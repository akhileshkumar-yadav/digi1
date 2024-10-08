'use client'
import React from 'react'

const EventHandling = () => {
  return (
    <>
     <div className='flex flex-col items-center ' >
        <h1 className='text-2xl text-center mt-10'>EventHandling </h1>
        <button className='px-3 mb-20 mt-4 bg-slate-500' onClick={() => {alert("this is notification")}}>Click Me</button>
        </div>   
    </>
  )
}

export default EventHandling