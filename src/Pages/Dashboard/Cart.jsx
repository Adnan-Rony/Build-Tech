import React, { useContext, useEffect, useState } from 'react';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { VscChromeClose } from "react-icons/vsc";
import Getdata from '../../Hook/Getdata';
import axios from 'axios';
import { AuthContext } from '../../Firebase/Authprovider';
import toast from 'react-hot-toast';
import UseCart from '../../Hook/UseCart';
const Cart = () => {


  const [carts, setCart] = useState([]);

  const { user } = useContext(AuthContext)

  const [cart,refetch]=UseCart();


 

  const handleDelete = async (id) => {
    const response = await axios.delete(`http://localhost:5000/addtocarts/${id}`)
    if (response.data.deletedCount > 0) {
      toast.success(` delete successfully`)
    }
    refetch();
    // console.log(cart.model);
  }






  return (
    <div>
    
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th className=''>Image</th>
              <th className=''>Price</th>
              <th className=''>Model</th>

              <th className=''>Delete</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((cartItem) => (
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

export default Cart;
