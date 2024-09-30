import React from 'react'
import blog1 from '../../assect/blog1.jpg'
import blog2 from '../../assect/blog2.jpg'
export default function Blog() {
    return (
        <>
            <div className="container mb-20 ">
                <div className=" p-5 text-center  mx-20">
                    <h1 className='text-gray-950 text-4xl'>Blog</h1>
                    <p className="mt-6 text-gray-600 text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus excepturi voluptate minus itaque est! Temporibus deleniti libero eius reprehenderit  <br /> harum, quas nihil dolore commodi animi minima, perspiciatis </p>
                </div>
                <div className=" grid bg-gray-200 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1  gap-10 py-10 px-10   mx-20 ">
                    <div className='flex rounded-2xl shadow-slate-800 bg-white  hover:scale-105 h-48 w-80% '>

                        <div className=" h-28 px-5 py-10 ml-4   w-52  "><img src={blog1} alt=""  className=' rounded-lg ' /></div>
                        <div className="text-left w-2/3   p-4">
                            <h2 className='text-gray-600 text-lg mb-2 '> bloc for beauty</h2>
                            <h2 className='text-gray-800 text-lg mb-2 '> Lorem ipsum dolor sit, amet consectetur <br /> adipisicing elit. Atque vitae deserunt esse animideserunt esse animi expedita.</h2>
                            <ul className='flex my-4 justify-between'>
                                <li className='text-gray-600 text-lg  '> amonth agro </li>
                                <li className='  text-red-700  text-lg underline cursor-pointer '> LiAngelo </li>
                            </ul>
                        </div> 
                    </div>
                    <div className='flex rounded-2xl shadow-slate-800  hover:scale-105 bg-white h-48 w-80% '>
                    <div className=" h-28 px-5 py-10 ml-4   w-52  "><img src={blog1} alt=""  className=' rounded-lg ' /></div>

                        <div className="text-left w-2/3   p-4">
                            <h2 className='text-gray-600 text-lg mb-2 '> bloc for beauty</h2>
                            <h2 className='text-gray-800 text-lg mb-2 '> Lorem ipsum dolor sit, amet consectetur <br /> adipisicing elit. Atque vitae deserunt esse animideserunt esse animi expedita.</h2>
                            <ul className='flex my-4 justify-between'>
                                <li className='text-gray-600 text-lg  '> amonth agro </li>
                                <li className='  text-red-700  text-lg underline  cursor-pointer'> LiAngelo </li>
                            </ul>
                        </div>
                    </div><div className='flex rounded-2xl shadow-slate-800 bg-white hover:scale-105 h-48 w-80% '>
                    <div className=" h-28 px-5 py-10 ml-4   w-52  "><img src={blog2} alt=""  className=' rounded-lg ' /></div>

                        <div className="text-left w-2/3   p-4">
                            <h2 className='text-gray-600 text-lg mb-2 '> bloc for beauty</h2>
                            <h2 className='text-gray-800 text-lg mb-2 '> Lorem ipsum dolor sit, amet consectetur <br /> adipisicing elit. Atque vitae deserunt esse animideserunt esse animi expedita.</h2>
                            <ul className='flex my-4 justify-between'>
                                <li className='text-gray-600 text-lg  '> amonth agro </li>
                                <li className='  text-red-700  text-lg underline cursor-pointer '> LiAngelo </li>
                            </ul>
                        </div>
                    </div><div className='flex rounded-2xl shadow-slate-800 hover:scale-105 bg-white h-48 w-80% '>
                    <div className=" h-28  px-5 py-10 ml-4  w-52   "><img src={blog2} alt=""  className=' rounded-lg ' /></div>

                        <div className="text-left w-2/3   p-4">
                            <h2 className='text-gray-600 text-lg mb-2 '> bloc for beauty</h2>
                            <h2 className='text-gray-800 text-lg mb-2 '> Lorem ipsum dolor sit, amet consectetur <br /> adipisicing elit. Atque vitae deserunt esse animideserunt esse animi expedita.</h2>
                            <ul className='flex my-4 justify-between'>
                                <li className='text-gray-600 text-lg  '> amonth agro </li>
                                <li className='  text-red-700  text-lg underline cursor-pointer '> LiAngelo </li>
                            </ul>
                        </div>
                    </div>
                </div>
                
            </div>
        </>
    )
}
