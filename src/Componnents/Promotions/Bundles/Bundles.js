import React from 'react'
import Sidenav from '../../SideNavbar/Sidenav'
import { DatePicker, Space, Input } from 'antd';
const { Search } = Input;

const { RangePicker } = DatePicker;
const onSearch = value => console.log(value);

const Bundles = () => {
    return (
        <div className='md:flex flex grid md:grid-cols-5 grid-cols-1 md:mt-8 mt-0'>
            {/* Sidenav */}
            <aside className="md:h-screen h-20 md:sticky sticky mb-5 top-0 z-40 ">
                <Sidenav />
            </aside>
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
                        Seller Bundles
                    </a>
                </div>
                <div className='mt-2 p-3 text-2xl'>
                    <p>
                        Promotion List
                    </p>
                </div>
                {/* Buttons */}
                <div className="flex flex-col md:flex-row  ">
                    <div className="p-2 md:flex-row flex-col ">
                        <button className="bg-white hover:bg-yellow-500 text-black font-bold py-1 px-4 border rounded">
                            Add New Promotion
                        </button>
                    </div>
                    <div className=" p-2 md:flex-row flex-col ">
                        <button className="bg-white hover:bg-yellow-500 text-black font-bold py-1 px-4 border rounded">
                            Activate
                        </button>
                    </div>
                    <div className=" p-2 md:flex-row flex-col ">
                        <button className="bg-white hover:bg-yellow-500 text-black font-bold py-1 px-4 border rounded">
                            Deactivate
                        </button>
                    </div>
                </div>
                {/* Navbar for active and inactive promotions */}
                <div>
                    <nav class="flex items-center justify-between flex-wrap bg-teal-500 p-6 md:text-left text-center">
                        <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                            <div class="text-sm lg:flex-grow">
                                <a href="#" class="block mt-4 lg:inline-block lg:mt-0 text-yellow-500 hover:text-yellow-500  border-l-2 border-r-2 border-yellow-500 p-1 mr-4">
                                    Active
                                </a>
                                <a href="#" class="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-yellow-500 border-l-2 border-r-2 p-1 mr-4">
                                    Inactive
                                </a>
                                <hr className='' />
                            </div>
                        </div>
                    </nav>
                </div>
                {/* Promotion period,type, searchbar */}
                <div className='grid md:grid-cols-3 grid-cols-1  gap-4 md:h-16 ml-3 border '>
                    <div className="md:flex md:w-full w-64 md:p-4 p-2 ">
                        <div className=" h-12 px-2 flex">
                            <p className='mr-1 py-1'>Period </p>
                            <Space direction="vertical" size={12}>
                                <RangePicker />
                            </Space>
                        </div>
                    </div>
                    <div className="flex md:flex md:w-full w-64 py-2">
                        <div className='md:p-3 p-2'>
                            <p>
                                Promotinal Type
                            </p>
                        </div>
                        <div className='w-2/4  md:p-2 p-1 '>
                            <select className='w-full p-1 border'>
                                <option>Quantity</option>
                                <option>Buy 1 get 1</option>
                            </select>
                        </div>
                    </div>
                    <div className=' md:p-4 md:flex-row flex-col '>
                        <Space direction="vertical">
                            <Search placeholder="Detail , Order" onSearch={onSearch} style={{ width: 200 }} />
                        </Space>
                    </div>
                </div>
                <div class="container sm:mt-5">
                    <table class="w-full flex flex-row flex-no-wrap sm:bg-white rounded-lg overflow-hidden sm:shadow-lg my-5">
                        <thead class="text-black">
                            <tr class="bg-teal-400 flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
                                <th className="h-16 border p-1 ">Promotion Id</th>
                                <th className="h-16 border p-1">Product Name</th>
                                <th className="h-16 border p-1">Create Time</th>
                                <th className="h-16 border p-1">Promotion Time</th>
                                <th className="h-16 border p-1">Promotion Level</th>
                                <th className="h-16 border p-1">Promotion Type</th>
                                <th className="h-16 border p-1">Status</th>
                                <th className="h-16 border p-1">Action</th>
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
                {/* Page prev and next button */}
                <div>
                    <nav aria-label="Page navigation" className='text-center'>
                        <ul className="inline-flex">
                            <li><button className="h-10 px-5 text-gray-600 transition-colors duration-150 bg-white rounded-l-lg focus:shadow-outline hover:bg-indigo-100">Prev</button></li>
                            <li><button className="h-10 px-5 text-black transition-colors duration-150 bg-white border-yellow-500 focus:shadow-outline">1</button></li>
                            <li><button className="h-10 px-5 text-indigo-600 transition-colors duration-150 bg-white focus:shadow-outline hover:bg-indigo-100">2</button></li>
                            <li><button className="h-10 px-5 text-indigo-600 transition-colors duration-150 bg-white focus:shadow-outline hover:bg-indigo-100">3</button></li>
                            <li><button className="h-10 px-5  text-gray-600 transition-colors duration-150 bg-white rounded-r-lg focus:shadow-outline hover:bg-indigo-100">Next</button></li>
                        </ul>
                    </nav>
                </div>
            </main>
        </div>
    )
}

export default Bundles
