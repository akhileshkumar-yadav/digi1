'use client'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import axios from 'axios'
const ManageProduct = () => {
    const [productList, setProductList] = useState([])
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
    }, [])

    const deleteprod = (id) => {
        axios.delete(`http://localhost:5000/prod/delete/` + id)
            .then((result) => {
                toast.success('product deleted successfully')
                fetchProductList()
            }).catch((err) => {
                console.log(err)
                toast.error('failed to delete product')

            });
    }

    

    const bgchange = (prices) => {
        if(prices>10000 && prices<15000){
            return 'bg-red-500'
        }
        else if(prices>15000 && prices<20000){
            return 'bg-yellow-500'
        }
        else if (prices>20000){
            return 'bg-green-500'
        }
        else{
            return 'bg-blue-500'
        }
    }



    return (
        <>
            <h1 className='text-center  text-3xl font-bold mb-8'>Today's Sky story</h1>
            <div className="flex flex-wrap mx-auto">
                <div className='w-full  mb-6'>
                    <div className={`rounded-lg shadow-lg p-4 mx-4 `}>
                        {
                            productList.map((prod) => {
                                return <div className='mb-4 flex justify-evenly' key={prod._id}>
                                    <div>
                                        <div className='ml-3'>
                                            <h1 className='text-lg text-red-500 font-semibold '> {prod._id}</h1>
                                            <h1 className='text-lg text-red-500 font-semibold '> {prod.name}</h1>
                                            <h1 className='text-lg text-red-500 font-semibold line-through'> {prod.price}</h1>
                                            <h1 className='text-lg text-red-500 font-semibold '> {prod.discount}%</h1>
                                            {/* <h1 className='text-lg text-red-500 font-semibold '> {(prod.price)/discount}</h1> */}
                                            <h1 className='text-lg text-red-500 font-semibold '> {prod.memory}</h1>
                                            <h1 className='text-lg text-red-500 font-semibold '> {prod.camera}</h1>
                                            <h1 className='text-lg text-red-500 font-semibold '> {prod.detail}</h1>
                                            <div onClick={() => deleteprod(prod._id)} className='inline-block'  >
                                                <button className='bg-yellow-700 text-white font-semibold px-4 mt-2 py-1'>Delete</button>
                                            </div>
                                            <div className='inline-block'>
                                                <button className='bg-red-700 text-white font-semibold px-4 ml-3 py-1'>Update</button>
                                            </div>

                                        </div>

                                    </div>
                                    <div className={`w-[300px]  ${ bgchange(prod.price)}`}></div>
                                    {/* <div className='ml-8'2
                                        <img className='w-full h-48 object-cover rounded-lg' src={prod.file} alt="" />
                                        </div> */}
                                    {/* <div className='w-[300px] bg-green-500'></div> */}
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