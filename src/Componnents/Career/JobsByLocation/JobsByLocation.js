import React from 'react';
import JobsNavigation from '../JobsNavigation/JobsNavigation';
import './JobsByLocation.css';

const JobsByLocation = () => {
    return (
        <div className="bg-blue-50">
            <p className="p-10 pb-0 font-bold text-3xl">Find jobs by Location</p>
            <section className="p-10 pt-5 grid md:grid-cols-4 gap-10">
                <div className="flex justify-center">
                    <div className="Jobs_By_Location_Card1">
                        <div className="Jobs_By_Location_Cards">
                            <p className="Jobs_By_Location_Cards_Title">Dhaka</p>
                            <p className="Jobs_By_Location_Cards_Description">Bangladesh</p>
                            <button className="Jobs_By_Location_Button">17 open jobs</button>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center">
                    <div className="Jobs_By_Location_Card2">
                        <div className="Jobs_By_Location_Cards">
                            <p className="Jobs_By_Location_Cards_Title">Cumilla</p>
                            <p className="Jobs_By_Location_Cards_Description">Bangladesh</p>
                            <button className="Jobs_By_Location_Button">17 open jobs</button>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center">
                    <div className="Jobs_By_Location_Card3">
                        <div className="Jobs_By_Location_Cards">
                            <p className="Jobs_By_Location_Cards_Title">Feni</p>
                            <p className="Jobs_By_Location_Cards_Description">Bangladesh</p>
                            <button className="Jobs_By_Location_Button">17 open jobs</button>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center">
                    <div className="Jobs_By_Location_Card4">
                        <div className="Jobs_By_Location_Cards">
                            <p className="Jobs_By_Location_Cards_Title">Dinajpur</p>
                            <p className="Jobs_By_Location_Cards_Description">Bangladesh</p>
                            <button className="Jobs_By_Location_Button">17 open jobs</button>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center">
                    <div className="Jobs_By_Location_Card5">
                        <div className="Jobs_By_Location_Cards">
                            <p className="Jobs_By_Location_Cards_Title">Barishal</p>
                            <p className="Jobs_By_Location_Cards_Description">Bangladesh</p>
                            <button className="Jobs_By_Location_Button">17 open jobs</button>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center">
                    <div className="Jobs_By_Location_Card6">
                        <div className="Jobs_By_Location_Cards">
                            <p className="Jobs_By_Location_Cards_Title">Bogura</p>
                            <p className="Jobs_By_Location_Cards_Description">Bangladesh</p>
                            <button className="Jobs_By_Location_Button">17 open jobs</button>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center">
                    <div className="Jobs_By_Location_Card7">
                        <div className="Jobs_By_Location_Cards">
                            <p className="Jobs_By_Location_Cards_Title">Chattragram</p>
                            <p className="Jobs_By_Location_Cards_Description">Bangladesh</p>
                            <button className="Jobs_By_Location_Button">17 open jobs</button>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center">
                    <div className="Jobs_By_Location_Card1">
                        <div className="Jobs_By_Location_Cards">
                            <p className="Jobs_By_Location_Cards_Title">Delhi</p>
                            <p className="Jobs_By_Location_Cards_Description">India</p>
                            <button className="Jobs_By_Location_Button">17 open jobs</button>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center">
                    <div className="Jobs_By_Location_Card2">
                        <div className="Jobs_By_Location_Cards">
                            <p className="Jobs_By_Location_Cards_Title">Karachi</p>
                            <p className="Jobs_By_Location_Cards_Description">Pakistan</p>
                            <button className="Jobs_By_Location_Button">17 open jobs</button>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center">
                    <div className="Jobs_By_Location_Card3">
                        <div className="Jobs_By_Location_Cards">
                            <p className="Jobs_By_Location_Cards_Title">New York</p>
                            <p className="Jobs_By_Location_Cards_Description">USA</p>
                            <button className="Jobs_By_Location_Button">17 open jobs</button>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center">
                    <div className="Jobs_By_Location_Card4">
                        <div className="Jobs_By_Location_Cards">
                            <p className="Jobs_By_Location_Cards_Title">London</p>
                            <p className="Jobs_By_Location_Cards_Description">UK</p>
                            <button className="Jobs_By_Location_Button">17 open jobs</button>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center">
                    <div className="Jobs_By_Location_Card5">
                        <div className="Jobs_By_Location_Cards">
                            <p className="Jobs_By_Location_Cards_Title">Dubai</p>
                            <p className="Jobs_By_Location_Cards_Description">UAE</p>
                            <button className="Jobs_By_Location_Button">17 open jobs</button>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center">
                    <div className="Jobs_By_Location_Card6">
                        <div className="Jobs_By_Location_Cards">
                            <p className="Jobs_By_Location_Cards_Title">Kulalampur</p>
                            <p className="Jobs_By_Location_Cards_Description">Malaysia</p>
                            <button className="Jobs_By_Location_Button">17 open jobs</button>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center">
                    <div className="Jobs_By_Location_Card7">
                        <div className="Jobs_By_Location_Cards">
                            <p className="Jobs_By_Location_Cards_Title">Kabul</p>
                            <p className="Jobs_By_Location_Cards_Description">Afghanistan</p>
                            <button className="Jobs_By_Location_Button">17 open jobs</button>
                        </div>
                    </div>
                </div>
            </section>
            <JobsNavigation />
        </div>
    );
};

export default JobsByLocation;