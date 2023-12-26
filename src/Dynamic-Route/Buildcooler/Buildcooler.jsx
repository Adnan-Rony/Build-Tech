import React, { useEffect, useState } from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const Buildcooler = () => {
    const [categorie, setcategorie] = useState([]);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("http://localhost:5000/buildcooler")
            .then((res) => res.json())
            .then((data) => {
                setcategorie(data);
                setLoading(false);
            })
            .catch((error) => console.error('Error fetching data:', error));
    }, []);
    return (
        <div>
            <div className='grid lg:grid-cols-3 grid-cols-2 gap-4'>
                    {categorie.map((processor, index) => (
                      <Link key={index} to={`/buildcoolerDetails/${processor._id}`}>
                        <div key={index} className='p-5 border'>
                            <img
                                className='w-full'
                                src={processor.image}
                                alt=""
                                
                            />

<div className='bg-black p-2 rounded-xl  text-white flex justify-between items-center'>
                                <div className='space-y-3'>
                                    <p className='font-medium   capitalize'>Model {processor.model}</p>
                                    <p className='font-medium   capitalize'>Price: {processor.price}</p>

                                </div>
                                <div>
                                    <HiArrowNarrowRight className='text-3xl'></HiArrowNarrowRight>
                                </div>
                            </div>
                        </div>
                      </Link>
                    ))}
                </div>
        </div>
    );
};

export default Buildcooler;