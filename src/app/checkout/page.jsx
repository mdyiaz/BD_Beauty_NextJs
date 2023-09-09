'use client'

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { AiOutlinePlus } from 'react-icons/ai';


const CheckOut = () => {


    const { register, formState: { errors }, handleSubmit } = useForm()

    const handleAddress = data => {
        console.log(data);
    }



    const [selectedButton, setSelectedButton] = useState(null);

    const handleButtonClick = (buttonId) => {
        setSelectedButton(buttonId);
    };


    const [showModal, setShowModal] = React.useState(false);
    return (
        <div className='lg:mx-40 mx-2 mb-10 mt-5'>
            <div className='grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-5'>
                <div className='lg:col-span-2 md:col-span-2'>



                    {/* Address Section START__________________________________________________________________ */}

                    <>
                        <button
                            className="flex w-full gap-2 text-[#007787] text-sm justify-center bg-base-200 py-5 shadow-md"
                            type="button"
                            onClick={() => setShowModal(true)}
                        >
                            <AiOutlinePlus className='mt-1' />
                            Add New Delivery Address
                        </button>
                        {showModal ? (
                            <>
                                <div
                                    className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-[1000] outline-none focus:outline-none"
                                >
                                    <div className="relative w-auto my-6 mx-auto max-w-3xl">
                                        {/*content*/}
                                        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                            {/*header*/}
                                            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                                <h3 className=" font-semibold">
                                                    Add New Delivery Address
                                                </h3>
                                                <button
                                                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                                    onClick={() => setShowModal(false)}
                                                >
                                                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                                        ×
                                                    </span>
                                                </button>
                                            </div>
                                            {/*body*/}
                                            <div className="relative p-6 flex-auto">
                                                {/* <p className="my-4 text-slate-500 text-lg leading-relaxed">
                                                    I always felt like I could do anything. That’s the main
                                                    thing people are controlled by! Thoughts- their perception
                                                    of themselves! They're slowed down by their perception of
                                                    themselves. If you're taught you can’t do anything, you
                                                    won’t do anything. I was taught I could do everything.
                                                </p> */}

                                                <form onSubmit={handleSubmit(handleAddress)}>
                                                    <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5 mt-3'>
                                                        <div className="form-control ">
                                                            <label className="label">
                                                                <span className="label-text">Full Name</span>
                                                            </label>
                                                            <input type="text"  {...register("name", { required: "Full Name is required" })} placeholder="Full Name" className="input input-bordered rounded-sm lg:w-80 w-72 " />
                                                        </div>

                                                        <div className="form-control ">
                                                            <label className="label">
                                                                <span className="label-text">Address</span>
                                                            </label>
                                                            <input type="text" {...register("address", { required: "Address is required" })} placeholder="House no. / building / street / area" className="input input-bordered rounded-sm lg:w-80 w-72 " />
                                                        </div>
                                                    </div>


                                                    <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5 mt-3'>
                                                        <div className="form-control ">
                                                            <label className="label">
                                                                <span className="label-text">Mobile Number</span>
                                                            </label>
                                                            <input type="number"  {...register("phone", { required: "Mobile Number is required" })} placeholder="Input mobile number" className="input input-bordered rounded-sm lg:w-80 w-72 " />
                                                        </div>

                                                        <div className="form-control ">
                                                            <label className="label">
                                                                <span className="label-text">Landmark (optional)</span>
                                                            </label>
                                                            <input type="text" {...register("landmark")} placeholder="E.g. beside train station" className="input input-bordered rounded-sm lg:w-80 w-72 " />
                                                        </div>
                                                    </div>

                                                    <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5 mt-3'>
                                                        <div className="form-control ">
                                                            <label className="label">
                                                                <span className="label-text">Province</span>
                                                            </label>
                                                            <select  {...register("province", { required: "Province is required" })} className="select select-bordered w-full max-w-xs rounded-sm">
                                                                <option disabled selected>Please Choose your province</option>
                                                                <option>Han Solo</option>
                                                                <option>Greedo</option>
                                                            </select>
                                                        </div>

                                                        <div className="form-control ">
                                                            <label className="label">
                                                                <span className="label-text">Select a label for effective delivery:</span>
                                                            </label>
                                                            <div className='flex justify-between '>
                                                                <button onClick={() => handleButtonClick(1)}
                                                                    style={{
                                                                        borderColor: selectedButton === 1 ? 'teal' : 'white',
                                                                    }} className="btn btn-active rounded-sm  px-12 btn-ghost">Home</button>

                                                                <button onClick={() => handleButtonClick(2)}
                                                                    style={{
                                                                        borderColor: selectedButton === 2 ? 'teal' : 'white',
                                                                    }} className="btn btn-active rounded-sm  px-12 btn-ghost">Office</button>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5 mt-3'>
                                                        <div>
                                                            <div className="form-control ">
                                                                <label className="label">
                                                                    <span className="label-text">City</span>
                                                                </label>
                                                                <select  {...register("city", { required: "City is required" })} className="select select-bordered w-full max-w-xs rounded-sm">
                                                                    <option disabled selected>Please Choose your City/municipality</option>
                                                                    <option>Han Solo</option>
                                                                    <option>Greedo</option>
                                                                </select>
                                                            </div>
                                                        </div>

                                                        <div className="form-control ">
                                                            <label className="label">
                                                                <span className="label-text">Area</span>
                                                            </label>
                                                            <select  {...register("area", { required: "Area is required" })} className="select select-bordered w-full max-w-xs rounded-sm">
                                                                <option disabled selected>Please Choose your Area</option>
                                                                <option>Han Solo</option>
                                                                <option>Greedo</option>
                                                            </select>
                                                        </div>

                                                    </div>


                                                </form>
                                            </div>
                                            {/*footer*/}
                                            <div className="flex items-center justify-between p-6 border-t border-solid border-slate-200 rounded-b">

                                                <div>
                                                    <button className="btn bg-[orangered] border-none px-10 btn-sm text-white rounded-sm">Save</button>
                                                </div>
                                                <button
                                                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                    type="button"
                                                    onClick={() => setShowModal(false)}
                                                >
                                                    Close
                                                </button>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                            </>
                        ) : null}
                    </>

                    {/* ADDRESS SECTION END____________________________________________________________________ */}




                    <div className='bg-base-200 mt-3 lg:p-5 p-2 shadow-md'>
                        <h1 className='text-sm mb-5'>PRODUCTS</h1>
                        <div>
                            <div className='lg:flex lg:justify-between gap-3'>
                                <div className='flex gap-3'>
                                    <img src="https://static-01.daraz.com.bd/p/6f21695360a0e06db002b7a6738d1a27.jpg" alt="" className='w-14 h-14 ' />
                                    <p className='text-sm'>Men's Premium soft and comfortable T-shirt - Fabric's Royal Blue</p>
                                </div>
                                <p className='text-xs lg:text-left text-center'>Qty: <span>1</span></p>
                                <p className='text-sm font-semibold lg:text-left text-center lg:mt-0 mt-3'>৳ <span>160</span></p>
                            </div>
                            <hr className='mt-3 mb-3' />
                        </div>


                        <div>
                            <div className='lg:flex lg:justify-between gap-3'>
                                <div className='flex gap-3'>
                                    <img src="https://static-01.daraz.com.bd/p/6f21695360a0e06db002b7a6738d1a27.jpg" alt="" className='w-14 h-14 ' />
                                    <p className='text-sm'>Men's Premium soft and comfortable T-shirt - Fabric's Royal Blue</p>
                                </div>
                                <p className='text-xs lg:text-left text-center'>Qty: <span>1</span></p>
                                <p className='text-sm font-semibold lg:text-left text-center lg:mt-0 mt-3'>৳ <span>160</span></p>
                            </div>
                            <hr className='mt-3 mb-3' />
                        </div>


                    </div>
                </div>


                <div className='bg-base-200 lg:p-5 p-2 shadow-md'>
                    <p className=' font-semibold text-orange-600'>Order Summary</p>

                    <div className='flex justify-between mt-3 text-sm font-semibold'>
                        <p>Items Total</p>
                        <p>৳ <span>160</span></p>
                    </div>

                    <div className='flex justify-between mt-2 text-sm font-semibold'>
                        <p>Delivery Fee</p>
                        <p>৳ <span>60</span></p>
                    </div>


                    <div className='flex justify-between mt-2 text-sm font-semibold'>
                        <p>Total Payment</p>
                        <p>৳ <span>160</span></p>
                    </div>

                    <p className='text-xs text-gray-400 text-right mt-1'>VAT included, where applicable</p>

                    <div>
                        <input className='py-2  text-white text-sm bg-[orangered] w-full border-none mt-5' type="submit" value="Place Order" />
                    </div>

                </div>

            </div>










        </div>
    );
};

export default CheckOut;