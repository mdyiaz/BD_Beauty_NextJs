'use client';

export default function ModalForNavSearch({ showModal, setShowModal }) {
    console.log('hellow showmodal', showModal);

    return (
        <>
            <div className="mt-2 flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                    {/* {/content/} */}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        {/* {/header/} */}
                        <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">

                            <input type="text" placeholder="search your product here" className="input  w-full" />

                            <button
                                className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                onClick={() => setShowModal(false)}
                            >
                                <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                    ×
                                </span>
                            </button>
                        </div>
                        {/* {/body/} */}
                        <div className="relative p-6 flex-auto">
                            <p className="text-[15px] text-secondary">Frequently Searched</p>
                            <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-3 lg:gap-2 gap-3 mt-3  text-[15px]">
                                <p className="lg:border-none border border-gray-200 p-2">New in store</p>
                                <p className="lg:border-none border border-gray-200 p-2">24-hr foundation</p>
                                <p className="lg:border-none border border-gray-200 p-2">Clearance Sales</p>
                                <p className="lg:border-none border border-gray-200 p-2">Lipsticks</p>
                                <p className="lg:border-none border border-gray-200 p-2">Wallets</p>
                            </div>

                            <p className="text-[15px] text-secondary mt-5">Hot Picks</p>
                            <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-3 mt-3 gap-5">
                                <img src="https://web.bdbeautyglamorous.com/uploads/product/1666439761wdrjKs3W1A7266.jpg" alt="" className="w-16 h-16" />
                                <img src="	https://web.bdbeautyglamorous.com/uploads/product/1680695728WudAfehRwg6265.jpeg" alt="" className="w-16 h-16" />
                                <img src="https://i.ibb.co/kyVMx1m/xpel-hemp-shampoo-400ml-regular-6061b44764e67.jpg" alt="" className="w-20 h-16" />
                                <img src="https://web.bdbeautyglamorous.com/uploads/product/1666439761wdrjKs3W1A7266.jpg" alt="" className="w-16 h-16" />
                                <img src="	https://web.bdbeautyglamorous.com/uploads/product/1680695728WudAfehRwg6265.jpeg" alt="" className="w-16 h-16" />
                            </div>
                        </div>
                        {/* {/footer/} */}
                        <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                            <button
                                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => setShowModal(false)}
                            >
                                Close
                            </button>

                        </div>
                    </div>
                </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
    );
}