import React from 'react'
import Sidenav from '../../SideNavbar/Sidenav'

const MediaCenter = () => {
    return (
        <div className='md:flex flex grid md:grid-cols-5 grid-cols-1 md:mt-8 mt-0'>
            {/* Sidenav */}
            <aside className="md:h-screen h-20 md:sticky sticky mb-5 top-0 z-40 ">
                <Sidenav />
            </aside>
            {/* bodypart */}
            <main className='md:w-full md:ml-0 ml-9 md:col-span-4 col-span-1 bg-gray-100'>
                <div class="flex flex-col md:flex-row mb-4">
                    {/* navbar */}
                    <div className='md:w-2/3 h-12 flex  p-3 text-black'>
                        <a href='' className='text-gray-500 mr-1 text-xs uppercase'>
                            home
                        </a>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                        <a href='' className='text-gray-500 text-xs mr-1 ml-1 uppercase'>
                            Product
                        </a>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                        <a href='' className='text-gray-500 text-xs mr-1 ml-1 uppercase'>
                            Product Overview
                        </a>
                    </div>
                    <div className='md:w-1/3 h-12 '>
                        <div className="flex  mb-4 p-2 ">
                            <div className='w-1/5 h-12 px-3'>
                                usage
                            </div>
                            <div className="w-3/5 h-12 relative pt-2 px-2">
                                <div className=" overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-300">
                                    <div style={{ width: "0%" }} className="shadow-none  text-center whitespace-nowrap text-white justify-center bg-gray-500"></div>
                                </div>
                            </div>
                            <div className='w-1/5 h-12 text-xs'>
                                0/20000 MB
                            </div>
                        </div>
                    </div>
                </div>
                <div class='mt-8 mb-5 p-3 text-black font-semibold text-2xl'>
                    Media Center
                </div>
                {/* Image Gallery  */}
                <div className='flex flex-col md:flex-row  p-3'>
                    <div className='w-2/4 mb-2'>
                        <h1>
                            My Gallery
                        </h1>
                    </div>
                    {/* Buttons */}
                    <div className='md:w-2/4  flex mb-4 '>
                        <div className='w-1/3 px-2'>
                            <button class="bg-white hover:bg-yellow-500 text-black font-bold py-2 px-4 rounded">
                                New folder
                            </button>
                        </div>
                        <div className='w-1/3 '>
                            <button class="bg-white hover:bg-yellow-500 text-black font-bold py-2 px-4 rounded">
                                Upload Image
                            </button>
                        </div>
                        <div className='px-2'>
                            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder=" Input image name" />
                        </div>
                    </div>
                </div>
                <hr className='' />
                <div className='bg-white md:h-1/3 h-32'>
                </div>
                <hr className='' />
                <div className='mb-4 bg-gray-100'>
                </div>
            </main>
        </div>
    )
}

export default MediaCenter
