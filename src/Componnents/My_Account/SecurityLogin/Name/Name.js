import React from 'react';
import { Link } from 'react-router-dom';
import './Name.css';

const Name = () => {
    return (
        <section>
            {/* Page title */}
            <header className="text-3xl font-bold text-center mt-5">Change your name</header>
            {/* Main Card */}
            <section className="flex justify-center ml-10 mr-10 mt-10 ">
                <div className="md:w-2/5">
                    <p className="border-t-2 border-b-2 pt-2 pb-2">
                        If you want to change the name associated with your Ecomdi customer account, you may do so below. Be sure to click the Save Changes button when you are done.
                    </p>
                    <p className="font-bold mt-8">
                        New name
                    </p>
                    <input className="border-2 pl-2 pt-1 pb-1 rounded mt-1 mb-5" type="text" name="name" id="Name" placeholder="Yusuf Islam" /> <br />
                    {/* Save button */}
                    <Link to="/securityLogin">
                        <button className="Button1 rounded shadow mr-20">Save</button>
                    </Link>
                    {/* Back button */}
                    <Link to="/securityLogin">
                        <button className="Button2 Name_ml ml-20 shadow">Back</button>
                    </Link>
                </div>
            </section>
        </section>
    );
};

export default Name;