'use client'

// import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import Link from 'next/link';

const Login = () => {

    const { register, handleSubmit } = useForm();


    const handleLogin = data => {
        console.log(data);
   }

    return (
        <div className='container mx-auto'>
            <div className='lg:mx-40 mx-10 py-20'>
            <div className='grid lg:grid-cols-2 grid-cols-1  lg:gap-16 gap-10'>

                <div>
                    <img src="https://i.ibb.co/Cz2JZGr/login-img.png" alt="" className='w-full lg:h-96 h-52' />
                </div>


                <div>
                    <h1 className='text-4xl mb-3 text-[#151865] font-semibold'>Welcome back</h1>
                    <p className='mb-14 text-xl text-gray-500 font-thin'>Please login to your account.</p>
                    <form onSubmit={handleSubmit(handleLogin)} >
                        <div className="form-control w-full ">
                            <input type="email" {...register("email")} placeholder="Enter Your Email" className="input input-bordered input-info w-full " />
                        </div>

                        <div className="form-control w-full mt-5 ">
                            <input type="password" {...register("password")} placeholder="Enter Your Password" className="input input-bordered input-info w-full " />
                        </div>

                        <div className='flex justify-between mt-12'>
                            <div className='flex gap-2' >
                                <input type="checkbox" name="" id="" />
                                <p className=' text-gray-600 text-thin'>Remember Me</p>
                            </div>

                            <div>
                                <Link href="/forgotpassword"> <p className=' text-secondary text-thin'>Forgot password?</p> </Link>
                            </div>
                        </div>

                        <div className='w-40 mx-auto mt-10'>
                            <input className='bg-info py-3 w-40 rounded-md  text-white  text-center' type="submit" value="Login" />
                        </div>
                    </form>

                    <p className='mt-5 text-center'>New User? <Link href='/register' className='text-secondary'>Sign Up</Link></p>
                </div>


            </div>

        </div>
        </div>
    );
};

export default Login;