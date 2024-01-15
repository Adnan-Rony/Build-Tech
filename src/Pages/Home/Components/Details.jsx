import React, { useContext } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import Getdata from '../../../Hook/Getdata';
import { Link } from 'react-router-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Swal from 'sweetalert2';
import { AuthContext } from '../../../Firebase/Authprovider';
import axios from 'axios';
import toast from 'react-hot-toast';
import UseaxioxSecure from '../../../Hook/axioxSecure';
import UseCart from '../../../Hook/UseCart';

const Details = () => {

    const loaderData = useLoaderData();
    console.log(loaderData);

    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    // const axioxSecure=UseaxioxSecure()

  

    const [components, loading] = Getdata();

    const recent = components.slice(0, 4);
    const [, refetch] = UseCart();
    if (loading) {

        return <div className="flex items-center justify-center h-screen">
            <span className="loading loading-ring loading-lg"></span>
        </div>

    }

    const handleAddToCart = (product) => {

        if (user && user.email) {
            const cartItem = {
                email: user.email,
                productId: loaderData._id,
                categories: loaderData.categories,
                model: loaderData.model,
                price: loaderData.price,
                image: loaderData.image
            };


            // console.log("Cart Item:", cartItem);

            axios.post('http://localhost:5000/addtocarts', cartItem)
                .then((res) => {
                    if (res.data.insertedId) {
                        toast.success(`${loaderData.model} add to cart`)
                    }
                     // refetch the cart
                    refetch()

                })
               

              
        }






        else {
            Swal.fire({
                title: "Your are not logged In",
                text: "please login and add to cart!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Login!"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate("/login")
                }
            });
        }

    }


    return (
        <div className='max-w-screen-xl mx-auto lg:p-1 p-2' >
            <div className=' grid lg:grid-cols-2 gap-3 justify-center items-center'>




                <div>

                    {/* <img src={loaderData.image} /> */}
                    <div className='text-center'>
                        <Carousel >
                            <div>
                                <img src={loaderData.image} />

                            </div>
                            <div>
                                <img src={loaderData.image} />

                            </div>
                            <div>
                                <img src={loaderData.image} />

                            </div>
                            <div>
                                <img src={loaderData.image} />

                            </div>

                        </Carousel>
                    </div>




                </div>

                <div className='p-4'>
                    <p className='text-xl font-bold text-blue-700'>{loaderData.model}</p>
                    <p className='mt-5 mb-2 font-bold'>Key Features</p>

                    <div className='space-y-3 p-1 font-semibold'>

                        {/* cpu */}
                        {loaderData.base_frequency && (
                            <p>Base frequency: {loaderData.base_frequency}</p>
                        )}

                        {loaderData.max_speed && (
                            <p>max speed: {loaderData.max_speed}</p>
                        )}

                        {loaderData.type && (
                            <p>type: {loaderData.type}</p>
                        )}
                        {loaderData.cache && (
                            <p>cache: {loaderData.cache}</p>
                        )}

                        {/* cooler */}


                        {loaderData.fan_speed && (
                            <p>Fan Speed: {loaderData.fan_speed}</p>
                        )}
                        {loaderData.dimension && (
                            <p>Dimension: {loaderData.dimension}</p>
                        )}
                        {loaderData.weight && (
                            <p>Weight: {loaderData.weight}</p>
                        )}
                        {loaderData.fan_dimension && (
                            <p>Fan Dimension: {loaderData.fan_dimension}</p>
                        )}



                        {/* monitor */}

                        {loaderData.display_size && (
                            <p>display size: {loaderData.display_size}</p>
                        )}
                        {loaderData.display_type && (
                            <p>display type: {loaderData.display_type}</p>
                        )}
                        {loaderData.resolution && (
                            <p>resolution: {loaderData.resolution}</p>
                        )}
                        {loaderData.refresh_rate && (
                            <p>refresh rate: {loaderData.refresh_rate}</p>
                        )}



                        {/* keyboards */}

                        {loaderData.color && (
                            <p>color: {loaderData.color}</p>
                        )}
                        {loaderData.keys && (
                            <p>keys: {loaderData.keys}</p>
                        )}
                        {loaderData.resolution && (
                            <p>resolution: {loaderData.resolution}</p>
                        )}
                        {loaderData.wired_wireless && (
                            <p>wired wireless: {loaderData.wired_wireless}</p>
                        )}



                        {/* ram */}

                        {loaderData.voltage && (
                            <p>voltage: {loaderData.voltage}</p>
                        )}
                        {loaderData.capacity && (
                            <p>capacity: {loaderData.capacity}</p>
                        )}
                        {loaderData.frequency && (
                            <p>frequency: {loaderData.frequency}</p>
                        )}

                        {/* graphics */}


                        {loaderData.core_clock && (
                            <p>core clock: {loaderData.core_clock}</p>
                        )}
                        {loaderData.multi_display && (
                            <p>multi display: {loaderData.multi_display}</p>
                        )}
                        {loaderData.dimensions && (
                            <p>dimensions: {loaderData.dimensions}</p>
                        )}
                        {loaderData.consumption && (
                            <p>consumption: {loaderData.consumption}</p>
                        )}


















                    </div>

                    <p className='my-5 font-bold'>Payment Options</p>
                    <div className='  mx-auto space-y-2 my-5 justify-start flex '>
                        <div>
                            <p className='text-xl font-bold '>price: <span className='text-red-700'>{loaderData.price}</span> </p>
                            <small>Cash Discount Price</small>
                            <small>Online / Cash Payment</small>
                        </div>

                    </div>
                    <div className='flex gap-3 my-2'>
                        <button onClick={() => handleAddToCart(loaderData._id)} className='btn btn-outline btn-sm'>Add To Cart</button>

                       <Link to="/payment">
                       <button  className='btn btn-outline btn-sm'>Buy Now</button>
                       </Link>
                    </div>
                </div>









            </div>

            <hr />


            <div className='grid grid-cols-3 gap-3 lg:p-2 p-4 overflow-y-auto '>


                <div className='col-span-3 lg:col-span-2 '>
                    <div className=' '>
                        <div className='lg:p-8 bg-white'>
                            <p className='text-xl font-bold'>Specification</p>

                            <div className=' bg-[#f5f6fc] lg:p-2 p-1 rounded-xl my-4'>
                                <p className='lg:ml-3 text-xl font-semibold rounded-xl my-3 text-blue-700 '>Key Features </p>
                            </div>



                            <div className='space-y-3 font-semibold'>

                                {/* cpu */}
                                <div >

                                    {loaderData.max_speed && (

                                        <div className='flex justify-between w-1/2'>
                                            <p>max speed:</p>
                                            <span>{loaderData.max_speed}</span>
                                        </div>
                                    )}


                                </div>

                                <div >

                                    {loaderData.max_size && (
                                        <div className='flex justify-between w-1/2'>
                                            <p>max size:</p>
                                            <span>{loaderData.max_size}</span>
                                        </div>
                                    )}


                                </div>

                                <div >

                                    {loaderData.default_tdp && (
                                        <div className='flex justify-between w-1/2'>
                                            <p>default tdp:</p>
                                            <span>{loaderData.default_tdp}</span>
                                        </div>
                                    )}


                                </div>

                                {/* cooler */}

                                <div >

                                    {loaderData.fan_speed && (
                                        <div className='flex justify-between w-1/2'>
                                            <p>fan speed:</p>
                                            <span>{loaderData.fan_speed}</span>
                                        </div>
                                    )}


                                </div>

                                <div >

                                    {loaderData.noise && (
                                        <div className='flex justify-between w-1/2'>
                                            <p>noise:</p>
                                            <span>{loaderData.noise}</span>
                                        </div>
                                    )}


                                </div>

                                <div >

                                    {loaderData.dimension && (
                                        <div className='flex justify-between w-1/2'>
                                            <p>dimension:</p>
                                            <span>{loaderData.dimension}</span>
                                        </div>
                                    )}


                                </div>

                                <div >

                                    {loaderData.fan_airflow && (
                                        <div className='flex justify-between w-1/2'>
                                            <p>fan airflow:</p>
                                            <span>{loaderData.fan_airflow}</span>
                                        </div>
                                    )}


                                </div>

                                {/* monitor */}

                                <div >

                                    {loaderData.brightness && (
                                        <div className='flex justify-between w-1/2'>
                                            <p>brightness:</p>
                                            <span>{loaderData.brightness}</span>
                                        </div>
                                    )}


                                </div>

                                <div >

                                    {loaderData.color && (
                                        <div className='flex justify-between w-1/2'>
                                            <p>color:</p>
                                            <span>{loaderData.color}</span>
                                        </div>
                                    )}


                                </div>

                                <div >

                                    {loaderData.panel_type && (
                                        <div className='flex justify-between w-1/2'>
                                            <p>panel_type:</p>
                                            <span>{loaderData.panel_type}</span>
                                        </div>
                                    )}


                                </div>

                                {/* keyboards */}


                                <div >

                                    {loaderData.wired_wireless && (
                                        <div className='flex justify-between w-1/2'>
                                            <p>wired_wireless:</p>
                                            <span>{loaderData.wired_wireless}</span>
                                        </div>
                                    )}


                                </div>
                                <div >

                                    {loaderData.color && (
                                        <div className='flex justify-between w-1/2'>
                                            <p>color:</p>
                                            <span>{loaderData.color}</span>
                                        </div>
                                    )}


                                </div>

                                {/* ram */}

                                <div >

                                    {loaderData.capacity && (
                                        <div className='flex justify-between w-1/2'>
                                            <p>capacity:</p>
                                            <span>{loaderData.capacity}</span>
                                        </div>
                                    )}


                                </div>
                                <div >

                                    {loaderData.frequency && (
                                        <div className='flex justify-between w-1/2'>
                                            <p>frequency:</p>
                                            <span>{loaderData.frequency}</span>
                                        </div>
                                    )}


                                </div>
                                <div >

                                    {loaderData.pin && (
                                        <div className='flex justify-between w-1/2'>
                                            <p>pin:</p>
                                            <span>{loaderData.pin}</span>
                                        </div>
                                    )}


                                </div>

                                {/* graphics */}
                                <div >

                                    {loaderData.multi_display && (
                                        <div className='flex justify-between w-1/2'>
                                            <p>multi_display:</p>
                                            <span>{loaderData.multi_display}</span>
                                        </div>
                                    )}


                                </div>
                                <div >

                                    {loaderData.size && (
                                        <div className='flex justify-between w-1/2'>
                                            <p>size:</p>
                                            <span>{loaderData.size}</span>
                                        </div>
                                    )}


                                </div>
                                <div >

                                    {loaderData.bus_type && (
                                        <div className='flex justify-between w-1/2'>
                                            <p>bus type:</p>
                                            <span>{loaderData.bus_type}</span>
                                        </div>
                                    )}


                                </div>
                                <div >

                                    {loaderData.hdmi && (
                                        <div className='flex justify-between w-1/2'>
                                            <p>hdmi:</p>
                                            <span>{loaderData.hdmi}</span>
                                        </div>
                                    )}


                                </div>









                            </div>





                            <div className=' bg-[#f5f6fc] p-2 rounded-xl my-4'>
                                <p className='ml-3 text-xl font-semibold rounded-xl my-3 text-blue-700 '>Physical Specification  </p>
                            </div>



                            <div className='space-y-3 font-semibold'>
                                {/* cpu */}
                                <div >

                                    {loaderData.threads && (
                                        <div className='flex justify-between w-1/2'>
                                            <p>threads:</p>
                                            <span>{loaderData.threads}</span>
                                        </div>
                                    )}


                                </div>

                                <div >

                                    {loaderData.max_channels && (
                                        <div className='flex justify-between w-1/2'>
                                            <p>max_channels:</p>
                                            <span>{loaderData.max_channels}</span>
                                        </div>
                                    )}


                                </div>

                                <div >

                                    {loaderData.max_turbo_frequency && (
                                        <div className='flex justify-between w-1/2'>
                                            <p>max_turbo frequency:</p>
                                            <span>{loaderData.max_turbo_frequency}</span>
                                        </div>
                                    )}


                                </div>

                                <div >

                                    {loaderData.default_tdp && (
                                        <div className='flex justify-between w-1/2'>
                                            <p>base_clock:</p>
                                            <span>{loaderData.base_clock}</span>
                                        </div>
                                    )}


                                </div>

                                {/* cooler */}

                                <div >

                                    {loaderData.weight && (
                                        <div className='flex justify-between w-1/2'>
                                            <p>weight:</p>
                                            <span>{loaderData.weight}</span>
                                        </div>
                                    )}


                                </div>

                                <div >

                                    {loaderData.rated_voltage && (
                                        <div className='flex justify-between w-1/2'>
                                            <p>rated voltage:</p>
                                            <span>{loaderData.rated_voltage}</span>
                                        </div>
                                    )}


                                </div>

                                <div >

                                    {loaderData.startup_voltage && (
                                        <div className='flex justify-between w-1/2'>
                                            <p>startup_voltage:</p>
                                            <span>{loaderData.startup_voltage}</span>
                                        </div>
                                    )}


                                </div>


                                {/* monitor */}

                                <div >

                                    {loaderData.display_size && (
                                        <div className='flex justify-between w-1/2'>
                                            <p>display size:</p>
                                            <span>{loaderData.display_size}</span>
                                        </div>
                                    )}


                                </div>

                                <div >

                                    {loaderData.contrast_ratio && (
                                        <div className='flex justify-between w-1/2'>
                                            <p>contrast ratio:</p>
                                            <span>{loaderData.contrast_ratio}</span>
                                        </div>
                                    )}


                                </div>

                                <div >

                                    {loaderData.response_time && (
                                        <div className='flex justify-between w-1/2'>
                                            <p>response time:</p>
                                            <span>{loaderData.response_time}</span>
                                        </div>
                                    )}


                                </div>

                                {/* keyboards */}

                                <div >

                                    {loaderData.keys && (
                                        <div className='flex justify-between w-1/2'>
                                            <p>keys:</p>
                                            <span>{loaderData.keys}</span>
                                        </div>
                                    )}


                                </div>

                                {/* ram */}

                                <div >

                                    {loaderData.voltage && (
                                        <div className='flex justify-between w-1/2'>
                                            <p>voltage:</p>
                                            <span>{loaderData.voltage}</span>
                                        </div>
                                    )}


                                </div>
                                <div >

                                    {loaderData.pin && (
                                        <div className='flex justify-between w-1/2'>
                                            <p>pin:</p>
                                            <span>{loaderData.pin}</span>
                                        </div>
                                    )}


                                </div>

                                {/*  graphics*/}

                                <div >

                                    {loaderData.multi_display && (
                                        <div className='flex justify-between w-1/2'>
                                            <p>multi display:</p>
                                            <span>{loaderData.multi_display}</span>
                                        </div>
                                    )}


                                </div>
                                <div >

                                    {loaderData.dimensions && (
                                        <div className='flex justify-between w-1/2'>
                                            <p>dimensions:</p>
                                            <span>{loaderData.dimensions}</span>
                                        </div>
                                    )}


                                </div>
                                <div >

                                    {loaderData.mpn && (
                                        <div className='flex justify-between w-1/2'>
                                            <p>mpn:</p>
                                            <span>{loaderData.mpn}</span>
                                        </div>
                                    )}


                                </div>
                                <div >

                                    {loaderData.memory_clock && (
                                        <div className='flex justify-between w-1/2'>
                                            <p>memory clock:</p>
                                            <span>{loaderData.memory_clock}</span>
                                        </div>
                                    )}


                                </div>
                                <div >

                                    {loaderData.core_clock && (
                                        <div className='flex justify-between w-1/2'>
                                            <p>core clock:</p>
                                            <span>{loaderData.core_clock}</span>
                                        </div>
                                    )}


                                </div>















                            </div>





                            <div className=' bg-[#f5f6fc] p-2 rounded-xl my-4'>
                                <p className='ml-3 text-xl font-semibold rounded-xl my-3 text-blue-700 '>Warranty Information</p>
                            </div>



                            <div className='space-y-3 font-semibold'>

                                <div >

                                    {loaderData.warranty ? (
                                        <div className='flex justify-between w-1/2'>
                                            <p>warranty:</p>
                                            <span>{loaderData.warranty}</span>
                                        </div>

                                    ) :
                                        <div className='flex justify-between w-1/2'>
                                            <p>warranty:</p>
                                            <span>NO warranty</span>
                                        </div>


                                    }


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

                <div className='my-10 lg:col-span-1  col-span-3 w-[300px] h-[500px]  '>


                    <div className='bg-slate-200 rounded-xl'>
                        <p className='lg:text-2xl py-2 font-semibold text-blue-700 text-center'>Recent Product</p>

                        {
                            recent.map((datas, index) => (
                                <div className='' key={index}>



                                    <hr className='my-2' />

                                    <Link to={`/components/${datas._id}`}>
                                        <div className='flex p-2 items-center gap-3'>

                                            <div>
                                                <img className='w-20 rounded-2xl' src={datas.image} alt="" />
                                            </div>

                                            <div>
                                                <small>{datas.model}</small>
                                                <p className='text-red-700 font-semibold'>{datas.price}</p>
                                            </div>

                                        </div>
                                    </Link>



                                </div>
                            ))
                        }
                    </div>


                    <div>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default Details;




