import React from 'react'
import Sidenav from '../../SideNavbar/Sidenav'
import { DatePicker, Space, Input } from 'antd';
const { Search } = Input;

const { RangePicker } = DatePicker;
const onSearch = value => console.log(value);


const ManageReview = () => {
    return (
        <div className='md:flex flex grid md:grid-cols-5 grid-cols-1 md:mt-8 mt-0'>
            {/* Sidenav */}
            <aside className="md:h-screen h-20 md:sticky sticky mb-5 top-0 z-40 ">
                <Sidenav />
            </aside>
            {/* bodypart */}
            <main className='md:w-full md:ml-0 ml-9 md:col-span-4 col-span-1 bg-gray-100'>
                {/* Navber direction */}
                <div className='w-2/3 h-12 flex  p-3 text-black'>
                    <a href='' className='text-gray-500 mr-1 text-xs uppercase'>
                        home
                    </a>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                    <a href='' className='text-gray-500 text-xs mr-1 ml-1 uppercase'>
                        Order & Review
                    </a>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                    <a href='' className='text-gray-500 text-xs mr-1 ml-1 uppercase'>
                        Manage Review
                    </a>
                </div>
                <div className='mt-2 p-3 text-2xl'>
                    <p>
                        Reviews Management
                    </p>
                </div>
                {/* product and seller review navbar */}
                <div className='bg-white'>
                    <nav class="flex items-center justify-between flex-wrap bg-teal-500 md:text-left text-center p-6">
                        <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                            <div class="text-sm lg:flex-grow">
                                <a href="#" class="block p-1 mt-4 lg:inline-block lg:mt-0 text-yellow-500 hover:text-yellow-500  border-b-2  border-yellow-500 p-1 mr-4">
                                    Product Reviews
                                </a>
                                <a href="#" class="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-yellow-500 p-1 border-b-2 ">
                                    Seller Review
                                </a>
                            </div>
                        </div>
                    </nav>
                    {/* Review and their image rations navbar */}
                    <div>
                        <nav class="flex items-center justify-between flex-wrap bg-teal-500 md:text-left text-center p-6">
                            <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                                <div class="text-sm lg:flex-grow">
                                    <a href="#" class="block p-1 mt-4 lg:inline-block lg:mt-0 text-white hover:text-white px-2  border rounded-full bg-yellow-500  border-yellow-500 p-1 mr-4">
                                        All Reviews
                                    </a>
                                    <a href="#" class="block mt-4 lg:inline-block lg:mt-0 text-gray-500 hover:text-yellow-500 px-2  border rounded-full bg-gray-100 p-1 border-b-2 mr-4 ">
                                        With image/videos
                                    </a>
                                    <a href="#" class="block mt-4 lg:inline-block lg:mt-0 text-gray-500 hover:text-yellow-500 px-2  border rounded-full bg-gray-100 p-1 mr-4 ">
                                        With text
                                    </a>
                                    <a href="#" class="block mt-4 lg:inline-block lg:mt-0 text-gray-500 hover:text-yellow-500 px-2  border rounded-full bg-gray-100 p-1 hover:border-l-8 mr-4 ">
                                        Lower than 4 stars
                                    </a>
                                </div>
                            </div>
                        </nav>
                    </div>
                    {/* inputs and select options */}
                    <div className='grid md:grid-cols-4 grid-cols-1  gap-1 md:h-16 ml-3 border bg-white '>
                        <div className=' md:p-4 '>
                            <Input className='border' placeholder="Order Number" />
                        </div>
                        <div className=' md:p-4 '>
                            <Input className='border' placeholder="Product Name" />
                        </div>
                        <div className=' md:p-4 '>
                            <Input className='border' placeholder="SKU" />
                        </div>
                        <div className=' md:p-4 '>
                            <Input className='border' placeholder="Seller SKU" />
                        </div>

                    </div>
                    <div className='grid md:grid-cols-4 grid-cols-1  gap-1 md:h-16 ml-3 border bg-white '>
                        <div className=' md:p-4 col-span-1 '>
                            <select className='w-full p-2 border ' placeholder='Product ta'>
                                <option>Content</option>
                            </select>
                        </div>
                        <div className='md:p-4  '>
                            <select className='w-full p-2 border ' placeholder='Product ta'>
                                <option>Status</option>
                            </select>
                        </div>
                        <div className='col-span- md:p-4 '>
                            <Space direction="vertical" size={12}>
                                <RangePicker />
                            </Space>
                        </div>
                        <div className='md:p-4  '>
                            <select className='w-full p-2 border ' placeholder='Product ta'>
                                <option>Rating</option>
                            </select>
                        </div>
                    </div>
                    {/* search and clear all buttons */}
                    <div className=" p-4 flex ">
                        <div className=" ">
                            <button className="bg-white hover:bg-yellow-500 text-black font-bold py-1 px-4 border rounded">
                                Search
                            </button>
                        </div>
                        <div className="  ">
                            <button className="bg-white hover:bg-yellow-500 text-black font-bold py-1 px-4 border rounded">
                                Clear All
                            </button>
                        </div>
                    </div>
                    <div class="container sm:mt-5">
                        <table class="w-full flex flex-row flex-no-wrap sm:bg-white rounded-lg overflow-hidden sm:shadow-lg my-5">
                            <thead class="text-black">
                                <tr class="bg-teal-400 flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
                                    <th className="h-16 border p-1 ">Order</th>
                                    <th className="h-16 border p-1">Content</th>
                                    <th className="h-16 border p-1">Product</th>
                                    <th className="h-16 border p-1">Rating</th>
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
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default ManageReview
