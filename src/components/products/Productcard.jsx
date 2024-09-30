import React from 'react'
import data from '../../data'
export default function Productcard() {
    return (
        <>



                {data.map((item) => (

                    <div className="  cursor-pointer shadow-md rounded-lg shadow-slate-500 h-150 w-64 p-6 hover:scale-110 " key={item.id}>
                        
                        <div className='   '> <img src={item.img} alt="img" className=' rounded-md' /></div>
                        <div className='my-3 flex justify-around'>
                            <p className='text-gray-600 text-lgg'>{item.name}</p>
                            <p className='text-black text-lg'>{item.price}$</p>
                            </div>
                        <div className='my-3 flex justify-between'>
                            <h3 className='text-gray-900 text-lg'>{item.productname}</h3>
                            <h3 className='text-red-700 underline '>Buy Now </h3>
                        </div> 

                    </div>

                ))}

           
        </>
    )
}
