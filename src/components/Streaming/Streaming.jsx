'use client'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";



// import required modules
import { Pagination, Navigation, EffectCoverflow } from "swiper";
import ReactPlayer from "react-player";
import { useState } from "react";

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








                {/* MODAL SECTION START_______________________________________________________________ */}
                {showModal ? (
                    <>
                        <div
                            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0  outline-none focus:outline-none" style={{zIndex: 90000}}
                        >
                            <div className="relative w-auto my-6 mx-auto max-w-3xl">
                                {/*content*/}
                                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                    {/*header*/}
                                    <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                        <h3 className="text-3xl font-semibold">
                                            Modal Title
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
                                        <p className="my-4  leading-relaxed">
                                            <Swiper
                                                effect={"coverflow"}
                                                grabCursor={true}
                                                centeredSlides={true}
                                                slidesPerView={"auto"}
                                                coverflowEffect={{
                                                  rotate: 50,
                                                  stretch: 0,
                                                  depth: 100,
                                                  modifier: 1,
                                                  slideShadows: true,
                                                }}
                                                pagination={true}
                                                modules={[EffectCoverflow, Pagination]}
                                                className="mySwiper"
                                            >



                                                {
                                                    streamingVideos.map((streamingVideo => (
                                                        <div key={streamingVideo._id}>
                                                            <SwiperSlide onClick={() => setShowModal(true)}>
                                                                <ReactPlayer
                                                                    url={streamingVideo.video}
                                                                    controls
                                                                    volume
                                                                    width={400}
                                                                    height={400}
                                                                    
                                                                />
                                                            </SwiperSlide>
                                                        </div>
                                                    )))
                                                }

                                            </Swiper>
                                        </p>
                                    </div>
                                    {/*footer*/}
                                    <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                        <button
                                            className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                            type="button"
                                            onClick={() => setShowModal(false)}
                                        >
                                            Close
                                        </button>
                                        <button
                                            className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                            type="button"
                                            onClick={() => setShowModal(false)}
                                        >
                                            Save Changes
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                    </>
                ) : null}
                {/* MODAL SECTION END___________________________________________________________________ */}
            </div>



        </div>
    );
};

export default Streaming;