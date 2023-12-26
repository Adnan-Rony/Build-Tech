import React from 'react';
import bannerr from '../../../assets/1659594250-boost-performance-primary.avif'
const Banner2 = () => {
    return (
        <div>
            <div className='grid lg:grid-cols-2 gap-2 justify-center items-center bg-gradient-to-r from-[#141e20]  to-[#243b55] p-8 text-white rounded-2xl'>
                        <div className='space-y-3'>
                            <p className='lg:text-6xl text-3xl font-bold'>Want us to build <br /> your custom PC?</p>
                        
                            <p className='lg:text-xl font-bold pt-4'>Check out the <span className='text-red-700'>custom PC building tool----</span></p>
                        
                        </div>

                        <div>
                            <img className='drop-shadow-[0_15px_35px_rgba(138,43,226,43)]' src={bannerr} alt="" />
                        </div>
            </div>
        </div>
    );
};

export default Banner2;