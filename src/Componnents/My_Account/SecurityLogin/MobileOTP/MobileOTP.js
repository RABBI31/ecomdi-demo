import React from 'react';
import { Link } from 'react-router-dom';
import './MobileOTP.css';

const MobileOTP = () => {
    return (
        <section>
            {/* Page title */}
            <header className="text-3xl font-bold text-center mt-5">Verify mobile number</header>
            {/* Main Card */}
            <section className="flex justify-center ml-10 mr-10 mt-10 ">
                <div className="md:w-2/5">
                    <p className="border-t-2 border-b-2 pt-2 pb-2">
                        A text with a One Time Password (OTP) has been sent to your mobile number: <b>+880163589****</b>
                    </p>
                    <p className="font-bold mt-8">
                        Enter OTP
                    </p>
                    <input className="border-2 pl-2 pt-1 pb-1 rounded mt-1 mb-5 w-full" type="text" name="name" id="Name" /> <br />
                    {/* Verify button */}
                    <Link to="/securityLogin">
                        <button className="Button1 rounded shadow mr-20">Verify</button>
                    </Link>
                    {/* Back button */}
                    <Link to="/mobile">
                        <button className="Button2 Mobile_OTP_ml ml-20 shadow">Back</button>
                    </Link>
                </div>
            </section>
        </section>
    );
};

export default MobileOTP;