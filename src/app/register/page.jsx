'use client'
import Link from 'next/link';
import style from './register.module.css';
import { useForm } from 'react-hook-form';

const Register = () => {

    const { register, handleSubmit } = useForm();


    const handleRegister = data => {
        console.log(data);
    }
    return (
        <div className='container mx-auto'>
            <div className='lg:mx-40 mx-10 py-20'>
                <div className='grid lg:grid-cols-3 grid-cols-1 gap-10 items-center  bg-gradient-to-r from-[#3639b3] via-[#2a56c3] to-[#02c1fc] lg:p-10'>
                    <div className='p-5'>
                        <h1 className='text-center text-2xl font-semibold mb-3 text-white'>WELCOME</h1>
                        <p className='text-center text-white'>Congratulations on being part of the team! The whole company welcomes you, and we look forward to a successful journey with you! Welcome aboard!</p>


                        <div className='mt-14 text-center'>
                            <Link href='/login' className='btn btn-sm px-10 rounded-full bg-white text-black border-none'>Login</Link>
                        </div>

                    </div>



                    <div className={`lg:col-span-2 bg-white lg:p-10 p-2 ${style.borderradious}`}>

                        <h1 className='text-center text-gray-600 lg:text-3xl text-2xl lg:mt-0 mt-2 font-semibold mb-10 '>Create An Account</h1>

                        <form onSubmit={handleSubmit(handleRegister)}>
                            <div className='grid lg:grid-cols-2 gap-5 mb-5'>
                                <div className="form-control w-full ">
                                    <input type="text" {...register("fname")} placeholder="Enter Your First Name *" className="input rounded-sm input-bordered w-full" />
                                </div>

                                <div className="form-control w-full ">
                                    <input type="text" {...register("lname")} placeholder="Enter Your Last Name *" className="input rounded-sm input-bordered w-full" />
                                </div>
                            </div>


                            <div className='grid lg:grid-cols-2 gap-5 mb-5'>
                                <div className="form-control w-full ">
                                    <input type="email" {...register("email")} placeholder="Enter Your Email *" className="input rounded-sm input-bordered w-full" />
                                </div>

                                <div className="form-control w-full ">
                                    <input type="number" {...register("number")} placeholder="Enter Your Phone Number *" className="input rounded-sm input-bordered w-full" />
                                </div>
                            </div>



                            <div className='grid lg:grid-cols-2 gap-5'>
                                <div className="form-control w-full ">
                                    <input type="password" {...register("password")} placeholder="Password *" className="input rounded-sm input-bordered w-full" />
                                </div>

                                <div className="form-control w-full ">
                                    <input type="password" {...register("confirmpassword")} placeholder="Confirm Password *" className="input rounded-sm input-bordered w-full" />
                                </div>
                            </div>

                            <div className='mt-8 text-right'>
                                <input className='btn btn-sm px-10 rounded-full bg-[#0062cc] border-none' type="submit" value="Register" />
                            </div>
                        </form>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default Register;