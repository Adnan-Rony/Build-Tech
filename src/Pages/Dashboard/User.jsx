import React, { useContext } from 'react';
import { VscChromeClose } from 'react-icons/vsc';
import { AuthContext } from '../../Firebase/Authprovider';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import UseaxioxSecure from '../../Hook/axioxSecure';

const User = () => {


    const { user } = useContext(AuthContext)

    const axioxSecure=UseaxioxSecure()
   

    const { refetch, data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axioxSecure.get('/users')
            return res.data
        }


    })

    const handleDelete=(id)=>{
        console.log(id);
    }




    return (
        <div>
            <p>{users.length}</p>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th className=''>name</th>
                            <th className=''>email</th>
                            <th className=''>Role</th>

                            <th className=''>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((cartItem) => (
                            <tr key={cartItem._id}>
                              
                                <td>{cartItem.name}</td>
                                <td>{cartItem.email}</td>
                                <td ></td>

                                <td>
                                    <button onClick={() => handleDelete(cartItem._id)}
                                        className="btn btn-ghost btn-sm"

                                    >
                                        <VscChromeClose className="text-red-600" />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default User;