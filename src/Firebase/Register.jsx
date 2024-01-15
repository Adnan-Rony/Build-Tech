import { useContext } from "react";
import { AuthContext } from "./Authprovider";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import img from '../assets/32741-5-gaming-computer-image.png'
import { Link } from "react-router-dom";

const Register = () => {


    const { CreateUser } = useContext(AuthContext)
    const Navigate = useNavigate()

    const handleregister = event => {




        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const picture = event.target.picture.value;



        console.log(name, email, password, picture);

       


        //verfication
        if (!/(?=.{6,})/.test(password)) {
            toast.error("At least 6 characters in total")
            return;
        }
        if (!/(?=.*[a-z])/.test(password)) {
            toast.error("At least 1 lowercase letter")
            return;
        }
        if (!/(?=.*[A-Z])/.test(password)) {
            toast.error("At least 1 uppercase letter")
            return;
        }
        if (!/(?=.*[!@#\$%\^&\*])/.test(password)) {
            toast.error("At least 1 special character (!@#$%^&*)\n")
            return;
        }

        toast.success('register successfully');

        Navigate('/')


        CreateUser(email, password)
            





    }



    return (
        <div className='max-w-screen-xl mx-auto py-20'>


        <div className='grid  lg:grid-cols-2 grid-cols-1 gap-4 items-center justify-center' >

            <div>
                <img src={img} alt="" />
            </div>

            <div className=' text-white '>
                <div className='hero-content flex-col lg:flex-row-reverse'>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl   ">
                        <div className="card-body bg-[#171717] rounded-xl">
                            {/* <form onSubmit={handlelogin} > */}
                            <form onSubmit={handleregister}>


                                <div className="form-control">
                                    <h1 className='text-3xl font-bold mb-5 text-[#03a84e]'>Register your account</h1>
                                    <label className="label">
                                        <span className="label-text text-white">name</span>
                                    </label>
                                    <input type="text" name='name' placeholder="your name " className="input text-black input-bordered" required />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-white">Email</span>
                                    </label>
                                    <input type="email" name='email' placeholder="email" className="input input-bordered text-black" required />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-white">Photo URL</span>
                                    </label>
                                    <input type="text" name='picture' placeholder="Photo URL" className="input input-bordered text-black" required />
                                </div>





                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-white">Password</span>
                                    </label>
                                    <input type="password" name='password' placeholder="password" className="input input-bordered text-black" required />
                                    <br />
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn bg-[#03a84e] text-white border-none">Register</button>
                                </div>
                            </form>
                            <p className='text-white'>already have account? please
                                <Link to="/login">
                                    <button className='btn btn-link text-[#03a84e]'>Login</button>


                                </Link> </p>



                        </div>
                    </div>
                </div>
            </div>

        </div>



    </div>
    );
};

export default Register;