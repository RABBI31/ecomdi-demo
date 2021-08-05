import React from 'react';
import { Link } from 'react-router-dom';
import './Step1.css';

const Step1 = () => {
    return (
        <section>
            {/* Page title */}
            <header className="text-3xl font-bold text-center mt-5">Enroll a 2SV authenticator</header>
            {/* Main Card */}
            <section className="flex justify-center ml-10 mr-10 mt-10 ">
                <div className="md:w-2/5">
                    <div className="border-t-2 border-b-2 mb-5 pt-2 pb-2">
                        <p>
                            <b>Phone Number</b> <br />
                            <span>Tell us the mobile number you'd like to use as your authenticator. When you sign in, we'll send this number a text message with a one time password.</span>
                        </p>
                    </div>
                    <p>
                        <b>Enter your mobile number:</b>
                    </p>
                    <input className="border-2 pl-2 pt-1 pb-1 rounded mt-1 mb-5 w-full" type="text" name="name" id="Name" /> <br />

                    {/* Continue button */}
                    <Link
                        to="/twoStepMobileOTP">
                        <button className="Button1 rounded shadow mr-20">Continue</button>
                    </Link>
                    {/* Back button */}
                    <Link to="/twoStepVerification">
                        <button className="Button2 Step1_ml ml-20 shadow">Back</button>
                    </Link>
                </div>
            </section>
        </section>
    );
};

export default Step1;