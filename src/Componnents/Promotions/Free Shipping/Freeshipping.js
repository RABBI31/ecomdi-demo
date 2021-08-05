import React from 'react'
import Sidenav from '../../SideNavbar/Sidenav'
import { DatePicker, Space, Input } from 'antd';
const { Search } = Input;

const { RangePicker } = DatePicker;
const onSearch = value => console.log(value);

const Freeshipping = () => {
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
                        Free Shipping
                    </a>
                </div>
                <div className='mt-2 p-3 text-2xl'>
                    <p>
                        Buyer Free Shipping
                    </p>
                </div>
                {/* Active and inactive shipping  */}
                <div>
                    <nav class="flex items-center justify-between flex-wrap bg-teal-500 p-6 md:text-left text-center">
                        <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                            <div class="text-sm lg:flex-grow">
                                <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-yellow-500 hover:text-yellow-500  border-b-2  border-yellow-500 p-1 mr-4">
                                    Active
                                </a>
                                <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-yellow-500 border-b-2 p-1 mr-4">
                                    Inactive
                                </a>
                                <hr className='' />
                            </div>
                        </div>
                    </nav>
               {/* search promotion in between time */}
                </div>
                <div className='grid md:grid-cols-3 grid-cols-1 gap-5'>
                    <div className='w-full ml-3'>
                        <Space direction="vertical" size={12}>
                            <RangePicker />
                        </Space>
                    </div>
                    <div className='ml-3'>
                        <Space direction="vertical">
                            <Search placeholder="Promotion name" onSearch={onSearch} style={{ width: 200 }} />
                        </Space>
                    </div>
                    <div className='md:hidden hidden'>

                    </div>
                 {/* create new promotion */}
                </div>
                <div className='mt-5 ml-3'>
                    <button class="bg-yellow-500 hover:bg-gray-200 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                        <span>Create New Promotion</span>
                    </button>
                </div>
                {/* Table for Free shipping */}
                <div class="container sm:mt-5">
                    <table class="w-full flex flex-row flex-no-wrap sm:bg-white rounded-lg overflow-hidden sm:shadow-lg my-5">
                        <thead class="text-black">
                            <tr class="bg-teal-400 flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
                                <th className="h-16 border p-1 ">Promotion Name</th>
                                <th className="h-16 border p-1">Budget</th>
                                <th className="h-16 border p-1">Period</th>
                                <th className="h-16 border p-1">Condition</th>
                                <th className="h-16 border p-1">Discount</th>
                                <th className="h-16 border p-1">Region</th>
                                <th className="h-16 border p-1">Apply To</th>
                                <th className="h-16 border p-1">Actions</th>
                                <th className="h-16 border p-1">Fast Share</th>
                            </tr>
                        </thead>
                        <tbody className="flex-1 sm:flex-none w-full h-36 text-center">
                            <tr className="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">
                                <td className="h-16 border-grey-light border hover:bg-gray-100 p-3"></td>
                                <td className="h-16 border-grey-light border hover:bg-gray-100 p-3 "></td>
                                <td className="h-16 border-grey-light border hover:bg-gray-100 p-3 "></td>
                                <td className="h-16 border-grey-light border hover:bg-gray-100 p-3 "></td>
                                <td className="h-16 border-grey-light border hover:bg-gray-100 p-3 "></td>
                                <td className="h-16 border-grey-light border hover:bg-gray-100 p-3 "></td>
                                <td className="h-16 border-grey-light border hover:bg-gray-100 p-3 "></td>
                                <td className="h-16 border-grey-light border hover:bg-gray-100 p-3 "></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </main>
        </div>
    )
}

export default Freeshipping
