import React, { useContext } from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import login from '../../assets/images/login/login.svg';
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Register = () => {

    const {createUser, profileUpdate, googleSignIn} = useContext(AuthContext);
    const navigate = useNavigate();
    
    const hndleCreateUser = (event) =>{
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);
        createUser(email, password)
        .then(result=> {
            const user = result.user;
            console.log(user)
            profileUpdate(name)
            .then(()=>{
                
            })
            .catch(error=>{
                console.log(error.message)
            })
            form.reset();
            navigate('/')
        })
        .catch(error=> {
            console.log(error.message)
        })
    }

    const handleGoogleSignUp = () =>{
        googleSignIn()
        .then(result => {
            console.log(result.user)
            navigate('/')
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
                        <h2 className='text-4xl font-semibold text-center mt-12 mb-4'>Sign Up</h2>
                        <form onSubmit={hndleCreateUser} className="card-body">
                            <div className="form-control mb-2">
                                <label className="label">
                                    <span className="text-lg font-semibold">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="Your email" className="input input-bordered" required />
                            </div>
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
                                <button className="py-2 bg-[#FF3811] text-white text-xl font-semibold rounded-lg">Sign Up</button>
                            </div>
                        </form>
                        <div>
                            <p className='text-center text-lg font-medium mb-7'>Or Sign In with</p>
                            <div className='flex justify-center items-center gap-5 mb-12'>
                                <button className='text-2xl text-[#3B5998] bg-base-200 p-3 rounded-full'><FaFacebookF className='' /></button>
                                <button className='text-2xl text-[#0A66C2] bg-base-200 p-3 rounded-full'><FaLinkedinIn /></button>
                                <button onClick={handleGoogleSignUp} className='text-2xl bg-base-200 p-3 rounded-full'> <FcGoogle /></button>
                            </div>
                            <p className='text-center text-lg font-medium mb-7'>Already have an account? <Link to='/login' className='text-[#FF3811]'>Login</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;