import React from 'react'
import { Routes, Route } from 'react-router'
import Home from '../pages/Home'
import Cart from '../pages/Cart'
import ProductDetail from '../pages/ProductDetail'
import ProductPage from '../pages/ProductPage'
import Search from "../pages/Search";
const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/product" element={<ProductPage />}/>
            <Route path="/product/:id" element={<ProductDetail />}/>
            <Route path="/cart" element={<Cart />}/>
            <Route path="/"  element={<Search />}/>
        </Routes>
    )
}

export default Router
