 'use client'
import React from 'react'
import productVivo from './vivoPhone'
const Vivo = () => {
    const vivoPhone = () => {
        return productVivo.map((item) => (
            <div className=' flex flex-wrap mb-6'>
                <div className={`rounded-lg w-full md:w-[200px] ml-4 md:ml-[200px]`}>
                    <img className=' object-cover rounded-lg h-[200px]' src={item.img} alt="" />
                    <input type="checkbox" defaultChecked className="checkbox ml-4 mt-3 inline-block" />
                    <h1 className=' inline-block ml-2'>Add to campare</h1>
                </div>
                        <div className='w-full ml-4 md:w-[600px] md:ml-8'>
                        <h3 className='text-xl font-semibold   text-black-800'>{item.details}</h3>
                        <button className='bg-green-700 text-[13px] m1-3 font-semibold inline-block text-white rounded-[5px] py-[4px] px-3'>4.2</button>
                        <h1 className=' text-gray-400 font-semibold text-[17px] mt-1 ml-2 inline-block rounded-sm'>  {item.rating}</h1>
                        <h1 className='text-black-400 text-[14px] mt-3  '>{item.memory}</h1>
                        <h3 className='text-black-400 text-[14px]  '> {item.cameraQuality}</h3>
                        <h2 className='text-black-400 text-[14px]   '>{item.display}</h2>
                        <h5 className='text-black-400 text-[14px] '>  {item.bettery}</h5>
                        <h5 className='text-black-400 text-[14px] '> {item.generation}</h5>
                        <h5 className='text-black-400 text-[14px] '> {item.warranty}</h5>
                        
                    </div>
                <div className='w-full ml-4 md:ml-5 md:w-[300px]'>
                        <h3 className='text-2xl font-bold hover:text-yellow-700 text-gray-800'>₹{item.price}</h3>
                        <button className=' text-gray-400 font-semibold line-through pr-2 rounded-sm'>₹{item.dicountoff}</button>
                        <h1 className='text-sm font-semibold text-green-800 inline-block pr-1'> {item.discountpersent} off</h1>
                        <h5 className=''> free delivery </h5>
                        <button className='text-md block bg-violet-200 mt-1  rounded-sm text-violet-700 font-medium w-[190px]'> Top discount of the sale</button>
                        <h1 className='inline-block'>Upto</h1>
                        <h1 className='inline-block ml-1 font-semibold'>₹{item.exchange}</h1>
                        <h1 className='inline-block ml-1'> off on exchange</h1>
                    </div>
            </div>
        ))
    }
    
    return (
        <>
            <h1 className='text-center  text-3xl font-bold mb-8'>Today's Sky story</h1>
            <div className="flex flex-wrap mx-auto">
                {/* {fullde()} */}
                {vivoPhone()}
            </div>
        </>)
    
    }

export default Vivo