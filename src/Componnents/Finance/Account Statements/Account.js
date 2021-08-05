import React from 'react'
import Sidenav from '../../SideNavbar/Sidenav'

const Account = () => {
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
                        Account Statements
                    </a>
                </div>
                <div className='mt-2 p-3 text-2xl'>
                    <p>
                        Account Statement
                    </p>
                </div>
                {/* Account details and button for print, export and history */}
                <div className='grid md:grid-cols-3 grid-cols-1 gap-4 justify-between'>
                    <div className="col-span-1  flex">
                        <div className='w-1/4  p-3'>
                            <p>
                                Period
                            </p>
                        </div>
                        <div className='w-3/4  p-2 '>
                            <select className='w-full p-1 border'>
                                <option></option>
                            </select>
                        </div>
                    </div>
                    <div className="col-span-2 p-2  md:ml-48 ">
                        <div className="flex flex-col md:flex-row mb-4">
                            <div className=" ">
                                <button className="bg-white hover:bg-yellow-500 text-black font-bold  py-1 px-4 border rounded md:mb-0 mb-1">
                                    Print
                                </button>
                            </div>
                            <div className="  ">
                                <button className="bg-white hover:bg-yellow-500 text-black font-bold py-1 px-4 border rounded md:mb-0 mb-1">
                                    Export
                                </button>
                            </div>
                            <div className="  ">
                                <button className="bg-white hover:bg-yellow-500 text-black font-bold py-1 px-4 border rounded md:mb-0 mb-1">
                                    View Export History
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className='' />
                <div className='bg-white md:m-20 m-10  md:h-1/3 h-32'>
                </div>
                <hr className='' />
                <div className='mb-4 bg-gray-100'>
                </div>
            </main>
        </div>
    )
}

export default Account
