import React from 'react';
import { FiKey } from 'react-icons/fi';
import { BsArrowLeftShort } from 'react-icons/bs';
import Link from 'next/link';

const ForgotPassword = () => {
    return (
        <div className='mt-20 mb-20'>
            <div className='lg:w-[50%] mx-auto '>

                <div className='flex gap-5 justify-center'>
                    <p className="btn rounded-full bg-[#f5ecff]  border-none "><FiKey className='text-[#8b6dc9] text-lg' /></p>
                    <h1 className=' font-bold text-black lg:text-2xl text-xl mt-2'>Forgot Password?</h1>
                </div>
                <p className='lg:text-sm text-xs text-gray-500 text-center mt-5'>No Worries, We'll send you reset instructions</p>

                <form>
                    <div className="form-control w-full mx-auto max-w-xs mt-5">
                        <label className="label">
                            <span className="label-text">Email</span>

                        </label>
                        <input type="email" placeholder="Type Your Email" className="input input-bordered w-full max-w-xs" />
                    </div>

                    <div className='bg-[#7f56da] mt-5 lg:w-[30%] md:[30%] w-[50%] mx-auto py-2 rounded-xl'>
                        <p className='text-xs text-white text-center font-semibold '>RESET PASSWORD</p>
                    </div>

                    <div className='mt-8 flex gap-1 justify-center'>
                        <BsArrowLeftShort className='text-2xl' />
                        <p className=' text-center text-sm '>  Back to <span className='text-[#8b6dc9] '><Link href="/login">Login</Link></span></p>
                    </div>


                    {/* <div className='w-[30%] mx-auto mt-5'>
                        <button className="btn btn-active  btn-primary btn-sm text-xs  ">RESET PASSWORD</button>
                    </div> */}
                </form>
            </div>
        </div>
    );
};

export default ForgotPassword;