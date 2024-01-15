import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import ComponentsTWO from './ComponentsTWO';

const ComponentsOne = ({ item, title }) => {


    return (
        <div className='my-10'>
            {
                title && <p className='lg:text-3xl text-2xl font-bold  py-5 '>{title} </p>
            }
            <hr className='py-3 ' />
            <div className='grid lg:grid-cols-4 grid-cols-2 gap-3 lg:p-1 p-2'>
                {
                    item.map((item, index) => <ComponentsTWO key={index}
                        item={item}
                    ></ComponentsTWO>)
                }

            </div>

        </div>
    );
};

export default ComponentsOne;