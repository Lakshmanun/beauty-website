import React from 'react'
import Productcard from './Productcard'
import women1 from '../../assect/women1.png'
import women2 from '../../assect/women2.png'

export default function Product() {
  return (
    <><div className="container mx-20  flex pt-20 ">
      <div className="text-center  basis-2/4">

        <h1 className='  text-gray-950  mt-10'> New Assortment For <br /> Healthy Skin Item </h1>
        <img src={women1} alt="" className=" mt-10 h-80 ml-24" />
      </div>
      <div className="text-left mr-40 basis-2/4">

        <img src={women2} alt="" className=" h-80 ml-24 " />

        <p className='text-gray-600 text-lg text-left mt-10  py-5 '> Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Reprehenderit inventore praesentium accusantium, recusandae aliquid alias illum,
          laborum iusto minus sunt voluptas doloremque quia ea corporis iure iste cumque? Enim, aperiam!</p>
        <p className='text-gray-700 text-lg  uppercase  py-6 text-left align-center' > buy now _________  </p>
      </div>
    </div>
      <div className="conatiner mY-10 mx-20 text-center ">
        <h1 className=' text-6xl pt-10'>Our <span className='text-red-600'>Best</span> Seller</h1>
        <p className='px-32 py-6  text-gray-600'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas facere voluptatum quasi hic eveniet animi tempora unde, nam ab omnis expedita, culpa consectetur pariatur laboriosam? Ab sequi ex consectetur molestias?</p>
      </div>
      <div className=" grid lg:grid-cols-4 mx-20 my-10 lg:grid-rows-2 gap-10 md:grid-cols-2 sm:grid-cols-2">
        <Productcard />


      </div>

    </>
  )
}
