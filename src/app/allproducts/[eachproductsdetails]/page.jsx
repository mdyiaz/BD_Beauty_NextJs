'use client'

import React, { useState } from 'react';
import ReactImageMagnify from 'react-image-magnify';


// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


// import required modules
import { Navigation, Pagination, Autoplay, Mousewheel, Keyboard } from "swiper";


import { BsFillStarFill, BsFillCartPlusFill, BsFillSuitHeartFill } from 'react-icons/bs';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { MdProductionQuantityLimits } from 'react-icons/md';
import { GiReturnArrow } from 'react-icons/gi';
import { RiEqualizerLine } from 'react-icons/ri';
import { SiVitest } from 'react-icons/si';

import style from './style.module.css'
import ShopFromRecenltlyViewed from '@/components/ShopFromRecentlyViewed/ShopFromRecentlyViewed';
import SimilarProducts from '@/components/SimilarProducts/SimilarProducts';


const images = [
    'https://web.bdbeautyglamorous.com/uploads/product/1680624365OG1dmU0ENS2536.jpeg',
    'https://cdn4.ethoswatches.com/the-watch-guide/wp-content/uploads/2021/06/Watches-Under-2-Lakh.jpg',
    'https://web.bdbeautyglamorous.com/uploads/product/1680624365klkp8I6F261436.jpeg',
    'https://web.bdbeautyglamorous.com/uploads/product/1680624365Jg3FdqtdRt9476.jpeg'
]


