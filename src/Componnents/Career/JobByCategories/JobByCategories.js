import { faArrowAltCircleRight, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import JobsNavigation from '../JobsNavigation/JobsNavigation';
import './JobByCategories.css';

const JobByCategories = () => {
    return (
        <div className="bg-blue-50">
            <p className="p-10 pb-0 mb-3 font-bold text-3xl">Find jobs by job category</p>
            <section className="p-10 grid md:grid-cols-4 gap-10">
                {/* Administrative Support */}
                <Link to="/">
                    <div className="border bg-blue-200">
                        <p className="text-xl pt-16 pl-5 pr-5 pb-16 text-center text-white font-bold bg-gray-800 Jobs_By_Categories_Card">Administrative Support</p>
                        <div className="grid grid-cols-2 pb-2 pt-2">
                            <p className="text-md font-bold text-gray-700 pl-5">290 open jobs</p>
                            <p className="flex justify-end">
                                <FontAwesomeIcon icon={faArrowRight} className="text-md mt-1 mr-5 font-bold text-gray-600 " />
                            </p>
                        </div>
                    </div>
                </Link>
                {/* Ecomdi Design */}
                <Link to="/">
                    <div className="border bg-blue-200">
                        <p className="text-xl pt-16 pl-5 pr-5 pb-16 text-center text-white font-bold bg-gray-800 Jobs_By_Categories_Card">Ecomdi Design</p>
                        <div className="grid grid-cols-2 pb-2 pt-2">
                            <p className="text-md font-bold text-gray-700 pl-5">617 open jobs</p>
                            <p className="flex justify-end">
                                <FontAwesomeIcon icon={faArrowRight} className="text-md mt-1 mr-5 font-bold text-gray-600 " />
                            </p>
                        </div>
                    </div>
                </Link>
                {/* Audio / Video / Photography Production */}
                <Link to="/">
                    <div className="border bg-blue-200">
                        <p className="text-xl pt-16 pl-5 pr-5 pb-16 text-center text-white font-bold bg-gray-800 Jobs_By_Categories_Card">Audio / Video / Photography Production</p>
                        <div className="grid grid-cols-2 pb-2 pt-2 pt-2 pb-2">
                            <p className="text-md font-bold text-gray-700 pl-5">95 open jobs</p>
                            <p className="flex justify-end">
                                <FontAwesomeIcon icon={faArrowRight} className="text-md mt-1 mr-5 font-bold text-gray-600 " />
                            </p>
                        </div>
                    </div>
                </Link>
                {/* Business & Merchant Development */}
                <Link to="/">
                    <div className="border bg-blue-200">
                        <p className="text-xl pt-16 pl-5 pr-5 pb-16 text-center text-white font-bold bg-gray-800 Jobs_By_Categories_Card">Business & Merchant Development</p>
                        <div className="grid grid-cols-2 pb-2 pt-2">
                            <p className="text-md font-bold text-gray-700 pl-5">1243 open jobs</p>
                            <p className="flex justify-end">
                                <FontAwesomeIcon icon={faArrowRight} className="text-md mt-1 mr-5 font-bold text-gray-600 " />
                            </p>
                        </div>
                    </div>
                </Link>
                {/* Business Intelligence */}
                <Link to="/">
                    <div className="border bg-blue-200">
                        <p className="text-xl pt-16 pl-5 pr-5 pb-16 text-center text-white font-bold bg-gray-800 Jobs_By_Categories_Card">Business Intelligence</p>
                        <div className="grid grid-cols-2 pb-2 pt-2">
                            <p className="text-md font-bold text-gray-700 pl-5">290 open jobs</p>
                            <p className="flex justify-end">
                                <FontAwesomeIcon icon={faArrowRight} className="text-md mt-1 mr-5 font-bold text-gray-600 " />
                            </p>
                        </div>
                    </div>
                </Link>
                {/* Buying, Planning, & Instock Management */}
                <Link to="/">
                    <div className="border bg-blue-200">
                        <p className="text-xl pt-16 pl-5 pr-5 pb-16 text-center text-white font-bold bg-gray-800 Jobs_By_Categories_Card">Buying, Planning, & Instock Management</p>
                        <div className="grid grid-cols-2 pb-2 pt-2">
                            <p className="text-md font-bold text-gray-700 pl-5">617 open jobs</p>
                            <p className="flex justify-end">
                                <FontAwesomeIcon icon={faArrowRight} className="text-md mt-1 mr-5 font-bold text-gray-600 " />
                            </p>
                        </div>
                    </div>
                </Link>
                {/* Customer Service */}
                <Link to="/">
                    <div className="border bg-blue-200">
                        <p className="text-xl pt-16 pl-5 pr-5 pb-16 text-center text-white font-bold bg-gray-800 Jobs_By_Categories_Card">Customer Service</p>
                        <div className="grid grid-cols-2 pb-2 pt-2">
                            <p className="text-md font-bold text-gray-700 pl-5">95 open jobs</p>
                            <p className="flex justify-end">
                                <FontAwesomeIcon icon={faArrowRight} className="text-md mt-1 mr-5 font-bold text-gray-600 " />
                            </p>
                        </div>
                    </div>
                </Link>
                {/* Data Science */}
                <Link to="/">
                    <div className="border bg-blue-200">
                        <p className="text-xl pt-16 pl-5 pr-5 pb-16 text-center text-white font-bold bg-gray-800 Jobs_By_Categories_Card">Data Science</p>
                        <div className="grid grid-cols-2 pb-2 pt-2">
                            <p className="text-md font-bold text-gray-700 pl-5">1243 open jobs</p>
                            <p className="flex justify-end">
                                <FontAwesomeIcon icon={faArrowRight} className="text-md mt-1 mr-5 font-bold text-gray-600 " />
                            </p>
                        </div>
                    </div>
                </Link>
                {/* Database Administration */}
                <Link to="/">
                    <div className="border bg-blue-200">
                        <p className="text-xl pt-16 pl-5 pr-5 pb-16 text-center text-white font-bold bg-gray-800 Jobs_By_Categories_Card">Database Administration</p>
                        <div className="grid grid-cols-2 pb-2 pt-2">
                            <p className="text-md font-bold text-gray-700 pl-5">290 open jobs</p>
                            <p className="flex justify-end">
                                <FontAwesomeIcon icon={faArrowRight} className="text-md mt-1 mr-5 font-bold text-gray-600 " />
                            </p>
                        </div>
                    </div>
                </Link>
                {/* Economics */}
                <Link to="/">
                    <div className="border bg-blue-200">
                        <p className="text-xl pt-16 pl-5 pr-5 pb-16 text-center text-white font-bold bg-gray-800 Jobs_By_Categories_Card">Economics</p>
                        <div className="grid grid-cols-2 pb-2 pt-2">
                            <p className="text-md font-bold text-gray-700 pl-5">617 open jobs</p>
                            <p className="flex justify-end">
                                <FontAwesomeIcon icon={faArrowRight} className="text-md mt-1 mr-5 font-bold text-gray-600 " />
                            </p>
                        </div>
                    </div>
                </Link>
                {/* Editorial, Writing, & Content Management */}
                <Link to="/">
                    <div className="border bg-blue-200">
                        <p className="text-xl pt-16 pl-5 pr-5 pb-16 text-center text-white font-bold bg-gray-800 Jobs_By_Categories_Card">Editorial, Writing, & Content Management</p>
                        <div className="grid grid-cols-2 pb-2 pt-2">
                            <p className="text-md font-bold text-gray-700 pl-5">95 open jobs</p>
                            <p className="flex justify-end">
                                <FontAwesomeIcon icon={faArrowRight} className="text-md mt-1 mr-5 font-bold text-gray-600 " />
                            </p>
                        </div>
                    </div>
                </Link>
                {/* Facilities, Maintenance, & Real Estate */}
                <Link to="/">
                    <div className="border bg-blue-200">
                        <p className="text-xl pt-16 pl-5 pr-5 pb-16 text-center text-white font-bold bg-gray-800 Jobs_By_Categories_Card">Facilities, Maintenance, & Real Estate</p>
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
                        <p className="text-xl pt-16 pl-5 pr-5 pb-16 text-center text-white font-bold bg-gray-800 Jobs_By_Categories_Card">Finance and Global Business Services</p>
                        <div className="grid grid-cols-2 pb-2 pt-2">
                            <p className="text-md font-bold text-gray-700 pl-5">290 open jobs</p>
                            <p className="flex justify-end">
                                <FontAwesomeIcon icon={faArrowRight} className="text-md mt-1 mr-5 font-bold text-gray-600 " />
                            </p>
                        </div>
                    </div>
                </Link>
                {/* Fulfillment & Operations Management */}
                <Link to="/">
                    <div className="border bg-blue-200">
                        <p className="text-xl pt-16 pl-5 pr-5 pb-16 text-center text-white font-bold bg-gray-800 Jobs_By_Categories_Card">Fulfillment & Operations Management</p>
                        <div className="grid grid-cols-2 pb-2 pt-2">
                            <p className="text-md font-bold text-gray-700 pl-5">617 open jobs</p>
                            <p className="flex justify-end">
                                <FontAwesomeIcon icon={faArrowRight} className="text-md mt-1 mr-5 font-bold text-gray-600 " />
                            </p>
                        </div>
                    </div>
                </Link>
                {/* Hardware Development */}
                <Link to="/">
                    <div className="border bg-blue-200">
                        <p className="text-xl pt-16 pl-5 pr-5 pb-16 text-center text-white font-bold bg-gray-800 Jobs_By_Categories_Card">Hardware Development</p>
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
                        <p className="text-xl pt-16 pl-5 pr-5 pb-16 text-center text-white font-bold bg-gray-800 Jobs_By_Categories_Card">Human Resources</p>
                        <div className="grid grid-cols-2 pb-2 pt-2">
                            <p className="text-md font-bold text-gray-700 pl-5">1243 open jobs</p>
                            <p className="flex justify-end">
                                <FontAwesomeIcon icon={faArrowRight} className="text-md mt-1 mr-5 font-bold text-gray-600 " />
                            </p>
                        </div>
                    </div>
                </Link>
                {/* Investigation & Loss Prevention */}
                <Link to="/">
                    <div className="border bg-blue-200">
                        <p className="text-xl pt-16 pl-5 pr-5 pb-16 text-center text-white font-bold bg-gray-800 Jobs_By_Categories_Card">Investigation & Loss Prevention</p>
                        <div className="grid grid-cols-2 pb-2 pt-2">
                            <p className="text-md font-bold text-gray-700 pl-5">290 open jobs</p>
                            <p className="flex justify-end">
                                <FontAwesomeIcon icon={faArrowRight} className="text-md mt-1 mr-5 font-bold text-gray-600 " />
                            </p>
                        </div>
                    </div>
                </Link>
                {/* Leadership Development & Training */}
                <Link to="/">
                    <div className="border bg-blue-200">
                        <p className="text-xl pt-16 pl-5 pr-5 pb-16 text-center text-white font-bold bg-gray-800 Jobs_By_Categories_Card">Leadership Development & Training</p>
                        <div className="grid grid-cols-2 pb-2 pt-2">
                            <p className="text-md font-bold text-gray-700 pl-5">617 open jobs</p>
                            <p className="flex justify-end">
                                <FontAwesomeIcon icon={faArrowRight} className="text-md mt-1 mr-5 font-bold text-gray-600 " />
                            </p>
                        </div>
                    </div>
                </Link>
                {/* Legal */}
                <Link to="/">
                    <div className="border bg-blue-200">
                        <p className="text-xl pt-16 pl-5 pr-5 pb-16 text-center text-white font-bold bg-gray-800 Jobs_By_Categories_Card">Legal</p>
                        <div className="grid grid-cols-2 pb-2 pt-2">
                            <p className="text-md font-bold text-gray-700 pl-5">95 open jobs</p>
                            <p className="flex justify-end">
                                <FontAwesomeIcon icon={faArrowRight} className="text-md mt-1 mr-5 font-bold text-gray-600 " />
                            </p>
                        </div>
                    </div>
                </Link>
                {/* Machine Learning Science */}
                <Link to="/">
                    <div className="border bg-blue-200">
                        <p className="text-xl pt-16 pl-5 pr-5 pb-16 text-center text-white font-bold bg-gray-800 Jobs_By_Categories_Card">Machine Learning Science</p>
                        <div className="grid grid-cols-2 pb-2 pt-2">
                            <p className="text-md font-bold text-gray-700 pl-5">1243 open jobs</p>
                            <p className="flex justify-end">
                                <FontAwesomeIcon icon={faArrowRight} className="text-md mt-1 mr-5 font-bold text-gray-600 " />
                            </p>
                        </div>
                    </div>
                </Link>
                {/* Marketing */}
                <Link to="/">
                    <div className="border bg-blue-200">
                        <p className="text-xl pt-16 pl-5 pr-5 pb-16 text-center text-white font-bold bg-gray-800 Jobs_By_Categories_Card">Marketing</p>
                        <div className="grid grid-cols-2 pb-2 pt-2">
                            <p className="text-md font-bold text-gray-700 pl-5">290 open jobs</p>
                            <p className="flex justify-end">
                                <FontAwesomeIcon icon={faArrowRight} className="text-md mt-1 mr-5 font-bold text-gray-600 " />
                            </p>
                        </div>
                    </div>
                </Link>
                {/* Medical, Health, & Safety */}
                <Link to="/">
                    <div className="border bg-blue-200">
                        <p className="text-xl pt-16 pl-5 pr-5 pb-16 text-center text-white font-bold bg-gray-800 Jobs_By_Categories_Card">Medical, Health, & Safety</p>
                        <div className="grid grid-cols-2 pb-2 pt-2">
                            <p className="text-md font-bold text-gray-700 pl-5">617 open jobs</p>
                            <p className="flex justify-end">
                                <FontAwesomeIcon icon={faArrowRight} className="text-md mt-1 mr-5 font-bold text-gray-600 " />
                            </p>
                        </div>
                    </div>
                </Link>
                {/* Operations, IT, & Support Engineering */}
                <Link to="/">
                    <div className="border bg-blue-200">
                        <p className="text-xl pt-16 pl-5 pr-5 pb-16 text-center text-white font-bold bg-gray-800 Jobs_By_Categories_Card">Operations, IT, & Support Engineering</p>
                        <div className="grid grid-cols-2 pb-2 pt-2">
                            <p className="text-md font-bold text-gray-700 pl-5">95 open jobs</p>
                            <p className="flex justify-end">
                                <FontAwesomeIcon icon={faArrowRight} className="text-md mt-1 mr-5 font-bold text-gray-600 " />
                            </p>
                        </div>
                    </div>
                </Link>
                {/* Project/Program/Product Management--Non-Tech */}
                <Link to="/">
                    <div className="border bg-blue-200">
                        <p className="text-xl pt-16 pl-5 pr-5 pb-16 text-center text-white font-bold bg-gray-800 Jobs_By_Categories_Card">Project/Program/Product Management--Non-Tech</p>
                        <div className="grid grid-cols-2 pb-2 pt-2">
                            <p className="text-md font-bold text-gray-700 pl-5">1243 open jobs</p>
                            <p className="flex justify-end">
                                <FontAwesomeIcon icon={faArrowRight} className="text-md mt-1 mr-5 font-bold text-gray-600 " />
                            </p>
                        </div>
                    </div>
                </Link>
                {/* Project/Program/Product Management--Technical */}
                <Link to="/">
                    <div className="border bg-blue-200">
                        <p className="text-xl pt-16 pl-5 pr-5 pb-16 text-center text-white font-bold bg-gray-800 Jobs_By_Categories_Card">Project/Program/Product Management--Technical</p>
                        <div className="grid grid-cols-2 pb-2 pt-2">
                            <p className="text-md font-bold text-gray-700 pl-5">290 open jobs</p>
                            <p className="flex justify-end">
                                <FontAwesomeIcon icon={faArrowRight} className="text-md mt-1 mr-5 font-bold text-gray-600 " />
                            </p>
                        </div>
                    </div>
                </Link>
                {/* Public Policy */}
                <Link to="/">
                    <div className="border bg-blue-200">
                        <p className="text-xl pt-16 pl-5 pr-5 pb-16 text-center text-white font-bold bg-gray-800 Jobs_By_Categories_Card">Public Policy</p>
                        <div className="grid grid-cols-2 pb-2 pt-2">
                            <p className="text-md font-bold text-gray-700 pl-5">617 open jobs</p>
                            <p className="flex justify-end">
                                <FontAwesomeIcon icon={faArrowRight} className="text-md mt-1 mr-5 font-bold text-gray-600 " />
                            </p>
                        </div>
                    </div>
                </Link>
                {/* Public Relations & Communications */}
                <Link to="/">
                    <div className="border bg-blue-200">
                        <p className="text-xl pt-16 pl-5 pr-5 pb-16 text-center text-white font-bold bg-gray-800 Jobs_By_Categories_Card">Public Relations & Communications</p>
                        <div className="grid grid-cols-2 pb-2 pt-2">
                            <p className="text-md font-bold text-gray-700 pl-5">95 open jobs</p>
                            <p className="flex justify-end">
                                <FontAwesomeIcon icon={faArrowRight} className="text-md mt-1 mr-5 font-bold text-gray-600 " />
                            </p>
                        </div>
                    </div>
                </Link>
                {/* Research Science */}
                <Link to="/">
                    <div className="border bg-blue-200">
                        <p className="text-xl pt-16 pl-5 pr-5 pb-16 text-center text-white font-bold bg-gray-800 Jobs_By_Categories_Card">Research Science</p>
                        <div className="grid grid-cols-2 pb-2 pt-2">
                            <p className="text-md font-bold text-gray-700 pl-5">1243 open jobs</p>
                            <p className="flex justify-end">
                                <FontAwesomeIcon icon={faArrowRight} className="text-md mt-1 mr-5 font-bold text-gray-600 " />
                            </p>
                        </div>
                    </div>
                </Link>
                {/* Sales, Advertising, & Account Management */}
                <Link to="/">
                    <div className="border bg-blue-200">
                        <p className="text-xl pt-16 pl-5 pr-5 pb-16 text-center text-white font-bold bg-gray-800 Jobs_By_Categories_Card">Sales, Advertising, & Account Management</p>
                        <div className="grid grid-cols-2 pb-2 pt-2">
                            <p className="text-md font-bold text-gray-700 pl-5">290 open jobs</p>
                            <p className="flex justify-end">
                                <FontAwesomeIcon icon={faArrowRight} className="text-md mt-1 mr-5 font-bold text-gray-600 " />
                            </p>
                        </div>
                    </div>
                </Link>
                {/* Software Development */}
                <Link to="/">
                    <div className="border bg-blue-200">
                        <p className="text-xl pt-16 pl-5 pr-5 pb-16 text-center text-white font-bold bg-gray-800 Jobs_By_Categories_Card">Software Development</p>
                        <div className="grid grid-cols-2 pb-2 pt-2">
                            <p className="text-md font-bold text-gray-700 pl-5">617 open jobs</p>
                            <p className="flex justify-end">
                                <FontAwesomeIcon icon={faArrowRight} className="text-md mt-1 mr-5 font-bold text-gray-600 " />
                            </p>
                        </div>
                    </div>
                </Link>
                {/* Solutions Architect */}
                <Link to="/">
                    <div className="border bg-blue-200">
                        <p className="text-xl pt-16 pl-5 pr-5 pb-16 text-center text-white font-bold bg-gray-800 Jobs_By_Categories_Card">Solutions Architect</p>
                        <div className="grid grid-cols-2 pb-2 pt-2">
                            <p className="text-md font-bold text-gray-700 pl-5">95 open jobs</p>
                            <p className="flex justify-end">
                                <FontAwesomeIcon icon={faArrowRight} className="text-md mt-1 mr-5 font-bold text-gray-600 " />
                            </p>
                        </div>
                    </div>
                </Link>
                {/* Supply Chain/Transportation Management */}
                <Link to="/">
                    <div className="border bg-blue-200">
                        <p className="text-xl pt-16 pl-5 pr-5 pb-16 text-center text-white font-bold bg-gray-800 Jobs_By_Categories_Card">Supply Chain/Transportation Management</p>
                        <div className="grid grid-cols-2 pb-2 pt-2">
                            <p className="text-md font-bold text-gray-700 pl-5">1243 open jobs</p>
                            <p className="flex justify-end">
                                <FontAwesomeIcon icon={faArrowRight} className="text-md mt-1 mr-5 font-bold text-gray-600 " />
                            </p>
                        </div>
                    </div>
                </Link>
                {/* Systems, Quality, & Security Engineering */}
                <Link to="/">
                    <div className="border bg-blue-200">
                        <p className="text-xl pt-16 pl-5 pr-5 pb-16 text-center text-white font-bold bg-gray-800 Jobs_By_Categories_Card">Systems, Quality, & Security Engineering</p>
                        <div className="grid grid-cols-2 pb-2 pt-2">
                            <p className="text-md font-bold text-gray-700 pl-5">1243 open jobs</p>
                            <p className="flex justify-end">
                                <FontAwesomeIcon icon={faArrowRight} className="text-md mt-1 mr-5 font-bold text-gray-600 " />
                            </p>
                        </div>
                    </div>
                </Link>
                {/* Warehouse and Shopper */}
                <Link to="/">
                    <div className="border bg-blue-200">
                        <p className="text-xl pt-16 pl-5 pr-5 pb-16 text-center text-white font-bold bg-gray-800 Jobs_By_Categories_Card">Warehouse and Shopper</p>
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

export default JobByCategories;