import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './JobsByTeam.css';
import { Link } from 'react-router-dom';
import JobsNavigation from '../JobsNavigation/JobsNavigation';

const JobsByTeam = () => {
    return (
        <div className="bg-blue-50">
            <p className="p-10 pb-0 font-bold text-3xl">Find jobs by Team</p>
            <section className="p-10 pt-5 grid md:grid-cols-4 gap-10">
                {/* Advertising */}
                <Link to="/">
                    <div className="border bg-blue-200">
                        <p className="text-xl pt-16 pl-5 pr-5 pb-16 text-center text-white font-bold bg-gray-800 Jobs_By_Team_Card">Advertising</p>
                        <div className="grid grid-cols-2 pb-2 pt-2">
                            <p className="text-md font-bold text-gray-700 pl-5">290 open jobs</p>
                            <p className="flex justify-end">
                                <FontAwesomeIcon icon={faArrowRight} className="text-md mt-1 mr-5 font-bold text-gray-600 " />
                            </p>
                        </div>
                    </div>
                </Link>
                {/* Ecomdi Alexa */}
                <Link to="/">
                    <div className="border bg-blue-200">
                        <p className="text-xl pt-16 pl-5 pr-5 pb-16 text-center text-white font-bold bg-gray-800 Jobs_By_Team_Card">Ecomdi Alexa</p>
                        <div className="grid grid-cols-2 pb-2 pt-2">
                            <p className="text-md font-bold text-gray-700 pl-5">617 open jobs</p>
                            <p className="flex justify-end">
                                <FontAwesomeIcon icon={faArrowRight} className="text-md mt-1 mr-5 font-bold text-gray-600 " />
                            </p>
                        </div>
                    </div>
                </Link>
                {/* Ecomdi Books */}
                <Link to="/">
                    <div className="border bg-blue-200">
                        <p className="text-xl pt-16 pl-5 pr-5 pb-16 text-center text-white font-bold bg-gray-800 Jobs_By_Team_Card">Ecomdi Books</p>
                        <div className="grid grid-cols-2 pb-2 pt-2">
                            <p className="text-md font-bold text-gray-700 pl-5">95 open jobs</p>
                            <p className="flex justify-end">
                                <FontAwesomeIcon icon={faArrowRight} className="text-md mt-1 mr-5 font-bold text-gray-600 " />
                            </p>
                        </div>
                    </div>
                </Link>
                {/* Ecomdi Customer Service */}
                <Link to="/">
                    <div className="border bg-blue-200">
                        <p className="text-xl pt-16 pl-5 pr-5 pb-16 text-center text-white font-bold bg-gray-800 Jobs_By_Team_Card">Ecomdi Customer Service</p>
                        <div className="grid grid-cols-2 pb-2 pt-2">
                            <p className="text-md font-bold text-gray-700 pl-5">1243 open jobs</p>
                            <p className="flex justify-end">
                                <FontAwesomeIcon icon={faArrowRight} className="text-md mt-1 mr-5 font-bold text-gray-600 " />
                            </p>
                        </div>
                    </div>
                </Link>
                {/* Ecomdi Devices */}
                <Link to="/">
                    <div className="border bg-blue-200">
                        <p className="text-xl pt-16 pl-5 pr-5 pb-16 text-center text-white font-bold bg-gray-800 Jobs_By_Team_Card">Ecomdi Devices</p>
                        <div className="grid grid-cols-2 pb-2 pt-2">
                            <p className="text-md font-bold text-gray-700 pl-5">290 open jobs</p>
                            <p className="flex justify-end">
                                <FontAwesomeIcon icon={faArrowRight} className="text-md mt-1 mr-5 font-bold text-gray-600 " />
                            </p>
                        </div>
                    </div>
                </Link>
                {/* Ecomdi Fresh */}
                <Link to="/">
                    <div className="border bg-blue-200">
                        <p className="text-xl pt-16 pl-5 pr-5 pb-16 text-center text-white font-bold bg-gray-800 Jobs_By_Team_Card">Ecomdi Fresh</p>
                        <div className="grid grid-cols-2 pb-2 pt-2">
                            <p className="text-md font-bold text-gray-700 pl-5">617 open jobs</p>
                            <p className="flex justify-end">
                                <FontAwesomeIcon icon={faArrowRight} className="text-md mt-1 mr-5 font-bold text-gray-600 " />
                            </p>
                        </div>
                    </div>
                </Link>
                {/* Ecomdi Go */}
                <Link to="/">
                    <div className="border bg-blue-200">
                        <p className="text-xl pt-16 pl-5 pr-5 pb-16 text-center text-white font-bold bg-gray-800 Jobs_By_Team_Card">Ecomdi Go</p>
                        <div className="grid grid-cols-2 pb-2 pt-2">
                            <p className="text-md font-bold text-gray-700 pl-5">95 open jobs</p>
                            <p className="flex justify-end">
                                <FontAwesomeIcon icon={faArrowRight} className="text-md mt-1 mr-5 font-bold text-gray-600 " />
                            </p>
                        </div>
                    </div>
                </Link>
                {/* Ecomdi Web Services */}
                <Link to="/">
                    <div className="border bg-blue-200">
                        <p className="text-xl pt-16 pl-5 pr-5 pb-16 text-center text-white font-bold bg-gray-800 Jobs_By_Team_Card">Ecomdi Web Services</p>
                        <div className="grid grid-cols-2 pb-2 pt-2">
                            <p className="text-md font-bold text-gray-700 pl-5">1243 open jobs</p>
                            <p className="flex justify-end">
                                <FontAwesomeIcon icon={faArrowRight} className="text-md mt-1 mr-5 font-bold text-gray-600 " />
                            </p>
                        </div>
                    </div>
                </Link>
                {/* Business & Corporate Development */}
                <Link to="/">
                    <div className="border bg-blue-200">
                        <p className="text-xl pt-16 pl-5 pr-5 pb-16 text-center text-white font-bold bg-gray-800 Jobs_By_Team_Card">DBusiness & Corporate Development</p>
                        <div className="grid grid-cols-2 pb-2 pt-2">
                            <p className="text-md font-bold text-gray-700 pl-5">290 open jobs</p>
                            <p className="flex justify-end">
                                <FontAwesomeIcon icon={faArrowRight} className="text-md mt-1 mr-5 font-bold text-gray-600 " />
                            </p>
                        </div>
                    </div>
                </Link>
                {/* Consumer Engagement */}
                <Link to="/">
                    <div className="border bg-blue-200">
                        <p className="text-xl pt-16 pl-5 pr-5 pb-16 text-center text-white font-bold bg-gray-800 Jobs_By_Team_Card">Consumer Engagement</p>
                        <div className="grid grid-cols-2 pb-2 pt-2">
                            <p className="text-md font-bold text-gray-700 pl-5">617 open jobs</p>
                            <p className="flex justify-end">
                                <FontAwesomeIcon icon={faArrowRight} className="text-md mt-1 mr-5 font-bold text-gray-600 " />
                            </p>
                        </div>
                    </div>
                </Link>
                {/* Consumer Payments */}
                <Link to="/">
                    <div className="border bg-blue-200">
                        <p className="text-xl pt-16 pl-5 pr-5 pb-16 text-center text-white font-bold bg-gray-800 Jobs_By_Team_Card">Consumer Payments</p>
                        <div className="grid grid-cols-2 pb-2 pt-2">
                            <p className="text-md font-bold text-gray-700 pl-5">95 open jobs</p>
                            <p className="flex justify-end">
                                <FontAwesomeIcon icon={faArrowRight} className="text-md mt-1 mr-5 font-bold text-gray-600 " />
                            </p>
                        </div>
                    </div>
                </Link>
                {/* Customer Experience and Business Trends */}
                <Link to="/">
                    <div className="border bg-blue-200">
                        <p className="text-xl pt-16 pl-5 pr-5 pb-16 text-center text-white font-bold bg-gray-800 Jobs_By_Team_Card">Customer Experience and Business Trends</p>
                        <div className="grid grid-cols-2 pb-2 pt-2">
                            <p className="text-md font-bold text-gray-700 pl-5">1243 open jobs</p>
                            <p className="flex justify-end">
                                <FontAwesomeIcon icon={faArrowRight} className="text-md mt-1 mr-5 font-bold text-gray-600 " />
                            </p>
                        </div>
                    </div>
                </Link>
                {/* Customer Trust and Partner Support */}
                <Link to="/">
                    <div className="border bg-blue-200">
                        <p className="text-xl pt-16 pl-5 pr-5 pb-16 text-center text-white font-bold bg-gray-800 Jobs_By_Team_Card">Customer Trust and Partner Support</p>
                        <div className="grid grid-cols-2 pb-2 pt-2">
                            <p className="text-md font-bold text-gray-700 pl-5">290 open jobs</p>
                            <p className="flex justify-end">
                                <FontAwesomeIcon icon={faArrowRight} className="text-md mt-1 mr-5 font-bold text-gray-600 " />
                            </p>
                        </div>
                    </div>
                </Link>
                {/* Digital Entertainment */}
                <Link to="/">
                    <div className="border bg-blue-200">
                        <p className="text-xl pt-16 pl-5 pr-5 pb-16 text-center text-white font-bold bg-gray-800 Jobs_By_Team_Card">Digital Entertainment</p>
                        <div className="grid grid-cols-2 pb-2 pt-2">
                            <p className="text-md font-bold text-gray-700 pl-5">617 open jobs</p>
                            <p className="flex justify-end">
                                <FontAwesomeIcon icon={faArrowRight} className="text-md mt-1 mr-5 font-bold text-gray-600 " />
                            </p>
                        </div>
                    </div>
                </Link>
                {/* eCommerce Foundation */}
                <Link to="/">
                    <div className="border bg-blue-200">
                        <p className="text-xl pt-16 pl-5 pr-5 pb-16 text-center text-white font-bold bg-gray-800 Jobs_By_Team_Card">eCommerce Foundation</p>
                        <div className="grid grid-cols-2 pb-2 pt-2">
                            <p className="text-md font-bold text-gray-700 pl-5">95 open jobs</p>
                            <p className="flex justify-end">
                                <FontAwesomeIcon icon={faArrowRight} className="text-md mt-1 mr-5 font-bold text-gray-600 " />
                            </p>
                        </div>
                    </div>
                </Link>
                {/* Human Resources */}
                <Link to="/">
                    <div className="border bg-blue-200">
                        <p className="text-xl pt-16 pl-5 pr-5 pb-16 text-center text-white font-bold bg-gray-800 Jobs_By_Team_Card">Human Resources</p>
                        <div className="grid grid-cols-2 pb-2 pt-2">
                            <p className="text-md font-bold text-gray-700 pl-5">1243 open jobs</p>
                            <p className="flex justify-end">
                                <FontAwesomeIcon icon={faArrowRight} className="text-md mt-1 mr-5 font-bold text-gray-600 " />
                            </p>
                        </div>
                    </div>
                </Link>
                {/* Finance and Global Business Services */}
                <Link to="/">
                    <div className="border bg-blue-200">
                        <p className="text-xl pt-16 pl-5 pr-5 pb-16 text-center text-white font-bold bg-gray-800 Jobs_By_Team_Card">Finance and Global Business Services</p>
                        <div className="grid grid-cols-2 pb-2 pt-2">
                            <p className="text-md font-bold text-gray-700 pl-5">290 open jobs</p>
                            <p className="flex justify-end">
                                <FontAwesomeIcon icon={faArrowRight} className="text-md mt-1 mr-5 font-bold text-gray-600 " />
                            </p>
                        </div>
                    </div>
                </Link>
                {/* Fulfillment & Operations */}
                <Link to="/">
                    <div className="border bg-blue-200">
                        <p className="text-xl pt-16 pl-5 pr-5 pb-16 text-center text-white font-bold bg-gray-800 Jobs_By_Team_Card">Fulfillment & Operations</p>
                        <div className="grid grid-cols-2 pb-2 pt-2">
                            <p className="text-md font-bold text-gray-700 pl-5">617 open jobs</p>
                            <p className="flex justify-end">
                                <FontAwesomeIcon icon={faArrowRight} className="text-md mt-1 mr-5 font-bold text-gray-600 " />
                            </p>
                        </div>
                    </div>
                </Link>
                {/* Human Resources */}
                <Link to="/">
                    <div className="border bg-blue-200">
                        <p className="text-xl pt-16 pl-5 pr-5 pb-16 text-center text-white font-bold bg-gray-800 Jobs_By_Team_Card">Human Resources</p>
                        <div className="grid grid-cols-2 pb-2 pt-2">
                            <p className="text-md font-bold text-gray-700 pl-5">95 open jobs</p>
                            <p className="flex justify-end">
                                <FontAwesomeIcon icon={faArrowRight} className="text-md mt-1 mr-5 font-bold text-gray-600 " />
                            </p>
                        </div>
                    </div>
                </Link>
                {/* Kindle Content */}
                <Link to="/">
                    <div className="border bg-blue-200">
                        <p className="text-xl pt-16 pl-5 pr-5 pb-16 text-center text-white font-bold bg-gray-800 Jobs_By_Team_Card">Kindle Content</p>
                        <div className="grid grid-cols-2 pb-2 pt-2">
                            <p className="text-md font-bold text-gray-700 pl-5">1243 open jobs</p>
                            <p className="flex justify-end">
                                <FontAwesomeIcon icon={faArrowRight} className="text-md mt-1 mr-5 font-bold text-gray-600 " />
                            </p>
                        </div>
                    </div>
                </Link>
                {/* Legal */}
                <Link to="/">
                    <div className="border bg-blue-200">
                        <p className="text-xl pt-16 pl-5 pr-5 pb-16 text-center text-white font-bold bg-gray-800 Jobs_By_Team_Card">Legal</p>
                        <div className="grid grid-cols-2 pb-2 pt-2">
                            <p className="text-md font-bold text-gray-700 pl-5">290 open jobs</p>
                            <p className="flex justify-end">
                                <FontAwesomeIcon icon={faArrowRight} className="text-md mt-1 mr-5 font-bold text-gray-600 " />
                            </p>
                        </div>
                    </div>
                </Link>
                {/* Marketplace */}
                <Link to="/">
                    <div className="border bg-blue-200">
                        <p className="text-xl pt-16 pl-5 pr-5 pb-16 text-center text-white font-bold bg-gray-800 Jobs_By_Team_Card">Marketplace</p>
                        <div className="grid grid-cols-2 pb-2 pt-2">
                            <p className="text-md font-bold text-gray-700 pl-5">617 open jobs</p>
                            <p className="flex justify-end">
                                <FontAwesomeIcon icon={faArrowRight} className="text-md mt-1 mr-5 font-bold text-gray-600 " />
                            </p>
                        </div>
                    </div>
                </Link>
                {/* Operations Technology */}
                <Link to="/">
                    <div className="border bg-blue-200">
                        <p className="text-xl pt-16 pl-5 pr-5 pb-16 text-center text-white font-bold bg-gray-800 Jobs_By_Team_Card">Operations Technology</p>
                        <div className="grid grid-cols-2 pb-2 pt-2">
                            <p className="text-md font-bold text-gray-700 pl-5">95 open jobs</p>
                            <p className="flex justify-end">
                                <FontAwesomeIcon icon={faArrowRight} className="text-md mt-1 mr-5 font-bold text-gray-600 " />
                            </p>
                        </div>
                    </div>
                </Link>
                {/* PPrime Video */}
                <Link to="/">
                    <div className="border bg-blue-200">
                        <p className="text-xl pt-16 pl-5 pr-5 pb-16 text-center text-white font-bold bg-gray-800 Jobs_By_Team_Card">Prime Video</p>
                        <div className="grid grid-cols-2 pb-2 pt-2">
                            <p className="text-md font-bold text-gray-700 pl-5">1243 open jobs</p>
                            <p className="flex justify-end">
                                <FontAwesomeIcon icon={faArrowRight} className="text-md mt-1 mr-5 font-bold text-gray-600 " />
                            </p>
                        </div>
                    </div>
                </Link>
                {/* Retail */}
                <Link to="/">
                    <div className="border bg-blue-200">
                        <p className="text-xl pt-16 pl-5 pr-5 pb-16 text-center text-white font-bold bg-gray-800 Jobs_By_Team_Card">Retail</p>
                        <div className="grid grid-cols-2 pb-2 pt-2">
                            <p className="text-md font-bold text-gray-700 pl-5">290 open jobs</p>
                            <p className="flex justify-end">
                                <FontAwesomeIcon icon={faArrowRight} className="text-md mt-1 mr-5 font-bold text-gray-600 " />
                            </p>
                        </div>
                    </div>
                </Link>
                {/* Student Programs */}
                <Link to="/">
                    <div className="border bg-blue-200">
                        <p className="text-xl pt-16 pl-5 pr-5 pb-16 text-center text-white font-bold bg-gray-800 Jobs_By_Team_Card">Student Programs</p>
                        <div className="grid grid-cols-2 pb-2 pt-2">
                            <p className="text-md font-bold text-gray-700 pl-5">617 open jobs</p>
                            <p className="flex justify-end">
                                <FontAwesomeIcon icon={faArrowRight} className="text-md mt-1 mr-5 font-bold text-gray-600 " />
                            </p>
                        </div>
                    </div>
                </Link>
                {/* Subsidiaries */}
                <Link to="/">
                    <div className="border bg-blue-200">
                        <p className="text-xl pt-16 pl-5 pr-5 pb-16 text-center text-white font-bold bg-gray-800 Jobs_By_Team_Card">Subsidiaries</p>
                        <div className="grid grid-cols-2 pb-2 pt-2">
                            <p className="text-md font-bold text-gray-700 pl-5">95 open jobs</p>
                            <p className="flex justify-end">
                                <FontAwesomeIcon icon={faArrowRight} className="text-md mt-1 mr-5 font-bold text-gray-600 " />
                            </p>
                        </div>
                    </div>
                </Link>
                {/* Transportation & Logistics */}
                <Link to="/">
                    <div className="border bg-blue-200">
                        <p className="text-xl pt-16 pl-5 pr-5 pb-16 text-center text-white font-bold bg-gray-800 Jobs_By_Team_Card">Transportation & Logistics</p>
                        <div className="grid grid-cols-2 pb-2 pt-2">
                            <p className="text-md font-bold text-gray-700 pl-5">1243 open jobs</p>
                            <p className="flex justify-end">
                                <FontAwesomeIcon icon={faArrowRight} className="text-md mt-1 mr-5 font-bold text-gray-600 " />
                            </p>
                        </div>
                    </div>
                </Link>
            </section>
            <JobsNavigation />
        </div>
    );
};

export default JobsByTeam;