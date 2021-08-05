import React, { useEffect, useState } from 'react';
import Sidenav from '../SideNavbar/Sidenav'
import Timer from './Timer/Timer'
import Data from './Sellerdata.json'

const SelerHome = () => {
    const [offerdata, setData] = useState([]);
    useEffect(() => {
        setData(Data);
    }, [])
    return (
        <div className='md:flex flex grid md:grid-cols-5 grid-cols-1 md:mt-8 mt-0'>
            {/* Sidenav */}
            <aside className="md:h-screen h-20 md:sticky sticky mb-5 top-0 z-40 ">
                <Sidenav />
            </aside>
            {/* <div className="ml-5 mt-10 w-screen h-64 shadow-md border border-gray-200 bg-white"></div> */}
            {/* bodypart */}
            <main className='md:w-full md:ml-0 ml-9 md:col-span-4 col-span-1 bg-gray-100'>
                {/* Welcome part */}
                <section className="ml-3 ">
                    <div className='p-2 flex md:flex-row flex-col justify-between '>
                        <p className='text-sm'>
                            Welcome! Complete the to-do list to start your selling journey!
                        </p>
                        <p>
                            0% completed, keep up the good work!
                        </p>
                    </div>
                    {/* Seller Board */}
                    <div className='grid md:grid-cols-4 grid-cols-1 gap-5 mb-2'>
                        <div className='h-20 shadow-md border border-gray-200 mr-2 bg-white'>
                            <div className='bg-red-100'>
                                <div className='flex ml-5'>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-6 md:ml-5 ml-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    <p className=' ml-2 text-xs'>Start To Sell</p>
                                </div>
                            </div>
                            <div className='p-3 text-center'>
                                <h1>
                                    Manage Address Book
                                </h1>
                            </div>
                        </div>
                        <div className='h-20 shadow-md border border-gray-200 mr-2 bg-white'>
                            <div className='bg-gray-100 border'>
                                <div className='flex ml-3 '>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-6 md:ml-4 ml-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                                    </svg>
                                    <p className='text-center text-gray-500  ml-2 text-xs'>Safeguard your account</p>
                                </div>
                            </div>
                            <div className='p-3 text-center'>
                                <h1>
                                    Verify ID Information
                                </h1>
                            </div>
                        </div>
                        <div className='h-20 shadow-md border border-gray-200 mr-2 bg-white'>
                            <div className='bg-gray-100 border'>
                                <div className='flex ml-3'>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-6 md:ml-5 ml-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                                    </svg>
                                    <p className='text-center text-gray-500 ml-1 text-xs'>To receive your money</p>
                                </div>
                            </div>
                            <div className='p-3 text-center'>
                                <h1>
                                    Fill in Bank Information
                                </h1>
                            </div>
                        </div>
                        <div className='h-20 shadow-md border border-gray-200 mr-2 bg-white'>
                            <div className='bg-gray-100 border'>
                                <div className='flex ml-3'>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-6 md:ml-5 ml-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                                    </svg>
                                    <p className='text-center text-gray-500 ml-1 text-xs'>Order Package info Title</p>
                                </div>
                            </div>
                            <div className='p-3 text-center'>
                                <h1>
                                    Order Package info
                                </h1>
                            </div>
                        </div>
                    </div>
                    <div className='grid md:grid-cols-4 grid-cols-1 gap-5'>
                        <div className=' h-20 shadow-md border border-gray-200 mr-2 bg-white'>
                            <div className='bg-gray-100 border'>
                                <div className='flex ml-3'>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                                    </svg>
                                    <p className='text-center text-gray-500 ml-1 text-xs'>Get Your products Ready</p>
                                </div>

                            </div>
                            <div className='p-3 text-center'>
                                <h1>
                                    Upload Your SKU
                                </h1>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Performance and Operation stats */}
                <div className='grid md:grid-cols-2 grid-cols-1 mt-10  gap-2 bg-white '>
                    <div className='shadow-md border border-gray-200 rounded p-3'>
                        <h1>
                            Preformance
                        </h1>
                        <hr />
                        <div className='grid grid-cols-2 mt-2 gap-4'>
                            <div>
                                <h1>
                                    Order
                                </h1>
                                <div className='flex justify-between text-sm mt-3 bold'>
                                    <p className='font-semibold'>
                                        Shipping on Time
                                    </p>
                                    <p>
                                        -
                                    </p>
                                </div>
                                <hr />
                                <div className='flex justify-between text-sm mt-3 bold'>
                                    <p className='font-semibold'>
                                        Cancellation Rate
                                    </p>
                                    <p>
                                        -
                                    </p>
                                </div>
                                <hr />
                                <div className='flex justify-between text-sm mt-3 bold'>
                                    <p className='font-semibold'>
                                        Return Rate
                                    </p>
                                    <p>
                                        -
                                    </p>
                                </div>
                                <hr />
                            </div>
                            <div>
                                <h1>
                                    Rating
                                </h1>
                                <div className='flex justify-between text-sm mt-3 bold'>
                                    <p className='font-semibold'>
                                        Positive Seller Rating
                                    </p>
                                    <p>
                                        -
                                    </p>

                                </div>
                                <hr />
                                <div className='flex justify-between text-sm mt-3 bold'>
                                    <p className='font-semibold'>
                                        Product Rating
                                    </p>
                                    <p>
                                        -
                                    </p>

                                </div>
                                <hr />
                                <div className='flex justify-between text-sm mt-3 bold'>
                                    <p className='font-semibold'>
                                        Response Rate
                                    </p>
                                    <p>
                                        -
                                    </p>
                                </div>
                                <hr />
                                <div className='flex justify-between text-sm mt-3 bold'>
                                    <p className='font-semibold'>
                                        Response Time (min)
                                    </p>
                                    <p>
                                        -
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='shadow-md border border-gray-200 rounded p-3 '>
                        <h1 className=''>
                            Operation
                        </h1>
                        <hr />
                        <h1 className='mb-2 p-2'>
                            New Products
                        </h1>
                        <hr />
                        <div className='grid grid-cols-2 mt-2 gap-2'>
                            <div>
                                <div className='flex justify-between text-sm mt-3 bold'>
                                    <p className='font-semibold'>
                                        Rejected products
                                    </p>
                                    <p>
                                        -
                                    </p>
                                </div>
                                <hr />
                                <div className='flex justify-between text-sm mt-3 bold'>
                                    <p className='font-semibold'>
                                        Approved products
                                    </p>
                                    <p>
                                        -
                                    </p>
                                </div>
                                <hr />
                            </div>
                            <div>
                                <div className='flex justify-between text-sm mt-3 bold'>
                                    <p className='font-semibold'>
                                        Rejected products
                                    </p>
                                    <p>
                                        -
                                    </p>
                                </div>
                                <hr />
                                <div className='flex justify-between text-sm mt-3 bold'>
                                    <p className='font-semibold'>
                                        Pending products
                                    </p>
                                    <p>
                                        -
                                    </p>
                                </div>
                                <hr />
                            </div>
                        </div>
                        <div>
                            <div className='flex justify-between'>
                                <h1 className='mb-2 p-2'>
                                    New Orders
                                </h1>
                                <p className='mb-2 p-2 bold'>
                                    Total 0
                                </p>
                            </div>
                            <div className='grid grid-cols-2 mt-2 gap-2'>

                                <div>
                                    <div className='flex justify-between text-sm mt-3 bold'>
                                        <p className='font-semibold'>
                                            Since {'>'} 24h
                                        </p>
                                        <p>
                                            0
                                        </p>
                                    </div>
                                    <hr />
                                    <div className='flex justify-between text-sm mt-3 bold'>
                                        <p className='font-semibold'>
                                            Since {'<'} 12h
                                        </p>
                                        <p>
                                            0
                                        </p>
                                    </div>
                                    <hr />
                                </div>
                                <div>
                                    <div className='flex justify-between text-sm mt-3 bold'>
                                        <p className='font-semibold'>
                                            Since 12 - 24h
                                        </p>
                                        <p>
                                            0
                                        </p>
                                    </div>
                                    <hr />
                                    <hr />
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className='flex justify-between'>
                                <h1 className='mb-2 p-2'>
                                    Pending return Orders
                                </h1>
                                <p className='mb-2 p-2 bold'>
                                    Total -
                                </p>
                            </div>
                            <div className='grid grid-cols-2 mt-2 gap-2'>
                                <div>
                                    <div className='flex justify-between text-sm mt-3 bold'>
                                        <p className='font-semibold'>
                                            Return request pending
                                        </p>
                                        <p>
                                            -
                                        </p>
                                    </div>
                                    <hr />
                                    <div className='flex justify-between text-sm mt-3 bold'>
                                        <p className='font-semibold'>
                                            Upload evidence pending
                                        </p>
                                        <p>
                                            -
                                        </p>
                                    </div>
                                    <hr />
                                </div>
                                <div>
                                    <div className='flex justify-between text-sm mt-3 bold'>
                                        <p className='font-semibold'>
                                            Return QC pending
                                        </p>
                                        <p>
                                            -
                                        </p>
                                    </div>
                                    <hr />
                                    <hr />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Campaign Events Details */}
                <div className='mt-5 shadow-md border border-gray-200 rounded p-3'>
                    <div className='flex m justify-between'>
                        <h1>
                            Campaign Events
                        </h1>

                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <hr />
                    <section className="grid md:grid-cols-3 grid-cols-1  mb-10 gap-3">
                        {
                            offerdata.map((e) => {
                                return (
                                    <div className='border'>
                                        <div className='ml-32'>
                                            {/* Timer component */}
                                            <Timer />
                                        </div>
                                        <div className="flex justify-center text-left ">
                                            <div className="mb-3  ">
                                                <img className="mb-2 " src={e.image} alt="" />
                                                <p className=" font-bold text-lg text-left">{e.name}</p>
                                                <p className="text-gray-400">{e.date}</p>
                                                <p className="">{e.pricetag}</p>
                                                <div className='flex justify-between'>
                                                    <a href='' className='px-4 py-1 text-white bg-yellow-500 border  border-yello-500'>
                                                        Join
                                                    </a>
                                                    <p className='text-gray-400'>
                                                        Seller: 804 ! Products: 83291
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </section>
                </div>
                {/* Seller picks and chat history */}
                <div className='grid md:grid-cols-3 grid-cols-1 mt-5 gap-5 shadow-md border border-gray-200 rounded p-3'>
                    <div className='shadow-md border border-gray-200 rounded p-3'>
                        <div className='flex justify-between'>
                            <h1>
                                Seller Picks
                            </h1>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <hr />
                        <div className='grid grid-cols-2 mt-2 gap-3'>
                            <div className='border text-center mt-6 mb-6 p-2'>
                                <h1>
                                    Quota Usage
                                </h1>
                                <h1>
                                    0/0
                                </h1>
                            </div>
                            <div className='border text-center mt-6 mb-6 p-2'>
                                <h1>
                                    Page View
                                </h1>
                                <h1>
                                    0
                                </h1>
                            </div>

                        </div>
                        <div className='grid grid-cols-2 mt-2 gap-3'>
                            <div className='border text-center mt-1 mb-6 p-2'>
                                <h1>
                                    Click Page View
                                </h1>
                                <h1>
                                    0
                                </h1>
                            </div>
                            <div className='border text-center mt-1 mb-6 p-2'>
                                <h1>
                                    Total Sale
                                </h1>
                                <h1>
                                    BDT 0.00
                                </h1>
                            </div>
                        </div>
                        <div className='m-3'>
                            <h1>
                                Challenges
                            </h1>
                            <hr />
                            <p className='mt-2'>
                                You don't have any challenges.
                            </p>
                        </div>
                        <div className='m-3'>
                            <h1>
                                Advices
                            </h1>
                            <hr />
                            <p className='mt-2'>
                                You don't have any Advices.
                            </p>
                        </div>
                    </div>
                    <div className='shadow-md border border-gray-200 rounded p-3'>
                        <div className='flex m justify-between'>
                            <h1>
                                Chat
                            </h1>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <hr />
                        <div className='grid grid-cols-2 mt-2 gap-3'>
                            <div className='border text-center mt-6 mb-6 p-2'>
                                <h1>
                                    Response Rate
                                </h1>
                                <h1>
                                    0.00%
                                </h1>
                            </div>
                            <div className='border text-center mt-6 mb-6 p-2'>
                                <h1>
                                    Response Time
                                </h1>
                                <h1>
                                    0.00
                                </h1>
                            </div>
                        </div>
                        <div className='grid grid-cols-2 mt-3 gap-3'>
                            <div className='border text-center mt-1 mb-6 p-2'>
                                <h1>
                                    Conversion Rate
                                </h1>
                                <h1>
                                    0.00%
                                </h1>
                            </div>
                            <div className='border text-center mt-1 mb-6 p-2'>
                                <h1>
                                    Conversions
                                </h1>
                                <h1>
                                    0
                                </h1>
                            </div>
                        </div>
                        <div className='m-3'>
                            <h1>
                                Challenges
                            </h1>
                            <hr />
                            <p className='mt-2'>
                                You don't have any challenges.
                            </p>
                        </div>
                        <div className='m-3'>
                            <h1>
                                Advices
                            </h1>
                            <hr />
                            <p className='mt-2'>
                                You don't have any Advices.
                            </p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default SelerHome
