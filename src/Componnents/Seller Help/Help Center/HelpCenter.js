import React from 'react'
import Sidenav from '../../SideNavbar/Sidenav'
import { DatePicker, Space, Input } from 'antd';
const { Search } = Input;

const { RangePicker } = DatePicker;
const onSearch = value => console.log(value);

const HelpCenter = () => {
    return (
        <div className='md:flex flex grid md:grid-cols-5 grid-cols-1 md:mt-8 mt-0'>
            {/* Sidenav */}
            <aside className="md:h-screen h-20 md:sticky sticky mb-5 top-0 z-40  ">
                <Sidenav />
            </aside>
            {/*  */}
            {/* bodypart */}
            <main className='md:w-full md:ml-0 ml-9 md:col-span-4 col-span-1 bg-gray-100'>
                <div className='mt-2 p-3 text-2xl'>
                    <h1>
                        Seller Help Center
                    </h1>
                </div>
                {/* Navbar direction */}
                <div>
                    <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6 md:text-left text-center">
                        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                            <div className="text-sm lg:flex-grow">
                                <a href="#" class="block mt-4 lg:inline-block lg:mt-0 text-yellow-500 hover:text-yellow-500  border-l-2 border-r-2 border-yellow-500 p-1 mr-4">
                                    Homepage
                                </a>
                                <a href="#" class="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-yellow-500 mr-4">
                                    FAQ
                                </a>
                                <hr className='' />
                            </div>
                        </div>
                    </nav>
                </div>
                {/* Search bar */}
                <div className='bg-gray-800 h-48 ml-3 mr-3 mb-8'>
                    <div className=' text-xl text-center'>
                        <h1 className='text-white font-bold py-5'>
                            Hi, How can we help?</h1>
                    </div>
                    <div className="">
                        <div className=" flex items-center rounded shadow-xl">
                            <input className=" items-center md:ml-52 ml-16 w-1/2 py-4 px-6 text-gray-700 leading-tight focus:outline-none" id="search" type="text" placeholder="Search" />
                            <div className="p-4">
                                <button className="bg-white text-black p-3 rounded hover:bg-blue-300 focus:outline-none flex items-center justify-center">
                                    Search
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Questions for seller  */}
                <div className='text-center font-bold text-base mt-4 divide-y-4 divide-yellow-600 mb-5 '>
                    <h1 className='text-lg '>
                        Top Questions
                    </h1>

                </div>
                <div className='grid md:grid-cols-3 grid-cols-1 gap-3 mb-3'>
                    <div className='ml-3 mt-5 '>
                        <ul className='list-disc list-inside text-sm'>
                            <li className=''>
                                <a className='text-black' href=''>
                                    How do I fulfill my order?
                                </a>
                            </li>
                            <li className=''>
                                <a className='text-black' href=''>
                                    How many types of packaging material are available?
                                </a>
                            </li>
                            <li className=''>
                                <a className='text-black' href=''>
                                    How long does it take to approve a seller application?
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className='ml-3 mt-5 '>
                        <ul className='list-disc list-inside text-sm'>
                            <li className=''>
                                <a className='text-black' href=''>
                                    How to upload a single product on Seller Center?
                                </a>
                            </li>
                            <li className=''>
                                <a className='text-black' href=''>
                                    Why I am not able to add products on Flash Sale Campaign?
                                </a>
                            </li>
                            <li className=''>
                                <a className='text-black' href=''>
                                    What is Seller Center Mobile App and what can I do with it?
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className='ml-3 mt-5 '>
                        <ul className='list-disc list-inside text-sm'>
                            <li className=''>
                                <a className='text-black' href=''>
                                    When will I get my payment?
                                </a>
                            </li>
                            <li className=''>
                                <a className='text-black' href=''>
                                    What is the Seller Picks feature and how can I use it?
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* Categories fro seller  */}
                <div className='text-center font-bold text-base mt-4 divide-x-2 divide-rose-400 mb-5 '>
                    <h1 className='text-lg divide-x-2 divide-rose-400'>
                        Categories
                    </h1>
                </div>
                <div className='grid md:grid-cols-4 grid-cols-1 gap-2 ml-3 mt-10'>
                    <div className='text-center items-center border-2 p-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 md:ml-20 ml-36 mb-1" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11 4a1 1 0 10-2 0v4a1 1 0 102 0V7zm-3 1a1 1 0 10-2 0v3a1 1 0 102 0V8zM8 9a1 1 0 00-2 0v2a1 1 0 102 0V9z" clipRule="evenodd" />
                        </svg>
                        <p>
                            Getting Started
                        </p>
                    </div>
                    <div className='text-center items-center border-2 p-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 md:ml-20 ml-36 mb-1" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                            <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                        </svg>
                        <p>
                            Order Management & Campaign
                        </p>
                    </div>
                    <div className='text-center items-center border-2 p-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 md:ml-20 ml-36 mb-1" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                        </svg>
                        <p>
                            Performance Enhancement
                        </p>
                    </div>
                    <div className='text-center items-center border-2 p-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 md:ml-20 ml-36 mb-1" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
                        </svg>
                        <p>
                            Return & Claims
                        </p>
                    </div>
                </div>
                <div className='grid md:grid-cols-3 grid-cols-1 gap-2 ml-3 mt-5'>
                    <div className='text-center items-center border-2 p-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 md:ml-28 ml-36 mb-1" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd" />
                        </svg>
                        <p>
                            Shipping and Delivery
                        </p>
                    </div>
                    <div className='text-center items-center border-2 p-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 md:ml-28 ml-36 mb-1" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
                            <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
                        </svg>
                        <p>
                            Seller-Buyer Communication
                        </p>
                    </div>
                    <div className='text-center items-center border-2 p-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 md:ml-28 ml-36 mb-1" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        <p>
                            Payments & Refund
                        </p>
                    </div>
                </div>
                {/* Chat and claims sections*/}
                <div className='text-center font-bold text-base mt-4 divide-x-2 divide-rose-400 mt-10 '>
                    <h1 className='text-lg divide-x-2 divide-rose-400'>
                        Still Need Help ?
                    </h1>
                </div>
                <div className='grid md:grid-cols-4 grid-cols-1 gap-2 ml-3 mt-5 mb-10'>
                    <div class="col-start-2 col-span-1 bg-white shadow-md flex">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" className="px-2 w-16" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <div>
                            <h1>Chat Now</h1>
                            <p> 10:00 am to 7:00 pm (Sunday - Thursday)</p>

                        </div>
                    </div>
                    <div class="col-start-3 col-span-1 bg-white shadow-md flex">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" className="px-2 w-16" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                                <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <div>
                            <h1>Claims</h1>
                            <p> Click to Raise Claims</p>

                        </div>
                    </div>
                </div>
            </main>
        </div >
    )
}

export default HelpCenter
