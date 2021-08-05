import React from 'react';
import { Link } from 'react-router-dom';
import './EmailOTP.css';

const EmailOTP = () => {
    return (
        <section>
            {/* Page title */}
            <header className="text-3xl font-bold text-center mt-5">Verify email address</header>
            {/* Main Card */}
            <section className="flex justify-center ml-10 mr-10 mt-10 ">
                <div className="md:w-2/5">
                    <p className="border-t-2 border-b-2 pt-2 pb-2">We've sent a One Time Password (OTP) to your email address. Please enter it below.</p>
                    <p className="font-bold mt-8">Enter OTP</p>
                    <input className="border-2 pl-2 pt-1 pb-1 rounded mt-1 mb-5 w-full" type="text" name="name" id="Name" /> <br />
                    {/* Continue button */}
                    <Link to="/mailChangeConfirm">
                        <button className="Button1 rounded shadow mr-20">Continue</button>
                    </Link>
                    {/* Back button */}
                    <Link to="/email">
                        <button className="Button2 Email_OTP_ml ml-20 shadow">Back</button>
                    </Link>
                </div>
            </section>
        </section>
    );
};

export default EmailOTP;