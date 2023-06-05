'use client'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";



// import required modules
import { Pagination, Autoplay } from "swiper";

const Gifting = () => {
    return (
        <div className='mt-10'>
              <div className=' text-center bg-[#c00093]  lg:w-72 w-60 mx-auto py-2 rounded-lg'>
                <h1 className='text-center font-semibold  text-white  '>GIFTING</h1>
            </div>


            <div className='mt-8 lg:mx-40 mx-10 '>
           <Swiper
               slidesPerView={4}
               spaceBetween={30}
               autoplay={{
                   delay: 2500,
                   disableOnInteraction: false,
               }}
               pagination={{
                   clickable: true,
               }}
               modules={[Pagination, Autoplay]}
               className="mySwiper"

               breakpoints={{

                   0: {

                       slidesPerView: 2,
                   },

                   520: {

                       slidesPerView: 2,
                   },


                   768: {

                       slidesPerView: 2,
                   },

                   1000: {

                       slidesPerView: 4,
                   },
               }}
            >
                <SwiperSlide>
                    <div>
                        <div>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkcU_1v_nc5jW8YrBvQVAwt8DUsbJzrK4T6w&usqp=CAU" alt="" className='lg:w-96 lg:h-[280px] object-fill aspect-square' />
                            <div className='text-sm font-bold text-black mt-3 text-center'>
                                <p>Zarin's Leap Scrub</p>
                                <p className='mt-1'>TK 210</p>
                            </div>
                        </div>

                        <div className='bg-[pink] border border-[deeppink] mt-5 py-2'>
                            <p className='text-center text-sm  text-[#FF1493]'>SELECT SHADE</p>
                        </div>

                    </div>
                </SwiperSlide>


                <SwiperSlide>
                    <div className=''>
                        <div>
                            <img src="	https://web.bdbeautyglamorous.com/uploads/product/1680624365OG1dmU0ENS2536.jpeg" alt="" className='lg:w-96 lg:h-[280px] object-fill aspect-square' />
                            <div className='text-sm font-bold text-black mt-3 text-center'>
                                <p>Zarin's Leap Scrub</p>
                                <p className='mt-1'>TK 210</p>
                            </div>
                        </div>

                        <div className='bg-[pink] border border-[deeppink] mt-5 py-2'>
                            <p className='text-center text-sm text-[#FF1493]'>SELECT SHADE</p>
                        </div>

                    </div>
                </SwiperSlide>


                <SwiperSlide>
                    <div>
                        <div>
                            <img src="https://web.bdbeautyglamorous.com/uploads/product/1680695728WudAfehRwg6265.jpeg" alt="" className='lg:w-96 lg:h-[280px] object-fill aspect-square' />
                            <div className='text-sm font-bold text-black mt-3 text-center'>
                                <p>Zarin's Leap Scrub</p>
                                <p className='mt-1'>TK 210</p>
                            </div>
                        </div>

                        <div className='bg-[pink] border border-[deeppink] mt-5 py-2'>
                            <p className='text-center text-sm  text-[#FF1493]'>SELECT SHADE</p>
                        </div>

                    </div>
                </SwiperSlide>


                <SwiperSlide>
                    <div>
                        <div>
                            <img src="https://web.bdbeautyglamorous.com/uploads/product/1680696724QiPD8iJh2F6711.jpeg" alt="" className='lg:w-96 lg:h-[280px] object-fill aspect-square'  />
                            <div className='text-sm font-bold text-black mt-3 text-center'>
                                <p>Zarin's Leap Scrub</p>
                                <p className='mt-1'>TK 210</p>
                            </div>
                        </div>

                        <div className='bg-[pink] border border-[deeppink] mt-5 py-2'>
                            <p className='text-center text-sm  text-[#FF1493]'>SELECT SHADE</p>
                        </div>

                    </div>
                </SwiperSlide>


                <SwiperSlide>
                    <div>
                        <div>
                            <img src="https://web.bdbeautyglamorous.com/uploads/product/1668863800K7MwkpSEOf6548.jpeg" alt="" className='lg:w-96 lg:h-[280px] object-fill aspect-square' />
                            <div className='text-sm font-bold text-black mt-3 text-center'>
                                <p>Zarin's Leap Scrub</p>
                                <p className='mt-1'>TK 210</p>
                            </div>
                        </div>

                        <div className='bg-[pink] border border-[deeppink] mt-5 py-2'>
                            <p className='text-center text-sm  text-[#FF1493]'>SELECT SHADE</p>
                        </div>

                    </div>
                </SwiperSlide>


                <SwiperSlide>
                    <div>
                        <div>
                            <img src="	https://web.bdbeautyglamorous.com/uploads/product/1680624365OG1dmU0ENS2536.jpeg" alt="" className='lg:w-96 lg:h-[280px] object-fill aspect-square'  />
                            <div className='text-sm font-bold text-black mt-3 text-center'>
                                <p>Zarin's Leap Scrub</p>
                                <p className='mt-1'>TK 210</p>
                            </div>
                        </div>

                        <div className='bg-[pink] border border-[deeppink] mt-5 py-2'>
                            <p className='text-center text-sm  text-[#FF1493]'>SELECT SHADE</p>
                        </div>

                    </div>
                </SwiperSlide>


                <SwiperSlide>
                    <div>
                        <div>
                            <img src="https://web.bdbeautyglamorous.com/uploads/product/1680695728WudAfehRwg6265.jpeg" alt="" className='lg:w-96 lg:h-[280px] object-fill aspect-square' />
                            <div className='text-sm font-bold text-black mt-3 text-center'>
                                <p>Zarin's Leap Scrub</p>
                                <p className='mt-1'>TK 210</p>
                            </div>
                        </div>

                        <div className='bg-[pink] border border-[deeppink] mt-5 py-2'>
                            <p className='text-center text-sm  text-[#FF1493]'>SELECT SHADE</p>
                        </div>

                    </div>
                </SwiperSlide>
            </Swiper>
           </div>
            
        </div>
    );
};

export default Gifting;