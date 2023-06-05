import Link from "next/link";


const AllProductsHome = () => {
    return (
        <div className='mt-10 mb-10'>
            <div className=' text-center bg-[#c00093]  lg:w-72 w-60 mx-auto py-2 rounded-lg'>
                <h1 className='text-center font-semibold  text-white  '>ALL PRODUCTS</h1>
            </div>


            <div className="mt-8 lg:mx-40 mx-10">
                <div className=' grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5'>
                    <div>
                        <div>
                            <img src="https://web.bdbeautyglamorous.com/uploads/product/1680701750WfKhQEb9iD8355.jpeg" alt="" className='lg:w-96 lg:h-[280px] object-fill aspect-square' />
                            <div className='text-sm font-bold text-black mt-3 text-center'>
                                <p>Zarin's Leap Scrub</p>
                                <p className='mt-1'>TK 210</p>
                            </div>
                        </div>

                        <div className='bg-[pink] border border-[deeppink] mt-5 py-2'>
                            <p className='text-center text-sm  text-[#FF1493]'>SELECT SHADE</p>
                        </div>

                    </div>

                    <div>
                        <div>
                            <img src="https://web.bdbeautyglamorous.com/uploads/product/1680701750WfKhQEb9iD8355.jpeg" alt="" className='lg:w-96 lg:h-[280px] object-fill aspect-square' />
                            <div className='text-sm font-bold text-black mt-3 text-center'>
                                <p>Zarin's Leap Scrub</p>
                                <p className='mt-1'>TK 210</p>
                            </div>
                        </div>

                        <div className='bg-[pink] border border-[deeppink] mt-5 py-2'>
                            <p className='text-center text-sm  text-[#FF1493]'>SELECT SHADE</p>
                        </div>

                    </div>

                    <div>
                        <div>
                            <img src="https://web.bdbeautyglamorous.com/uploads/product/1680701750WfKhQEb9iD8355.jpeg" alt="" className='lg:w-96 lg:h-[280px] object-fill aspect-square' />
                            <div className='text-sm font-bold text-black mt-3 text-center'>
                                <p>Zarin's Leap Scrub</p>
                                <p className='mt-1'>TK 210</p>
                            </div>
                        </div>

                        <div className='bg-[pink] border border-[deeppink] mt-5 py-2'>
                            <p className='text-center text-sm  text-[#FF1493]'>SELECT SHADE</p>
                        </div>

                    </div>

                    <div>
                        <div>
                            <img src="https://web.bdbeautyglamorous.com/uploads/product/1680701750WfKhQEb9iD8355.jpeg" alt="" className='lg:w-96 lg:h-[280px] object-fill aspect-square' />
                            <div className='text-sm font-bold text-black mt-3 text-center'>
                                <p>Zarin's Leap Scrub</p>
                                <p className='mt-1'>TK 210</p>
                            </div>
                        </div>

                        <div className='bg-[pink] border border-[deeppink] mt-5 py-2'>
                            <p className='text-center text-sm  text-[#FF1493]'>SELECT SHADE</p>
                        </div>

                    </div>

                    <div>
                        <div>
                            <img src="https://web.bdbeautyglamorous.com/uploads/product/1680701750WfKhQEb9iD8355.jpeg" alt="" className='lg:w-96 lg:h-[280px] object-fill aspect-square' />
                            <div className='text-sm font-bold text-black mt-3 text-center'>
                                <p>Zarin's Leap Scrub</p>
                                <p className='mt-1'>TK 210</p>
                            </div>
                        </div>

                        <div className='bg-[pink] border border-[deeppink] mt-5 py-2'>
                            <p className='text-center text-sm  text-[#FF1493]'>SELECT SHADE</p>
                        </div>

                    </div>

                    <div>
                        <div>
                            <img src="https://web.bdbeautyglamorous.com/uploads/product/1680701750WfKhQEb9iD8355.jpeg" alt="" className='lg:w-96 lg:h-[280px] object-fill aspect-square' />
                            <div className='text-sm font-bold text-black mt-3 text-center'>
                                <p>Zarin's Leap Scrub</p>
                                <p className='mt-1'>TK 210</p>
                            </div>
                        </div>

                        <div className='bg-[pink] border border-[deeppink] mt-5 py-2'>
                            <p className='text-center text-sm  text-[#FF1493]'>SELECT SHADE</p>
                        </div>

                    </div>

                    <div>
                        <div>
                            <img src="https://web.bdbeautyglamorous.com/uploads/product/1680701750WfKhQEb9iD8355.jpeg" alt="" className='lg:w-96 lg:h-[280px] object-fill aspect-square' />
                            <div className='text-sm font-bold text-black mt-3 text-center'>
                                <p>Zarin's Leap Scrub</p>
                                <p className='mt-1'>TK 210</p>
                            </div>
                        </div>

                        <div className='bg-[pink] border border-[deeppink] mt-5 py-2'>
                            <p className='text-center text-sm  text-[#FF1493]'>SELECT SHADE</p>
                        </div>

                    </div>

                    <div>
                        <div>
                            <img src="https://web.bdbeautyglamorous.com/uploads/product/1680701750WfKhQEb9iD8355.jpeg" alt="" className='lg:w-96 lg:h-[280px] object-fill aspect-square' />
                            <div className='text-sm font-bold text-black mt-3 text-center'>
                                <p>Zarin's Leap Scrub</p>
                                <p className='mt-1'>TK 210</p>
                            </div>
                        </div>

                        <div className='bg-[pink] border border-[deeppink] mt-5 py-2'>
                            <p className='text-center text-sm  text-[#FF1493]'>SELECT SHADE</p>
                        </div>

                    </div>
                </div>

                <div className="mt-5">
                    <Link href="/allproducts" className="w-full btn btn-active btn-secondary btn-sm ">View All Products</Link>
                </div>
            </div>

        </div>
    );
};

export default AllProductsHome;