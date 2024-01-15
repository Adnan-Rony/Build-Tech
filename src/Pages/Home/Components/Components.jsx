import React, { useEffect, useState } from 'react';
import { FaBeer } from "react-icons/fa";
import cpu from '../../../assets/8186331.png'
import ram from '../../../assets/2703609.png'
import monitor from '../../../assets/4854302.png'
import grapich from '../../../assets/2286822.png'
import keyboard from '../../../assets/e04bd9042f1695f0844fbe935b858d9c-keyboard-flat-icon.png'
import cooler from '../../../assets/cpu-fan-icon-editable-bold-outline-color-fill-design-vector-illustration-215219008.webp'
import { Link } from 'react-router-dom';
import Getdata from '../../../Hook/Getdata';
import ComponentsOne from './ComponentsOne';
import Latest from '../Latest/Latest';



const Components = () => {

const [components,loading]=Getdata();

 


    if (loading) {

        return <div className="flex items-center justify-center h-screen">
            <span className="loading loading-ring loading-lg"></span>
        </div>

    }
    return (
        <div className='my-10' id='components'>
          

            

            <div className=' grid lg:grid-cols-3 grid-cols-2 gap-3'>



                <div className='' >
                    <Link to={'/cpu'}>
                        <div className='p-8 shadow-xl justify-center space-y-3 items-center'>
                            <img className='w-24 mx-auto' src={cpu } alt="" />
                            <div className='flex text-center justify-center items-center'>
                                <p className='font-medium text-sm text-gray-400 capitalize'>CPU</p>
                            </div>
                        </div>
                    </Link>
                </div>
                <div >
                    <Link to={'/ram'} >
                        <div className='p-8 shadow-xl justify-center space-y-3 items-center'>
                            <img className='w-24 mx-auto' src={ram } alt="" />
                            <div className='flex text-center justify-center items-center'>
                                <p className='font-medium text-sm text-gray-400 capitalize'>RAM</p>
                            </div>
                        </div>
                    </Link>
                </div>
                <div >
                    <Link to={'/cooler'} >
                        <div className='p-8 shadow-xl justify-center space-y-3 items-center'>
                            <img className='w-24 mx-auto' src={cooler } alt="" />
                            <div className='flex text-center justify-center items-center'>
                                <p className='font-medium text-sm text-gray-400 capitalize'>CPU Coller</p>
                            </div>
                        </div>
                    </Link>
                </div>
                <div >
                    <Link to={'/keyboard'}  >
                        <div className='p-8 shadow-xl justify-center space-y-3 items-center'>
                            <img className='w-24 mx-auto' src={keyboard } alt="" />
                            <div className='flex text-center justify-center items-center'>
                                <p className='font-medium text-sm text-gray-400 capitalize'>KEYBOARDS</p>
                            </div>
                        </div>
                    </Link>
                </div>
                <div >
                    <Link  to={'/monitor'}>
                        <div className='p-8 shadow-xl justify-center space-y-3 items-center'>
                            <img className='w-24 mx-auto' src={monitor } alt="" />
                            <div className='flex text-center justify-center items-center'>
                                <p className='font-medium text-sm text-gray-400 capitalize'>MONITOR</p>
                            </div>
                        </div>
                    </Link>
                </div>
                <div >
                    <Link to={'/graphics'} >
                        <div className='p-8 shadow-xl justify-center space-y-3 items-center'>
                            <img className='w-24 mx-auto' src={grapich } alt="" />
                            <div className='flex text-center justify-center items-center'>
                                <p className='font-medium text-sm text-gray-400 capitalize'>GRAPHICH CARD</p>
                            </div>
                        </div>
                    </Link>
                </div>

                {/* <ComponentsOne title='CPU' item={cpuu}></ComponentsOne>
                <ComponentsOne title='COOLER' item={coolerr}></ComponentsOne>

                    <Latest></Latest>


                <ComponentsOne title="MONITOR" item={monitorr}></ComponentsOne>
                <ComponentsOne title="RAM" item={ramm}></ComponentsOne>
                <ComponentsOne title="GRAPHICS" item={graphics}></ComponentsOne>
                <ComponentsOne title="KEYBOARDS" item={keyboards}></ComponentsOne> */}


                



            </div>

        </div>
    );
};

export default Components;