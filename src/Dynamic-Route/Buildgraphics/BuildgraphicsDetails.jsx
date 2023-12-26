import React from 'react';
import { useLoaderData } from 'react-router-dom';

const BuildgraphicsDetails = () => {
    
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
                        <p>Type:{loaderData.type}</p>
                        <p>Multi display : {loaderData.multi_display}</p>
                        <p>Dimensions:{loaderData.dimensions}</p>
                        <p>Memory clock:{loaderData.memory_clock}</p>

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
                        <p className='ml-3 text-xl font-semibold rounded-xl my-3 text-blue-700 '>Video Memory Specifications</p>
                    </div>



                    <div className='space-y-3 font-semibold'>
                        <div className='flex justify-between w-1/2'>
                            <p>Type:  </p> <span>{loaderData.type}</span>
                        </div>
                        <hr />
                        <div className='flex justify-between w-1/2'>
                            <p>Size:  </p> <span>{loaderData.size}</span>
                        </div>
                        <hr />
                        <div className='flex justify-between w-1/2'>
                            <p>Core Clock:  </p> <span>{loaderData.core_clock}</span>
                        </div>
                       
                        <hr />
                        <div className='flex justify-between w-1/2'>
                            <p>Memory Clock:  </p> <span>{loaderData.memory_clock}</span>
                        </div>
                        <hr />
                        <div className='flex justify-between w-1/2'>
                            <p>CUDA Cores:  </p> <span>{loaderData.cuda_cores}</span>
                        </div>
                        <hr />
                    </div>




                    
                    <div className=' bg-[#f5f6fc] p-2 rounded-xl my-4'>
                        <p className='ml-3 text-xl font-semibold rounded-xl my-3 text-blue-700 '>Interface </p>
                    </div>



                    <div className='space-y-3 font-semibold'>
                        <div className='flex justify-between w-1/2'>
                            <p>HDMI:  </p> <span>{loaderData.hdmi}</span>
                        </div>
                        <hr />
                        <div className='flex justify-between w-1/2'>
                            <p>DVI:  </p> <span>{loaderData.dvi}</span>
                        </div>
                    
                    </div>





                    <div className=' bg-[#f5f6fc] p-2 rounded-xl my-4'>
                        <p className='ml-3 text-xl font-semibold rounded-xl my-3 text-blue-700 '>Physical Specifications</p>
                    </div>



                    <div className='space-y-3 font-semibold'>
                       
                        <div className='flex justify-between w-1/2'>
                            <p>Dimensions :  </p> <span>{loaderData.dimensions}</span>
                        </div>
                        
                    </div>









                    <div className=' bg-[#f5f6fc] p-2 rounded-xl my-4'>
                        <p className='ml-3 text-xl font-semibold rounded-xl my-3 text-blue-700 '>Warranty Information</p>
                    </div>



                    <div className='space-y-3 font-semibold'>
                       
                        <div className='flex justify-between w-1/2'>
                            <p>Manufacturing Warranty :  </p> <span>NO Warranty</span>
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

export default BuildgraphicsDetails;