import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import Cart from './Cart';
import { FaHome, FaShoppingCart, FaUser } from 'react-icons/fa';
import UseCart from '../../Hook/UseCart';

const Dashboard = () => {


    const [cart, refetch] = UseCart();

    const isadmin = () => {

    }

    return (
        <div className='flex'>


            {/* Sidebar for Large Screens */}
            <div className='w-64 min-h-screen bg-gray-200  '>

                <ul className='menu gap-2 p-2 font-semibold'>

                    {
                        isadmin ? <>
                            <li>
                                <NavLink to='/dashboard/carts'><FaShoppingCart className='text-xl'> </FaShoppingCart> My Cart ( {cart.length} )

                                </NavLink>

                            </li>
                            <li>
                                <NavLink to='/dashboard/allproducts'>   <FaShoppingCart className='text-xl'></FaShoppingCart>  All Products </NavLink>

                            </li>
                            <li>
                                <NavLink to='/dashboard/user'> <FaUser></FaUser>    All Users </NavLink>

                            </li>

                        </>
                            :
                            <>
                                <li>
                                    <NavLink to='/dashboard/carts'><FaShoppingCart className='text-xl'> </FaShoppingCart> My Cart ( {cart.length} )

                                    </NavLink>

                                </li>
                                <li>
                                    <NavLink to='/dashboard/allproducts'>   <FaShoppingCart className='text-xl'></FaShoppingCart>  All Products </NavLink>

                                </li>
                                {/* <li>
                                    <NavLink to='/dashboard/user'> <FaUser></FaUser>    All Users </NavLink>

                                </li> */}
                            </>
                    }


                    <div className='divider'></div>
                    <li>
                        <NavLink to='/'>  <FaHome className='text-xl'></FaHome>Home  </NavLink>

                    </li>
                </ul>


            </div>













            {/* Main Content */}
            <div className='flex-1'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;
