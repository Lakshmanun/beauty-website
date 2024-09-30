import React from 'react'
import { FaStar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import profile from '../../assect/dppic.jpg'
import { LuArrowRightCircle ,LuArrowLeftCircle } from "react-icons/lu";
import Blog from './Blog';
export default function Testi() {
    return (
        <>
            <div className="container bg-blue-100 w-full px-10 py-20 ">
                <div className=" flex    mx-20 ">

                    <div className=" text-left ">
                        <h1>saying they are clients</h1>
                        <p className="text-gray-600 text-lg ">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla at sapiente repellendus quia quam vel quis
                            doloremque, <br /> porro corporis temporibus   velit, minima neque ex ullam officiis? Reprehenderit, excepturi.</p>
                    </div>
                    <div className=" mt-20 cursor-pointer ml-32 flex gap-4 text-5xl">
                        <LuArrowLeftCircle className=' text-red-900  ' />
                        <LuArrowRightCircle  className=' text-red-900  ' />
                    </div>
                </div>
                <div className=" flex   gap-20 mx-20 mt-10  ">
                    <div className="flex basis-2/4  p-5 shadow-xl shadow-gray-400   bg-white rounded-2xl ">
                        <div className="basis-1/4 p-2 ">
                              <img src={profile} alt="" className=" rounded-full h-14 w-14 object-cover  " />
                            <ul className='flex mt-24 text-2xl list-none' >
                                <li><FaStar className='text-yellow-500' /></li>
                                <li><FaStar className='text-yellow-500' /></li>
                                <li><FaStar className='text-yellow-500' /></li>
                                <li><FaStar className='text-yellow-500' /></li>
                                <li><CiStar /></li>
                            </ul>
                        </div>
                        <div className=" basis-1/1 pl-10 ">
                            <h3 className="text-gray-800 uppercase text-2xl  "> echtasanwalt</h3>
                            <p className="text-gray-500 text-lg mt-5 "> hello this is vicky 2015</p>
                            <hr className='mt-2 h-5 text-black ' />
                            <p className="text-gray-700 text-lg"> Lorem ipsum dolor elit.voluptatibus, veniam eius omnis est officiis, fuga laboriosam perferendis molestiae non delectus doloremque similique ipsa, velit expedita architecto.</p>
                        </div>
                    </div>
                    <div className="flex basis-2/4  p-5 shadow-xl shadow-gray-400  bg-white rounded-2xl ">
                        <div className="basis-1/4 p-2 ">
                        <img src={profile} alt="" className=" rounded-full h-14 w-14 object-cover  " />
                            <ul className='flex mt-24 text-2xl list-none' >
                                <li><FaStar className='text-yellow-500' /></li>
                                <li><FaStar className='text-yellow-500' /></li>
                                <li><FaStar className='text-yellow-500' /></li>
                                <li><FaStar className='text-yellow-500' /></li>
                                <li><CiStar /></li>
                            </ul>
                        </div>
                        <div className=" basis-1/1 pl-10 ">
                            <h3 className="text-gray-800 uppercase text-2xl  "> echtasanwalt</h3>
                            <p className="text-gray-500 text-lg mt-5 "> hello this is vicky 2015</p>
                            <hr className='mt-2 h-5 text-black ' />
                            <p className="text-gray-700 text-lg"> Lorem ipsum dolor elit.voluptatibus, veniam eius omnis est officiis, fuga laboriosam perferendis molestiae non delectus doloremque similique ipsa, velit expedita architecto.</p>
                        </div>
                    </div>

                </div>
            </div>
      <Blog/>

        </>
    )
}
