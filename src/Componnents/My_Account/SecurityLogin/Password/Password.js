import React from 'react';
import { Link } from 'react-router-dom';
import './Password.css';

const Password = () => {
    return (
        <section>
            {/* Page title */}
            <header className="text-3xl font-bold text-center mt-5">Change password</header>
            {/* Main Card */}
            <section className="flex justify-center ml-10 mr-10 mt-10 ">
                <div className="md:w-2/5 border-b-2 pb-5">
                    <div className="border-t-2 border-b-2 mb-5 pt-2 pb-2">
                        <p>
                            Use the form below to change the password for your ecomdi account
                        </p>
                    </div>
                    {/* Current password */}
                    <p>
                        <b>Current password:</b>
                    </p>
                    <input className="border-2 pl-2 pt-1 pb-1 rounded mt-1 mb-5 w-full" type="text" name="name" id="Name" /> <br />
                    {/* New password */}
                    <p>
                        <b>New password:</b>
                    </p>
                    <input className="border-2 pl-2 pt-1 pb-1 rounded mt-1 mb-5 w-full" type="text" name="name" id="Name" /> <br />
                    {/* Re-enter password */}
                    <p>
                        <b>Re-enter password:</b>
                    </p>
                    <input className="border-2 pl-2 pt-1 pb-1 rounded mt-1 mb-5 w-full" type="text" name="name" id="Name" /> <br />
                    {/* Continue button */}
                    <Link
                        to="/securityLogin">
                        <button className="Button1 rounded shadow mr-20">Save</button>
                    </Link>
                    {/* Back button */}
                    <Link to="/securityLogin">
                        <button className="Button2 Password_ml ml-20 shadow">Back</button>
                    </Link>
                </div>
            </section>
        </section>
    );
};

export default Password;