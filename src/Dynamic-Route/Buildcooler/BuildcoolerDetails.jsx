import React from 'react';
import { useLoaderData } from 'react-router-dom';

const BuildcoolerDetails = () => {
    const loaderData = useLoaderData();
    console.log(loaderData);

    return (
        <div>
                <div className=' grid lg:grid-cols-2 gap-3 justify-center items-center'>
                <div>
                    <img src={loaderData.image} alt="" />
                </div>

                <div>
                    <p className='text-xl font-bold text-blue-700'>{loaderData.model}</p>
                    <p className='my-5 font-bold'>Key Features</p>

                    <div className='space-y-3 font-semibold'>
                        <p>Fan Speed:{loaderData.fan_speed}</p>
                        <p>Dimension: {loaderData.dimension}</p>
                        <p>Weight:{loaderData.weight}</p>
                        <p>Fan Dimension:{loaderData.fan_dimension}</p>

                    </div>

                    <p className='my-5 font-bold'>Payment Options</p>
                    <div className='border p-4 mx-auto space-y-2 my-5 justify-start flex '>
                        <div>
                            <p className='text-xl font-bold'>price:{loaderData.price}</p>
                            <small>Cash Discount Price</small>
                            <small>Online / Cash Payment</small>
                        </div>

                    </div>
                    <button className='btn btn-outline btn-sm'>Buy Now</button>
                </div>

            </div>
            <hr />
            <div className='bg-gray-200 '>
                <div className='p-8 bg-white'>
                    <p className='text-xl font-bold'>Specification</p>

                    <div className=' bg-[#f5f6fc] p-2 rounded-xl my-4'>
                        <p className='ml-3 text-xl font-semibold rounded-xl my-3 text-blue-700 '>Key Features </p>
                    </div>



                    <div className='space-y-3 font-semibold'>
                        <div className='flex justify-between w-1/2'>
                            <p>Fan Speed:  </p> <span>{loaderData.fan_speed}</span>
                        </div>
                        <hr />
                        <div className='flex justify-between w-1/2'>
                            <p>Fan Airflow:  </p> <span>{loaderData.fan_airflow}</span>
                        </div>
                        <hr />
                   
                        <div className='flex justify-between w-1/2'>
                            <p>Noise:  </p> <span>{loaderData.noise}</span>
                        </div>
                        <hr />
                        <div className='flex justify-between w-1/2'>
                            <p>Rated Voltage:  </p> <span>{loaderData.rated_voltage}</span>
                        </div>
                        <hr />
                    </div>




                    
                    <div className=' bg-[#f5f6fc] p-2 rounded-xl my-4'>
                        <p className='ml-3 text-xl font-semibold rounded-xl my-3 text-blue-700 '>Physical Specification  </p>
                    </div>



                    <div className='space-y-3 font-semibold'>
                        <div className='flex justify-between w-1/2'>
                            <p>Dimension:  </p> <span>{loaderData.fan_dimension}</span>
                        </div>
                        <hr />
                        <div className='flex justify-between w-1/2'>
                            <p>Weight:  </p> <span>{loaderData.weight}</span>
                        </div>
                       
                    </div>





                    <div className=' bg-[#f5f6fc] p-2 rounded-xl my-4'>
                        <p className='ml-3 text-xl font-semibold rounded-xl my-3 text-blue-700 '>Warranty Information</p>
                    </div>



                    <div className='space-y-3 font-semibold'>
                       
                        <div className='flex justify-between w-1/2'>
                            <p>Manufacturing Warranty :  </p> <span>No Warranty</span>
                        </div>
                        
                    </div>

                    <div className=' bg-[#f5f6fc] p-2 rounded-xl my-10'>
                        <p className='ml-3 text-xl font-semibold rounded-xl my-3 text-blue-700 '>Description</p>
                    </div>



                    <div className='space-y-3 font-semibold '>
                       
                     <p>{loaderData.description}</p>
                        
                    </div>


               







                </div>

            </div>
        </div>
    );
};

export default BuildcoolerDetails;