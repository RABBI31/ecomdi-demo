import React from 'react'

const DropSell = () => {
    return (
        <main class="w-full p-8 mx-auto">
        <section class=" row">
            <div class="tabs">
                <div class="border-b tab">
                    <div class="border-l-2 border-transparent relative">
                        <input class="w-full absolute z-10 cursor-pointer opacity-0 h-5 top-6" type="checkbox" id="chck1" />
                        <header class="flex justify-between items-center p-5 pl-8 pr-8 cursor-pointer select-none tab-label" for="chck1">
                            <a href='#before' class="text-gray-900 font-bold text-xl">
                            Before you start
                            </a>
                            <div class="rounded-full border border-grey w-7 h-7 flex items-center justify-center test">
                              
                                <svg aria-hidden="true" class="" data-reactid="266" fill="none" height="24" stroke="#606F7B" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                    <polyline points="6 9 12 15 18 9">
                                    </polyline>
                                </svg>
                            </div>
                        </header>
                        <div class="tab-content">
                            <div class="pl-8 pr-8 pb-5 text-grey-darkest">
                                <ul class="pl-4">
                                    <li  class="pb-2">
                                        <a href='#choose' className='text-gray-800 font-semibold text-lg'>
                                        Choose a selling plan
                                        </a>
                                       
                                    </li>
                                    <li class="pb-2">
                                    <a href='#consider' className='text-gray-800 font-semibold text-lg'>
                                      Consider your selling strategy
                                    </a>
                                       
                                    </li>
                                    <li  class="pb-2">
                                     <a href='#create' className='text-gray-800 font-semibold text-lg'>
                                        Create a seller account
                                    </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="border-b tab">
                    <div class="border-l-2 border-transparent relative">
                        <input class="w-full absolute z-10 cursor-pointer opacity-0 h-5 top-6" type="checkbox" id="chck2" />
                        <header class="flex justify-between items-center p-5 pl-8 pr-8 cursor-pointer select-none tab-label" for="chck2" >
                            <span  class="text-grey-darkest font-thin text-xl">
                                   <a href='#add' class="text-gray-900 font-bold text-xl">
                                   Adding your products
                                    </a>
                               
                            </span>
                            <div class="rounded-full border border-grey w-7 h-7 flex items-center justify-center test">
                               
                                <svg aria-hidden="true" class="" data-reactid="266" fill="none" height="24" stroke="#606F7B" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                    <polyline points="6 9 12 15 18 9">
                                    </polyline>
                                </svg>
                            </div>
                        </header>
                        <div class="tab-content ">
                            <div class="pl-8 pr-8 pb-5 text-gray-800 ">
                                <ul class="pl-4 text-gray-800">
                                    <li  class="pb-2 text-gray-800">
                                    <a href='#categories'className='text-gray-800 font-semibold text-lg' >
                                    Product categories
                                    </a>
                                        
                                    </li>
                                    <li  class="pb-2">
                                    <a href='#details' className='text-gray-800 font-semibold text-lg'>
                                    Product details
                                    </a>
                                       
                                    </li>
                                    <li  class="pb-2">
                                    <a href='#build'className='text-gray-800 font-semibold text-lg'>
                                    Build a detail page
                                    </a>
                                       
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="border-b tab">
                    <div class="border-l-2 border-transparent relative">
                        <input class="w-full absolute z-10 cursor-pointer opacity-0 h-5 top-6" type="checkbox" id="chck3" />
                        <header class="flex justify-between items-center p-5 pl-8 pr-8 cursor-pointer select-none tab-label" for="chck3" >
                            <span id='#attracting' class="text-grey-darkest font-thin text-xl">
                            <a href='#customers ' class="text-gray-900 font-bold text-xl">
                            Attracting Customers
                                    </a>
                              
                            </span>
                            <div class="rounded-full border border-grey w-7 h-7 flex items-center justify-center test">
                              
                                <svg aria-hidden="true" class="" data-reactid="266" fill="none" height="24" stroke="#606F7B" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                    <polyline points="6 9 12 15 18 9">
                                    </polyline>
                                </svg>
                            </div>
                        </header>
                        <div class="tab-content">
                            <div class="pl-8 pr-8 pb-5 text-grey-darkest">
                                <ul class="pl-4">
                                    <li class="pb-2">
                                    <a href='#shiping' className='text-gray-800 font-semibold text-lg'>
                                    Provide fast shipping 
                                    </a>
                                      
                                    </li>
                                    <li  class="pb-2">
                                    <a href='#offers' className='text-gray-800 font-semibold text-lg'>
                                    Advertise your offers
                                    </a>
                                       
                                    </li>
                                    <li  class="pb-2">
                                    <a href='#prices' className='text-gray-800 font-semibold text-lg'>
                                    Set competitive prices
                                    </a>
                                       
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="border-b tab">
                    <div class="border-l-2 border-transparent relative">
                        <input class="w-full absolute z-10 cursor-pointer opacity-0 h-5 top-6" type="checkbox" id="chck4" />
                        <header class="flex justify-between items-center p-5 pl-8 pr-8 cursor-pointer select-none tab-label" for="chck4" >
                            <span  class="text-grey-darkest font-thin text-xl">
                            <a href='#sale' class="text-gray-900 font-bold text-xl">
                            After Your first sale
                                    </a>
                                
                            </span>
                            <div class="rounded-full border border-grey w-7 h-7 flex items-center justify-center test">
                              
                                <svg aria-hidden="true" class="" data-reactid="266" fill="none" height="24" stroke="#606F7B" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                    <polyline points="6 9 12 15 18 9">
                                    </polyline>
                                </svg>
                            </div>
                        </header>
                        <div class="tab-content">
                            <div class="pl-8 pr-8 pb-5 text-grey-darkest">
                                <ul class="pl-4">
                                    <li  class="pb-2">
                                    <a href='#cusrevies' className='text-gray-800 font-semibold text-lg'>
                                    Get customer reviews 
                                    </a>
                                       
                                    </li>
                                    <li  class="pb-2">
                                    <a href='#business'className='text-gray-800 font-semibold text-lg'>
                                    Grow your business
                                    </a> 
                                    </li>
                                    <li  class="pb-2">
                                    <a href='#successful' className='text-gray-800 font-semibold text-lg'>
                                    Stay successful
                                    </a>
                                      
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
      
            )
}

            export default DropSell