const EachProductsDetails = () => {
    const [img, setImg] = useState(images[0]);
    const hoverHandler = (image, i) => {
        setImg(image);
    }

    return (
        <div className='container mx-auto py-5'>
            <div className='lg:mx-40 mx-5 bg-base-100 shadow-lg'>
                <div className=' grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-10  lg:p-5'>
                    <div className='lg:block hidden'>
                        <div className='grid lg:grid-cols-3 '>
                            <div className='items-center '>
                                {
                                    images.map((image, i) => (
                                        <div key={i}
                                            onMouseOver={() => hoverHandler(image, i)}

                                        >
                                            <img src={image} alt="" className='w-32 h-28 mb-3' />

                                        </div>
                                    ))
                                }
                            </div>

                            <div className='lg:col-span-2'>
                                {/* <img src={img} alt="" className='w-full lg:h-[482px] h-80' /> */}
                                <ReactImageMagnify {...{
                                    smallImage: {
                                        alt: 'Wristwatch by Ted Baker London',
                                        isFluidWidth: true,
                                        src: img

                                    },
                                    largeImage: {
                                        src: img,
                                        width: 1200,
                                        height: 1800
                                    },
                                    enlargedImageContainerDimensions: {
                                        width: '150%',
                                        height: '150%'
                                    }
                                }}
                                />
                            </div>
                        </div>
                    </div>


                    <div className='lg:hidden'>
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={30}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            navigation={true}
                            pagination={{
                                clickable: true,
                            }}
                            mousewheel={true}
                            keyboard={true}
                            modules={[Navigation, Pagination, Autoplay, Mousewheel, Keyboard]}
                            className="mySwiper"

                            breakpoints={{

                                0: {

                                    slidesPerView: 1,
                                },

                                520: {

                                    slidesPerView: 1,
                                },


                                768: {

                                    slidesPerView: 1,
                                },

                                1000: {

                                    slidesPerView: 1,
                                },
                            }}
                        >

                            <div>
                                {
                                    images.map((image => (
                                        <SwiperSlide>
                                            <img src={image} alt="" />
                                        </SwiperSlide>
                                    )))
                                }

                            </div>

                        </Swiper>
                    </div>



                    <div>
                        <h1 className='text-2xl mb-4  font-semibold'>Charcoal Pearl Detox & Brightening Bar</h1>

                        <div className='flex gap-5'>
                            <div className='flex gap-1 text-xl '>
                                <BsFillStarFill className='text-yellow-400' />
                                <BsFillStarFill className='text-yellow-400' />
                                <BsFillStarFill className='text-yellow-400' />
                                <BsFillStarFill className='text-gray-400' />
                                <BsFillStarFill className='text-gray-400' />
                            </div>

                            <div className='flex gap-5'>
                                <p>4.8</p>
                                <p>(73)</p>
                            </div>
                        </div>

                        <div className='mt-3'>
                            <p className='text-lg font-semibold text-gray-700'>TK 689.00</p>
                        </div>

                        <div className='lg:flex gap-5 mt-10'>
                            <div>
                                <div className='flex justify-evenly gap-5 border border-gray-300 py-3 px-10'>
                                    <button> <AiOutlinePlus /></button>
                                    <p>1</p>
                                    <button> <AiOutlineMinus /></button>
                                </div>


                            </div>

                            <div className='flex lg:mt-0 mt-5  btn rounded-sm px-8 bg-black '>
                                <BsFillCartPlusFill className='text-[red] text-lg' />
                                <p className='text-white text-sm px-4'>ADD TO CART</p>
                            </div>
                        </div>


                        <div className='mt-5 lg:w-44'>
                            <div className='flex gap-2 btn btn-sm btn-outline btn-secondary'>
                                <BsFillSuitHeartFill />
                                <p className=' text-sm'>ADD TO WISHLIST</p>
                            </div>
                        </div>


                        <div className='mt-5'>
                            <h1 className='font-bold text-black text-lg mb-1'>Description</h1>
                            <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error odio assumenda sequi eos in aperiam perspiciatis non, voluptatem mollitia iusto, accusantium, expedita veritatis necessitatibus!</p>
                        </div>




                    </div>

                </div>



                <div className='lg:block hidden'>
                    <div className=' flex gap-16  p-5 '>
                        <div className='flex gap-3'>
                            <div className='btn bg-gray-500 border-none rounded-full'>
                                <MdProductionQuantityLimits className='text-lg' />
                            </div>
                            <p className='text-black mt-2'>Crurlty Free</p>
                        </div>

                        <div className='flex gap-3'>
                            <div className='btn bg-gray-500 border-none rounded-full'>
                                <GiReturnArrow className='text-lg' />
                            </div>
                            <p className='text-black mt-2'>Easy Return's</p>
                        </div>

                        <div className='flex gap-3'>
                            <div className='btn bg-gray-500 border-none rounded-full'>
                                <RiEqualizerLine className='text-lg' />
                            </div>
                            <p className='text-black mt-2'>Quality First</p>
                        </div>


                        <div className='flex gap-3'>
                            <div className='btn bg-gray-500 border-none rounded-full'>
                                <SiVitest className='text-lg' color='white' />
                            </div>
                            <p className='text-black mt-2'>Dermatologically Tested </p>
                        </div>

                    </div>
                </div>


                <div className='lg:mt-5 mt-10 lg:flex gap-3 lg:p-5'>
                    <p className='text-sm font-semibold text-black'>Check Estimated Delivery Date For your Location: </p>
                    <input className={`${style.inputt} lg:mt-0 mt-3 lg:mb-0 mb-3`} type="text" name="" id="" placeholder='Enter Pincode' /> <br />

                    <button className='bg-black text-white w-24 py-1 rounded-md '>Check Now</button>
                </div>


                <div className='mt-5 flex lg:gap-5 gap-1 lg:p-5'>
                    <p className='text-sm text-black mt-2'>Share with friends :</p>
                    <div>
                        <img src="https://i.ibb.co/cvq7y4C/facebook.png" alt="" className='w-9 h-9 rounded-full' />
                    </div>

                    <div>
                        <img src="https://i.ibb.co/Y3fZKTW/whatsapp.png" alt="" className='w-9 h-9 rounded-full' />
                    </div>

                    <div>
                        <img src="https://i.ibb.co/9c9DQ0y/twitter-1.png" alt="" className='w-9 h-9 rounded-full' />
                    </div>

                    <div>
                        <img src="https://i.ibb.co/H2qDJZS/linkedin.png" alt="" className='w-9 h-9 rounded-full' />
                    </div>

                    <div>
                        <img src="https://i.ibb.co/bspTQkG/telegram.png" alt="" className='w-9 h-9 rounded-full' />
                    </div>

                </div>


                <div className='mt-10 lg:flex lg:gap-20 lg:px-5 py-5'>
                    <div>
                        <button className="btn bg-[orangered] px-10 border-none">Benefits</button>
                        <ul className='mt-5 font-semibold'>
                            <li className='mt-3 '>1. <span className='btn btn-outline btn-secondary btn-sm'> Remove Dirt, oil and Other Impurities.</span></li>
                            <li className='mt-3 '>2. <span className='btn btn-outline btn-secondary btn-sm'> Remove Dirt, oil and Other Impurities.</span></li>
                            <li className='mt-3 '>3. <span className='btn btn-outline btn-secondary btn-sm'> Remove Dirt, oil and Other Impurities.</span></li>
                            <li className='mt-3 '>4. <span className='btn btn-outline btn-secondary btn-sm'> Remove Dirt, oil and Other Impurities.</span></li>
                        </ul>
                    </div>

                    <div className='lg:mt-0 mt-10 '>
                        <button className="btn bg-[orangered] px-8 border-none">How To Use</button>
                        <ul className='mt-5 font-semibold'>
                            <li className='mt-3 '>1. <span className='btn btn-outline btn-secondary btn-sm'> Remove Dirt, oil and Other Impurities.</span></li>
                            <li className='mt-3 '>2. <span className='btn btn-outline btn-secondary btn-sm'> Remove Dirt, oil and Other Impurities.</span></li>
                            <li className='mt-3 '>3. <span className='btn btn-outline btn-secondary btn-sm'> Remove Dirt, oil and Other Impurities.</span></li>
                            <li className='mt-3  '>4. <span className='btn btn-outline btn-secondary btn-sm'> Remove Dirt, oil and Other Impurities.</span></li>
                        </ul>
                    </div>

                </div>


                <div>
                    <div className="divider"></div>
                    <SimilarProducts></SimilarProducts>

                    <div className="divider mt-10"></div>
                    <ShopFromRecenltlyViewed></ShopFromRecenltlyViewed>
                </div>

            </div>



        </div>
    );
};

export default EachProductsDetails;