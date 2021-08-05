import React from 'react';
import { Link } from 'react-router-dom';
import './Devices.css';
import Image1 from './community.svg';
import Image2 from './Get_Help_Now.svg';

const Devices = () => {
    return (
        <section>
            {/* Page title */}
            <header className="text-3xl font-bold text-center mt-5">Digital Services and Device Support</header>
            {/* Banner  */}
            <section className="flex">
                <div className="flex-1"></div>
                <div className="flex-auto border-2 mt-10 mb-10">
                    <p className="font-bold text-xl text-center mt-5"><u>Things you can do</u></p>
                    <section className="grid md:grid-cols-2 mt-5 text-center">
                        <Link to="/yourOrders">
                            <div className="pt-5 pb-5 border-t rounded border-r Devices__Hover">View or cancel your digital orders</div>
                        </Link>
                        <Link to="/manageDevices">
                            <div className="pt-5 pb-5 border-b rounded border-t Devices__Hover">Manage devices</div>
                        </Link>
                        <a href="https://www.facebook.com/cdiltd" target="_blank">
                            <div className="pt-5 pb-5 border-t border-r rounded Devices__Hover">Ask the <b>ecomdi</b> community</div>
                        </a>
                        <div className="pt-5 pb-5 border-t rounded Devices__Hover">Change your digital and device settings</div>
                    </section>
                </div>
                <div className="flex-1"></div>
            </section>

            {/* Search option */}
            <section className="flex border-t-2 pt-10 mt-10 mb-10 border-b-2 pb-10">
                <div className="flex-1"></div>
                <div className="flex-auto">
                    <h1 className="text-center font-bold text-lg borde">Search for solutions</h1> <br />
                    <input type="text" name="search" id="search" placeholder="Search Help" />
                    <button className="Button1 rounded-md mt-2 mb-10">Go</button>
                </div>
                <div className="flex-1"></div>
            </section>

            {/* Additional options */}
            <section className="flex border-b-2 pb-20 mb-10 text-center">
                <div className="flex-1"></div>
                <div className="flex-auto">
                    <h1 className="text-center font-bold text-xl">Additional Resources</h1> <br />
                    <section className="grid md:grid-cols-2">
                        <div className="mt-5">
                            <div className="flex justify-center mb-5">
                                <img src={Image1} alt="" className="Images" />
                            </div>
                            <h1 className="font-bold text-lg mb-2">Ask the ecomdi Community</h1>
                            <p>Get answers from other Ecomdi customers on the Digital and Device Forum.</p>
                            <a href="https://www.facebook.com/cdiltd" target="_blank" className="text-blue-600 font-bold">Our page</a>
                        </div>
                        <div className="mt-5">
                        <div className="flex justify-center mb-5">
                                <img src={Image2} alt="" className="Images" />
                            </div>
                            <h1 className="font-bold text-lg mb-2">Start a Chat Now</h1>
                            <p>The bot quickly fixes your problem or connects you to someone who can.</p>
                            <a href="https://www.facebook.com/cdiltd" target="_blank" className="text-blue-600 font-bold">Contact us</a>
                        </div>
                    </section>
                </div>
                <div className="flex-1"></div>
            </section>

            {/* Back button */}
            <section className="flex">
                <div className="flex-auto">
                    <Link to="/home">
                        <button className="Button2 mb-14 ml-10">Back</button>
                    </Link>
                </div>
                <div className="flex-1"></div>
            </section>

        </section>
    );
};

export default Devices;