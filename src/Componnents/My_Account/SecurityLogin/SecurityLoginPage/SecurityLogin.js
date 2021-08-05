import React from 'react';
import { Link } from 'react-router-dom';

const SecurityLogin = () => {
    return (
        <section>
            {/* Page title */}
            <header className="text-3xl font-bold text-center mt-5">Security and Login</header>
            <section className="grid md:grid-cols-3 mt-10 items-center">
                {/* Name */}
                <div className="grid grid-cols-2 ml-10 mr-10 mb-10 pt-5 border rounder shadow">
                    <div className="ml-10 mb-5">
                        <p className="font-bold">Name:</p>
                        <p>Yusuf Islam</p>
                    </div>
                    <div className="ml-20 lol">
                        <Link to="/name">
                            <button className="ml-5 mt-2 rounded Button1">
                                Edit
                        </button>
                        </Link>
                    </div>
                </div>
                {/* Email */}
                <div className="grid grid-cols-2 ml-10 mr-10 mb-10 pt-5 border rounder shadow">
                    <div className="ml-10 mb-5">
                        <p className="font-bold">Email:</p>
                        <p>Yusuf.Islam@gmail.com</p>
                    </div>
                    <div className="ml-20">
                        <Link to="/email">
                            <button className="ml-5 mt-2 rounded Button1">
                                Edit
                        </button>
                        </Link>
                    </div>
                </div>
                {/* Phone */}
                <div className="grid grid-cols-2 ml-10 mr-10 mb-10 pt-5 border rounder shadow">
                    <div className="ml-5 mb-5">
                        <p className="font-bold">Mobile Phone number:</p>
                        <p>+880163*****10</p>
                    </div>
                    <div className="ml-20">
                        <Link to="/mobile">
                            <button className="ml-5 mt-2 rounded Button1">
                                Edit
                            </button>
                        </Link>
                    </div>
                </div>
                {/* Password */}
                <div className="grid grid-cols-2 ml-10 mr-10 mb-10 pt-5 border rounder shadow">
                    <div className="ml-10 mb-5">
                        <p className="font-bold">Password:</p>
                        <p>********</p>
                    </div>
                    <div className="ml-20">
                        <Link to="/password">
                            <button className="ml-5 mt-2 rounded Button1">
                                Edit
                            </button>
                        </Link>
                    </div>
                </div>
                {/* Country */}
                <div className="grid grid-cols-2 ml-10 mr-10 mb-10 pt-5 border rounder shadow">
                    <div className="ml-10 mb-5">
                        <p className="font-bold">Country:</p>
                        <p>Bangladesh</p>
                    </div>
                    <div className="ml-20">
                        <Link to="/country">
                            <button className="ml-5 mt-2 rounded Button1">
                                Edit
                            </button>
                        </Link>
                    </div>
                </div>
                {/* Address */}
                <div className="grid grid-cols-2 ml-10 mr-10 mb-10 pt-5 border rounder shadow">
                    <div className="ml-5 mb-5">
                        <p className="font-bold">Address:</p>
                        <p>Dhaka, Bangladesh</p>
                    </div>
                    <div className="ml-20">
                        <Link to="/address">
                            <button className="ml-5 mt-2 rounded Button1">
                                Edit
                            </button>
                        </Link>
                    </div>
                </div>
            </section>
            {/* Securitys cards..... */}
            <section className="grid md:grid-cols-2 items-center">
                {/* Two Steps Verification */}
                <div className="grid grid-cols-2 ml-10 mr-10 mb-10 pt-7 pb-3 border rounder shadow-lg">
                    <div className="-mr-20 ml-10 mb-5">
                        <p className="font-bold">Two-Step Verification (2SV) Settings:</p>
                        <p>Manage your Two Step Verification (2SV) Authenticators</p>
                    </div>
                    <div className="ml-10 flex justify-end content-center flex-wrap">
                        <Link to="/twoStepVerification">
                            <button className="rounded Button1 -mt-4 mr-5">
                                Edit
                            </button>
                        </Link>
                    </div>
                </div>
                {/* Secure account */}
                <div className="grid grid-cols-2 ml-10 mr-10 mb-10 pt-5 border rounder shadow-lg">
                    <div className="-mr-20 ml-10 mb-5 ">
                        <p className="font-bold">Secure Your Account:</p>
                        <p>If you think your Ecomdi account has been compromised, follow these steps to make your account more secure.</p>
                    </div>
                    <div className="ml-10 flex justify-end content-center flex-wrap">
                        <Link to="/secureYourAccount">
                            <button className="rounded Button1 -mt-4 mr-5">
                                Edit
                            </button>
                        </Link>
                    </div>
                </div>
            </section>
            {/* Back button */}
            <Link to="/home">
                <button className="Button2 ml-10 mb-10 shadow-lg">Back</button>
            </Link>


        </section>
    );
};

export default SecurityLogin;