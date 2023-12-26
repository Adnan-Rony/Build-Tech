import React from 'react';
import { Outlet } from 'react-router-dom';
import Navber from './Navber';
import Footer from './Footer'
const Mainlayout = () => {
    return (
        <div>
            <div className='max-w-[1200px] mx-auto'>
            <Navber></Navber>
            <Outlet></Outlet>
          
            </div>
            <Footer></Footer>
         
        </div>
    );
};

export default Mainlayout;