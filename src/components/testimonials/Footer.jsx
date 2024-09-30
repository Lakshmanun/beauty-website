import React from 'react'
import { CiInstagram } from "react-icons/ci";
import { FaTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
export default function Footer() {
    return (
        <>
            <section className='container'>
                <div className="flex  gap-10 ">
                    <div className=" my-10 text-left ml-32 basis-1/2 ">
                        <h1 className='text-black uppercase  text-2xl'>beauty </h1>
                        <p className=" mt-10 text-gray-600 text-lg ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore tenetur quos consectetur dolor vero magni animi, nesciunt exercitationem maxime quod  </p>
                        <div className="flex gap-4 mt-5 text-4xl text-gray-700  ">
                            <CiInstagram className=''/>
                            <FaTwitter className=''/>
                            < FaLinkedin className=''/>
                        </div>
                    </div>
                    <div className="my-10 basis-1/3">
                        <h3 className='text-black text-xl mb-5 '> Menu</h3>
                        <ul className='text-left text-gray-600 '>
                            <li>product</li>
                            <li>Features</li>
                            <li>Reviwes</li>
                            <li>About us</li>
                        </ul>
                    </div>
                    <div className="my-10 basis-1/3 ">
                        <h3 className='text-black text-xl mb-5 '> Help</h3>
                        <ul className='text-left text-gray-600 '>
                            <li>F&Q</li>
                            <li>Teams</li>
                            <li>Contact us</li>
                        </ul>
                    </div>
                    <div className="my-10 mr-32 basis-1/3  ">
                        <h3 className='text-black text-xl mb-5 '> Company</h3>
                        <ul className='text-left text-gray-600 '>
                            <li>Blog</li>
                            <li>Teams condition</li>
                            <li>Pricing</li>
                        </ul>
                    </div>
                </div>

            </section>

        </>
    )
}
