import { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "./Authprovider";
import auth from "./firebase.config";
import img from '../assets/32741-5-gaming-computer-image.png'
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";



const Login = () => {


    const { signIn, googleLogin,user } = useContext(AuthContext); // Use useContext to get the values from AuthContext

    const navigate=useNavigate();
    // const location = useLocation();

    // const from =location.state?.from?.pathname || "/";



    const handlelogin = (event) => {
        event.preventDefault();

        const email = event.target.email.value;
        const password = event.target.password.value;






        signIn(email, password)
            .then((result) => {
                console.log(result);
                toast.success('Login successfully');
                navigate('/')
            })
            .catch((error) => {
                console.log(error);
                toast.error(error.message);
            });
    };



    const handlegoogle = () => {
        googleLogin(auth)
            .then((res) => {
                // console.log(res);

                const userInfo={
                    email:res.user?.email,
                    name:res.user?.displayName
                }

                    axios.post('http://localhost:5000/users',userInfo)
                    .then(res=>{
                        console.log(res.data);
                    })
                    


                navigate('/')

            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div className='max-w-screen-xl mx-auto py-20'>


            <div className='grid  lg:grid-cols-2 grid-cols-1 gap-4 items-center justify-center' >

                <div>
                    <img src={img} alt="" />
                </div>

                <div className=' text-white '>
                    <div className='hero-content flex-col lg:flex-row-reverse'>
                        <div className='card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100'>
                            <div className='card-body bg-[#171717] rounded-xl'>
                                <form onSubmit={handlelogin} >
                                    <div className='form-control'>
                                        <h1 className='text-3xl font-bold mb-5'>Login your account</h1>
                                        <label className='label'>
                                            <span className='label-text text-white'>Email</span>
                                        </label>
                                        <input type='email' name='email' required placeholder='email' className='input input-bordered text-black' />
                                    </div>
                                    <div className='form-control'>
                                        <label className='label'>
                                            <span className='label-text text-white'>Password</span>
                                        </label>
                                        <input type='password' required name='password' placeholder='password' className='input input-bordered text-black' />
                                        <label className='label'>
                                            <a href='#' className='label-text-alt link link-hove text-white'>
                                                Forgot password?
                                            </a>
                                        </label>
                                    </div>
                                    <div className='form-control mt-6'>
                                        <button className='btn border-none text-white bg-[#03a84e]'>Login</button>
                                    </div>
                                </form>
                                <p>
                                    New here? please{' '}
                                    <Link to='/register'>
                                        <button className='btn btn-link text-[#03a84e]'>Register</button>
                                    </Link>{' '}
                                </p>
                                <button onClick={handlegoogle} className='btn text-black hover:bg-[#03a84e] hover:text-white '>
                                    Google
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>



        </div>
    );
};

export default Login;
