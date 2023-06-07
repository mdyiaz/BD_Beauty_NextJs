import React from 'react';

const ForgotPassword = () => {
    return (
        <div className='bg-[#f3e6f8] py-20'>
            <div className='lg:w-[50%] mx-auto '>
                <h1 className='text-center text-[#8412c0] mt-10 mb-10 font-bold text-3xl font-serif'>RESET YOUR PASSWORD</h1>
                <div className="carousel w-full">
                    <div id="slide1" className="carousel-item relative w-full">
                        <img src="https://i.ibb.co/tc3GXxL/Reset-Password-BG-2.png" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                           <div>
                            <img src="https://i.ibb.co/gtVjQRw/lock5.png" alt="" className='w-96 mx-auto' />
                           </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;