import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Browse from '../features/Dashboard/Browse/Browse';
import Home from '../components/home/Home';
import AboutUs from '../components/aboutUs/AboutUs';
import Layout from './components/Layout';
import { products } from '../features/Dashboard/Browse/data';
import ProductDetails from '../features/Dashboard/Browse/Products/ProductDetails';

const routes = () => {
    return (
        <Router>
                <Routes>
                    <Route path='/' element={<Layout />}>
                    <Route path='/' element={<Home />} />
                    <Route path='/auction/dashboard' element={<Browse products={products}/>} />
                    <Route path='/about-us' element={<AboutUs />} />
                    <Route path='/auction/product-details' element={<ProductDetails products={products}/>} />
                    </Route>
                </Routes>
        </Router>
    )
};

export default routes;