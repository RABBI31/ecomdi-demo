import React from 'react';
import './Profiles.css';
import { Link } from 'react-router-dom';

const YourProfiles = () => {
    return (
        <section>
            {/* Page title */}
            <header className="text-3xl font-bold text-center mt-5">Manage your Profiles</header>
            {/* Main Card */}
            <section className="flex justify-center ml-10 mr-10 mt-10 ">
                <div className="md:w-2/5 border-b-2 pb-4">
                    <p className="border-t-2 border-b-2 pt-2 pb-2">Ecomdi programs may use these profiles to provide a personalized experience.</p>
                    {/* Account button */}
                    <Link to="/manageYourProfiles">
                        <button className="AccountButton">Yusuf Islam</button>
                    </Link>
                    {/* Back button */}
                    <Link to="/home">
                        <button className="Button2 ml ml-20 shadow">Back</button>
                    </Link>
                </div>
            </section>
        </section>
    );
};

export default YourProfiles;