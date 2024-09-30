import React from 'react'
import Home from '../src/components/home/Home'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/home/Navbar';
import Product from './components/products/Product';
import Footer from './components/testimonials/Footer';
import Testi from './components/testimonials/Testi';
export default function App() {
  return (
    <>

      <BrowserRouter>
        <Navbar />
              <Routes>
                <Route path='/'element={<Home/>}/>
                <Route path='/product'element={<Product/>}/>
                <Route path='/features'element={<Testi/>}/>
                <Route path='/aboutus' element={<Footer/>}/>
              </Routes>


      </BrowserRouter>
    </>
  )
}
