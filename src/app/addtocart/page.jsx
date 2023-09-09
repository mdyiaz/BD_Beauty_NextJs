import Link from 'next/link';

const AddToCart = () => {
    return (
        <div className='lg:mx-40 mx-2  mb-10'>
            <div className='grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-5'>
                <div className='lg:col-span-2 md:col-span-2'>
                    <div className='border border-gray-300 p-5 mt-5'>
                        <div className='lg:block hidden'>
                            <div className='grid lg:grid-cols-4 gap-5 grid-cols-2'>
                                <div className='lg:col-span-2'>
                                    <div className='flex gap-8'>
                                        <div className='flex gap-4'>
                                            <input type="checkbox" name="" id="" className='border border-black' />
                                            <p className='font-semibold'>SL.</p>
                                        </div>
                                        <p className='font-semibold'>Item</p>
                                    </div>
                                </div>

                                <div className=' flex justify-between'>
                                    <p className='font-semibold'>Price</p>
                                    <p className='font-semibold'>Quantity</p>
                                </div>

                                <div>
                                    <p className='font-semibold text-right'>Delete</p>
                                </div>
                            </div>
                        </div>

                        <div className='grid lg:grid-cols-4 grid-cols-1 gap-5 mt-5'>
                            <div className='lg:col-span-2'>
                                <div className='flex gap-8'>
                                    <div className='lg:block hidden'>
                                        <div className='flex gap-4'>
                                            <input type="checkbox" name="" id="" className='border border-black' />
                                            <p className='font-semibold text-lg '>1.</p>
                                        </div>
                                    </div>
                                    <div className='flex gap-3 mt-2'>
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQP7ARHenfnGXcxCIhmDxObHocM8FPbjyaBg&usqp=CAU" alt="" className='w-12 h-12' />
                                        <p className='text-blue-500 text-sm '>Xiaomi WiFi Repeater Pro (Dual Antenna, 300M) Xiaomi WiFi Repeater Pro (Dual Antenna, 300M)</p>
                                    </div>
                                </div>
                            </div>



                            <div className=' lg:flex lg:justify-between text-center '>
                                <p className='text-sm font-semibold lg:mb-0 mb-5'><span className='text-2xl mr-1 font-bold'>৳</span>15000</p>
                                <input type="number" name="" id="" className='w-14 h-8 border border-black' />
                            </div>

                            <div className='lg:text-right text-center'>
                                <button className='btn btn-ghost'><img src="https://i.ibb.co/FsYpS72/delete.png" alt="" className='w-5 h-5' /></button>
                            </div>
                        </div>
                    </div>

                    <div className='border border-gray-300 p-5 mt-5'>
                        <div className='lg:block hidden'>
                            <div className='grid lg:grid-cols-4 gap-5 grid-cols-2'>
                                <div className='lg:col-span-2'>
                                    <div className='flex gap-8'>
                                        <div className='flex gap-4'>
                                            <input type="checkbox" name="" id="" className='border border-black' />
                                            <p className='font-semibold'>SL.</p>
                                        </div>
                                        <p className='font-semibold'>Item</p>
                                    </div>
                                </div>

                                <div className=' flex justify-between'>
                                    <p className='font-semibold'>Price</p>
                                    <p className='font-semibold'>Quantity</p>
                                </div>

                                <div>
                                    <p className='font-semibold text-right'>Delete</p>
                                </div>
                            </div>
                        </div>

                        <div className='grid lg:grid-cols-4 grid-cols-1 gap-5 mt-5'>
                            <div className='lg:col-span-2'>
                                <div className='flex gap-8'>
                                    <div className='lg:block hidden'>
                                        <div className='flex gap-4'>
                                            <input type="checkbox" name="" id="" className='border border-black' />
                                            <p className='font-semibold text-lg '>1.</p>
                                        </div>
                                    </div>
                                    <div className='flex gap-3 mt-2'>
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQP7ARHenfnGXcxCIhmDxObHocM8FPbjyaBg&usqp=CAU" alt="" className='w-12 h-12' />
                                        <p className='text-blue-500 text-sm '>Xiaomi WiFi Repeater Pro (Dual Antenna, 300M) Xiaomi WiFi Repeater Pro (Dual Antenna, 300M)</p>
                                    </div>
                                </div>
                            </div>



                            <div className=' lg:flex lg:justify-between text-center '>
                                <p className='text-sm font-semibold lg:mb-0 mb-5'><span className='text-2xl mr-1 font-bold'>৳</span>15000</p>
                                <input type="number" name="" id="" className='w-14 h-8 border border-black' />
                            </div>

                            <div className='lg:text-right text-center'>
                                <button className='btn btn-ghost'><img src="https://i.ibb.co/FsYpS72/delete.png" alt="" className='w-5 h-5' /></button>
                            </div>
                        </div>
                    </div>

                    <div className='grid lg:grid-cols-2 grid-cols-1 gap-5 mt-10'>
                        <div>
                            <Link href='/' ><button className="btn btn-outline btn-info text-white btn-sm w-full">Continue Shopping</button></Link>
                        </div>

                        <div className='lg:text-right'>
                            <button className="btn btn-outline btn-secondary btn-sm w-full">Clear Shopping Cart</button>
                        </div>
                    </div>
                </div>

                <div className='p-3  bg-base-200'>
                    <h1 className='text-2xl text-black font-semibold'>Summary</h1>
                    <hr className='mt-3 mb-3' />



                    <div>
                        <div className='grid grid-cols-2 '>
                            <p className='text-sm font-semibold text-gray-500'>Subtotal</p>
                            <p className='text-right text-black text-xl font-semibold '>৳ <span className='text-sm'>7,050.00</span></p>
                        </div>

                        <div className='grid grid-cols-2 gap-3 mt-5 '>
                            <p className='text-sm font-semibold text-gray-500'>Shipping (Delivery within 1-5 Days - Inside Dhaka City)</p>
                            <p className='text-right text-black text-xl font-semibold '>৳ <span className='text-sm'>50.00</span></p>
                        </div>
                    </div>
                    <hr className='mt-3 mb-3' />


                    <div>
                        <div className='flex gap-5'>
                            {/* <input type="text" placeholder="Enter Discount Code" className="input input-bordered w-full  max-w-xs" /> */}
                            {/* <button className="bg-sky-500 text-white px-8 ">APPLY</button> */}
                            <input className='w-full border border-sky-500' type="text" name="" id="" placeholder='Enter Voucher Code' />
                            <button className='bg-sky-600 text-white px-8 py-1'>APPLY</button>
                        </div>
                    </div>



                    <div className='grid grid-cols-2 font-semibold mt-3'>
                        <p> Total</p>
                        <p className='text-right text-[orangered]'>৳ <span>7,050.00</span></p>
                    </div>
                    <hr className='mt-3 mb-3' />



                    <div className='mt-5'>
                        <Link href='/checkout'><button className='btn bg-[orangered] border-none w-full'>Proceed to Checkout</button></Link>
                    </div>




                </div>
            </div>

        </div>
    );
};

export default AddToCart;