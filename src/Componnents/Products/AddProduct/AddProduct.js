import React from 'react'
import Sidenav from '../../SideNavbar/Sidenav'

const AddProduct = () => {
    return (
        <div className='md:flex flex grid md:grid-cols-5 grid-cols-1 md:mt-8 mt-0'>
            {/* Sidenav */}
            <aside className="md:h-screen h-20 md:sticky sticky mb-5 top-0 z-40 ">
                <Sidenav />
            </aside>
            {/* <div className="ml-5 mt-10 w-screen h-64 shadow-md border border-gray-200 bg-white"></div> */}
            {/* bodypart */}
            <main className='md:w-full md:ml-0 ml-9 md:col-span-4 col-span-1 bg-gray-100'>
                <div className='grid md:grid-cols-3 grid-cols-1'>
                    <div className='col-span-2'>
                        <div className=' md:mt-16 border p-2 text-md bg-gray-100'>
                            <h1 className='text-lg'>
                                Basic Information
                            </h1>
                        </div>
                        {/* form section */}
                        <form className="w-full  p-5 border  bg-white">
                            <div className="md:flex md:items-center mb-6">
                                <div className="">
                                    <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                                        Product Name
                                    </label>
                                </div>
                                <div class="md:w-2/3">
                                    <input class="bg-white appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="product" type="text" value="product name" />
                                </div>
                            </div>
                            <div className="md:flex md:items-center mb-6">
                                <div className="">
                                    <label aria-required class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-password">
                                        Category
                                    </label>
                                </div>
                                <div className="inline-block relative w-2/3 md:ml-9">
                                    <select className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                                        <option>Select category</option>
                                        <option>Option 2</option>
                                        <option>Option 3</option>
                                    </select>
                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                    </div>
                                </div>
                            </div>
                            {/* buttton */}
                            <div className="md:flex md:items-center">
                                <div className="md:w-1/3"></div>
                                <div className="md:w-2/3">
                                    <button className="shadow bg-yellow-500 hover:bg-yellow-300 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
                                        Submit
                                    </button>
                                    <button className="ml-2 shadow hover:bg-yellow-500 focus:shadow-outline focus:outline-none text-black font-bold py-2 px-4 rounded" type="button">
                                        Save draft
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div>

                    </div>

                </div>
            </main>

        </div>
    )
}

export default AddProduct
