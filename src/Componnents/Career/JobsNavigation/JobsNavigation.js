import React from 'react';
import { Link } from 'react-router-dom';

const JobsNavigation = () => {
    return (
        <section className="p-10 grid md:grid-cols-3 grid-cols-2 gap-10 bg-gray-800">
            {/* First part */}
            <div className="flex justify-center">
                <div>
                    <p className="mb-1 font-bold text-lg text-blue-600">Find Careers</p>
                    <Link to="/jobByCategories">
                        <p className="mb-1 text-md text-gray-400 Jobs_Links">Job Categories</p>
                    </Link>
                    <Link to="/jobsByTeam">
                        <p className="mb-1 text-md text-gray-400 Jobs_Links">Teams</p>
                    </Link>
                    <Link to="/jobsByLocation">
                        <p className="mb-1 text-md text-gray-400 Jobs_Links">Locations</p>
                    </Link>
                    <p className="mb-1 text-md text-gray-400 Jobs_Links">Fulfillment center jobs</p>
                </div>
            </div>
            {/* Second part */}
            <div className="flex justify-center">
                <div>
                    <p className="mb-1 font-bold text-lg text-blue-600">Working At Ecomdi</p>
                    <p className="mb-1 text-md text-gray-400 Jobs_Links">Culture</p>
                    <p className="mb-1 text-md text-gray-400 Jobs_Links">Benefits</p>
                    <p className="mb-1 text-md text-gray-400 Jobs_Links">Ecomdi Blog</p>
                    <p className="mb-1 text-md text-gray-400 Jobs_Links">Diversity at Ecomdi</p>
                    <p className="mb-1 text-md text-gray-400 Jobs_Links">Our leadership principles</p>
                </div>
            </div>
            {/* Third part */}
            <div className="flex justify-center">
                <div>
                    <p className="mb-1 font-bold text-lg text-blue-600">Help</p>
                    <p className="mb-1 text-md text-gray-400 Jobs_Links">FAQ</p>
                    <p className="mb-1 text-md text-gray-400 Jobs_Links">Interview tips</p>
                    <p className="mb-1 text-md text-gray-400 Jobs_Links">Review application status</p>
                    <p className="mb-1 text-md text-gray-400 Jobs_Links">Disability accommodations</p>
                    <p className="mb-1 text-md text-gray-400 Jobs_Links">EU background checks</p>
                </div>
            </div>
        </section>
    );
};

export default JobsNavigation;