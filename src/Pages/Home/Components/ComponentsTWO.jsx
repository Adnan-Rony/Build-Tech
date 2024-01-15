/* eslint-disable react/prop-types */
import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const ComponentsTWO = ({item}) => {


    
    return (
        <div>
                  <div className=''>
               
                    <Link to={`/components/${item._id}`} >
                       <div  className=' border shadow-2xl rounded-2xl lg:h-[320px] p-1  '>
                            <p className='lg:text-xl text-center  capitalize'> {item.model}</p>
                            <img
                                className='lg:w-[295px] lg:h-[190px] w-[140px] h-[93px]  group group-hover:shadow-lg hover:shadow-xl rounded-xl transition duration-300 ease-in-out transform hover:scale-105 mx-auto '
                                src={item.image}
                                alt=""

                            />

                            <div className=' lg:p-2 rounded-xl  text-black flex justify-between items-center'>
                                <div className='space-y-3'>

                                    <p className='font-medium text-black lg:text-xl  capitalize'>Price: {item.price}</p>

                                </div>
                                <div>
                                    <HiArrowNarrowRight className='lg:text-3xl'></HiArrowNarrowRight>
                                </div>
                            </div>
                        </div>
                    </Link>
            
            </div>
        </div>
    );
};

export default ComponentsTWO;