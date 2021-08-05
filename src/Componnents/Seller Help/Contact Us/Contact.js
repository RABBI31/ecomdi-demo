import React from 'react'
import Sidenav from '../../SideNavbar/Sidenav'

const Contact = () => {
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
                        Contact Us
                    </a>
                </div>
                <div className='mt-2 p-3 text-2xl flex'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-1" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
                        <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
                    </svg>
                    <p className='text-gray-800'>
                        Contact Us
                    </p>
                </div>
                {/* Ecomdi community section */}
                <div className='grid md:grid-cols-2 grid-cols-1 gap-4 bg-white p-9 m-5'>
                    <div>
                        <h1 className='text-gray-800 text-2xl'>
                            Be a Part of Ecomdi Seller Community
                        </h1>
                        <p>
                            Etalk is onestop solution to communicate directly with Ecomdi & receive exclusive tips, insights & alerts regarding all important Ecomdi updates.
                        </p>
                        <div>
                            <a href='#'>
                                Download Ecomdi Talk
                            </a>
                        </div>
                        <div>
                            <a href='#'>
                                Learn how to use Ecomdi Talk
                            </a>
                        </div>

                    </div>
                    <div>
                        <img src='https://cdn.shopify.com/s/files/1/0070/7032/files/EM_SellingPhotosOnline_FinalReview.jpg?v=1601311303&width=1024' />
                    </div>
                </div>
                {/* Help center */}
                <div className=' bg-white p-9 m-5 mb-10'>
                    <h1 className='text-gray-800 text-2xl'>
                        Have any questions, complaints or feedback?
                    </h1>
                    <p className='text-gray-500 text-lg mt-5'>
                        Please visit our <a href='#'>Help Center</a> to view answers to the most frequently asked questions.
                        If you are unable to find your solution, you may contact us through any of the following channels
                    </p>
                    <div>
                        <a href='#'>
                            Click here to see more options
                        </a>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Contact
