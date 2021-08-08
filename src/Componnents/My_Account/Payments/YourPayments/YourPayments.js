import React from 'react';
import { Link } from 'react-router-dom';
import Timerma from '../../Voucher/Vouchers/option/Countdown/Timerma'

const YourPayments = () => {
    return (
        <section>
        {/* Website Countdown */}
        <h1 className="mt-5 pt-5 text-4xl text-center text-gray-600">
            <div className="container">
                <h1>
                    Website
                    <br />
                    Coming Soon
                </h1>
                <div className='container'>
                  <Timerma />
                </div>
                
            </div>
        </h1>
        {/* Back button */}
        <Link to="/main_page">
            <div className='text-center'>
                <button class="text-center bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                    Back
                </button> 
            </div>
        </Link>
    </section>
    );
};

export default YourPayments;