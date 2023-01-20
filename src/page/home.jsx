import { Fragment } from 'react'
import {
  Link,Outlet
  } from "react-router-dom";
import { Popover, Transition } from '@headlessui/react'
import React from 'react';
const Product = React.lazy(() => import('./product.jsx'));
const Main = React.lazy(() => import('./product.jsx'));
import Logo from '../pic/logo.png'

// home page this is navbar
export default function Example() {
    return (
    <Popover className="relative bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center justify-between border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link to="Main">
              <span className="sr-only"></span>
              <img
                className="h-8 w-auto sm:h-10 "
                src={Logo}
                alt=""
              />
            </Link>
            <Link to="Main">
              <div className='font-press-start cursor-pointer inline-block no-underline hover:text-black font-medium text-lg py-2 px-4 lg:-ml-2'>Main</div>
            </Link>
            <Link to="product">
              <div className='font-press-start cursor-pointer inline-block no-underline hover:text-black font-medium text-lg py-2 px-4 lg:-ml-2'>Product</div>
            </Link>
            <Link to="contact">
              <div className='font-press-start cursor-pointer inline-block no-underline hover:text-black font-medium text-lg py-2 px-4 lg:-ml-2'>Contact</div>
            </Link>
          </div>
        </div>
      </div>
        {/* outlet= page */}
     <Outlet/>
   
   
    
    </Popover>
  )
}
