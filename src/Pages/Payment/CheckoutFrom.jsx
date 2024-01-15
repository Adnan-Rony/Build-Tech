import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Firebase/Authprovider';
import axios from 'axios';

const CheckoutFrom = () => {



    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState('')
    const { user } = useContext(AuthContext)
    const [clientSecret, setclientsecret] = useState('')
    const [transactionId, settransactionId] = useState('')




    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }
        const card = elements.getElement(CardElement);
        if (card == null) {
            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });
        if (error) {
            console.log('error', error);

            setError(error.message)
        } else {
            console.log('PaymentMethod', paymentMethod);
            setError('')
        }
        //confirm payment
        const { paymentIntent, error: confirmerror } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'anonymous',
                    name: user?.displayName || 'anonymous'
                }
            }
        })
        {
            console.log('Payment intent', paymentIntent);
            if (paymentIntent.status === 'succeeded') {
                console.log('transactionId', paymentIntent.id);
                settransactionId(paymentIntent.id)
            }
            //save the payment in the database
            const payment = {
                email: user.email,
               
                transactionId: paymentIntent.id,
                date: new Date(), 
                cartId: card.map(item => item._id),
                menuItemId: card.map(item => item.menuId),
                status: 'pending'

            }
            const res = await axios.post('/payments', payment);
            console.log("payment", res.data);

        }
    }




    return (
        <form onSubmit={handleSubmit}>

            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '21px',
                            color: '#000000',
                            '::placeholder': {
                                color: '#000000',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />










            <button className='btn flex btn-outline  mx-auto my-5  bg-red-700 text-white' type="submit" >
                Pay
            </button>







        </form>
    );
};

export default CheckoutFrom;