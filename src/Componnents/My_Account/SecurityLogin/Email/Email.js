import React from 'react';
import { Link } from 'react-router-dom';
import './Email.css';

const Email = () => {
    return (
        <section>
            {/* Page title */}
            <header className="text-3xl font-bold text-center mt-5">Change your email address</header>
            {/* Main Card */}
            <section className="flex justify-center ml-10 mr-10 mt-10 ">
                <div className="md:w-2/5">
                    <p className="border-t-2 border-b-2 pt-2 pb-2">Current email address: Yusuf.Islam@gmail.com
                    <br />
                    Enter the new email address you would like to associate with your account below. We will send a One Time Password (OTP) to that address.</p>
                    <p className="font-bold mt-8">New email address</p>
                    <input className="border-2 pl-2 pt-1 pb-1 rounded mt-1 mb-5 w-full" type="text" name="name" id="Name" placeholder="Yusuf.Islam@gmail.com" /> <br />
                    {/* Continue button */}
                    <Link to="/emailOTP">
                    <button className="Button1 rounded shadow mr-20">Continue</button>
                    </Link>
                    {/* Back button */}
                    <Link to="/securityLogin">
                        <button className="Button2 Email__ml ml-20 shadow">Back</button>
                    </Link>
                </div>
            </section>
        </section>
    );
};

export default Email;