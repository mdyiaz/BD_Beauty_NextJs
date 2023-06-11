'use client'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import "swiper/css/effect-coverflow";


// import required modules
import { Pagination, Navigation } from "swiper";
import ReactPlayer from "react-player";
import { useState } from "react";
import ModalForStreaming from "./ModalForStreaming";

const Streaming = () => {
    const [showModal, setShowModal] = useState(false);
    const [streamingVideos, setStreamingVideos] = useState([]);

    const fetchData = async () => {
        try {
            const response = await fetch('/streaming.json');
            const data = await response.json();
            setStreamingVideos(data);
        } catch (error) {
            console.log(error);
        }
    };
    fetchData();

    return (
        <div className='mt-10'>
            <div className=' text-center bg-[#c00093]  lg:w-[500px] w-80 mx-auto py-2 rounded-lg'>
                <h1 className='text-center font-semibold  text-white  '>BD BEAUTY GLAMOURS STREAMING</h1>
            </div>


            <div className='mt-8 lg:mx-40 mx-10 '>
                <Swiper
                    slidesPerView={4}
                    // spaceBetween={30}

                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation,]}
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

                            slidesPerView: 4,
                        },
                    }}
                >

                    {
                        streamingVideos.map((streamingVideo => (
                            <div key={streamingVideo._id}>
                                <SwiperSlide onClick={() => setShowModal(true)}>
                                    <ReactPlayer
                                        url={streamingVideo.video}
                                        controls
                                        volume
                                        width={300}
                                        height={500}
                                    />
                                </SwiperSlide>
                            </div>
                        )))
                    }

                </Swiper>

                {/* MODAL SECTION START_______________________ */}
                {
                    showModal &&
                    <ModalForStreaming
                        showModal={showModal} 
                        setShowModal={setShowModal}
                    >

                    </ModalForStreaming>
                }
                {/* MODAL SECTION END_______________________ */}
            </div>

        </div>
    );
};

export default Streaming;