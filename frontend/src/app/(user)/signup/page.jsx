'use client'
import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import toast from 'react-hot-toast'
import axios from 'axios'
import { useRouter } from 'next/navigation'
const SignupSchema = Yup.object().shape({
  name: Yup.string()
  .min(3,'charecters used')
  .max(15,'charecter used')
  .required('Name is required'),
  email: Yup.string()
  .email('please enter a valid email address')
  .required('email is required'),

  password: Yup.string()
  .min(8,'Password must be at least 8 charecter')
  .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
  .matches(/[A-Z]/, 'Password must contain at least one uppercase')
  .matches(/[0-9]/, 'Password must contain at least one number')
  .matches(/[!@#$%^&*]/, 'Password must contain at least one spacial letter')
  .required('password is required'),
})
const Login = () => {
  // nav
  const router = useRouter()

  const signupForm = useFormik( {
    initialValues: {
      name: '',
      email: '',
      password:'',
    },
    onSubmit: (values,{resetForm}) => {
      console.log(values);
      // resetForm()
      // toast.success('SignUp successfully')
      axios.post('http://localhost:5000/user/add',values)
      .then((response) => {
        console.log(response.status)
        resetForm()
        toast.success('SignUp user info add successfully')
        router.push('/')
        
      }).catch((err) => {
        console.log(err);
        toast.error('Error')
        
      });

      },
      validationSchema: SignupSchema,
  })
  return (
    <>
    <div className='flex justify-center items-center   '>
    <div className="mt-7 bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-neutral-900 w-[400px] my-4 dark:border-neutral-700">
  <div className="p-4 sm:p-7">
    <div className="text-center">
      <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">
        Sign up
      </h1>
      <p className="mt-2 text-sm text-gray-600 dark:text-neutral-400">
        Already have an account?
        <a
          className="text-blue-600 decoration-2 hover:underline focus:outline-none focus:underline font-medium dark:text-blue-500"
          href="../examples/html/signin.html"
        >
          Sign in here
        </a>
      </p>
    </div>
    <div className="mt-5">
      <button
        type="button"
        className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
      >
        Sign up with Google
      </button>
      <div className="py-3 flex items-center text-xs text-gray-400 uppercase before:flex-1 before:border-t before:border-gray-200 before:me-6 after:flex-1 after:border-t after:border-gray-200 after:ms-6 dark:text-neutral-500 dark:before:border-neutral-600 dark:after:border-neutral-600">
        Or
      </div>
      {/* Form */}
      <form onSubmit={signupForm.handleSubmit}>
        <div className="grid gap-y-4">
          {/* Form Group */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm mb-2 dark:text-white"
            >
              Name
            </label>
            {signupForm.errors.name && signupForm.touched.name ? (
              <div className="text-red-500">{signupForm.errors.name}</div>
            ):null}
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                onChange={signupForm.handleChange}
                value={signupForm.values.name}
                className="py-3 px-4 block w-full border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                required=""
                aria-describedby="email-error"
              />
              
            </div>
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm mb-2 dark:text-white"
            >
              Email address
            </label>
            {signupForm.errors.email && signupForm.touched.email ? (
              <div className="text-red-500">{signupForm.errors.email}</div>
            ):null}
            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                onChange={signupForm.handleChange}
                value={signupForm.values.email}
                className="py-3 px-4 block w-full border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                required=""
                aria-describedby="email-error"
              />
              
            </div>
          </div>
          {/* End Form Group */}
          {/* Form Group */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm mb-2 dark:text-white"
            >
              Password
            </label>
            {signupForm.errors.password && signupForm.touched.password ? (
              <div className="text-red-500">{signupForm.errors.password}</div>
            ):null}
            <div className="relative">
              <input
                type="password"
                id="password"
                name="password"
                onChange={signupForm.handleChange}
                value={signupForm.values.password}
                className="py-3 px-4 block w-full border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                required=""
                aria-describedby="password-error"
              />
              <div className="hidden absolute inset-y-0 end-0 pointer-events-none pe-3">
                <svg
                  className="size-5 text-red-500"
                  width={16}
                  height={16}
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  aria-hidden="true"
                >
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                </svg>
              </div>
            </div>
            <p className="hidden text-xs text-red-600 mt-2" id="password-error">
              8+ characters required
            </p>
          </div>
          {/* End Form Group */}
          {/* Form Group */}
          {/* <div>
            <label
              htmlFor="confirm-password"
              className="block text-sm mb-2 dark:text-white"
            >
              Confirm Password
            </label>
            {signupForm.errors.confirmPassword && signupForm.touched.confirmPassword ? (
              <div className="text-red-500">{signupForm.errors.confirmPassword}</div>
            ):null}
            <div className="relative">
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                onChange={signupForm.handleChange}
                value={signupForm.values.confirmPassword}
                className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                required=""
                aria-describedby="confirm-password-error"
              />
              <div className="hidden absolute inset-y-0 end-0 pointer-events-none pe-3">
                <svg
                  className="size-5 text-red-500"
                  width={16}
                  height={16}
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  aria-hidden="true"
                >
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                </svg>
              </div>
            </div>
            <p
              className="hidden text-xs text-red-600 mt-2"
              id="confirm-password-error"
            >
              Password does not match the password
            </p>
          </div> */}
          {/* End Form Group */}
          {/* Checkbox */}
          <div className="flex items-center">
            <div className="flex">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 focus:ring-blue-500 dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
              />
            </div>
            <div className="ms-3">
              <label htmlFor="remember-me" className="text-sm dark:text-white">
                I accept the{" "}
                <a
                  className="text-blue-600 decoration-2 hover:underline focus:outline-none focus:underline font-medium dark:text-blue-500"
                  href="#"
                >
                  Terms and Conditions
                </a>
              </label>
            </div>
          </div>
          {/* End Checkbox */}
          <button
            type="submit"
            className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
          >
            Sign up
          </button>
        </div>
      </form>
      {/* End Form */}
    </div>
  </div>
</div>
  
  
    </div>

    
  </>
  )
}

export default Login