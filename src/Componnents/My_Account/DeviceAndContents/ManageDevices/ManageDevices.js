import React from 'react';
import { Link } from 'react-router-dom';

const ManageDevices = () => {
    return (
        <section>
            <h1 className="mt-5 pt-5 text-4xl text-center text-green-600">
                Coming soooon.....
            </h1>
            {/* Back button */}
            <Link to="/devices">
                <p className="mt-5 pt-5 text-xl text-center text-blue-600">Back</p>
            </Link>
        </section>
    );
};

export default ManageDevices;