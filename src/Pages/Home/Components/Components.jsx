import React, { useEffect, useState } from 'react';
import { FaBeer } from "react-icons/fa";
import cpu from '../../../assets/8186331.png'
import ram from '../../../assets/2703609.png'
import monitor from '../../../assets/4854302.png'
import grapich from '../../../assets/2286822.png'
import keyboard from '../../../assets/e04bd9042f1695f0844fbe935b858d9c-keyboard-flat-icon.png'
import cooler from '../../../assets/cpu-fan-icon-editable-bold-outline-color-fill-design-vector-illustration-215219008.webp'
import { Link } from 'react-router-dom';



const Components = () => {

    const [categorie, setcategorie] = useState([]);

    const [loading, setLoading] = useState(true);

    // useEffect(() => {
    //     fetch("http://localhost:5000/categories")
    //         .then((res) => res.json())
    //         .then((data) => {
    //             setcategorie(data);
    //             setLoading(false);
    //         })
    //         .catch((error) => console.error('Error fetching data:', error));
    // }, []);


    return (
        <div className='my-10'>
            <p>Components</p>

            {/* <div className='py-10 grid lg:grid-cols-3 grid-cols-2 gap-8'>
                {loading ? (
                 <span className="loading loading-ring loading-lg mx-auto text-5xl"></span>
                ) : (
                    categorie.map((card, index) => (
                        <div key={index}>
                            <Link to={`components/${card._id}`}>
                                <div className='p-8 shadow-xl justify-center space-y-3 items-center'>
                                    <img className='w-24 mx-auto' src={card.picture} alt={card.name} />
                                    <div className='flex text-center justify-center items-center'>
                                        <p className='font-medium text-sm text-gray-400 capitalize'>{card.name}</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))
                )}
            </div> */}

            <div className='py-10 grid lg:grid-cols-3 grid-cols-2 gap-8 '>
                <div className='' >
                    <Link to={`buildcpu`}>
                        <div className='p-8 shadow-xl justify-center space-y-3 items-center'>
                            <img className='w-24 mx-auto' src={cpu } alt="" />
                            <div className='flex text-center justify-center items-center'>
                                <p className='font-medium text-sm text-gray-400 capitalize'>CPU</p>
                            </div>
                        </div>
                    </Link>
                </div>
                <div >
                    <Link to={`buildram`}>
                        <div className='p-8 shadow-xl justify-center space-y-3 items-center'>
                            <img className='w-24 mx-auto' src={ram } alt="" />
                            <div className='flex text-center justify-center items-center'>
                                <p className='font-medium text-sm text-gray-400 capitalize'>RAM</p>
                            </div>
                        </div>
                    </Link>
                </div>
                <div >
                    <Link  to={`buildcooler`}>
                        <div className='p-8 shadow-xl justify-center space-y-3 items-center'>
                            <img className='w-24 mx-auto' src={cooler } alt="" />
                            <div className='flex text-center justify-center items-center'>
                                <p className='font-medium text-sm text-gray-400 capitalize'>CPU Coller</p>
                            </div>
                        </div>
                    </Link>
                </div>
                <div >
                    <Link to={`buildkeyboards`} >
                        <div className='p-8 shadow-xl justify-center space-y-3 items-center'>
                            <img className='w-24 mx-auto' src={keyboard } alt="" />
                            <div className='flex text-center justify-center items-center'>
                                <p className='font-medium text-sm text-gray-400 capitalize'>KEYBOARDS</p>
                            </div>
                        </div>
                    </Link>
                </div>
                <div >
                    <Link to={`buildmonitor`} >
                        <div className='p-8 shadow-xl justify-center space-y-3 items-center'>
                            <img className='w-24 mx-auto' src={monitor } alt="" />
                            <div className='flex text-center justify-center items-center'>
                                <p className='font-medium text-sm text-gray-400 capitalize'>MONITOR</p>
                            </div>
                        </div>
                    </Link>
                </div>
                <div >
                    <Link to={`Buildgraphics`} >
                        <div className='p-8 shadow-xl justify-center space-y-3 items-center'>
                            <img className='w-24 mx-auto' src={grapich } alt="" />
                            <div className='flex text-center justify-center items-center'>
                                <p className='font-medium text-sm text-gray-400 capitalize'>GRAPHICH CARD</p>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>

        </div>
    );
};

export default Components;