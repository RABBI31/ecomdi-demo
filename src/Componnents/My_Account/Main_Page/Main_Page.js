import React from 'react';
import './Main_Page.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBoxOpen, faClipboardList, faDesktop, faEnvelope, faFileArchive, faMoneyCheckAlt, faTags, faUser, faUserLock } from '@fortawesome/free-solid-svg-icons';

const Main_Page = () => {
    return (
        <section className="pt-5 pb-10">
            {/* Page title */}
            <Link to="/navbar">
                <header className="text-3xl font-bold text-center mt-5 mb-10 text-gray-600">Your Account</header>
            </Link>

            {/* All Cards */}
            <div className="grid md:grid-cols-3 ml-16 mr-16 mt-10 mb-10 gap-6">
                {/* First card */}
                <Link to="/yourOrders">
                    <section className="Cards border rounded pb-1">
                        <FontAwesomeIcon icon={faBoxOpen} className="Profile_Icons" />
                        <div className="text-gray-600 Cards_Text">
                            <div>
                                <p className="text-xl font-bold">Your Orders</p>
                                <p>Track, return, or buy things again</p>
                            </div>
                        </div>
                    </section>
                </Link>
                {/* Second card */}
                <Link to="/securityLogin">
                    <section className="Cards border rounded flex">
                        <FontAwesomeIcon icon={faUserLock} className="Profile_Icons" />
                        <div className="text-gray-600 Cards_Text">
                            <div>
                                <p className="text-xl font-bold">Login and security</p>
                                <p>Edit login, name, and mobile number</p>
                            </div>
                        </div>
                    </section>
                </Link>
                {/* Third card */}
                <Link to="/vouchers">
                    <section className="Cards border rounded flex">
                        <FontAwesomeIcon icon={faTags} className="Profile_Icons" />
                        <div className="text-gray-600 Cards_Text">
                            <div>
                                <p className="text-xl font-bold">Voucher</p>
                                <p>View voucher, redeem, or reload voucher</p>
                            </div>
                        </div>
                    </section>
                </Link>
                {/* Fourth card */}
                <Link to="/payments">
                    <section className=" Cards border rounded flex">
                        <FontAwesomeIcon icon={faMoneyCheckAlt} className="Profile_Icons" />
                        <div className="text-gray-600 Cards_Text">
                            <div>
                                <p className="text-xl font-bold">Your Payments</p>
                                <p>Manage payment methonds and settings, view all transactions</p>
                            </div>
                        </div>
                    </section>
                </Link>
                {/* Fifth card */}
                <Link to="/profiles">
                    <section className="Cards border rounded flex">
                        <FontAwesomeIcon icon={faUser} className="Profile_Icons" />
                        <div className="text-gray-600 Cards_Text">
                            <div>
                                <p className="text-xl font-bold">Your Profiles</p>
                                <p>Manage, add, or remove user profiles for personalized experiences</p>
                            </div>
                        </div>
                    </section>
                </Link>
                {/* Sixth card */}
                <Link to="/devices">
                    <section className=" Cards border rounded flex">
                        <FontAwesomeIcon icon={faDesktop} className="Profile_Icons" />
                        <div className="text-gray-600 Cards_Text">
                            <div>
                                <p className="text-xl font-bold">Your Devices and Contents</p>
                                <p>Manage your Ecomdi devices and digital content</p>
                            </div>
                        </div>
                    </section>
                </Link>
                {/* Seventh card */}
                <section className=" Cards border rounded flex">
                    <FontAwesomeIcon icon={faEnvelope} className="Profile_Icons" />
                    <div className="text-gray-600 Cards_Text">
                        <div>
                            <p className="text-xl font-bold">Your Messages</p>
                            <p>View messages to and from Ecomdi, sellers, and buyers</p>
                        </div>
                    </div>
                </section>
                {/* Eighth card */}
                <section className=" Cards border rounded flex">
                    <FontAwesomeIcon icon={faFileArchive} className="Profile_Icons" />
                    <div className="text-gray-600 Cards_Text">
                        <div>
                            <p className="text-xl font-bold">Archived Orders</p>
                            <p>View and manage your archived orders</p>
                        </div>
                    </div>
                </section>
                {/* Ninth card */}
                <section className=" Cards border rounded flex">
                    <FontAwesomeIcon icon={faClipboardList} className="Profile_Icons" />
                    <div className="text-gray-600 Cards_Text">
                        <div>
                            <p className="text-xl font-bold">Your List</p>
                            <p>View, modify, and share your lists, or create new ones</p>
                        </div>
                    </div>
                </section>
            </div>
        </section>
    );
};

export default Main_Page;