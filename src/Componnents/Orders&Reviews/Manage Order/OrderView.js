import React, { useEffect, useState } from 'react';
import './OrderView.css'
import Sidenav from '../../SideNavbar/Sidenav'
import { DatePicker, Space, Input } from 'antd';


const { RangePicker } = DatePicker;
const onSearch = value => console.log(value);

const OrderView = () => {
    return (
        <div className='md:flex flex grid md:grid-cols-5 grid-cols-1 md:mt-8 mt-0'>
            {/* Sidenav */}
            <aside className="md:h-screen h-20 md:sticky sticky mb-5 top-0 z-40 ">
                <Sidenav />
            </aside>
            {/* bodypart */}
            <main className='md:w-full md:ml-0 ml-9 md:col-span-4 col-span-1 bg-gray-100'>
                <div className='w-2/3 h-12 flex  p-3 text-black'>
                    {/* Navbar direction */}
                    <a href='' className='text-gray-500 mr-1 text-xs uppercase'>
                        home
                    </a>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                    <a href='' className='text-gray-500 text-xs mr-1 ml-1 uppercase'>
                        Orders & Reviews
                    </a>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                    <a href='' className='text-gray-500 text-xs mr-1 ml-1 uppercase'>
                        Manage order
                    </a>
                </div>
                <div className='mt-2 p-3 text-2xl'>
                    <p>
                        Orders Overview
                    </p>
                </div>
                {/* Navbar for seller product */}
                <div>
                    <nav class="flex items-center justify-between flex-wrap bg-teal-500 md:text-left text-center p-6">
                        <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                            <div class="text-sm lg:flex-grow">
                                <a href="#" class="block p-1 mt-4 lg:inline-block lg:mt-0 text-yellow-500 hover:text-yellow-500  border-l-2 border-r-2 border-yellow-500 p-1 mr-4">
                                    All
                                </a>
                                <a href="#" class="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-yellow-500 mr-4 p-1">
                                    <div class="">

                                        <div class="dropdown inline-block relative">
                                            <button class=" text-gray-700   rounded inline-flex items-center">
                                                <span class="mr-1">Pending</span>
                                                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /> </svg>
                                            </button>
                                            <ul class="dropdown-menu absolute hidden text-gray-700 pt-1">
                                                <li class=""><a class="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">all</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </a>
                                <a href="#" class="block p-1 mt-4 lg:inline-block lg:mt-0 text-black hover:text-yellow-500 p-1 border-l-2 border-r-2">
                                    Ready to ship
                                </a>
                                <a href="#" class="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-yellow-500 p-1 border-l-2 border-r-2">
                                    Shipped
                                </a>
                                <a href="#" class="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-yellow-500 p-1 border-l-2 border-r-2">
                                    Deliverd
                                </a>
                                <a href="#" class="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-yellow-500 p-1 border-l-2 border-r-2">
                                    Cancelled
                                </a>
                                <a href="#" class="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-yellow-500 p-1 border-l-2 border-r-2">
                                    Returned
                                </a>
                                <a href="#" class="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-yellow-500 p-1 border-l-2 border-r-2">
                                    Failed DeliverY
                                </a>
                            </div>
                        </div>
                    </nav>
                </div>
                {/* Input an option and buttons */}
                <div className='grid md:grid-cols-5 grid-cols-1  gap-1 md:h-16 ml-3 border bg-white '>
                    <div className=' md:p-4 p-2 '>
                        <Input className='border' placeholder="Order" />
                    </div>
                    <div className=' md:p-4 p-2 '>
                        <Input className='border' placeholder="Customer" />
                    </div>
                    <div className=' md:p-4 p-2 '>
                        <Input className='border' placeholder="Product" />
                    </div>
                    <div className='md:p-4 p-2  '>
                        <select className=' p-2 border ' placeholder='Product ta'>
                            <option>Product Tag</option>
                        </select>
                    </div>

                    <div className=' md:p-4 p-2'>
                        <Input className='border' placeholder="Seller SKU" />
                    </div>

                </div>
                <div className='grid md:grid-cols-5 grid-cols-1 md:text-left text-center gap-1 md:h-16 ml-3 border bg-white '>
                    <div className=' md:p-4 p-2 '>
                        <Input className='border' placeholder="Fulfilment" />
                    </div>
                    <div className=' md:p-4 p-2 '>
                        <Input className='border' placeholder="Delivery Option" />
                    </div>
                    <div className='col-span-2 md:p-4 '>
                        <Space direction="vertical" size={12}>
                            <RangePicker />
                        </Space>
                    </div>

                    <div className=' md:p-4 p-2 '>
                        <Input className='border' placeholder="Payment" />
                    </div>

                </div>
                {/* Buttons */}
                <div className=" p-4 flex flex-col md:flex-row ">
                    <div className="md:p-2 p-2 md:flex-row flex-col ">
                        <button className="bg-white hover:bg-yellow-500 text-black font-bold py-1 px-4 border rounded">
                            Print
                        </button>
                    </div>
                    <div className='md:p-2 p-2 md:flex-row flex-col  '>
                        <select className='p-1 border font-bold ' placeholder='Product ta'>
                            <option className='font-bold '>Export</option>
                        </select>
                    </div>
                    <div className=" md:p-2 p-2 md:flex-row flex-col ">
                        <button className="bg-white hover:bg-yellow-500 text-black font-bold py-1 px-4 border rounded">
                            import
                        </button>
                    </div>
                    <div className='md:p-2 p-2 md:flex-row flex-col  '>
                        <select className='p-1 border font-bold ' placeholder='Product ta'>
                            <option className='font-bold'>View History</option>
                        </select>
                    </div>
                </div>
                {/* table product overview */}
                <div class="container sm:mt-5">
                    <table class="w-full flex flex-row flex-no-wrap sm:bg-white rounded-lg overflow-hidden sm:shadow-lg my-5">
                        <thead class="text-black">
                            <tr class="bg-teal-400 flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
                                <th className="h-16 border p-1 ">Document</th>
                                <th className="h-16 border p-1">Order no</th>
                                <th className="h-16 border p-1">Order date</th>
                                <th className="h-16 border p-1">Update date</th>
                                <th className="h-16 border p-1">Payment Method</th>
                                <th className="h-16 border p-1">Retail Price</th>
                                <th className="h-16 border p-1"></th>
                                <th className="h-16 border p-1">Status</th>
                                <th className="h-16 border p-1">Printed</th>
                                <th className="h-16 border p-1">Payout Amount</th>
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

export default OrderView
