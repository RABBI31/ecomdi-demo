import React from 'react';
import { Link } from 'react-router-dom';
import './MailChangeConfirm.css';

const MailChangeConfirm = () => {
    return (
        <section>
            {/* Page title */}
            <header className="text-3xl font-bold text-center mt-5">Change email</header>
            {/* Main Card */}
            <section className="flex justify-center ml-10 mr-10 mt-10 ">
                <div className="md:w-2/5">
                    <p className="border-t-2 border-b-2 pt-2 pb-2">
                        <span className="font-bold">
                            Previous email address:
                        </span> <br />
                             Yusuf.Islam@gmail.com <br />
                        <p className="font-bold mt-5 -mb-6">
                            Current email address:
                        </p><br /> example@gmail.com
                    </p>
                    <p className="font-bold mt-8">
                        Password:
                    </p>
                    <input className="border-2 pl-2 pt-1 pb-1 rounded mt-1 mb-5 w-full" type="text" name="name" id="Name" /> <br />
                    {/* Save button */}
                    <Link to="/securityLogin">
                        <button className="Button1 rounded shadow mr-20">Save</button>
                    </Link>
                    {/* Back button */}
                    <Link to="/emailOTP">
                        <button className="Button2 Mail_Change_ml ml-20 shadow">Back</button>
                    </Link>
                </div>
            </section>
        </section>
    );
};

export default MailChangeConfirm;