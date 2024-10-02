import React, { useContext } from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import login from '../../assets/images/login/login.svg';
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';
import toast, { Toaster } from 'react-hot-toast';

const Login = () => {

    const { signIn, googleSignIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleSignIn = (event) => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const user = result.user;
                // console.log(user);
                toast('Login successfully');
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.log(error.message);
            });
    }

    const handleGoogleLogin = () => {
        googleSignIn()
            .then(result => {
                console.log(result.user)
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.log(error.message)
            })
    }

    return (
        <div>
            <Navbar></Navbar>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row w-full" >
                    <div className="md:w-1/2 flex justify-center">
                        <img src={login} className='w-4/5' alt="" />
                    </div>
                    <div className="card md:w-1/2 max-w-md shrink-0 border rounded-md">
                        <h2 className='text-4xl font-semibold text-center mt-12 mb-4'>Login</h2>
                        <form onSubmit={handleSignIn} className="card-body">
                            <div className="form-control mb-2">
                                <label className="label">
                                    <span className="text-lg font-semibold">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="Your email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="text-lg font-semibold">Confirm Password</span>
                                </label>
                                <input type="password" name='password' placeholder="Your password" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <button className="py-2 bg-[#FF3811] text-white text-xl font-semibold rounded-lg">Login</button>
                                <Toaster toastOptions={{
                                    className: '',
                                    style: {
                                        backgroundColor: '#FF3811',
                                        color: "white",
                                        fontWeight: 500,
                                    },
                                }} />
                            </div>
                        </form>
                        <div>
                            <p className='text-center text-lg font-medium mb-7'>Or Sign In with</p>
                            <div className='flex justify-center items-center gap-5 mb-12'>
                                <button className='text-2xl text-[#3B5998] bg-base-200 p-3 rounded-full'><FaFacebookF className='' /></button>
                                <button className='text-2xl text-[#0A66C2] bg-base-200 p-3 rounded-full'><FaLinkedinIn /></button>
                                <button onClick={handleGoogleLogin} className='text-2xl bg-base-200 p-3 rounded-full'> <FcGoogle /></button>
                            </div>
                            <p className='text-center text-lg font-medium mb-7'>Have an account? <Link to='/register' className='text-[#FF3811]'>Sign In</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;