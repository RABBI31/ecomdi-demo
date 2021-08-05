import React from 'react';
import './SwitchToSellerPage.css';
import BoxImage from './download.png';
import Image2 from './Anker-01._CB1580163796_.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBoxes, faCartPlus, faChartLine, faClipboard, faHandHoldingUsd, faLuggageCart, faPlaneDeparture, faQuoteLeft, faTruck, faTv } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const SwitchToSellerPage = () => {
    return (
        <div>
            {/* Top section */}
            <section className="Top_Section flex m-10 mt-5 grid md:grid-cols-4 pt-7 pb-3">
                <div className="">
                    <p className="font-bold text-3xl text-center">Sell on Ecomdi</p>
                </div>
                <div></div>
                <div></div>
                <div className="flex justify-center">
                    <Link to="/sellerInfo">
                        <button className="Seller_SignUp_Button">Sign up</button>
                    </Link>
                </div>
            </section>
            {/* Banner Section */}
            <section className="Banner_Section grid md:grid-cols-2 mb-10">
                <div>
                    <p className="Banner_Section_Title">Become an Ecomdi seller</p>
                    <p className="Banner_Section_Details mt-5 mb-10">More than half the units sold in our stores are from independent sellers.</p>
                    <Link to="/sellerInfo">
                    <button className="Banner_SignUp_Button">Sign up</button>
                    </Link>
                </div>
                <div className="flex justify-center w-full h-full mt-5">
                    <img className="Banner_Box_Image" src={BoxImage} alt="" />
                </div>
            </section>
            {/* Section Three */}
            <section className="m-10 grid md:grid-cols-3 gap-10">
                <div className="Info_Card">
                    <FontAwesomeIcon className="Info_Card_Icon" icon={faTv} />
                    <p className="Info_Card_Title">Sell more</p>
                    <p className="text-gray-400 Roboto mt-2">Fresh new startups and Fortune 500s. B2B and B2C. Brand owners and resellers. Independent third-party sellers sold more than a billion items during the 2019 holiday season alone.</p>
                </div>
                <div className="Info_Card">
                    <FontAwesomeIcon className="Info_Card_Icon" icon={faPlaneDeparture} />
                    <p className="Info_Card_Title">Scale with FBA</p>
                    <p className="text-gray-400 Roboto mt-2">Leave the shipping, returns, and customer service to us with Fulfillment by Ecomdi (FBA). It’s the easiest way to reach 150 million paid Prime members around the world.</p>
                </div>
                <div className="Info_Card">
                    <FontAwesomeIcon className="Info_Card_Icon" icon={faHandHoldingUsd} />
                    <p className="Info_Card_Title">Make money</p>
                    <p className="text-gray-400 Roboto mt-2">In 2019, nearly 225,000 Ecomdi sellers worldwide eclipsed $100,000 in sales, up from nearly 200,000 in 2018—and 15,000 U.S. businesses broke $1 million.</p>
                </div>
            </section>
            {/* Section four */}
            <section className="m-20 grid md:grid-cols-2">
                <div>
                    <img className="Anker_Image" src={Image2} alt="" />
                </div>
                <div className="mt-10">
                    <FontAwesomeIcon className="font-bold text-6xl text-gray-400 Roboto" icon={faQuoteLeft} />
                    <p className="font-bold text-2xl Font2 text-gray-600 mt-10">With all the infrastructure, systems, and processes Ecomdi built I realized that selling efficiency is no longer a problem.</p>
                    <p className="font-bold text-xl Roboto">CEO-</p>
                </div>
            </section>
            {/* Section Five */}
            <section className="m-10 grid md:grid-cols-3 gap-20">
                <div className="Info_Card">
                    <FontAwesomeIcon className="Info_Card_Icon" icon={faLuggageCart} />
                    <p className="Info_Card_Title">What is ecommerce?</p>
                    <p className="text-gray-400 Roboto mt-2">Electronic commerce (ecommerce) is the trading of goods and services on the internet. Learn about the advantages and disadvantages of this selling channel.</p>
                </div>
                <div className="Info_Card">
                    <FontAwesomeIcon className="Info_Card_Icon" icon={faChartLine} />
                    <p className="Info_Card_Title">Build a business</p>
                    <p className="text-gray-400 Roboto mt-2">For entrepreneurs and growing businesses, ecommerce can be a profitable model to adapt either as the sole focus of your business, or as an additional selling channel.</p>
                </div>
                <div className="Info_Card">
                    <FontAwesomeIcon className="Info_Card_Icon" icon={faTruck} />
                    <p className="Info_Card_Title">Ecommerce fulfillment</p>
                    <p className="text-gray-400 Roboto mt-2">Ecommerce fulfillment is a vital ingredient to growing a successful online retail channel. Here’s what to consider when looking for an order fulfillment service.</p>
                </div>
                <div className="Info_Card">
                    <FontAwesomeIcon className="Info_Card_Icon" icon={faBoxes} />
                    <p className="Info_Card_Title">Inventory management</p>
                    <p className="text-gray-400 Roboto mt-2">Maintaining the right amount of inventory to meet demand can help keep your business humming. Get effective inventory management tips for ecommerce business owners.</p>
                </div>
                <div className="Info_Card">
                    <FontAwesomeIcon className="Info_Card_Icon" icon={faClipboard} />
                    <p className="Info_Card_Title">What is dropshipping?</p>
                    <p className="text-gray-400 Roboto mt-2">This guide covers the definition of dropshipping, how it works, pros and cons, related Ecomdi policies, and alternatives to consider for ecommerce businesses.</p>
                </div>
                <div className="Info_Card">
                    <FontAwesomeIcon className="Info_Card_Icon" icon={faCartPlus} />
                    <p className="Info_Card_Title">Create an Ecomdi storefront</p>
                    <p className="text-gray-400 Roboto mt-2">Learn how to tell your brand story using Ecomdi tools. Build immersivei storefronts and customize product detail pages with rich media and content.</p>
                </div>
            </section>
        </div>
    );
};

export default SwitchToSellerPage;