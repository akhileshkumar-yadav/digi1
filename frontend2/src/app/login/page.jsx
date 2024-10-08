'use client'
import { useFormik } from 'formik'
import Link from 'next/link'
import React from 'react'
import *as Yup from 'yup'

const loginSchema = Yup.object().shape({
  email: Yup.string()
  .email('Invalid email')
  .required('Email is required'),
  password: Yup.string()
  .min(8, 'Password is too short - should be 8 chars minimum')
  .required('Password is required'),

})
const Login = () => {
  const loginForm = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema:loginSchema,
  })
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8 px-6">
  <div className="sm:mx-auto sm:w-full sm:max-w-md">
    <img
      className="mx-auto h-10 w-auto"
      src="https://www.svgrepo.com/show/301692/login.svg"
      alt="Workflow"
    />
    <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
      Sign in to your account
    </h2>
    <p className="mt-2 text-center text-sm leading-5 text-blue-500 max-w">
      Or
      <Link
        href="/signup"
        className="font-medium text-blue-500 hover:text-blue-500 pl-1 focus:outline-none focus:underline transition ease-in-out duration-150"
      >
        create a new acccount
      </Link>
    </p>
  </div>
  <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
    <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
      <form onSubmit={loginForm.handleSubmit}>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium leading-5  text-gray-700"
          >
            Email address
          </label>
          {loginForm.errors.email && loginForm.touched.email ? ( <div className='text-green-500'>{loginForm.errors.email}</div>) : null}
          <div className="mt-1 relative rounded-md shadow-sm">
            <input
              id="email"
              name="email"
              placeholder="user@example.com"
              type="email"
              required=""
              defaultValue=""
              onChange={loginForm.handleChange}
              value={loginForm.values.email}
              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
            />
            <div className="hidden absolute inset-y-0 right-0 pr-3 ma:flex items-center pointer-events-none">
            
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
          {loginForm.errors.password && loginForm.touched.password ? ( <div className='text-green-500'>{loginForm.errors.password}</div>) : null}
          <div className="mt-1 rounded-md shadow-sm">
            <input
              id="password"
              name="password"
              type="password"
              required=""
              onChange={loginForm.handleChange}
              value={loginForm.values.password}
              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
            />
          </div>
        </div>
        <div className="mt-6 flex items-center justify-between">
          <div className="flex items-center">
            <input
              id="remember_me"
              name="remember"
              type="checkbox"
              defaultValue={1}
              className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
            />
            <label
              htmlFor="remember_me"
              className="ml-2 block text-sm leading-5 text-gray-900"
            >
              Remember me
            </label>
          </div>
          <div className="text-sm leading-5">
            <a
              href="#"
              className="font-medium text-blue-500 hover:text-blue-500 focus:outline-none focus:underline transition ease-in-out duration-150"
            >
              Forgot your password?
            </a>
          </div>
        </div>
        <div className="mt-6">
          <span className="block w-full rounded-md shadow-sm">
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
            >
              Sign in
            </button>
          </span>
        </div>
      </form>
    </div>
  </div>
</div>

  )
}

export default Login