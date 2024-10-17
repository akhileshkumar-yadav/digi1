'use client'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import axios from 'axios'
const ManageProduct = () => {
    const [productList,setProductList] = useState([])
    const fetchProductList = () => {
        axios.get('http://localhost:5000/prod/getall')

            .then((res) => {
                console.log(res.status);
                setProductList(res.data)
            }).catch((err) => {
                console.log(err)
                toast.error('failed to fetch user list')

            });

    }
     
        useEffect(() => {
            fetchProductList()
        },[])

    
    return (
        <>
            <h1 className='text-center  text-3xl font-bold mb-8'>Today's Sky story</h1>
            <div className="flex flex-wrap mx-auto">
            <div className='w-full  mb-6'>
            <div className={`rounded-lg shadow-lg p-4 mx-4 `}>
               { 
               productList.map((prod) => {
                return <div className='mb-4 flex justify-evenly ' key={prod._id}>
                        <div>
                        <div className='ml-3'>
                        <h1 className='text-lg text-red-500 font-semibold '> {prod._id}</h1>
                        <h1 className='text-lg text-red-500 font-semibold '> {prod.name}</h1>
                        <h1 className='text-lg text-red-500 font-semibold '> {prod.price}</h1>
                        <h1 className='text-lg text-red-500 font-semibold '> {prod.memory}</h1>
                        <h1 className='text-lg text-red-500 font-semibold '> {prod.camera}</h1>
                        <h1 className='text-lg text-red-500 font-semibold '> {prod.detail}</h1>
                        </div>
                        </div>
                        <div className='ml-8'>
                            <img className='w-full h-48 object-cover rounded-lg' src={prod.file} alt="" />
                        </div>
                        
                       </div>
               })
               }
               </div>
               </div>
            </div>
        </>
    )
}

export default ManageProduct