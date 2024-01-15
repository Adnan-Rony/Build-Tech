import React from 'react';
import CheckoutFrom from './CheckoutFrom';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';



const stripePromise = loadStripe('pk_test_51OFJf0KEl3BF64XLulYplbXXyye8oIOVngxCwL3R8dgJWkN1FkugCwqFmNgrkyCypCPLawN8qJEWyRIKTaOsq5gM00t2b4bxqG');
const Payment = () => {


    return (
        <div className='max-w-screen-xl mx-auto h-screen'>
            <div className=''>
                <h1 className='text-center lg:text-5xl text-sm font-bold my-5 text-black'>PAYMENT</h1>
                <hr className='w-1/2 mx-auto' />


                <div className='my-20  text-black border p-10 rounded-2xl py-20'>
                    <Elements stripe={stripePromise}>
                        <CheckoutFrom></CheckoutFrom>
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;