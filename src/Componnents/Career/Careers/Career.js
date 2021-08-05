import React from 'react';
import './Career.css';
import Image1 from './Teams_3_copy.jpg';
import Image2 from './Job_Categories-s.jpg';
import Image3 from './Location_copy.jpg';
import { Link } from 'react-router-dom';
import JobByCategories from '../JobByCategories/JobByCategories';
import JobsNavigation from '../JobsNavigation/JobsNavigation';

const Career = () => {
    return (
        <div>
            {/*  Job Search section  */}
            <section className="bg-gray-700 pt-10 pb-10">
                {/* Title */}
                <p className="font-bold text-3xl pt-10 pl-10 mb-5 text-white">Find Jobs</p>
                {/* Form */}
                <form className="p-10 pt-0 grid md:grid-cols-2 gap-2">
                    {/* Search bar */}
                    <div className="">
                        <input className="Career_Job_Search_Input" type="text" placeholder="Search for jobs by title or keyword" />
                    </div>
                    {/* Location input & Search Button */}
                    <div className="flex">
                        <input className="Career_Job_Location_Input flex-auto" type="text" placeholder="Location" />
                        <button className="Career_Job_Search_Button flex-auto Roboto">Sreach</button>
                    </div>
                </form>
            </section>
            {/* Second section */}
            <section className="bg-gray-800 p-10">
                <div className="Career_Second_Section flex justify-end">
                    <button className="Apply_Now_Button">Apply now</button>
                </div>
            </section>
            {/* Third Section */}
            <section className="p-10 bg-gray-100 grid md:grid-cols-3 gap-2">
                {/* First card */}
                <div className="bg-white p-10 text-center">
                    <p className="font-bold text-2xl mb-3 Roboto text-gray-600">Opportunities for students</p>
                    <p className="text-lg mb-2 text-gray-400">Learn about, search for, and apply to internships and full-time opportunities for students.</p>
                    <button className="Career_Third_section_Buttons mt-5">View open jobs</button>
                </div>
                {/* Second card */}
                <div className="bg-white p-10 text-center">
                    <p className="font-bold text-2xl mb-3 Roboto text-gray-600">Fulfillment Center hiring</p>
                    <p className="text-lg mb-2 text-gray-400">Learn about Fulfillment center career opportunities, and see open jobs at our Ecomdi Fulfillment Portal.</p>
                    <button className="Career_Third_section_Buttons mt-5">View fulfillment jobs</button>
                </div>
                {/* Third card */}
                <div className="bg-white p-10 text-center">
                    <p className="font-bold text-2xl mb-3 Roboto text-gray-600">Remote career opportunities</p>
                    <p className="text-lg mb-2 text-gray-400">View and search all open virtual jobs with Ecomdi and its subsidiaries. Click below</p>
                    <button className="Career_Third_section_Buttons mt-5">View remote jobs</button>
                </div>
            </section>
            {/* Fourth section */}
            <section className="bg-white p-20 pt-10">
                {/* Title */}
                <p className="text-center font-bold text-4xl mb-10">Explore opportunities</p>
                <div className="grid md:grid-cols-3 gap-5">
                    {/* First card */}
                    <div className="border">
                        {/* Image */}
                        <img src={Image1} alt="" />
                        {/* Description */}
                        <div className="p-5">
                            <p className="text-2xl mb-3">Teams</p>
                            <p className="text-lg text-gray-400">Get to know Ecomdi's teams, from Ecomdi Web Services to subsidiaries.</p>
                            <a href="" className="text-lg text-blue-700">See all teams</a>
                        </div>
                    </div>
                    {/* Second card */}
                    <div className="border">
                        {/* Image */}
                        <img src={Image2} alt="" />
                        {/* Description */}
                        <div className="p-5">
                            <p className="text-2xl mb-3">Job Categories</p>
                            <p className="text-lg text-gray-400">Want to be an Amazonian? Find the right job for you.</p>
                            <a href="" className="text-lg text-blue-700">See all teams</a>
                        </div>
                    </div>
                    {/* Third card */}
                    <div className="border">
                        {/* Image */}
                        <img src={Image3} alt="" />
                        {/* Description */}
                        <div className="p-5">
                            <p className="text-2xl mb-3">Locations</p>
                            <p className="text-lg text-gray-400">View Amazon's office locations across the globe.</p>
                            <a href="" className="text-lg text-blue-700">See all teams</a>
                        </div>
                    </div>
                </div>
            </section>
            {/* Fifth section */}
            <section className="bg-indigo-900 p-20">
                <div className="grid md:grid-cols-2">
                    <div>
                        <p className="text-5xl font-bold text-white mb-5">Come build the future with us</p>
                        <p className="text-lg text-gray-400 Roboto">Our mission is to be Earth's most customer-centric company. This is what unites Amazonians across teams and geographies as we are all striving to delight our customers and make their lives easier, one innovative product, service, and idea at a time.</p>
                        <button className="Fifth_Section_Button mt-3">Learn about working at Ecomdi</button>
                    </div>
                </div>
            </section>
            <JobsNavigation />
        </div>
    );
};

export default Career;