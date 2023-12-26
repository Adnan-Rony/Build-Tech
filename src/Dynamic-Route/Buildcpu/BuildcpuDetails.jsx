import React from 'react';
import { useLoaderData } from 'react-router-dom';

const BuildcpuDetails = () => {
    const loaderData = useLoaderData();
    console.log(loaderData);

    return (
        <div >
            <div className=' grid lg:grid-cols-2 gap-3 justify-center items-center'>
                <div>
                    <img src={loaderData.image} alt="" />
                </div>

                <div>
                    <p className='text-xl font-bold text-blue-700'>{loaderData.model}</p>
                    <p className='my-5 font-bold'>Key Features</p>

                    <div className='space-y-3 font-semibold'>
                        <p>CPU Cores:{loaderData.cores}</p>
                        <p>Base frequency: {loaderData.base_frequency}</p>
                        <p>Cache:{loaderData.cache}</p>
                        <p>Base Clock Speed:{loaderData.base_clock}</p>

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
                        <p className='ml-3 text-xl font-semibold rounded-xl my-3 text-blue-700 '>Basic Information</p>
                    </div>



                    <div className='space-y-3 font-semibold'>
                        <div className='flex justify-between w-1/2'>
                            <p>Base Frequency:  </p> <span>{loaderData.base_frequency}</span>
                        </div>
                        <hr />
                        <div className='flex justify-between w-1/2'>
                            <p>Cache:  </p> <span>{loaderData.cache}</span>
                        </div>
                        <hr />
                        <div className='flex justify-between w-1/2'>
                            <p>Cores:  </p> <span>{loaderData.cores}</span>
                        </div>
                        <hr />
                        <div className='flex justify-between w-1/2'>
                            <p>Threads:  </p> <span>{loaderData.threads}</span>
                        </div>
                        <hr />
                        <div className='flex justify-between w-1/2'>
                            <p>Default TDP:  </p> <span>{loaderData.default_tdp}</span>
                        </div>
                        <hr />
                    </div>




                    
                    <div className=' bg-[#f5f6fc] p-2 rounded-xl my-4'>
                        <p className='ml-3 text-xl font-semibold rounded-xl my-3 text-blue-700 '>Graphics Specifications </p>
                    </div>



                    <div className='space-y-3 font-semibold'>
                        <div className='flex justify-between w-1/2'>
                            <p>Manufacturing Process:  </p> <span>{loaderData.manufacturing_process}</span>
                        </div>
                        <hr />
                        <div className='flex justify-between w-1/2'>
                            <p>Max Turbo Frequency:  </p> <span>{loaderData.max_turbo_frequency}</span>
                        </div>
                        <hr />
                        <div className='flex justify-between w-1/2'>
                            <p>Max Speed:  </p> <span>{loaderData.max_speed}</span>
                        </div>
                        <hr />
                        <div className='flex justify-between w-1/2'>
                            <p>Threads:  </p> <span>{loaderData.threads}</span>
                        </div>
                        <hr />
                        <div className='flex justify-between w-1/2'>
                            <p>Max Channels:  </p> <span>{loaderData.max_channels}</span>
                        </div>
                        <hr />
                    </div>





                    <div className=' bg-[#f5f6fc] p-2 rounded-xl my-4'>
                        <p className='ml-3 text-xl font-semibold rounded-xl my-3 text-blue-700 '>Warranty Information</p>
                    </div>



                    <div className='space-y-3 font-semibold'>
                       
                        <div className='flex justify-between w-1/2'>
                            <p>Manufacturing Warranty :  </p> <span>{loaderData.warranty}</span>
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

export default BuildcpuDetails;