
import { useContext } from 'react';
import { FaShoppingCart, FaTv } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { AuthContext } from '../Firebase/Authprovider';
import img from '../assets/portrait-icon-2.png'
import UseCart from '../Hook/UseCart';
import { Link } from 'react-router-dom';


const Navber = () => {



    const { user, logout } = useContext(AuthContext);


        const [cart]=UseCart()


    const handlelogout = () => {
        logout()
            .then(result => {
                console.log(result)
            })
            .catch(error => {
                console.log(error);
            })
    }





    return (
        <div>
            <div className='max-w-screen-xl mx-auto'>
                <div className="navbar  ">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">




                            <HashLink smooth to="/"
                                className='btn btn-ghost btn-sm'
                            >
                                Home
                            </HashLink>
                            <HashLink smooth to="/#components"
                                className='btn btn-ghost btn-sm'
                            >
                                Components
                            </HashLink>
                            <HashLink smooth to="/#latest"
                                className='btn btn-ghost btn-sm'
                            >
                                Latest
                            </HashLink>
                            <HashLink smooth to="/#FAQ"
                                className='btn btn-ghost btn-sm'
                            >
                                FAQ
                            </HashLink>


                            <NavLink to='/dashboard/carts' className='btn btn-ghost btn-sm'>
                              <FaShoppingCart className='text-xl'> </FaShoppingCart>
                              <div className='badge badge-'>+{cart.length}

                              </div>


                            </NavLink>


                         
                        



                        </ul>
                            



                        </div>
                        <Link to='/'>
                        Build-Tech
                        </Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 gap-3">
                            <HashLink smooth to="/"
                                className='btn btn-ghost btn-sm'
                            >
                                Home
                            </HashLink>
                            <HashLink smooth to="/#components"
                                className='btn btn-ghost btn-sm'
                            >
                                Components
                            </HashLink>
                            <HashLink smooth to="/#latest"
                                className='btn btn-ghost btn-sm'
                            >
                                Latest
                            </HashLink>
                            <HashLink smooth to="/#FAQ"
                                className='btn btn-ghost btn-sm'
                            >
                                FAQ
                            </HashLink>


                            <NavLink to='/dashboard/carts' className='btn btn-ghost btn-sm'>
                              <FaShoppingCart className='text-xl'> </FaShoppingCart>
                              <div className='badge badge-'>+{cart.length}

                              </div>


                            </NavLink>


                         


                            
                            <NavLink to='/dashboard' className='btn btn-ghost btn-sm'>
                                Dashboard <FaTv></FaTv>


                            </NavLink>



                        </ul>
                    </div>
                    <div className="navbar-end">
                        {
                            user ? <>
                                <button
                                    onClick={handlelogout}
                                    // className={({ isActive }) =>
                                    //     isActive ? 'btn btn-outline btn-sm' : 'btn btn-ghost btn-sm'
                                    // }
                                    className='btn btn-ghost btn-sm'
                                >
                                    SignOut

                                </button>
                                {
                                    user.photoURL ?
                                        <img className='w-8 rounded-full' src={user.photoURL} alt="" />
                                        :
                                        <img className='w-8 rounded-full' src={img} alt="" />

                                }


                            </>
                                :

                                <NavLink to="/login" className="btn btn-outline e btn-sm">Login</NavLink>


                        }

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navber;