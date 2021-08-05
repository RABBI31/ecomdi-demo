import React from 'react';
import { Link } from 'react-router-dom';

const ManageYourProfiles = () => {
    return (
        <section>
            {/* Page title */}
            <header className="text-3xl font-bold text-center mt-5">Manage your Profiles</header>
            {/* Main Card */}
            <section className="flex justify-center ml-10 mr-10 mt-10 ">
                <div className="md:w-2/5">
                    {/* Account details */}
                    <p className="border-t-2 text-3xl font-bold pt-2">Yusuf Islam</p>
                    <p className="font-bold border-b-2 pb-2">Account holder</p>
                    {/* Information */}
                    <p className="border-t-2 text-2xl font-bold pt-2 mt-4">Enrolled Programs</p>
                    <p className="border-b-2 pb-2">This profile is enrolled in the following Ecomdi programs. Tap a program to customize program settings.</p>
                    {/* Back button */}
                    <Link to="/profiles">
                        <button className="Button2 shadow mt-4">Back</button>
                    </Link>
                </div>
            </section>
        </section>
    );
};

export default ManageYourProfiles;