import React from 'react'
import Timer from '../../SellerHome/Timer/Timer'
import Sidenav from '../../SideNavbar/Sidenav'

const Campaign = () => {
    return (
        <div className='md:flex flex grid md:grid-cols-5 grid-cols-1 md:mt-8 mt-0'>
            {/* Sidenav */}
            <aside className="md:h-screen h-20 md:sticky sticky mb-5 top-0 z-40 ">
                <Sidenav />
            </aside>
            {/* bodypart */}
            <main className='md:w-full md:ml-0 ml-9 md:col-span-4 col-span-1 bg-gray-100'>
                {/* Navbar Direction */}
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
                        Campaign
                    </a>
                </div>
                <div className='mt-2 p-3 text-2xl'>
                    <p>
                        Campaign Management
                    </p>
                </div>
                {/* Navbar for maega campaign , daily sales and special promotion */}
                <div>
                    <nav className="flex items-center justify-between flex-wrap bg-teal-500 md:text-left text-center p-3">
                        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                            <div className="text-sm lg:flex-grow">
                                <a href="#" className="block p-1 mt-4 lg:inline-block lg:mt-0 text-yellow-500 hover:text-yellow-500 md:border-b-4 border-b-1  border-yellow-500 p-1 mr-4">
                                    Mega/A+ Campaigns
                                </a>
                                <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-yellow-500 p-1 md:border-b-4 border-b-1 mr-4 ">
                                    Daily sales
                                </a>
                                <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-yellow-500 p-1 md:border-b-4 border-b-1 ">
                                    Special Promotions
                                </a>
                            </div>
                        </div>
                    </nav>
                </div>
                {/* navbar for platform campaign and vouchar campaign */}
                <div>
                    <nav className="flex items-center justify-between flex-wrap bg-teal-500 md:text-left text-center p-3">
                        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                            <div className="text-sm lg:flex-grow">
                                <a href="#" className="block p-1 mt-4 lg:inline-block lg:mt-0 text-yellow-500 hover:text-yellow-500  md:border-b-4 border-b-1  border-yellow-500 p-1 mr-4">
                                    Platform Campaign
                                </a>
                                <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-yellow-500 p-1 md:border-b-4 border-b-1 mr-4 ">
                                    Vouchar Campaign
                                </a>
                            </div>
                        </div>
                    </nav>
                </div>
                {/* navbar for available, Registerd and ineligable campaign */}
                <div className='bg-white'>
                    <nav className="flex items-center justify-between flex-wrap bg-teal-500 md:text-left text-center p-6">
                        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                            <div className="text-sm lg:flex-grow">
                                <a href="#" className="block p-1 mt-4 lg:inline-block lg:mt-0 text-white hover:text-white px-2  border rounded-full bg-yellow-500  border-yellow-500 p-1 mr-4">
                                    Available Campaign
                                </a>
                                <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-gray-500 hover:text-yellow-500 px-2  border rounded-full bg-gray-100 p-1 border-b-2 mr-4 ">
                                    Registered Campaign
                                </a>
                                <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-gray-500 hover:text-yellow-500 px-2  border rounded-full bg-gray-100 p-1 mr-4 ">
                                    Ineligible
                                </a>
                            </div>
                        </div>
                    </nav>
                    <div className="container sm:mt-5 mb-5">
                        <table className="w-full flex flex-row flex-no-wrap sm:bg-white rounded-lg overflow-hidden sm:shadow-lg my-5 mb-5">
                            <thead className="text-black">
                                <tr className="bg-teal-400 flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-5">
                                    <th className="h-16 border p-3  ">Campaign Banner</th>
                                    <th className="h-16 border p-3">Campaign Name</th>
                                    <th className="h-16 border p-3">Seller</th>
                                    <th className="h-16 border p-3">Registration close in</th>
                                    <th className="h-16 border p-3">Campaign Live Period</th>
                                    <th className="h-16 border p-3">Action</th>
                                </tr>
                            </thead>
                            <tbody className="flex-1 sm:flex-none w-full h-36 text-center mb-5">
                                <tr className="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">
                                    <td className="h-16 border-grey-light border hover:bg-gray-100 p-3">Weekly Free Shipping Campaign 1st - 14th Aug</td>
                                    <td className="h-16 border-grey-light border hover:bg-gray-100 p-3 ">Weekly Free Shipping Campaign 1st - 14th Aug</td>
                                    <td className=" h-16 border-grey-light border hover:bg-gray-100 p-3 ">{Timer} Weekly Free Shipping Campaign 1st - 14th Aug</td>
                                    <td className=" h-16 border-grey-light border hover:bg-gray-100 p-3 ">
                                        Start at 01 Aug 2021 00:00 GMT+06:00
                                        <div>
                                            End at 14 Aug 2021 23:59 GMT+06:00
                                        </div>
                                    </td>
                                    <td className="h-16 border-grey-light border hover:bg-gray-100 p-3 ">Weekly Free Shipping Campaign 1st - 14th Aug</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Campaign
