import React from 'react'
import { DatePicker, Space, Input } from 'antd';
import Sidenav from '../SideNavbar/Sidenav';
import { Slider } from 'antd';
import { FrownOutlined, SmileOutlined } from '@ant-design/icons';
const { Search } = Input;

const { RangePicker } = DatePicker;
const onSearch = value => console.log(value);


const PolicyCom = () => {
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
                        Growth Center
                    </a>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                    <a href='' className='text-gray-500 text-xs mr-1 ml-1 uppercase'>
                        Policy Compliance
                    </a>
                </div>
                <div className='mt-2 p-3 text-2xl'>
                    <p>
                        Growth Center
                    </p>
                </div>
                {/* Policy Compliance */}
                <div className=' ml-3 text-xl'>
                    <p>
                        Policy Compliance
                    </p>
                </div>
                <div className='grid md:grid-cols-2 grid-cols-1 bg-white ml-3 md:mb-3 mb-2'>
                    <div className=' ml-3 p-4 md:mb-0 mb-2'>
                        <h1 className='text-lg'>
                            What are Non-Compliance Points?
                        </h1>
                        <p className='text-xs'>
                            Non-Compliance Points (NCP) are a points-based system to measure the compliance of our sellers to Ecomdi Seller Policies. Sellers who are found to be not in adherence to our policies may receive either Non-Compliance Points removal of products or account restrictions.
                        </p>
                        <div className='mt-5 text-xs flex'>
                            <a href='#'>
                                Visit Ecomdi Seller Policies for more info
                            </a>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>

                        </div>
                        <div className='mt-1 text-xs flex'>
                            <a href='#'>
                                Visit Ecomdi to learn more.
                            </a>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </div>
                    </div>
                    <div className='bg-gray-200 m-3 rounded'>
                        <h1 className='p-3 text-blue-500'>
                            Your Current Points
                        </h1>
                        <div className='bg-white h-12 p-3  '>
                            <Slider className='mt-5' />
                        </div>
                        <p className=' m-3'>
                            Awesome! You are a role model. Thank you for adhering to our policies.
                        </p>
                    </div>
                </div>
                <div className='grid md:grid-cols-2 grid-cols-1 mb-5'>
                    <div className=' ml-3 p-5 md:mb-0 mb-2 bg-white'>
                        <div>
                            <h1 className='text-base'>
                                Wonderful! You have not been penalized recently yet.
                            </h1>
                        </div>

                        <div className='border p-2 shadow-md'>
                            <a href='' className='text-black'>
                                <span className='text-xl mr-2 text-blue-500'>0</span> <span className='text-md'>Number of Non-compliance records</span>
                            </a>
                        </div>
                        <div className='border p-2 shadow-md mt-2'>
                            <a href='' className='text-black'>
                                <span className='text-xl mr-2 text-blue-500'>2408</span> <span className='text-md'>Outstanding appeal requests</span>
                            </a>
                        </div>
                    </div>
                    <div className='hidden'>

                    </div>
                </div>
            </main>
        </div>
    )
}

export default PolicyCom
