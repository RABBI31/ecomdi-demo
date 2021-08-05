import React from 'react'
import Sidenav from '../../SideNavbar/Sidenav'
import './TransOver.css'
import { DatePicker, Space, Input } from 'antd';
const { Search } = Input;

const { RangePicker } = DatePicker;
const onSearch = value => console.log(value);

const TransOver = () => {
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
                        Finance
                    </a>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                    <a href='' className='text-gray-500 text-xs mr-1 ml-1 uppercase'>
                        Transaction overview
                    </a>
                </div>
                <div className='mt-2 p-3 text-2xl'>
                    <p>
                        Transaction Overview
                    </p>
                </div>
                {/* Transaction search by time and type of transaction */}
                <div className='grid md:grid-cols-3 grid-cols-1  gap-4 md:h-16 ml-3 border '>
                    <div className="md:flex md:w-full w-64 md:p-4 ">
                        <div className=" h-12 px-2">
                            <Space direction="vertical" size={12}>
                                <RangePicker />
                            </Space>
                        </div>
                    </div>
                    <div className="flex md:flex md:w-full w-64 py-2">
                        <div className='w-2/4  md:p-3'>
                            <p>
                                Filter Transaction
                            </p>
                        </div>
                        <div className='w-2/4  md:p-2 '>
                            <select className='w-full p-1 border'>
                                <option>All Transaction</option>
                                <option>Orders-Item Charges</option>
                                <option>3P Sevices-shipping</option>
                                <option>Online Fees</option>
                                <option>Refunds Fees</option>
                            </select>
                        </div>
                    </div>
                    <div className='w-64 md:p-4 '>
                        <Input className='border' disabled placeholder="Search" />
                    </div>
                </div>
                {/* Buttons for export and history */}
                <div className=" p-4  flex flex-col md:flex-row  ">
                    <div className="p-2 md:flex-row flex-col ">
                        <button className="bg-white hover:bg-yellow-500 text-black font-bold py-1 px-4 border rounded">
                            Export
                        </button>
                    </div>
                    <div className=" p-2 md:flex-row flex-col ">
                        <button className="bg-white hover:bg-yellow-500 text-black font-bold py-1 px-4 border rounded">
                            View Export History
                        </button>
                    </div>
                    <div className='w-64 p-2 md:flex-row flex-col '>
                        <Space direction="vertical">
                            <Search placeholder="Detail , Order" onSearch={onSearch} style={{ width: 200 }} />

                        </Space>
                    </div>
                </div>
                {/* total amount of money */}
                <div className='text-black text-base font-bold ml-5'>
                    Total Amount 0 BDT
                </div>
                {/* Table for transaction overview */}
                <div class="container sm:mt-5">
                    <table class="w-full flex flex-row flex-no-wrap sm:bg-white rounded-lg overflow-hidden sm:shadow-lg my-5">
                        <thead class="text-black">
                            <tr class="bg-teal-400 flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
                                <th className="h-16 border p-1 ">Data</th>
                                <th className="h-16 border p-1">Transaction Type</th>
                                <th className="h-16 border p-1">Transaction Number</th>
                                <th className="h-16 border p-1">Order Number</th>
                                <th className="h-16 border p-1">Details</th>
                                <th className="h-16 border p-1">Comment</th>
                                <th className="h-16 border p-1">Amount</th>
                                <th className="h-16 border p-1">VAT</th>
                                <th className="h-16 border p-1">WHT</th>
                                <th className="h-16 border p-1">Payout Amount</th>
                                <th className="h-16 border p-1">Statement</th>
                            </tr>
                        </thead>
                        <tbody className="flex-1 sm:flex-none w-full h-36 text-center">
                            <tr className="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">
                                <td className="h-16 border-grey-light border hover:bg-gray-100 p-3"></td>
                                <td className="h-16 border-grey-light border hover:bg-gray-100 p-3"></td>
                                <td className="h-16 border-grey-light border hover:bg-gray-100 p-3 "></td>
                                <td className="h-16border-grey-light border hover:bg-gray-100 p-3 "></td>
                                <td className="h-16 border-grey-light border hover:bg-gray-100 p-3 "></td>
                                <td className="h-16border-grey-light border hover:bg-gray-100 p-3 "></td>
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

export default TransOver
