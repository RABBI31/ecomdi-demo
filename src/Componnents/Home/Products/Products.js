import React, { useEffect, useState } from 'react';
import './Products.css';

import Bick_Data from './Bick_Data.json';
import Laptop_Data from './Laptop_Data.json';
import Mobile_Data from './Mobile_Data.json';
import Grocerie_Data from './Groceries_Data.json';

import "react-multi-carousel/lib/styles.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { HandOutline } from 'heroicons-react';



const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 1200, min: 824 },
        items: 5
    },
    tablet: {
        breakpoint: { max: 823, min: 464 },
        items: 3
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 2
    }
};

const Products = () => {
    const [bicks, setBicks] = useState([]);
    const [laptops, setLaptops] = useState([]);
    const [mobiles, setMobiles] = useState([]);
    const [groceries, setGroceries] = useState([]);
    const [searchTerm, setSearchTerm] = useState('')
    useEffect(()=>{
    setSearchTerm( sessionStorage.getItem('searchTerm'))
   console.log(searchTerm)
    })
    useEffect(() => {
        setBicks(Bick_Data);
    }, [])
    useEffect(() => {
        setLaptops(Laptop_Data);
    }, [])
    useEffect(() => {
        setMobiles(Mobile_Data);
    }, [])
    useEffect(() => {
        setGroceries(Grocerie_Data);
    }, [])

    return (
        <div className="ml-10 mb-5 mr-5">
            <p className="grid font-bold text-2xl  text-gray-800 mt-5">Mobile</p>
            <section style={{ overflowX: "scroll" }} className="flex Scroll mr-5">
                {
                    mobiles.map((e) => {

                        return (
                            <div key={e.id} className="flex justify-center">
                                <Link to={"/product/" + e.id}>
                                    <div className="mb-3 mt-5 bg-white shadow-md hover:shadow-lg Products_Cards">
                                        <img className="mb-2 Products_Images" src={e.image} alt="" />
                                        <p className="text-center font-bold text-xl">{e.name}</p>
                                        <div className="grid grid-cols-3 mb-2 text-center mt-3 flex justify-center">
                                            <p className="Font1 Product_Price">{e.price}</p>
                                            <p className="Product_Discount Font1">-35%</p>
                                            <p className="Product_Cart_Icon flex justify-center"><FontAwesomeIcon icon={faCartPlus} /></p>
                                        </div>
                                    </div>
                                </Link>
                            </div>)
                    })
                }
            </section>

            <p className="grid font-bold text-2xl text-gray-800 mt-5">Groceries</p>
            <section style={{ overflowX: "scroll" }} className="flex Scroll mr-5">
                {
                    groceries.map((e) => {
                        return (
                            <div className="flex justify-center ">
                                <Link to={"/product/" + e.id}>
                                    <div className="mb-3 mt-5 bg-white shadow-md hover:shadow-lg Products_Cards">
                                        <img className="mb-2 Products_Images" src={e.image} alt="" />
                                        <p className="text-center font-bold text-xl">{e.name}</p>
                                        <div className="grid grid-cols-3 mb-2 text-center mt-3 flex justify-center">
                                            <p className="Font1 Product_Price">{e.price}</p>
                                            <p className="Product_Discount Font1">-35%</p>
                                            <p className="Product_Cart_Icon flex justify-center"><FontAwesomeIcon icon={faCartPlus} /></p>
                                        </div>
                                    </div>
                                </Link>
                            </div>)
                    })
                }
            </section>

            <p className="grid font-bold text-2xl text-gray-800 mt-5">Laptop</p>
            <section style={{ overflowX: "scroll" }} className="flex Scroll mr-5">
                {
                    laptops.map((e) => {
                        return (
                            <div className="flex justify-center">
                                <Link to={"/product/" + e.id}>
                                    <div className="mb-3 mt-5 bg-white shadow-md hover:shadow-lg Products_Cards">
                                        <img className="mb-2 Products_Images" src={e.image} alt="" />
                                        <p className="text-center font-bold text-xl">{e.name}</p>
                                        <div className="grid grid-cols-3 mb-2 text-center mt-3 flex justify-center">
                                            <p className="Font1 Product_Price">{e.price}</p>
                                            <p className="Product_Discount Font1">-35%</p>
                                            <p className="Product_Cart_Icon flex justify-center"><FontAwesomeIcon icon={faCartPlus} /></p>
                                        </div>
                                    </div>
                                </Link>
                            </div>)
                    })
                }
            </section>

            <p className="grid font-bold text-2xl ml-5 text-gray-800 mt-5">Bick & Scooter</p>
            <section style={{ overflowX: "scroll" }} className="flex Scroll mr-5">
                {
                    bicks.map((e) => {
                        return (
                            <div className="flex justify-center">
                                <Link to={"/product/" + e.id}>
                                    <div className="mb-3 mt-5 bg-white shadow-md hover:shadow-lg Products_Cards">
                                        <img className="mb-2 Products_Images" src={e.image} alt="" />
                                        <p className="text-center font-bold text-xl">{e.name}</p>
                                        <div className="grid grid-cols-3 mb-2 text-center mt-3 flex justify-center">
                                            <p className="Font1 Product_Price">{e.price}</p>
                                            <p className="Product_Discount Font1">-35%</p>
                                            <p className="Product_Cart_Icon flex justify-center"><FontAwesomeIcon icon={faCartPlus} /></p>
                                        </div>
                                    </div>
                                </Link>
                            </div>)
                    })
                }
            </section>

        </div>
    );
};

export default Products;