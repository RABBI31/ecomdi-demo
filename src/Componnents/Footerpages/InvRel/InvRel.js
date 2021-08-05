import React from 'react'
import Image2 from '../images/image1.jpg'
import { Card } from 'antd'

const InvRel = () => {
    return (
        <div>
            <div className=' '>
                <img className='w-full h-64 object-cover object-center  bg-black opacity-50' alt='Ecomdi' src='https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8d2Vic2l0ZSUyMGJhbm5lciUyMGUlMjBjb21tZXJjZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60' />
            </div>
            <section className='grid md:grid-cols-3 grid-cols-1 mb-10'>
                <div className='w-1/3 m-0'>
                    <div className="flex  justify-between text-justify p-2 mt-5 ml-3" style={{width:300}}>
                        <div className='flex-grow'>
                            <a href='#' className=' text-gray-500 text-sm  bold'>
                                ABOUT ECOMDI
                            </a>
                        </div>
                        <div className=''>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </div>
                        <div className='flex-grow'>
                            <a href='#'  className=' text-gray-500 text-sm  uppercase bold'>
                                Investor Relation
                            </a>
                        </div>
                    </div>
                    <div>
                        <h1 className='bg-white text-5xl text-gray-500 p-5'>
                            Investor Relation
                        </h1>
                    </div>
                    <div style={{width:300}}>
                        <ol className='ml-0 mr-0'>
                            <li className='flex flex-shrink bg-white ml-2 mb-4'>
                                <p className='flex-grow px-4 text-sm'>01</p>
                                <a href='#' className='flex-grow text-lg text-black font-bold break-word ml-0 text-left'>
                                    Annual reports proxies and
                                    shareholder letters
                                </a>
                            </li>
                            <li className='flex  bg-white ml-2 mb-4'>
                                <p className='flex px-4 text-sm m-0'>02</p>
                                <a href='#' className='flex-grow text-lg text-black font-bold break-word ml-0 text-left'>
                                    Quarterly results
                                </a>
                            </li>
                            <li className='flex  bg-white ml-2 mb-4'>
                                <p className='flex px-4 text-sm m-0'>03</p>
                                <a href='#' className='flex-grow text-lg text-black font-bold break-word ml-0 text-left'>
                                    SEC filings
                                </a>
                            </li>
                            <li className='flex  bg-white ml-2 mb-4'>
                                <p className='flex px-4 text-sm m-0'>04</p>
                                <a href='#' className='flex-grow text-lg text-black font-bold break-word ml-0 text-left'>
                                    Press Releases
                                </a>
                            </li>
                            <li className='flex  bg-white ml-2 mb-4'>
                                <p className='flex px-4 text-sm m-0'>05</p>
                                <a href='#' className='flex-grow text-lg text-black font-bold break-word ml-0 text-left'>
                                    Corporate governance
                                </a>
                            </li>
                            <li className='flex  bg-white ml-2 mb-4'>
                                <p className='flex px-4 text-sm m-0'>06</p>
                                <a href='#' className='flex-grow text-lg text-black font-bold break-word ml-0 text-left'>
                                    Officers and Directors
                                </a>
                            </li>
                            <li className='flex  bg-white ml-2 mb-4'>
                                <p className='flex px-4 text-sm m-0'>07</p>
                                <a href='#' className='flex-grow text-lg text-black font-bold break-word ml-0 text-left'>
                                    Contact Us and request documents
                                </a>
                            </li>
                            <li className='flex  bg-white ml-2 mb-4'>
                                <p className='flex px-4 text-sm m-0'>08</p>
                                <a href='#' className='flex-grow text-lg text-black font-bold break-word ml-0 text-left'>
                                    Events
                                </a>
                            </li>
                        </ol>
                    </div>
                </div>
                <div className='w-1/3 '>
                    <div className='md:mt-32'>

                    </div>
                    <div className='mb-5'>
                    <Card className='p-10 mb-5' bordered={true} style={{ width: 350, borderTopStyle: 'solid', borderTopColor: '#000', borderTopWidth: '8px', marginLeft: '10px' }}>
                        <div className='text-left '>
                            <h3>
                                24th July
                            </h3>
                            <h1 className='text-4xl'>
                                Ecomdi.com Announces First Quarter Resuls
                            </h1>
                            <p>Ecomdi.com, Inc. (ECOMDI: ECOM) today announced financial results for its first quarter ended March 31, 2021. Operating cash flow increased 69% to $67.2 billion for th...</p>
                            <a className='underline' href='#'>Continue Reading</a>
                        </div>
                    </Card>
                    </div>
                    <div className='mb-5'>
                    <Card className='p-10' bordered={true} style={{ width: 350, borderTopStyle: 'solid', borderTopColor: '#000', borderTopWidth: '8px', marginLeft: '10px' }}>
                        <div className='text-left'>
                            <h3>
                                24th July
                            </h3>
                            <h1 className='text-4xl'>
                                Ecomdi.com Announces First Quarter Resuls
                            </h1>
                            <p>Ecomdi.com, Inc. (ECOMDI: Ecom) today announced financial results for its first quarter ended March 31, 2021. Operating cash flow increased 69% to $67.2 billion for th...</p>
                            <a className='underline' href='#'>Continue Reading</a>
                        </div>
                    </Card>
                    </div>
                </div>
                <div className='w-1/3'>
                    <div className="flex space-x-2  mt-4 ml-2" style={{width:300}}>
                        <h1 className='flex-grow text-base '>
                            ECOMDI: Ecom 
                            -12.07 (-0.32%)
                        </h1> 
                        <h1 className='flex-none text-2xl '>
                            $3,719.34
                        </h1>
                        </div>
                        <div className='w-full flex ml-2 'style={{width:300}}>
                        <p className="flex-1">
                            Jul 9, 2021 4:00 PM EST. Pricing delayed by 20 minutes
                        </p>
                        </div>
                    


                <div className='mb-5'>
                    <Card className='p-10 my-10' bordered={true} style={{ width: 350, borderTopStyle: 'solid', borderTopColor: '#000', borderTopWidth: '8px', marginLeft: '10px' }}>
                        <div className='text-left'>
                            <h3>
                                24th July
                            </h3>
                            <h1 className='text-4xl'>
                                Ecomdi.com Announces First Quarter Resuls
                            </h1>
                            <p>Ecomdi.com, Inc. (ECOMDI: Ecom) today announced financial results for its first quarter ended March 31, 2021. Operating cash flow increased 69% to $67.2 billion for th...</p>
                            <a className='underline' href='#'>Continue Reading</a>
                        </div>
                    
                    </Card>
                    </div>
                    <div className='mb-5'>
                    <Card className='p-10' bordered={true} style={{ width: 350, borderTopStyle: 'solid', borderTopColor: '#000', borderTopWidth: '8px', marginLeft: '10px' }}>
                        <div className='text-left'>
                            <h3>
                                24th July
                            </h3>
                            <h1 className='text-4xl'>
                                Ecomdi.com Announces First Quarter Resuls
                            </h1>
                            <p>Ecomdi.com, Inc. (ECOMDI: Ecom) today announced financial results for its first quarter ended March 31, 2021. Operating cash flow increased 69% to $67.2 billion for th...</p>
                            <a className='underline' href='#'>Continue Reading</a>
                        </div>
                    </Card>
                    </div>
                </div>
            </section>
            <div className='mt-5'>
               
            </div>
        </div>
    )
}

export default InvRel
