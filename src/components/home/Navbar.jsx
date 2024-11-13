import React, { useState } from 'react'
import { IoMdPerson } from "react-icons/io";
import { CiSearch, CiShoppingCart } from "react-icons/ci";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from 'react-router-dom';
export default function Navbar() {

  const [menu, setmenu] = useState(false);

  return (
    <>
      <header className=' container  flex bg-zinc-50  justify-between  items-center  text-gray-600   cursor-pointer p-6'>
        <div className=" text-black uppercase  ml-24 text-center text-3xl">
          beauty
        </div>
        <div className=' '>
          <ul className={menu ? "flex-none mb-4   h-full w-2/5  uppercase  text-slate-950  left-0 top-0 bg-slate-100  px-6 py-6 absolute  border-y-2  " : "flex gap-4  text-gray-900 uppercase lg:flex sm:hidden "} onClick={() => setmenu(false)} >
              <li className='text-gray-900 p-2 :'><Link to={'/home'} > home </Link></li>
              <li className='text-gray-900 p-2 :'><Link to={'/product'} > product </Link></li>
              <li className='text-gray-900 p-2 :'><Link to={'/features'} > features </Link></li>
              <li className='text-gray-900 p-2 :'><Link to={'/aboutus'} > about us </Link></li>
              <li className='text-gray-900 p-2 :'><Link to={'/'} > Log out </Link></li>
            
          </ul> 
        </div>
        <div className=" flex gap-6 mr-10 cursor-pointer  text-2xl p-2 text-gray-950 ">

          <CiSearch />
          <CiShoppingCart />
          <IoMdPerson />
        </div>
        <div className="  lg:hidden sm:block cursor-pointer " >
          <button onClick={() => setmenu(!menu)} className='text-2xl p-2 text-gray-950'>
            {menu ? <FaTimes /> : <FaBars />}

          </button>
        </div>
        
      </header>

    </>
  )
}
