import React, { useContext } from 'react';
import logo from '../../../assets/logo.svg'
import { Link } from 'react-router-dom';
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { IoSearchOutline } from "react-icons/io5";
import ActiveLink from './ActiveLink/ActiveLink';
import { AuthContext } from '../../../providers/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => {

            })
            .catch(error => {
                console.log(error.message)
            })
    }

    const navItem = <>
        <li><ActiveLink to='/'>Home</ActiveLink></li>
        <li><ActiveLink to='/about'>About</ActiveLink></li>
        <li><ActiveLink to='/services'>Services</ActiveLink></li>
        {/* <li><ActiveLink to='/blog'>Blog</ActiveLink></li> */}
        <li><ActiveLink to='/contact'>Contact</ActiveLink></li>
        <li><ActiveLink to='/order-review'>Orders</ActiveLink></li>
        {
            user?.email ?
                <>
                    <button onClick={handleLogOut}>Logout</button>
                    
                </> :
                <li><ActiveLink to='/login'>Login</ActiveLink></li>
        }
    </>



    return (
        <div className="navbar bg-base-100 my-8">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow ">
                        {navItem}
                        <div className='flex items-center justify-around my-3 gap-5 font-semibold text-3xl'>
                            <HiOutlineShoppingBag />
                            <IoSearchOutline />
                        </div>
                    </ul>
                </div>
                <Link to='/'>
                    <img className='w-24' src={logo} alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="space-x-8 menu-horizontal px-1 text-xl">
                    {navItem}
                </ul>
            </div>
            <div className="navbar-end">
                <div className='lg:flex items-center gap-5 mr-7 font-semibold text-3xl hidden'>
                    <HiOutlineShoppingBag />
                    <IoSearchOutline />
                </div>
                <a href="#_" className="rounded-md px-2 py-2 md:px-4 md:py-3 m-1 overflow-hidden relative group cursor-pointer border md:border-2 font-medium border-[#FF3811] ">
                    <span className="absolute w-64 h-0 transition-all duration-500 origin-center rotate-45 -translate-x-20 bg-[#FF3811] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                    <span className="relative text-[#FF3811] transition duration-500 group-hover:text-white ease text-sm  md:text-lg md:font-semibold">Appointment</span>
                </a>
            </div>
        </div>
    );
};
// [#FF3811]
export default Navbar;