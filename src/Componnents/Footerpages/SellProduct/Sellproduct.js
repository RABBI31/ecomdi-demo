import React from 'react'
import './Sellproduct.css'
import image from '../images/image2.png'
import { Layout, Menu } from 'antd';
import {
    AppstoreOutlined,
    BarChartOutlined,
    CloudOutlined,
    ShopOutlined,
    TeamOutlined,
    UserOutlined,
    UploadOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;

const Sellproduct = () => {
    return (
        <div>
            <div className='hero-container  text-white '>
                <div className='md:w-2/4 text-left inline-block'>
                    <p className='ml-8 px-8 mt-16'>Sell</p>
                    <h1 className=' ml-8 px-8 md:text-7xl text-4xl text-white '>How to start
                        selling on Ecomdi</h1>
                    <p className=' ml-8 px-8'>Whether you’ve already got an established ecommerce business, a great idea for a new product, or you just have a passion for selling, here’s how to take that next step with Ecomdi.</p>
                    <div className='flex inline-block'>
                        <a className='ml-8 px-8 mt=5 text-white' href=''>
                            Read the beginner's guide to selling on Ecomdi
                        </a>
                        <button className="flex-shrink-0 text-white text-sm  text-black py-1 px-2 rounded hidden md:block" type="button">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>

                        </button>
                    </div>
                </div>

            </div>
            {/* <section className="grid gap-3 md:grid-cols-3 grid-cols-1 m-5 p-6  text-base rounded text-left">
                <div className='w text-white'>

                    <Layout >
                        <Sider>
                            <Menu theme="" mode="inline" defaultSelectedKeys={['4']}>
                                <Menu.Item href='#before' key="1" >
                                    Before you Start
                                </Menu.Item>
                                <Menu.Item key="2" >
                                    Adding Your Products
                                </Menu.Item>
                                <Menu.Item key="3" >
                                    Attracting Custmers
                                </Menu.Item>
                                <Menu.Item key="4" >
                                    After your sale
                                </Menu.Item>
                            </Menu>
                        </Sider>
                    </Layout>
                </div>
                <div className='col-span-2'>
                    <div>
                        <h1 id='before' className='text-5xl'>Before you start</h1>
                    </div>
                    <div className='text-hite'>
                        <h3 className='text-black text-3xl'>
                            Choose a selling plan
                        </h3>
                        <p className='text-ehite'>With the Individual plan, you’ll pay $0.99 every time you sell an item. The Professional plan costs $39.99 per month, no matter how many items you sell. For both plans, Ecomdi also collects a referral fee on each sale, which is a percentage of the total transaction and varies by product category. Visit our pricing page for a summary of selling fees.</p>
                        <div className='flex inline-block text-white'>
                            <a className='ml- px-8 mt=5 text-black' href=''>
                                Compare plans
                            </a>
                            <button className="flex-shrink-0 text-white text-sm  text-black py-1 px-2 rounded hidden md:block" type="button">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>

                            </button>
                        </div>
                    </div>
                    
                </div>
                <div className='col-span-2'>
                    <div>
                        <h1 id='before' className='text-5xl'>Before you start</h1>
                    </div>
                    <div className='text-hite'>
                        <h3 className='text-black text-3xl'>
                            Choose a selling plan
                        </h3>
                        <p className='text-ehite'>With the Individual plan, you’ll pay $0.99 every time you sell an item. The Professional plan costs $39.99 per month, no matter how many items you sell. For both plans, Ecomdi also collects a referral fee on each sale, which is a percentage of the total transaction and varies by product category. Visit our pricing page for a summary of selling fees.</p>
                        <div className='flex inline-block text-white'>
                            <a className='ml- px-8 mt=5 text-black' href=''>
                                Compare plans
                            </a>
                            <button className="flex-shrink-0 text-white text-sm  text-black py-1 px-2 rounded hidden md:block" type="button">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>

                            </button>
                        </div>
                    </div>
                    
                </div>
            </section> */}
            <section className="flex ml-10 mr-10">
                <div className="text-center">
                    <Layout >
                        <Sider>
                            <Menu theme="" mode="inline" defaultSelectedKeys={['4']}>
                                <Menu.Item href='#before' key="1" >
                                    Before you Start
                                </Menu.Item>
                                <Menu.Item key="2" >
                                    Adding Your Products
                                </Menu.Item>
                                <Menu.Item key="3" >
                                    Attracting Custmers
                                </Menu.Item>
                                <Menu.Item key="4" >
                                    After your sale
                                </Menu.Item>
                            </Menu>
                        </Sider>
                    </Layout>
                </div>
                <div className="ml-5 mb-5">
                    <section className="grid md:grid-cols-2 grid-cols-1 mb-10 text-left">
                        <div className='col-span-2 md:col-span-6'>
                            <div>
                                <h1 id='before' className='text-5xl'>Before you start</h1>
                            </div>
                            <div className='text-white'>
                                <h3 className='text-black text-3xl'>
                                    Choose a selling plan
                                </h3>
                                <p className='text-ehite'>With the Individual plan, you’ll pay $0.99 every time you sell an item. The Professional plan costs $39.99 per month, no matter how many items you sell. For both plans, Ecomdi also collects a referral fee on each sale, which is a percentage of the total transaction and varies by product category. Visit our pricing page for a summary of selling fees.</p>
                                <div className='flex inline-block text-white'>
                                    <a className='ml- px-8 mt-5 text-black' href=''>
                                        Compare plans
                                    </a>
                                    <button className="flex-shrink-0 text-white text-sm  text-black py-1 px-2 rounded hidden md:block" type="button">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </section>
        </div>
    )
}

export default Sellproduct
