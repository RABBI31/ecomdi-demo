import React, { useEffect, useState } from 'react';
import images from './Data';
import { Carousel } from 'antd';
import './About.css'
import about from './about.json'
const news = [
    {
      title: 'Bangkok’s street food vendors stay afloat with app built on ',
      article :'Bangkok’s street food vendors stay afloat with app built on ',
      image :'https://picsum.photos/id/29/2106/1404',
      id:'trending'
    },
    {
        title: 'Bangkok’s street food vendors stay afloat with app built on ',
        article :'Bangkok’s street food vendors stay afloat with app built on ',
        image :'https://picsum.photos/id/29/2106/1404',
        id:'trending'
    },
    {
        title: 'Bangkok’s street food vendors stay afloat with app built on ',
        article :'Bangkok’s street food vendors stay afloat with app built on ',
        image :'https://picsum.photos/id/29/2106/1404',
        id:'trending'
    },
    {
        title: 'Bangkok’s street food vendors stay afloat with app built on ',
        article :'Bangkok’s street food vendors stay afloat with app built on ',
        image :'https://picsum.photos/id/29/2106/1404',
        id:'trending'
    },
    {
        title: 'Bangkok’s street food vendors stay afloat with app built on ',
        article :'Bangkok’s street food vendors stay afloat with app built on ',
        image :'https://picsum.photos/id/29/2106/1404',
        id:'me'
    }
  ];


