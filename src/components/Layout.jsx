import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './Header';
import Footer from "./Footer";
import Router from "../router/Router";
const Layout = () => {
    return (
        <BrowserRouter>
            <div className="wraper">
                <Header />
                <Router />
                <Footer />
            </div>
        </BrowserRouter>
    )
}

export default Layout
