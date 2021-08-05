import React from 'react'
import './Sellproduct.css'
import {ReactComponent as Jotaro} from "./Jotaro.svg"
import {ReactComponent as Amz} from "./amz.svg"
import {ReactComponent as Amza} from "./amza.svg"
import {ReactComponent as Review} from "./reviews.svg"
import image3 from '../images/image3.png'
import image4 from '../images/image4.png'
import image5 from  '../images/image5.jpg'
import image8 from  '../images/image8_.jpg'
import image6 from  '../images/image6.png'
import image9 from  '../images/image9.jpg'
import image10 from  '../images/image10.jpg'
import image11 from  '../images/image11.jpg'
import { Menu, Dropdown, message } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import DropSell from './DropSell';

const onClick = ({ key }) => {
    message.info(`Click on item ${key}`);
};
const menu = (
    <Menu onClick={onClick}>
      <Menu.Item key="1">1st menu item</Menu.Item>
      <Menu.Item key="2">2nd menu item</Menu.Item>
      <Menu.Item key="3">3rd menu item</Menu.Item>
    </Menu>
  );

const Sellpro = () => {
    return (
        <div>
            <div className='hero-container  text-white  '>
                <div className='md:w-2/4  text-left inline-block'>
                    <p className='ml-8 px-8 mt-16'>Sell</p>
                    <h1 className=' ml-8 px-8 md:text-7xl text-4xl text-white '>How to start
                        selling on Ecomdi</h1>
                    <p className=' ml-8 px-8'>Whether your e-commerce business is already established, or you have a great idea for a new product, or you are only passionate about sales, this is Ecomdi's next step.</p>
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
            <div class="flex grid md:grid-cols-3 grid-cols-1">
                <aside class="h-screen md:sticky m-5 p-2 top-0 w-full">
                    <DropSell />
                </aside>

                <main className='grid col-span-2 '>
                    <div className='md:text-left text-center mr-3 md:mt-16 md:mb-16'>
                        <div>
                            <h1 id='before' className='md:text-5xl text-xl font-extrabold text-gray-900'>Before you start</h1>
                        </div>
                        <div className='text-white '>
                            <h3 id='choose' className='md:text-3xl text-lg p-3 md:border-l-4 border-blue-500 font-bold text-gray-900'>
                                Choose a selling plan
                            </h3>
                            <p className=' text-gray-500 font-bold md:mr-32 m-5 md:text-left text-center'>You will pay €0.99 each time you sell an item with the individual plan. The business plan costs $39.99 a month, irrespective of how many items you are selling. Ecomdi also charges the referral fee for every sale for both plans, which represents one percent of the total transaction and depends on the category of the products. For a summary of the sale fees, please visit our price page.</p>
                            <div className=' inline-block text-white'>
                                <a className='mt-10 text-black underline font-bold' href='' >
                                    Compare plans
                                </a>
                    
                            </div>
                        </div>
                    </div>
                    <div className='grid md:grid-cols-3 grid-cols-1 gap-3 mt-10 mr-10  '>
                        <div>
                           <img src={image11} className='items-center h-2/3 object-cover object-fit' />
                        </div>
                        <div className='md:hidden hidden'>

                        </div>
                        <div className='col-span-2 md:text-left text-center md:mr-5 mt-6 mb-16'>
                            <h1 id='consider' className='md:text-3xl text-xl p-3 md:border-l-4 border-blue-500 font-bold text-gray-900'>
                            Consider your selling strategy
                            </h1>
                            <p className=' text-gray-500 font-bold md:mr-32 m-5 md:text-left text-center'>
                            In Ecomdi's stores, resellers find and offer popular products that already exist.
                            <br /><br />
                            Brand owners produce their own products – or sell products under a private label – to offer a unique selection to shopkeepers.
                            <br /><br />

                            There are many sellers. You can choose the method that works for your objectives. We have loads of resources and instruments to assist you in selling your own brand on Ecomdi.<br />

                            </p>
                            
                                <a className='mt-5 text-black underline font-bold md:text-left text-center' href=''>
                                Learn how to build a brand on Ecomdi

                                </a>
                            
                        </div>
                    </div>
                    <div className='grid md:grid-cols-2 grid-cols-1 md:mt-10'>
                        <div className='md:text-left'>
                            <h1 id='create' className='md:text-3xl text-xl p-3 md:border-l-4 border-blue-500 font-bold text-gray-900 '>
                                Create an Ecomdi seller account
                            </h1>
                            <p className=' text-gray-500 font-bold  m-5 md:text-left text-center'>
                            You can start selling on your customer's account or use your business email to create a new Ecomdi seller's account. Before registering, make sure that you are ready:
                            </p>
                            <ul className='text-gray-500 font-bold  text-gray-500 font-bold  m-5 md:text-left text-center list-disc ml-7 '>
                                <li className='mt-2'>
                                Business email address or Ecomdi customer account
                                </li>
                                <li className='mt-2'>
                                Business email address or Ecomdi customer account
                                </li>
                                <li className='mt-2'>
                                Business email address or Ecomdi customer account
                                </li>
                                <li className='mt-2'>
                                Business email address or Ecomdi customer account
                                </li>
                                <li className='mt-2'>
                                Business email address or Ecomdi customer account
                                </li>
                                <li className='mt-2'>
                                Business email address or Ecomdi customer account
                                </li>
                            </ul>
                            <a className='mt-5 text-black underline font-bold' href=''>
                                Create your Ecomdi seller account
                                </a>
                        </div>
                        <div className='gap-4'>
                        <img src={image11} className='items-center h-2/3 object-cover object-fit' />
                        </div>
                        
                    </div>
                    <div className='grid md:grid-cols-3 grid-cols-1 border-l-8 rounded-l-2xl border-green-500 font-bold mt-10 mb-5 text-left'>
                        <div className='col-span-2'>
                        <h1 className='  md:text-3xl text-base p-3  font-bold text-green-500'>
                            Ecomdi:<span className='ml-2  text-gray-800'></span></h1>
                        <p className='md:ml-5 m-5 text-gray-500 md:text-base text-sm font-bold'>Seller Central is the website that sellers connect to monitor their sales activities at Ecomdi. You are able to manage inventories, update pricing, contact purchasers, review the health of the account, contact partner support and add new products.</p>
                        </div>
                        <div className='sm:hidden'>

                        </div>
                    </div>
                    <div className='grid md:grid-cols-2 grid-cols-1 mt-10 mb-10'>
                        <div>
                        <img src={image11} className='items-center h-2/3 object-cover object-fit' />
                        </div>
                        <div className='mt-5 md:text-left text-center '>
                            <h1 className='md:text-3xl text-xl p-3 font-bold text-gray-900'>Go Mobile</h1>
                            <p className='md:mr-5 m-5 text-gray-500 md:text-base font-bold'>Use the Ecomdi Seller app to track sales, fulfill orders, find products to sell, respond to customer questions, capture and edit professional-quality product photos, and create listings—all from your phone.</p>
                            <div className='grid md:grid-cols-2 grid-cols-1'>
                               <div>
                               <img src={image11} className='items-center h-2/3 object-cover object-fit' />
                               </div>
                            </div>
                            
                        </div>
                    </div>
                    <div className='mt-10 md:text-left md:mr-32 '>
                        <h1 id='add' className='md:text-5xl text-2xl p-3 md:border-l-4 border-blue-500 font-bold text-gray-900'>
                        Adding your products
                        </h1>
                        <br />
                        <p className='md:mr-10 m-5 text-gray-500 text-base font-bold'>
                        What can you sell on Ecomdi? It depends on the product, the category, and the brand.
                        <br /> 
                        <br />
                        Some categories are open to all sellers, some require a Professional seller account, some require approval to sell, and some include products that cannot be sold by third-party sellers.
                        <br />
                        <br />
                        The table below provides an overview of Ecomdi product categories, but visit Seller Central Help to learn more about restrictions, and how to request approval. If you ship orders with Fulfillment By Ecomdi, be sure to review the specific list of FBA product restrictions.

                        </p>
                    </div>

                    <div className='mt-10 mr-10 mb-10 shadow-md hover:shadow-lg rounded-lg bg-white  p-5 md:text-left'>
                        <div className="container mr-10">
                            <h1 id='categories' className="md:text-3xl text-xl p-3 md:border-l-4 border-blue-500 font-bold text-gray-900">
                                Product  Categories
                            </h1>

                            <table className="text-left w-full">
                                <thead className="bg-white flex text-black w-full">
                                    <tr className="flex  w-full mb-3 font-bold text-gray-900">
                                        <th className="p-3 w-1/3 ">Product category</th>
                                        <th className="p-3 w-1/3">Example products</th>
                                        <th className="p-3 w-1/3">Conditions allowed</th>
                                        
                                    </tr>
                                    
                                </thead>
                                <hr className=' divide-y divide-gray-900' />
                                <tbody className="bg-grey-light flex flex-col items-center justify-between overflow-y-scroll w-full" styles={{ height: '50vh' }}>
                                    <tr className="flex w-full mb-3">
                                        <td className="p-3 w-1/3">Dogs</td>
                                        <td className="p-3 w-1/3">Cats</td>
                                        <td className="p-3 w-1/3">Birds</td> 
                                    </tr>
                                    <tr className="flex w-full mb-3">
                                        <td className="p-3 w-1/3">Dogs</td>
                                        <td className="p-3 w-1/3">Cats</td>
                                        <td className="p-3 w-1/3">Birds</td> 
                                    </tr>
                                    <tr className="flex w-full mb-3">
                                        <td className="p-3 w-1/3">Dogs</td>
                                        <td className="p-3 w-1/3">Cats</td>
                                        <td className="p-3 w-1/3">Birds</td> 
                                    </tr>
                                    <tr className="flex w-full mb-3">
                                        <td className="p-3 w-1/3">Dogs</td>
                                        <td className="p-3 w-1/3">Cats</td>
                                        <td className="p-3 w-1/3">Birds</td> 
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <hr />
                    <div className='mt-10 md:text-left mr-10 mb-10'>
                      <h1 id='details' className='md:text-3xl text-xl p-3 md:border-l-4 border-blue-500 font-bold text-gray-900 p-3'>
                      Product listing details
                      </h1>
                      <p className='text-gray-500 text-base font-bold'>
                      To start selling a product on Ecomdi, you’ll create a product listing in Seller Central (or via API). <br />A product listing includes:
                      </p>
                      <ul className='text-gray-500 text-base font-bold list-disc ml-7 '>
                                <li className='mt-2'>
                                Business email address or Ecomdi customer account
                                </li>
                                <li className='mt-2'>
                                Business email address or Ecomdi customer account
                                </li>
                                <li className='mt-2'>
                                Business email address or Ecomdi customer account
                                </li>
                                <li className='mt-2'>
                                Business email address or Ecomdi customer account
                                </li>
                                <li className='mt-2'>
                                Business email address or Ecomdi customer account
                                </li>
                                <li className='mt-2'>
                                Business email address or Ecomdi customer account
                                </li>
                            </ul>
                    </div>
                    <div className='grid md:grid-cols-2 grid-cols-1 mb-10'>
                        <div>
                        <img src={image11} className='items-center h-2/3 object-cover object-fit' />
                        </div>
                        <div>
                        <img src={image11} className='items-center h-2/3 object-cover object-fit' />
                        </div>

                    </div>
                    <div className='mt-10 mr-5 shadow-md hover:shadow-sm rounded-lg bg-white p-5 border-l-8 rounded-l-2xl border-green-500 font-bold text-left mb-10'>
                    <h1 className='text-3xl text-green-600'>Ecomdi jargon:<span className='ml-2 text-gray-800'>ASIN</span></h1>
                        <p className='mr-10 text-gray-500 text-base font-bold'>Seller Central is the website where sellers log in to monitor their Ecomdi sales activity. You can manage inventory, update pricing, communicate with buyers, review account health, contact selling partner support, and add new products.</p>
                    </div>
                    <div className='md:mt-10 md:text-left mr-10 '>
                      <h1 id='build' className='md:text-3xl text-xl p-3 md:border-l-4 border-blue-500 font-bold text-gray-900  p-3'>
                      The Product  details page
                      </h1>
                    </div>
                   
                    <div className='grid md:grid-cols-2 grid-cols-1 mt-8 mb-10 md:text-left'>
                         <div>
                             <p className='mr-5  text-gray-500 text-base font-bold'>
                             Your offer details will be displayed on a “product detail page.” If you’ve ever shopped on Ecomdi.com, you’ve seen one. Product detail pages are where customers find all of the relevant information about a particular item.
                             <br />
                             <br />
                             </p>
                             <p className='mr-5 text-gray-500 text-base font-bold'>
                             Your offer details will be displayed on a “product detail page.” If you’ve ever shopped on Ecomdi.com, you’ve seen one. Product detail pages are where customers find all of the relevant information about a particular item.
                             <br />
                             <br />
                             </p>
                             <p className='mr-5 text-gray-500 text-base font-bold'>
                             Your offer details will be displayed on a “product detail page.” If you’ve ever shopped on Ecomdi.com, you’ve seen one. Product detail pages are where customers find all of the relevant information about a particular item.
                             </p>
                             
                             <a href='' className='underline text-black font-bold'>
                             Learn about Brand Registry
                             </a>
                         </div>
                    </div>
                    <div className='mt-10 mr-5 shadow-md border-l-8 rounded-l-2xl border-green-500 font-bold p-5 text-left mb-10'>
                    <h1 className='md:text-3xl test-lg text-green-600 font-bold'>Ecomdi jargon:<span className='ml-2 text-gray-900 font-bold'>Featured Offer ("Buy Box")</span></h1>
                        <p className='mr-10 text-gray-500 text-base font-bold'>Seller Central is the website where sellers log in to monitor their Ecomdi sales activity. You can manage inventory, update pricing, communicate with buyers, review account health, contact selling partner support, and add new products.</p>
                    </div>
                     <hr className='md:mb-10' />
                    <div className='mt-10 mr-10  md:text-5xl text-xl text-gray-900 md:border-l-4 border-blue-500 font-extrabold md:text-left'>
                      <h1 id='customers' className='p-5 md:text-5xl text-xl text-gray-900 md:border-l-4 border-blue-500 font-extrabold'>
                      Attracting customers
                      </h1>
                    </div>
                    <div className='grid md:grid-cols-2 grid-cols-1 md:mt-10 mb-10'>
                        <div className='md:text-left'>
                          <p className='mr-5 text-gray-500 text-base font-bold'>
                          Once your products go live in Ecomdi's stores, there are a number of things you can do to attract customers. The Ecomdi Flywheel describes our method for driving growth.
                         <br />
                         <br />
                         For the best price, many customers shop. Seller Central tools for Ecomdi Business customers, such as automated repricing and bulk prices can help you remain competitive.
                          </p>
                        </div>
                        <div>
                        <img src={image11} className='items-center h-2/3 object-cover object-fit' />
                        </div>
                    </div>
                    <div className='grid md:grid-cols-2 grid-cols-1 gap-3 mt-10 md:mb-10'>
                        <div>
                           {/* <Amz className=' mr-10  shadow-md text-left ' /> */}
                        </div>
                        <div className='md:text-left mr-5 mt-5 text-gray-500 text-lg '>
                            <p id='shiping'>
                            CUSTOMER EXPERIENCE 
                            </p>
                            <h1  className=' md:text-3xl text-xl p-3 md:border-l-4 border-blue-500 font-bold text-gray-900 md:mr-16'>
                            Provide fast shipping
                            </h1>
                            <p className='mr-5 text-gray-500 text-base font-bold'>
                            For the best price, many customers shop. Seller Central tools for Ecomdi Business customers, such as automated repricing and bulk prices can help you remain competitive.
                            </p>
                            <a href='' className='underline text-black font-bold'>
                            Explore all shipping options
                             </a>
                        </div>
                    </div>
                    <div className='grid md:grid-cols-2 grid-cols-1 gap-3 mt-16 mb-10'>
                        <div className='md:text-left md:mr-5'>
                            <p  id='offers' className='text-gray-500 text-lg'>
                            TRAFFIC
                            </p>
                            <h1 className=' md:text-3xl text-xl p-3 md:border-l-4 border-blue-500 font-bold md:mr-10'>
                            Advertise your offers
                            </h1>
                            <p className='md:mr-5 text-gray-500 text-base font-bold'>
                            For the best price, many customers shop. Seller Central tools for Ecomdi Business customers, such as automated repricing and bulk prices can help you remain competitive.
                            </p>
                            <a href='' className='underline text-black font-bold'>
                            Learn about advertising
                             </a>
                        </div>
                        <div className='mr-5 p-2'>
                        <img src={image11} className='items-center h-2/3 object-cover object-fit' />
                        </div>
                    </div>
                    <div className='grid md:grid-cols-2 grid-cols-1 gap-5 mt-10 mb-10'>
                        <div className=' p-5 '>
                           {/* <Amza className=' shadow-md text-left w-full  ' /> */}
                        </div>
                        <div className='md:text-left mr-2'>
                            <p  id='prices' className='text-gray-500 text-lg'>
                            PRICING 
                            </p>
                            <h1 className='md:text-3xl text-xl p-3 md:border-l-4 border-blue-500 font-bold md:mr-16'>
                            Set competitive prices
                            </h1>
                            <p className='md:mr-5 m-5 text-gray-500 text-base font-bold'>
                            For the best price, many customers shop. Seller Central tools for Ecomdi Business customers, such as automated repricing and bulk prices can help you remain competitive.
                            </p>
                            <a href='' className='underline text-black font-bold'>
                            More ideas to increase sales
                             </a>
                        </div>
                    </div>
                    <hr />
                    <div className='mt-10 md:text-left md:mr-32 '>
                        <h1  id='sale' className='md:text-5xl text-xl text-gray-900 md:border-l-4 border-blue-500 font-extrabold p-5'>
                        After your first sale
                        </h1>
                        <br />
                        <p className='md:mr-10 m-5 text-gray-500 text-base font-bold'>
                        You can start to grow the moment you sell on Ecomdi. We have tools in place to assist you and then take things to the next level.
                        <br /> 
                        </p>
                    </div>
                    <div className='grid md:grid-cols-2 grid-cols-1 gap-3 mt-16 mb-10'>
                        <div className='md:text-left mr-5'>
                            <h1  id='cusrevies' className='md:text-3xl text-xl p-3 md:border-l-4 border-blue-500 font-bold mr-10'>
                            Get customer reviews
                            </h1>
                            <p className='md:mr-5 text-gray-500 text-base font-bold'>
                            Customers Often, shop the products from one of our fulfillment centres, using the Ecomdi badge, which you can obtaineby using Fulfillment by Ecomdi 
                            </p>
                            <a href='' className='underline text-black font-bold'>
                            Get The guidelines
                             </a>
                        </div>
                        <div className='mr-5 p-2'>
                            {/* <Review className='w-full shadow-md' /> */}
                        </div>
                    </div>
                    <div className='grid md:grid-cols-2 grid-cols-1 gap-5 mt-10 mb-10'>
                        <div className='p-5'>
                        <img src={image11} className='items-center h-2/3 object-cover object-fit' />
                        </div>
                        <div className='md:text-left mr-2'>
                        
                            <h1 className='md:text-3xl text-xl p-3 md:border-l-4 border-blue-500 font-bold md:mr-16'>
                            Sellers Read Reviews
                            </h1>
                            <p className='mr-5 text-gray-500 text-base font-bold'>
                            We love getting good reviews and feedback.
                            </p>
                            <a href='' className='underline text-black font-bold'>
                            Brian Fosse <br />
                            Lalabu
                             </a>
                        </div>
                    </div>
                    <div className='grid md:grid-cols-2 grid-cols-1 gap-3 mt-16 mb-10'>
                        <div className='md:text-left mr-5'>
                            <h1  id='business'  className='md:text-3xl text-xl p-3 md:border-l-4 border-blue-500 font-bold md:mr-10'>
                            Grow your business
                            </h1>
                            <p className='md:mr-5 m-5 text-gray-500 text-base font-bold'>
                            You can buy a worldwide company from your computer by selling in Ecomdi Stores. Advertising, promotions and worldwide sales are only a few ways to grow.
                            </p>
                            <a href='' className='underline text-black font-bold'>
                              Explore growth opportunities
                             </a>
                        </div>
                        <div className='mr-5 p-2'>
                            {/* <Review className='w-full shadow-md' /> */}
                        </div>
                    </div>
                    <div className='grid md:grid-cols-2 grid-cols-1 gap-5 mt-10 mb-10'>
                        <div className=' p-5 '>
                           {/* <Amza className=' shadow-md text-left w-full p-5  ' /> */}
                        </div>
                        <div className='md:text-left mr-2 mt-5'>
                            <h1  id='successful'  className='md:text-3xl text-xl p-3 md:border-l-4 border-blue-500 font-bold mr-16'>
                            Stay successful
                            </h1>
                            <p className='md:mr-5 m-5 text-gray-500 text-base font-bold'>
                            For the best price, many customers shop. Seller Central tools for Ecomdi Business customers, such as automated repricing and bulk prices can help you remain competitive.
                            </p>
                            <a href='' className='underline text-black font-bold'>
                            Download the Seller Best Practices guide
                             </a>
                        </div>
                    </div>
                </main>
                
            </div>
            <div className='w-full place-content-center text-center md:mt-10 md:mb-10 mt-5'>
                 <p className='text-black text-semibold text-lg'>
                     Just have a few items to sell ? <span>
                         <a href='' className='ml-3 text-black text-semibold underline text-lg'>
                         Sign up to become an individual seller
                         </a>
                         </span>
                 </p>
                </div>
                 <div className='hero-container  text-white  '>
                <div className='md:w-2/4  text-left inline-block'>
                    <p className='ml-8 px-8 mt-16'></p>
                    <h1 className=' ml-8 px-8 md:text-7xl text-4xl text-white '>Start selling today</h1>
                    <p className=' ml-8 px-8 md:text-2xl text-lg text-semibold'>Put your products in front of the millions of customers who search Ecomdi.com every day..</p>
                    <div className='flex inline-block'>
                        
                        <button className=" ml-16 mt-10 bg-yellow-500 hover:bg-blue-700 text-white font-bold text-xl py-3 px-8 rounded-full" type="button">
                        Sign Up
                        </button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Sellpro
