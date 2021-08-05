import React from 'react'
import Sidenav from '../../SideNavbar/Sidenav'


const Manage = () => {
    return (
        <div className='flex grid md:grid-cols-5 grid-cols-1 mt-8'>
            <aside className="h-screen md:sticky  top-0 w-full ">
                <Sidenav />
            </aside>
            <main className='w-full col-span-4 bg-gray-100'>
                <div className='flex p-3 text-black'>
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
                <div className='m-5 md:text-2xl text-lg text-gray-500  '>
                    <h1 className='text-gray-500'>
                        Product Overview
                    </h1>
                </div>
                <div className='ml-5 bg-white h-16 overflow-x-auto'>
                    <ul className='flex items-center overflow-x-auto'>
                        <li className='px-3 py-2 border ml-3 mr-2 mt-3 mb-3'>
                            <a href='' className='text-black'>
                                Add new
                            </a>
                        </li>
                        <li className='px-3 py-2 border ml-3 mr-2 mt-3 mb-3'>
                            <label for="product">Export</label>

                            <select name="product" id="product">
                                
                            </select>
                        </li>
                        <li className='px-3 py-2 border ml-3 mr-2 mt-3 mb-3'>
                            <a href='' className='text-black'>
                                import
                            </a>
                        </li>
                        <li className='px-3 py-2 border ml-3 mr-2 mt-3 mb-3'>
                            <label for="product">View History</label>

                            <select name="product" id="product">
                               <option value="exporthistory"></option>
                               <option value="importhistory">View Import History</option>
                            </select>
                        </li>
                        <li className='px-3 py-2 border ml-3 mr-2 mt-3 mb-3'>
                        <input type="text" id="name" name="name" placeholder='Name' />
                        </li>
                        <li className='px-3 py-2 border ml-3 mr-2 mt-3 mb-3'>
                        <input type="text" id="name" name="name" placeholder='Name' />
                        </li>
                    </ul>
                </div>
            </main>
        </div>
    )
}

export default Manage
