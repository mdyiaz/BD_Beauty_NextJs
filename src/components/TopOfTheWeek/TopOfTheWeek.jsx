'use client'


// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";



// import required modules
import { Pagination, Autoplay } from "swiper";

const TopOfTheWeek = () => {
    return (
        <div className='mt-10 lg:mx-0 mx-10'>

            <div className=' text-center bg-[#c00093]  lg:w-72 w-60 mx-auto py-2 rounded-lg'>
                <h1 className='text-center font-semibold  text-white  '>TOP OF THE WEEK</h1>
            </div>


            <div className='mt-10  '>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    // autoplay={{
                    //     delay: 2500,
                    //     disableOnInteraction: false,
                    // }}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination, Autoplay]}
                    className="mySwiper"

                    breakpoints={{

                        0: {

                            slidesPerView: 1,
                        },

                        520: {

                            slidesPerView: 1,
                        },


                        768: {

                            slidesPerView: 2,
                        },

                        1000: {

                            slidesPerView: 3,
                        },
                    }}
                >
                    <SwiperSlide>
                        <div>
                            <img src="	https://web.bdbeautyglamorous.com/uploads/collection/1674490671DT4kXEMyba2346.jpeg" alt="" className='lg:h-80 h-40 w-full' />
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div>
                            <img src="		https://web.bdbeautyglamorous.com/uploads/collection/1680705264sfgsslPElx9070.jpeg" alt="" className='lg:h-80 h-40 w-full' />
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div>
                            <img src="https://web.bdbeautyglamorous.com/uploads/collection/1674491006M06Y5rBd90579.jpeg" alt="" className='lg:h-80 h-40 w-full' />
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div>
                            <img src="	https://web.bdbeautyglamorous.com/uploads/collection/1674491267tvNEkHcoxq610.jpeg" alt="" className='lg:h-80 h-40 w-full' />
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div>
                            <img src="	https://web.bdbeautyglamorous.com/uploads/collection/1674490671DT4kXEMyba2346.jpeg" alt="" className='lg:h-80 h-40 w-full' />
                        </div>
                    </SwiperSlide>



                </Swiper>
            </div>
        </div>
    );
};

export default TopOfTheWeek;