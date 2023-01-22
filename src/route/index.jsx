import Navbar from'../page/Navbar.jsx'
import {
    createBrowserRouter,
    RouterProvider,Link,Outlet, BrowserRouter, Routes, Route
  } from "react-router-dom";
import React from 'react';
import 'tw-elements';
const Product = React.lazy(() => import('../page/product.jsx'));
const Main = React.lazy(() => import('../page/main.jsx'));
const Contact = React.lazy(() => import('../page/contact.jsx'));
export default function App(){
    return(
        // new page 
    <BrowserRouter>
    <React.Suspense fallback={<p>loading</p>}>
        <Routes>
            {/*  path =''= <showing in url*/}
            {/* element =page (outlet) */}
            <Route path='/' element={<Navbar/>}>
                    <Route path='Main' element={<Main/>}/>
                    <Route path='Product' element={<Product/>}/>
                    <Route path='Contact' element={<Contact/>}/>
            </Route>
        </Routes>
        
        </React.Suspense>
    </BrowserRouter>
    );
}