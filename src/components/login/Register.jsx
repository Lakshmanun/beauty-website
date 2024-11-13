import React from 'react'
import {Link} from 'react-router-dom'
import home from '../../assect/home.png'

export default function Register() {
  return (
   <>
    <div class="flex justify-center items-center h-screen">
                <div class="w-1/2 h-2/3 rounded-lg bg-slate-100 text-center lg:flex sm:flex-none mt-10 p-4">
                    <img src={home} alt="" className=" w-1/2  h-full " />
                    <div className=" w-1/2  text-black  ">
                    <h2 class="text-2xl font-bold text-center text-gray-800 mb-6">Login</h2> 
                    <form action="#" method="POST" class="space-y-4">
      <div>
        <label for="username" class="block text-lg font-medium text-gray-700">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          required
          class="w-full px-4 py-2 mt-1 text-gray-800 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
          placeholder="Enter your username"
        />
      </div>
      <div>
        <label for="password" class="block text-lg font-medium text-gray-700  "> New Password</label>
        <input
          type="password" id="password"name="password"  required 
           class="w-full px-4 py-2 mt-1 text-gray-800 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
          placeholder="Enter New your password"
        />
      </div>
      <div>
        <label for="password" class="block text-lg font-medium text-gray-700  "> Confirm Password</label>
        <input
          type="password" id="password"name="password"  required 
           class="w-full px-4 py-2 mt-1 text-gray-800 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
          placeholder=" confirm your password"
        />
      </div>
      <Link to={'/home'}>  <button
        type="submit"
        class="w-24 px-4 py-2 mt-4 font-semibold text-white bg-rose-600 rounded-lg hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      >
        sign up
      </button>
      </Link>
      <p class="mt-4 text-center text-sm text-gray-600">
        Already have an account? <Link to={'/'} className=' hover:underline text-blue-700' > log in </Link>
      </p>
    </form>

                    </div>
                </div>
            </div>
   </>
  )
}
