import React from 'react';
import bannerr from '../../../assets/32741-5-gaming-computer-image.png'
const Latest = () => {
    return (
        <div>
              <div className='grid lg:grid-cols-3 gap-2 justify-center items-center bg-gradient-to-r from-[#141e20]  to-[#243b55] p-8 text-white rounded-2xl'>
                        <div className='space-y-3'>
                            <p className='lg:text-3xl text-xl font-semibold'>DOUBLE PERFORMANCE <br /> <span className='text-red-600'>GAMMING</span> PC CORE 4</p>
                        
                            <p className='lg:text-xl font-bold pt-4'>Check out the <span className='text-red-700'>custom PC building tool----</span></p>
                        
                        </div>

                        <div>
                            <img className='drop-shadow-[0_25px_35px_rgba(220,20,60)]' src={bannerr} alt="" />
                        </div>

                        <div className='space-y-3'>
                        <div className='bg-[#DC143C] p-2 rounded-xl'>    <p className='lg:text-4xl text-2xl font-semibold'>Truly Gaming PC</p></div>
                        <div className='bg-[#DC143C] p-2 rounded-xl'>    <p className='lg:text-4xl text-2xl font-semibold'>RTX 2080</p></div>
                        <div className='bg-[#DC143C] p-2 rounded-xl'>    <p className='lg:text-4xl text-2xl font-semibold'>Inte Core i9-9900k</p></div>
                        
                            
                        
                        </div>
            </div>
        </div>
    );
};

export default Latest;