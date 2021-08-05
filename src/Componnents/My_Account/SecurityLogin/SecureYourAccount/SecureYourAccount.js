import React from 'react';
import { Link } from 'react-router-dom';
import './SecureYourAccount.css';

const SecureYourAccount = () => {
    return (
        <section>
            {/* Page title */}
            <header className="text-3xl font-bold text-center mt-5">Secure your account</header>
            {/* Main Card */}
            <section className="flex justify-center ml-10 mr-10 mt-10 ">
                <div className="md:w-2/5 border-b-2 pb-5">
                    <div className="border-t-2 border-b-2 mb-5 pt-3 pb-4">
                        <p>
                            To protect your Ecomdi account, we recommend taking the following steps immediately.
                        </p>
                    </div>
                    <div className="border-t-2 border-b-2 mb-5 pt-3 pb-3">
                        <p><b>Step 1:</b>  Update your email settings.</p>
                        <p className="pt-2">Use a strong, unique password for your account not used anywhere else. Check for "email forwarding" rules, and remove any found. <br /> <br />
                       <b> Tip:</b> If your email account password was hacked, your Ecomdi account might be at risk. If your email was forwarded to another address, your account might be at risk.</p>
                    </div>
                    <div className="border-t-2 border-b-2 mb-5 pt-3 pb-3">
                        <p><b>Step 2:</b>Set mobile PIN/passcode</p>
                        <p className="pt-2">Contact your mobile phone provider and add a PIN/Passcode to protect your mobile phone account.<br /> <br />
                       <b> Tip:</b> If your mobile account or SMS is hacked, your Ecomdi account might be at risk.</p>
                    </div>
                    <div className="border-t-2 border-b-2 mb-5 pt-3 pb-3">
                        <p><b>Step 3:</b>Sign out current session and change password</p>
                        <p className="pt-2">To protect your account, your current password will no longer work. You'll be asked to change your password the next time you Sign-in. You may choose to Sign-out and change it now if you like.</p>
                    </div>

                    {/* Continue button */}
                    <Link
                        to="/password">
                        <button className="Button1 rounded shadow mr-20">Change password</button>
                    </Link>
                    {/* Back button */}
                    <Link to="/securityLogin">
                        <button className="Button2 Secure_Your_Account_ml shadow">Back</button>
                    </Link>
                </div>
            </section>
        </section >
    );
};

export default SecureYourAccount;