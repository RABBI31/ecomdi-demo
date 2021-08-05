import React from 'react';
import { Link } from 'react-router-dom';
import './Step2.css';

const Step2 = () => {
    return (
        <section>
            {/* Page title */}
            <header className="text-3xl font-bold text-center mt-5">Almost done...</header>
            {/* Main Card */}
            <section className="flex justify-center ml-10 mr-10 mt-10 ">
                <div className="md:w-2/5 border-b-2 pb-5">
                    <div className="border-t-2 border-b-2 mb-5 pt-3 pb-4">
                        <p>
                            <b>Just two more important things to know:</b> <br /> <br />
                            <b className="text-2xl">1. Legacy device Sign-In method</b>
                        </p>
                        <p className="mt-2">Some devices are unable to display a second screen prompting you to enter the OTP, but Two-Step Verification will still be required. Here's how it will work:
                        </p>
                    </div>
                    <div className="border-t-2 border-b-2 mb-5 pb-3">
                        <p className="mt-5 ml-5">1. Sign in with your password. An error message will occur.</p>
                        <p className="ml-5">2. An OTP will be sent to your preferred phone. You may also use an authenticator app.</p>
                        <p className="ml-5 mb-5">3. Add ("append") the OTP to the end of your password, and click "Sign-In" again.</p>
                        <p>You will then be signed in to your Ecomdi account.</p>
                    </div>
                    <div className="border-t-2 border-b-2 mb-5 pt-3 pb-3">
                        <b className="text-2xl">2. Suppress OTP challenge during Sign-In</b>
                        <p className="mt-2">You may suppress future OTP challenges by selecting "Don't require OTP on this browser". As long as the OTP suppression cookie is present, a Sign-In from that browser or application will only require a password. (Note: This option is enabled separately for each browser that you use.)</p>
                    </div>
                    <div className="border-t-2 border-b-2 mb-5 pt-3 pb-3">
                        <p>To enable Two-Step Verification for your account, click "Get Started.
                        </p>
                    </div>

                    {/* On button */}
                    <Link
                        to="/securityLogin">
                        <button className="Button1 rounded shadow mr-20">Got it. Trun Two Step Verification On</button>
                    </Link>
                    {/* Back button */}
                    <Link to="/securityLogin">
                        <button className="Button2 Step2_ml shadow">Back</button>
                    </Link>
                </div>
            </section>
        </section >
    );
};

export default Step2;