const Aboutecomdi = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        setData(about);
    }, [])
    const [tag, setTag] = useState('all');
	const [filteredImages, setFilteredImages] = useState([]);

	useEffect(
		() => {
			tag === 'all' ? setFilteredImages(images) : setFilteredImages(images.filter(image => image.tag === tag));
		},
		[tag]
	);
    return (
        <div>
            <div className='md:mt-5'>

            </div>
            <section className="grid md:grid-cols-2 grid-cols-1 mb-10">
                <div className="lg:flex items-center container mx-auto my-auto text-left">
                    <div className="lg:m-4 shadow-md hover:shadow-lg hover:bg-gray-100 rounded-lg bg-white my-12 mx-8">
                        <img src="https://picsum.photos/id/29/2106/1404" alt="" class="overflow-hidden" />
                        <div className="p-4">
                            <a href='#' className="font-medium text-gray-600 text-lg my-2 uppercase ">Bangkok’s street food vendors stay afloat with app built on </a>
                            <p className="text-justify mt-2">The be might what days revellers, which sought to a nor. Land from to suits his some. Saw him counsel begun mother though but. Ofttimes soils of since mighty pollution.</p>
                            <div className="mt-5">
                                <a href="" className="text-black text-left text-bold">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="max-w-md mx-auto bg-white r shadow-md overflow-hidden md:max-w-2xl mt-4">
                    <p className=" text-gray-500 text-left uppercase p-3">Top Stories</p>
                    <hr className='mb-2'></hr>
                    <div className="md:flex">
                        <div className="md:flex-shrink-0">
                            <img className="h-30 w-full object-cover p-3 md:w-48" src="https://images.unsplash.com/photo-1478098711619-5ab0b478d6e6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=448&q=80" alt="A cat" />
                        </div>
                        <div className="p-8">
                            <a href='' class="mt-2 text-gray-500 text-left">According to a study, it has been proven that there is a tight bond between cats and humans.</a>
                        </div>
                    </div>
                    <hr className='mb-2'></hr>
                   <div className="md:flex">
                        <div className="md:flex-shrink-0">
                            <img className="h-30 w-full object-cover p-3 md:w-48" src="https://images.unsplash.com/photo-1478098711619-5ab0b478d6e6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=448&q=80" alt="A cat" />
                        </div>
                        <div className="p-8">
                            <a href='' class="mt-2 text-gray-500 text-left">According to a study, it has been proven that there is a tight bond between cats and humans.</a>
                        </div>
                    </div>
                    <hr className='mb-2'></hr>
                    <div class="md:flex">
                        <div class="md:flex-shrink-0">
                            <img class="h-30 w-full object-cover p-3 md:w-48" src="https://images.unsplash.com/photo-1478098711619-5ab0b478d6e6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=448&q=80" alt="A cat" />
                        </div>
                        <div class="p-8">
                            <p class="mt-2 text-gray-500 text-left">According to a study, it has been proven that there is a tight bond between cats and humans.</p>
                        </div>
                    </div>
                </div>

            </section>
            <div className='lg:flex justify-between container m-4 text-left'>
                <h3 className='uppercase text-gray-500'>Newsfeed</h3>
                <a href='' className=' text-black'>
                    More News Releases
                </a>
            </div>
            <hr className='mb-2'></hr>
            
            <section className="grid md:grid-cols-5 grid-cols-1 mb-10">
            
                {
                    data.map((e) => {
                        return (
                            
                            <div className="flex justify-center">
                                <div className="mb-5 mt-5 p-8 Products_Cards">

                                    <p className=" text-left text-sm">{e.date}</p>
                                    <div className='text-left '>
                                        <a href='' className=" text-black text-sm text-justify ">{e.title}</a>
                                    </div>
                                    <div className=" text-black text-sm text-left mt-5 mb-5 ">
                                        <a href='' className=" text-black text-sm text-left ">Learn More</a>
                                    </div>

                                </div>
                            </div>
                           
                            )
                    })
                }
                 
            </section>
            
            <section className="grid md:grid-cols-2 grid-cols-1 m-5 p-6  bg-black text-base rounded text-left">
                <div>
                    <h3 className='' style={{ color: '#FF9900' }}>
                        Ecomdi News
                    </h3>
                    <p className='' style={{ color: '#fff' }}>
                        Sign up for the latest news, facts, analysis, and original stories about Ecomdi delivered to you.
                    </p>
                </div>
                <div>
                <form className="w-full max-w-sm">
                            <div className="flex items-center border-b border-teal-500 py-2">
                                <input className="appearance-none bg-transparent border-none w-full text-black-700 mr-3 py-1 px-2 leading-tight focus:outline-none placeholder-opacity-200 placeholder-white" style={{ color: '#fff' }} type="email" placeholder='Enter Email' aria-label='Email' />
                                <button className="flex-shrink-0 text-white text-sm  text-black py-1 px-2 rounded hidden md:block" type="button">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>

                                </button>
                            </div>
                            <div className=' flex-wrap text-white mt-5 text-sm'>
                                <p>
                                    Protected by reCAPTCHA. The Google
                                    <a href='#' className='underline text-white'> Privacy Policy </a>  and
                                    <a href='#' className='underline text-white'>Terms of Service </a> apply.
                                </p>
                                <p>
                                    <a href='#' className='underline text-white'> Privacy Policy </a> ! Opt out anytime
                                </p>
                            </div>
                        </form>
                </div>
            </section>
            <section className="">
            <nav className='m-6 text-left'>
            <TagButton  class='p-2 text-black text-base hover:bg-blue-800 hover:text-white hover:rounded' name="all" tagActive={tag === 'all' ? true : false} handleSetTag={setTag} /> /
				<TagButton name="trending" tagActive={tag === 'trending' ? true : false} handleSetTag={setTag} /> /
				<TagButton name="watch-video" tagActive={tag === 'watch-video' ? true : false} handleSetTag={setTag} /> /
				<TagButton name="meet-us" tagActive={tag === 'meet-us' ? true : false} handleSetTag={setTag} />
                </nav>
            </section>
            <hr className='mt-3' />
            {/* <section className="grid md:grid-cols-3 grid-cols-1 m-5 p-6  text-left"> */}
            <div  className="lg:flex  items-center container mx-auto my-auto text-left">
                    <div className="lg:m-4 grid md:grid-cols-3 grid-cols-1  shadow-md hover:shadow-lg hover:bg-gray-100 rounded-lg bg-white my-12 mx-8 gap-5">
                    {filteredImages.map(image => (
						<div key={image.id} className="  ">
                           <div className='mb-5'> 
							<a href='' className='mb-5'>
								<img className="image" src={`/images/${image.imageName}`} alt="" />
							</a>
                            </div>
                            <div className='p-2'> 
							<a href='' className="font-medium text-gray-600 text-lg  uppercase ">
								{image.title}
							</a>
                            <br />
                            <a href='' className="text-justify mt-3 text-gray-500">
								{image.article}
							</a>
                            <a href="" className="text-black text-lg text-left text-extrabold">Read More</a>
                            </div>
                            <div className="mt-5">
                              
                            </div>
						</div>
					))}
                    </div>
                </div>
                {/* <div id='meet' className="lg:flex items-center container mx-auto my-auto text-left">
                    <div className="lg:m-4 shadow-md hover:shadow-lg hover:bg-gray-100 rounded-lg bg-white my-12 mx-8">
                        <img src="https://picsum.photos/id/29/2106/1404" alt="" class="overflow-hidden" />
                        <div className="p-4">
                            <a href='#' className="font-medium text-gray-600 text-lg my-2 uppercase ">Bangkok’s street food vendors stay afloat with app built on </a>
                            <p className="text-justify mt-2">The be might what days revellers, which sought to a nor. Land from to suits his some. Saw him counsel begun mother though but. Ofttimes soils of since mighty pollution.</p>
                            <div className="mt-5">
                                <a href="" className="text-black text-left text-bold">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div id='trending' className="lg:flex items-center container mx-auto my-auto text-left">
                    <div className="lg:m-4 shadow-md hover:shadow-lg hover:bg-gray-100 rounded-lg bg-white my-12 mx-8">
                        <img src="https://picsum.photos/id/29/2106/1404" alt="" class="overflow-hidden" />
                        <div className="p-4">
                            <a href='#' className="font-medium text-gray-600 text-lg my-2 uppercase ">Bangkok’s street food vendors stay afloat with app built on </a>
                            <p className="text-justify mt-2">The be might what days revellers, which sought to a nor. Land from to suits his some. Saw him counsel begun mother though but. Ofttimes soils of since mighty pollution.</p>
                            <div className="mt-5">
                                <a href="" className="text-black text-left text-bold">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div id='watch' className="lg:flex items-center container mx-auto my-auto text-left">
                    <div className="lg:m-4 shadow-md hover:shadow-lg hover:bg-gray-100 rounded-lg bg-white my-12 mx-8">
                        <img src="https://picsum.photos/id/29/2106/1404" alt="" class="overflow-hidden" />
                        <div className="p-4">
                            <a href='#' className="font-medium text-gray-600 text-lg my-2 uppercase ">Bangkok’s street food vendors stay afloat with app built on </a>
                            <p className="text-justify mt-2">The be might what days revellers, which sought to a nor. Land from to suits his some. Saw him counsel begun mother though but. Ofttimes soils of since mighty pollution.</p>
                            <div className="mt-5">
                                <a href="" className="text-black text-left text-bold">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div id='meet' className="lg:flex items-center container mx-auto my-auto text-left">
                    <div className="lg:m-4 shadow-md hover:shadow-lg hover:bg-gray-100 rounded-lg bg-white my-12 mx-8">
                        <img src="https://picsum.photos/id/29/2106/1404" alt="" class="overflow-hidden" />
                        <div className="p-4">
                            <a href='#' className="font-medium text-gray-600 text-lg my-2 uppercase ">Bangkok’s street food vendors stay afloat with app built on </a>
                            <p className="text-justify mt-2">The be might what days revellers, which sought to a nor. Land from to suits his some. Saw him counsel begun mother though but. Ofttimes soils of since mighty pollution.</p>
                            <div className="mt-5">
                                <a href="" className="text-black text-left text-bold">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div id='trending' className="lg:flex items-center container mx-auto my-auto text-left">
                    <div className="lg:m-4 shadow-md hover:shadow-lg hover:bg-gray-100 rounded-lg bg-white my-12 mx-8">
                        <img src="https://picsum.photos/id/29/2106/1404" alt="" class="overflow-hidden" />
                        <div className="p-4">
                            <a href='#' className="font-medium text-gray-600 text-lg my-2 uppercase ">Bangkok’s street food vendors stay afloat with app built on </a>
                            <p className="text-justify mt-2">The be might what days revellers, which sought to a nor. Land from to suits his some. Saw him counsel begun mother though but. Ofttimes soils of since mighty pollution.</p>
                            <div className="mt-5">
                                <a href="" className="text-black text-left text-bold">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>


            </section> */}
        </div>
    )
}
const TagButton = ({ name, handleSetTag, tagActive }) => {
	return (
		<button className={`tag ${tagActive ? 'active' : null} p-2 text-black text-base hover:bg-gray-800 hover:text-white hover:rounded-full`} onClick={() => handleSetTag(name)}>
			{name.toUpperCase()}
		</button>
	);
};

export default Aboutecomdi
