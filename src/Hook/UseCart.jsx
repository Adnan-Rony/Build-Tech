import { useQuery } from '@tanstack/react-query';
import UseaxioxSecure from './axioxSecure';
import axios from 'axios';
import { useContext } from 'react';
import { AuthContext } from '../Firebase/Authprovider';



const UseCart = () => {

    const { user } = useContext(AuthContext)

    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['cart', user?.email],
        queryFn: async () => {
            const res = await axios.get(`http://localhost:5000/addtocarts?email=${user.email}`)
            return res.data
        }


    })

    return [cart, refetch]

};

export default UseCart;