import React from 'react';
import Getdata from '../../Hook/Getdata';
import { Link } from 'react-router-dom';
import { FaEdit } from 'react-icons/fa';
import { VscChromeClose } from 'react-icons/vsc';
import toast from 'react-hot-toast';
import axios from 'axios';

const AllProducts = () => {

    const [components,loading]=Getdata();

    const handleDelete = async (cartItem) => {
        const response = await axios.delete(`http://localhost:5000/categories/${cartItem._id}`)
        if (response.data.deletedCount > 0) {
          toast.success(`${components.title} has been deleted`)
        }
        // refetch();
      }



 if (loading) {

        return <div className="flex items-center justify-center h-screen">
            <span className="loading loading-ring loading-lg"></span>
        </div>

    }

    return (
        <div className='max-w-screen-xl mx-auto'>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th className='text-black'>Image</th>
                            <th className='text-black'>Price</th>
                            <th className='text-black'>Model</th>
                            <th className='text-black'>Update</th>
                            <th className='text-black'>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {components.map((cartItem) => (
                            <tr key={cartItem._id}>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-16 h-12">
                                                <img src={cartItem.image} alt="Product Image" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>{cartItem.price}</td>
                                <td >{cartItem.model}</td>
                                <td>
                                    <Link to={`/update/${cartItem._id}`}>
                                        <button className="btn btn-ghost btn-sm ">
                                            <FaEdit className="" />
                                        </button>
                                    </Link>
                                </td>
                                <td>
                                    <button onClick={()=>handleDelete(cartItem)}
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

export default AllProducts;