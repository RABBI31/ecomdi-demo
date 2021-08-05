import React from 'react'
import Sidenav from '../../SideNavbar/Sidenav'
import { DatePicker, Space, Input } from 'antd';
const { Search } = Input;

const { RangePicker } = DatePicker;
const onSearch = value => console.log(value);

const Sellerpicks = () => {
    return (
        <div className='md:flex flex grid md:grid-cols-5 grid-cols-1 md:mt-8 mt-0'>
            {/* Sidenav */}
            <aside className="md:h-screen h-20 md:sticky sticky mb-5 top-0 z-40  ">
                <Sidenav />
            </aside>
            {/*  */}
            {/* bodypart */}
            <main className='md:w-full md:ml-0 ml-9 md:col-span-4 col-span-1 bg-gray-100'>
            {/* Navbar direction */}
                <div className='w-2/3 h-12 flex  p-3 text-black'>
                    <a href='' className='text-gray-500 mr-1 text-xs uppercase'>
                        home
                    </a>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                    <a href='' className='text-gray-500 text-xs mr-1 ml-1 uppercase'>
                        Promotions
                    </a>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                    <a href='' className='text-gray-500 text-xs mr-1 ml-1 uppercase'>
                        Seller Picks
                    </a>
                </div>
                <div className='mt-2 p-3 text-2xl'>
                    <p>
                        Seller Picks
                    </p>
                </div>
                {/* <div>
                    <ul>
                        <li>
                        "Seller Picks" allows sellers to boost a quota of their best products on our Daraz search pages.
                        </li>
                        <li>
                        This allows you to boost your sales, and increase your visibility.
                        </li>
                        <li>
                        Once a product is boosted, it will remain boosted for 14 days. But, we recommend to come back every 24 hours to optimize your seller picks products
                        </li>
                    </ul>
                </div> */}
                {/* Button for seller picks */}
                <div className='mt-2 ml-3'>
                    <button class="bg-yellow-500 hover:bg-gray-200 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                        <span>What is Seller Picks ?</span>
                    </button>
                </div>
                <div className='mt-5 text-center bg-white md:p-5 p-2 '>
                    <h1 className='md:text-xl text-lg '>
                        Want to get access to the Seller Picks feature?
                    </h1>
                    {/* Seller picks features */}
                    <div className='grid md:grid-cols-4 grid-cols-1 gap-2 text-left mt-5 ml-5'>
                        <div>
                            <div className='flex  '>
                                <div className='ml-2 mt-3 mr-3 p-2 text-gray-500'>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                </div>
                                <div className=''>
                                    <h2 className='text-gray-700'>
                                        Seller rating
                                    </h2>
                                    <p className='text-gray-500 text-xs'>
                                        Your score must be higher than 60%.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className='flex  '>
                                <div className='ml-2 mt-3 mr-3 p-2 text-gray-500'>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <div className=''>
                                    <h2 className='text-gray-700'>
                                        Available Products
                                    </h2>
                                    <p className='text-gray-500 text-xs'>
                                        Have more than 3 live SKUs.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className='flex  '>
                                <div className='ml-2 mt-3 mr-3 p-2 text-gray-500'>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M18 3a1 1 0 00-1.447-.894L8.763 6H5a3 3 0 000 6h.28l1.771 5.316A1 1 0 008 18h1a1 1 0 001-1v-4.382l6.553 3.276A1 1 0 0018 15V3z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <div className=''>
                                    <h2 className='text-gray-700'>
                                        Campaigns
                                    </h2>
                                    <p className='text-gray-500 text-xs'>
                                        Submit at least one product in a campaign in the last 7 days.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className='flex  '>
                                <div className='ml-2 mt-3 mr-3 p-2 text-gray-500'>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <div className=''>
                                    <h2 className='text-gray-700'>
                                        Instant Messaging
                                    </h2>
                                    <p className='text-gray-500 text-xs'>
                                        Have a Response Rate of atleast 80% in IM
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Sellerpicks
