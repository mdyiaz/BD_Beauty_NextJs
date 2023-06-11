'use client'

import Link from 'next/link';
import { useState } from 'react';
import { BsFillPersonFill, BsFillCartPlusFill, BsFillSuitHeartFill } from 'react-icons/bs';
import ModalForNavSearch from './modalForNavSearch';

const NavSearchBar = () => {

    const [showModal, setShowModal] = useState(false);
    return (
        <div className='lg:block hidden'>
            <div className='grid grid-cols-3 mt-2 '>
                <div>
                    <Link href="/" ><img src="https://i.ibb.co/SxNyPvW/1661607420n2-Br-Tj1c-ZN9142.jpg" alt="" className='w-52 h-16  mx-auto ' /></Link>

                </div>



                <div   
                    onMouseEnter={() => setShowModal(true)}
                    // onMouseLeave={() => setShowModal(false)}
                    >
                    <div className="relative w-full ">
                        <input type="search" placeholder="Search Here" className="input input-bordered w-full pr-16 rounded-full border-none" />
                        <button className="btn bg-black absolute top-0 right-0 rounded-l-none rounded-full">Search</button>
                    </div>
                </div>






                <div className='grid grid-cols-2 justify-items-center'>
                    <div className='flex gap-2 items-right'>
                        <BsFillPersonFill className='text-xl mt-1' />
                        <Link href='/login' ><p className='text-blue-500'>Login</p></Link>
                        <Link href='/register' > <p className='hover:text-blue-500'>Register</p></Link>
                    </div>

                    <div className='flex gap-2'>
                        <Link href='/addtocart' > <BsFillCartPlusFill className='text-xl' /></Link>
                        <Link href='/wishlist' > <BsFillSuitHeartFill className='text-xl' /></Link>
                        <Link href='/generaloffer' ><img src="https://www.bdbeautyglamorous.com/static/media/discountIcon.6fa4bb0d9949c45217b6f0133685a37f.svg" alt="" className='w-5 h-5' /></Link>
                    </div>
                </div>

            </div>

            { showModal && 
                <ModalForNavSearch
                showModal={showModal}
                setShowModal={setShowModal}>

            </ModalForNavSearch>
            }
        </div>
    );
};

export default NavSearchBar;