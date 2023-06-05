"use client"
import React from 'react';
import { useState } from 'react';

import { BsFillCartPlusFill } from 'react-icons/bs';
import { AiOutlineHeart } from 'react-icons/ai';
import { MdOutlineArrowDropDown } from 'react-icons/md';


import style from './navbar.module.css';
import TopNavbar from '@/components/TopNavbar/TopNavbar';
import NavSearchBar from '@/components/NavSearchBar/NavSearchBar';

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className={`sticky top-0 ${style.zindex} bg-white`}>
            <TopNavbar></TopNavbar>
            <NavSearchBar></NavSearchBar>

            <nav className="flex items-center justify-between lg:bg-white bg-black flex-wrap px-6 py-2">

                <div className="block lg:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="flex items-center px-3 py-2 rounded text-black-500  hover:text-black-400"
                    >
                        <svg
                            className={`fill-current h-5 w-5 text-white  ${isOpen ? "hidden" : "block"}`}
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                        </svg>
                        <svg
                            className={`fill-current h-5 w-5  text-white  ${isOpen ? "block" : "hidden"}`}
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
                        </svg>
                    </button>
                </div>


                <div className='block lg:hidden'>
                    <div className='flex justify-between'>
                        <div className="flex items-center flex-shrink-0 text-white mr-6  lg:mr-72">
                            <img src="https://web.bdbeautyglamorous.com/uploads/application/1661607420n2BrTj1cZN9142.jpg" className={` w-10 h-10 rounded-full ${style.marginRight}`} alt="Logo" />
                        </div>

                        <div className='flex gap-3 text-2xl text-white'>
                            <AiOutlineHeart />
                            <BsFillCartPlusFill />

                        </div>
                    </div>
                </div>

                <div
                    className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${isOpen ? "block" : "hidden"}`}
                >
                    <div className="text-sm lg:flex-grow ">
                        <div className="dropdown dropdown-bottom dropdown-hover block mt-4 lg:inline-block lg:mt-0 lg:text-gray-600 text-white text-white-200 
                        font-bold mr-4">
                            <label tabIndex={0} className=" flex m-2">
                                <p>Skin Care</p>
                                <MdOutlineArrowDropDown className='mt-1 text-lg text-[#c00093]' />
                            </label>
                            <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-[#c00093] rounded-box w-52">
                                <li><a className='text-white'>Item 1</a></li>
                                <li><a className='text-white'>Item 2</a></li>
                            </ul>
                        </div>
                        <hr className='block lg:hidden mt-2 mb-2' />


                        <div className="dropdown dropdown-bottom  dropdown-hover block mt-4 lg:inline-block lg:mt-0 lg:text-gray-600 text-white text-white-200 
                        font-bold mr-4">
                            <label tabIndex={0} className=" flex m-2">
                                <p>Hair Care</p>
                                <MdOutlineArrowDropDown className='mt-1 text-lg text-[#c00093]' />
                            </label>
                            <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-[#c00093] rounded-box w-52">
                                <li><a className='text-white'>Item 1</a></li>
                                <li><a className='text-white'>Item 2</a></li>
                            </ul>
                        </div>


                        <hr className='block lg:hidden mt-2 mb-2' />
                        <div className="dropdown dropdown-bottom dropdown-hover block mt-4 lg:inline-block lg:mt-0 lg:text-gray-600 text-white text-white-200 
                        font-bold mr-4">
                            <label tabIndex={0} className=" flex m-2">
                                <p>Lip Care</p>
                                <MdOutlineArrowDropDown className='mt-1 text-lg text-[#c00093]' />
                            </label>
                            <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-[#c00093] rounded-box w-52">
                                <li><a className='text-white'>Item 1</a></li>
                                <li><a className='text-white'>Item 2</a></li>
                            </ul>
                        </div>
                        <hr className='block lg:hidden mt-2 mb-2' />
                        <div className="dropdown dropdown-bottom dropdown-hover block mt-4 lg:inline-block lg:mt-0 lg:text-gray-600 text-white text-white-200 
                        font-bold mr-4">
                            <label tabIndex={0} className=" flex m-2">
                                <p>Body Care</p>
                                <MdOutlineArrowDropDown className='mt-1 text-lg text-[#c00093]' />
                            </label>
                            <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-[#c00093] rounded-box w-52">
                                <li><a className='text-white'>Item 1</a></li>
                                <li><a className='text-white'>Item 2</a></li>
                            </ul>
                        </div>
                        <hr className='block lg:hidden mt-2 mb-2' />

                        <div className="dropdown dropdown-bottom dropdown-hover block mt-4 lg:inline-block lg:mt-0 lg:text-gray-600 text-white text-white-200 
                        font-bold mr-4">
                            <label tabIndex={0} className=" flex m-2">
                                <p>OFFERS</p>
                                <MdOutlineArrowDropDown className='mt-1 text-lg text-[#c00093]' />
                            </label>
                            <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-[#c00093] rounded-box w-52">
                                <li><a className='text-white'>Item 1</a></li>
                                <li><a className='text-white'>Item 2</a></li>
                            </ul>
                        </div>
                        <hr className='block lg:hidden mt-2 mb-2' />

                        <div className="dropdown dropdown-bottom dropdown-hover block mt-4 lg:inline-block lg:mt-0 lg:text-gray-600 text-white text-white-200 
                        font-bold mr-4">
                            <label tabIndex={0} className=" flex m-2">
                                <p>MORE</p>
                                <MdOutlineArrowDropDown className='mt-1 text-lg text-[#c00093]' />
                            </label>
                            <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-[#c00093] rounded-box w-52">
                                <li><a className='text-white'>Item 1</a></li>
                                <li><a className='text-white'>Item 2</a></li>
                            </ul>
                        </div>
                        <hr className='block lg:hidden mt-2 mb-2' />
                    </div>
                    <div className='block lg:hidden mt-5'>
                        <button className="inline-flex items-center btn btn-sm  bg-[#c00093] border-0   text-white">
                            Login
                        </button>
                    </div>

                </div>
            </nav>
        </div>
    );
};

export default Navbar;