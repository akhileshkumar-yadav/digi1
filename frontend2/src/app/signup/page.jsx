'use client'
import Link from 'next/link'
import React from 'react'
import { Formik, useFormik } from 'formik'
import * as Yup from 'yup'
import toast from 'react-hot-toast'
import classes from './signup.module.css'

const sigupSchema = Yup.object().shape({
  name: Yup.string()
  .min(3,'must be 3 char')
  .max(20,'max number of char 20')
  .required('Name is required'),

  email: Yup.string()
    .email('Invalid email')
    .required('Email is required'),

  password: Yup.string()
    .min(8, 'Password is too short - should be 8 chars minimum.')
    .matches(/[0-9]/, 'Atleast 4 number to use')
    .matches(/[a-b]/, 'charecter must be use')
    .required('Password is required'),

  confirmPassword: Yup.string()
  .required('confirm the password')
})
const Signup = () => {
  const signupForm = useFormik({
    initialValues: {
      name: '',
      email:'',
      password:'',
      confirmPassword:'',
    },
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      resetForm()
      toast.success('successfully signup page')
    },
    validationSchema: sigupSchema,
  })
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <img
          className="mx-auto h-10 w-auto"
          src="https://www.svgrepo.com/show/301692/login.svg"
          alt="Workflow"
        />
        <h2 className={classes.h2}>
          Create a new account
        </h2>
        <p className="mt-2 text-center text-sm leading-5  text-gray-500 max-w">
          Or
          <Link
            href="/login"
            className="font-medium text-blue-600 pl-1 hover:text-blue-500 focus:outline-none focus:underline transition ease-in-out duration-150"
          >
            login to your account
          </Link>
        </p>
      </div>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form method="POST" onSubmit={signupForm.handleSubmit} action="#">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-5  text-gray-700"
              >
                Name
              </label>
              {signupForm.errors.name && signupForm.touched.name ?
                (<div className='text-red-500'>{signupForm.errors.name}</div>) :
                null}
              <div className="mt-1 relative rounded-md shadow-sm">
                <input
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  type="text"
                  required=""
                  onChange={signupForm.handleChange}
                  value={signupForm.values.name}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                />
                <div className="hidden absolute inset-y-0 right-0 pr-3 md:flex items-center pointer-events-none">
                </div>
              </div>
            </div>
            <div className="mt-6">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-5 text-gray-700"
              >
                Email address
              </label>
              {signupForm.errors.email && signupForm.touched.email ?
                (<div className='text-red-500'>{signupForm.errors.email}</div>) :
                null}
              <div className="mt-1 relative rounded-md shadow-sm">
                <input
                  id="email"
                  name="email"
                  placeholder="user@example.com"
                  type="email"
                  required=""
                  onChange={signupForm.handleChange}
                  value={signupForm.values.email}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                />
                <div className=" hidden absolute inset-y-0 right-0 pr-3 md:flex items-center pointer-events-none">
                </div>
              </div>
            </div>
            <div className="mt-6">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-5 text-gray-700"
              >
                Password
              </label>
              {signupForm.errors.password && signupForm.touched.password ?
                (<div className='text-red-500'>{signupForm.errors.password}</div>) :
                null}
              <div className="mt-1 rounded-md shadow-sm">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required=""
                  onChange={signupForm.handleChange}
                  value={signupForm.values.password}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                />
              </div>
            </div>
            <div className="mt-6">
              <label
                htmlFor="password_confirmation"
                className="block  text-sm font-medium leading-5 text-gray-700"
              >
                Confirm Password
              </label>
              {signupForm.errors.confirmPassword && signupForm.touched.confirmPassword ?
                (<div className='text-red-500'>{signupForm.errors.confirmPassword}</div>) :
                null}
              <div className="mt-1 rounded-md shadow-sm">
                <input
                  id="password_confirmation"
                  name="confirmPassword"
                  type="password"
                  required=""
                  onChange={signupForm.handleChange}
                  value={signupForm.values.confirmPassword}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                />
              </div>
            </div>
            <div className="mt-6">
              <span className="block w-full rounded-md shadow-sm">
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
                >
                  Create account
                </button>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>

  )
}

export default Signup