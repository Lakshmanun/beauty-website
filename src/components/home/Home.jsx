import React from 'react'
import { FaStar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import Product from '../products/Product';
import Testi from '../testimonials/Testi';
import Footer from '../testimonials/Footer';
import home from '../../assect/home.png'
import Navbar from './Navbar';
export default function Home() {
  return (
    <> 
    <Navbar/>
      <div className=" container  flex  mt-16 mx-20  "   >
        <div className=" basis-2/4   ">
          <p className='text-slate-800 text-2xl '>
            Discover The Power OF  </p>
          <h1 className='uppercase  lg:text-12xl mt-10 sm:text-6xl'>natural beauty</h1>
          <p className='text-slate-800 text-2xl  mt-10 '>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, perspiciatis sapiente iure ea incidunt voluptatum quas quam obcaecati, blanditiis dolore, at repellendus reprehenderit asperiores enim labore necessitatibus? Nobis, velit nemo.
          </p>
          <button className='px-6 py-4  mt-10 bg-rose-600 hover:scale-110 rounded-lg text-white text-xl'>
            shop now
          </button>
          <table className='mt-8 mb-5 text-center'>
            <tr className='text-slate-800 text-xl '>
              <td className='h-10 w-32 '> ingredients</td>
              <td className='w-32'> plover </td>
              <td className='w-32'> volume</td>
            </tr>
            <tr className='text-gray-700'>
              <td className='h-10 '>  100% organic </td>
              <td>  9 variation </td>
              <td>33mi</td>
            </tr>
          </table>
        </div>
        <div className="   basis-2/4">
        <img src={home} alt="" className=" w-4/6 h-full " />
        </div>
      </div> 
      <div className=" bg-white  shadow-lg container shadow-gray-500 max-w-full   flex ">
        <div className=" basis-2/4 ml-20 ">
          <h1 className='text-left text-4xl p-6  my-10 font-sans text-slate-950 uppercase'> trusted over 350,00 + clients <br /> worldwide since 2024 </h1>
        </div>
        <div className=" basis-2/4    flex gap-0 my-10 mr-20">
          <div className="  ml-5 basis-2/4">
            <h1 className='text-left  text-4xl  font-sans uppercase text-slate-950'> 4m+ </h1>
            <ul className='flex pt-2 list-none' >
              <li><FaStar className='text-yellow-500' /></li>
              <li><FaStar className='text-yellow-500' /></li>
              <li><FaStar className='text-yellow-500' /></li>
              <li><FaStar className='text-yellow-500' /></li>
              <li><CiStar /></li>
            </ul>
            <p className=' text-xl pt-3 text-slate-700 ' >
              Worldwide product <br />salae per year
            </p>
          </div>
          <div className=" basis-2/4">
            <h1 className='text-left  text-4xl  font-sans uppercase text-slate-950'> 4m+ </h1>
            <ul className='flex pt-2 list-none' >
              <li><FaStar className='text-yellow-500' /></li>
              <li><FaStar className='text-yellow-500' /></li>
              <li><FaStar className='text-yellow-500' /></li>
              <li><FaStar className='text-yellow-500' /></li>
              <li><CiStar /></li>
            </ul>
            <p className=' pt-3  text-xl text-slate-700 ' >
              3,350 Rateings <br />worlwide
            </p>
          </div>
        </div>
      </div>
      <Product />
      <Testi/>
      <Footer/>
      
    </>
  )
}
