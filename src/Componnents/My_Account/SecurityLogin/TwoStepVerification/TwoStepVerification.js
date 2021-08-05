import React from 'react';
import { Link } from 'react-router-dom';
import './TwoStepVerification.css';

const TwoStepVerification = () => {
    return (
        <section>
            {/* Page title */}
            <header className="text-3xl font-bold text-center mt-5">Two-Step Verification (2SV) Settings</header>
            {/* Main Card */}
            <section className="flex justify-center ml-10 mr-10 mt-10 ">
                <div className="md:w-2/5 border-b-2 pb-5">
                    <div className="border-t-2 border-b-2 mb-5 pt-3 pb-4">
                        <p>
                            <b>Why do I need this?</b>
                        </p>
                        <p>Passwords can get stolen - especially if you use the same password for multiple sites. Adding Two-Step Verification means that even if your password gets stolen, your Ecomdi account will remain secure.

                        </p>
                    </div>
                    <div className="border-t-2 border-b-2 mb-5 pt-3 pb-3">
                        <p><b>How does it work?</b></p>
                        <p>After you turn on Two-Step Verification for your account, signing in will be a little different:</p>
                        <p className="mt-5 ml-5">1. You'll enter your password, as usual.</p>
                        <p className="ml-5">2. We'll send you a One Time Password (OTP).</p>
                        <p className="ml-5 mb-5">3. You'll enter the OTP, and complete your Sign-In.</p>
                        <p>On computers you use often, you can choose to suppress the OTP challenge.</p>
                    </div>
                    <div className="border-t-2 border-b-2 mb-5 pt-3 pb-3">
                        <p><b>What do I need to get started?</b></p>
                        <p>You'll need a phone with you that can receive text messages. We'll also show you how to set up an authenticator app on your smartphone. </p>
                    </div>
                    <div className="border-t-2 border-b-2 mb-5 pt-3 pb-3">
                        <p>To enable Two-Step Verification for your account, click "Get Started.
                        </p>
                    </div>

                    {/* Continue button */}
                    <Link
                        to="/step1">
                        <button className="Button1 rounded shadow mr-20">Get started</button>
                    </Link>
                    {/* Back button */}
                    <Link to="/securityLogin">
                        <button className="Button2 Two_Step_Verification_ml shadow">Back</button>
                    </Link>
                </div>
            </section>
        </section >
    );
};

export default TwoStepVerification;