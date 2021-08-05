import React from 'react';
import { Link } from 'react-router-dom';
import './Mobile.css';

const Mobile = () => {
    return (
        <section>
            {/* Page title */}
            <header className="text-3xl font-bold text-center mt-5">Change Mobile Phone Number</header>
            {/* Main Card */}
            <section className="flex justify-center ml-10 mr-10 mt-10 ">
                <div className="md:w-2/5">
                    <div className="border-t-2 border-b-2 mb-5 pt-2 pb-2">
                        <p>
                            <b>Old mobile phone number:</b> <br />
                            <span>BD +880163*****10</span>
                        </p>
                    </div>
                    <p>
                        <b>Mobile number:</b>
                    </p>
                    <input className="border-2 pl-2 pt-1 pb-1 rounded mt-1 mb-5 w-full" type="text" name="name" id="Name" /> <br />
                    <div className="border-t-2 border-b-2 mb-8 mt-3 pt-2 pb-2">
                        {/* Ingo msg */}
                        <p>By enrolling a mobile phone number, you consent to receive automated text messages from or on behalf of Ecomdi
                        related to account management and security. Remove your number in Login and Security to cancel. Message and data rates may apply.
                        </p>
                    </div>
                    {/* Continue button */}
                    <Link
                        to="/mobileOTP">
                        <button className="Button1 rounded shadow mr-20">Continue</button>
                    </Link>
                    {/* Back button */}
                    <Link to="/securityLogin">
                        <button className="Button2 Mobile_ml ml-20 shadow">Back</button>
                    </Link>
                </div>
            </section>
        </section>
    );
};

export default Mobile;