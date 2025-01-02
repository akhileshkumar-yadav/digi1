'use client'
import React from 'react'
import { useFormik } from 'formik'
import toast from 'react-hot-toast'
// import * as Yup from 'yup'
import axios from 'axios'

const Product2 = () => {
    const product2Form = useFormik({
        initialValues: {
            name: '',
            price: '',
            discount:'',
            memory: '',
            camera: '',
            detail: '',
            file: '',

        },
        onSubmit: (values, { resetForm }) => {
            console.log(values);
            // resetForm()
            // toast.success('SignUp successfully')
            axios.post('http://localhost:5000/prod/add', values)
                .then((response) => {
                    console.log(response.status)
                    resetForm()
                    toast.success('SignUp user info add successfully')

                }).catch((err) => {
                    console.log(err);
                    toast.error('Error')

                });

        },


    });
    return (
        <>
            <div className='flex justify-center ml-[250px]  items-center my-5'>
                <div className='w-[50%] bg-blue-300 hover:bg-blue-400 p-2 px-10 rounded-sm shadow-sm'>
                    <h1 className='text-2xl font-bold text-center hover:text-white '>Product Detail Information</h1>
                    <form onSubmit={product2Form.handleSubmit} >
                        <label className='text-xl  font-semibold block mx-8 ' htmlFor="">Productname </label>
                        {product2Form.errors.name && product2Form.touched.name ? (
                            <div className="text-red-500">{product2Form.errors.name}</div>
                        ) : null}
                        <input className='block w-[90%] mx-8 py-1 text-lg font-semibold px-2 mb-3'
                            placeholder='Name'
                            type="text"
                            name='name'
                            id='name'
                            onChange={product2Form.handleChange}
                            value={product2Form.values.name}


                        />
                        <label className='text-xl font-semibold block mx-8 ' htmlFor="">Price </label>
                        {product2Form.errors.price && product2Form.touched.price ? (
                            <div className="text-red-500">{product2Form.errors.price}</div>
                        ) : null}
                        <input className='block w-[90%] mx-8 py-1 text-lg font-semibold px-2 mb-3'
                            placeholder='price'
                            id='price'
                            type="text"
                            name='price'
                            onChange={product2Form.handleChange}
                            value={product2Form.values.price}

                        />
                        <label className='text-xl font-semibold block mx-8 ' htmlFor="">discount </label>
                        {product2Form.errors.discount && product2Form.touched.discount ? (
                            <div className="text-red-500">{product2Form.errors.discount}</div>
                        ) : null}
                        <input className='block w-[90%] mx-8 py-1 text-lg font-semibold px-2 mb-3'
                            placeholder='price'
                            id='discount'
                            type="text"
                            name='discount'
                            onChange={product2Form.handleChange}
                            value={product2Form.values.discount}

                        />
                        <label className='text-xl font-semibold block mx-8 ' htmlFor="">Memory</label>
                        {product2Form.errors.memory && product2Form.touched.memory ? (
                            <div className="text-red-500">{product2Form.errors.memory}</div>
                        ) : null}
                        <input className='block w-[90%] mx-8 py-1 text-lg font-semibold px-2 mb-3'
                            id='memory'
                            placeholder='Memory'
                            type="text"
                            name='memory'
                            onChange={product2Form.handleChange}
                            value={product2Form.values.memory}

                        />

                        <label className='text-xl font-semibold block mx-8 ' htmlFor="">Camera </label>
                        {product2Form.errors.camera && product2Form.touched.camera ? (
                            <div className="text-red-500">{product2Form.errors.camera}</div>
                        ) : null}

                        <input className='block w-[90%] mx-8 py-1 text-lg font-semibold px-2 mb-3'
                            id='camera'
                            placeholder='Camera'
                            type="text"
                            name='camera'
                            onChange={product2Form.handleChange}
                            value={product2Form.values.camera}

                        />
                        <label className='text-xl font-semibold block mx-8 ' htmlFor="">Details</label>
                        {product2Form.errors.detail && product2Form.touched.detail ? (
                            <div className="text-red-500">{product2Form.errors.detail}</div>
                        ) : null}
                        <textarea className='text-xl w-[90%] mx-8 py-1 font-semibold px-2 mb-3'
                            name="detail"
                            id="detail"
                            placeholder='Detail'
                            onChange={product2Form.handleChange}
                            value={product2Form.values.detail}

                        ></textarea>

                        <label htmlFor="" className='text-xl font-semibold block mx-8'>Image</label>
                        {product2Form.errors.file && product2Form.touched.file ? (
                            <div className="text-red-500">{product2Form.errors.file}</div>
                        ) : null}
                        <input type="file" src="C:\Users\dell\Pictures"  className="w-[40%] mx-8 py-1" 
                        name='File'
                        id='File'
                        placeholder='Take one img'
                        onChange={product2Form.handleChange}
                        value={product2Form.values.file}
                        />
                        <div className='flex justify-center items-center'>
                            <button className='text-xl font-semibold py-1 px-4 text-center mx-auto bg-orange-400 rounded-sm text-white'>Submit</button>
                        </div>

                    </form>
                </div>
            </div>
        </>

    )
}

export default Product2