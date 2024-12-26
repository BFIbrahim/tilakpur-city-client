import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div>
            <div className="navbar bg-green-500">
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
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li className='font-bold text-black md:text-white'><NavLink to='/services'>সার্ভিস সমুহ</NavLink></li>
                            <li className='font-bold text-black md:text-white'><NavLink to="/opinions">মতামত</NavLink></li>
                            <li className='font-bold text-black md:text-white'><NavLink to="/developer">ডেভেলপার</NavLink></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl text-white">আমাদের তিলকপুর</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li className='font-bold text-black md:text-white'><NavLink to='/services'>সার্ভিস সমুহ</NavLink></li>
                        <li className='font-bold text-black md:text-white'><NavLink to="/opinions">মতামত</NavLink></li>
                        <li className='font-bold text-black md:text-white'><NavLink to="/developer">ডেভেলপার</NavLink></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navigation;