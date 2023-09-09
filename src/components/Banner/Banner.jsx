'use client'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Pagination, Autoplay } from "swiper";

const getData = async () => {
    const res = await fetch('https://web.bdbeautyglamorous.com/web-api/home-page-content');
    const data = await res.json();
    return data;
}

const Banner = async () => {
    const banners = await getData();
    console.log(banners.data[0].sliders);
    return (
        <div>
            <Swiper
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={true}
                modules={[Pagination, Autoplay]}
                className="mySwiper"
            >
                {
                    banners.data[0].sliders.map((banner => (
                        <SwiperSlide>
                            <img src={banner.image_path} alt="" className="w-full lg:h-96 h-52 " />
                        </SwiperSlide>
                    )))
                }
            </Swiper>
        </div>
    );
};

export default Banner;