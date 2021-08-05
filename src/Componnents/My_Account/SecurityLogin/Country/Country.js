import React from 'react';
import { Link } from 'react-router-dom';
import './Country.css'

const Country = () => {
    return (
        <section>
            {/* Page title */}
            <header className="text-3xl font-bold text-center mt-5">Change your country</header>
            {/* Main Card */}
            <section className="flex justify-center ml-10 mr-10 mt-10 ">
                <div className="md:w-2/5 pb-5">
                    <div className="border-t-2 border-b-2 mb-5 pt-2 pb-2">
                        <p>
                            Add your new country below
                        </p>
                    </div>
                    <p>
                        <b>New country:</b>
                    </p>
                    <input className="border-2 pl-2 pt-1 pb-1 rounded mt-1 w-full" type="text" name="name" id="Name" /> <br />
                    <br />
                    {/* Continue button */}
                    <Link
                        to="/securityLogin">
                        <button className="Button1 rounded shadow mr-20">Save</button>
                    </Link>
                    {/* Back button */}
                    <Link to="/securityLogin">
                        <button className="Button2 Country__ml ml-20 shadow">Back</button>
                    </Link>
                </div>
            </section>
        </section>
    );
};

export default Country;