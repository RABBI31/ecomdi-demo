import React from 'react';
import { Link } from 'react-router-dom';
import './YourOrders.css';

const YourOrders = () => {
    return (
        <section>
            {/* Page title */}
            <header className="text-3xl font-bold text-center mt-5">Your Orders</header>
            <section>
                <p className="text-2xl text-green-500 font-bold ml-10 mt-20 mb-8">Orders —</p>
                {/* Table titles */}
                <section className="grid md:grid-cols-6 mb-3">
                    <div className="text-center font-bold mt-5 Borders">
                        <p>Product Name</p>
                    </div>
                    <div className="text-center font-bold mt-5 Borders">
                        <p>Quantity</p>
                    </div>
                    <div className="text-center font-bold mt-5 Borders">
                        <p>Shop</p>
                    </div>
                    <div className="text-center font-bold mt-5 Borders">
                        <p>Price</p>
                    </div>
                    <div className="text-center font-bold mt-5 Borders">
                        <p>Status</p>
                    </div>
                    <div className="text-center font-bold mt-5 Borders">
                        <p>Order date</p>
                    </div>
                </section>
                <hr/>
                {/* Details */}
                <section className="grid md:grid-cols-6 pb-10">
                    <div className="text-center mt-5">
                        <p>Example</p>
                    </div>
                    <div className="text-center mt-5">
                        <p>8</p>
                    </div>
                    <div className="text-center  mt-5">
                        <p>StarletBD</p>
                    </div>
                    <div className="text-center mt-5">
                        <p>$300</p>
                    </div>
                    <div className="text-center mt-5">
                        <p>Pending</p>
                    </div>
                    <div className="text-center mt-5 mb-3">
                        <p>6/1/2021</p>
                    </div>
                </section>
            </section>


            {/* Cancelled Orders */}
            <section>
                <p className="text-2xl text-red-400 font-bold ml-10 mt-20 mb-8">Cancelled Orders —</p>
                {/* Table titles */}
                <section className="grid md:grid-cols-6 mb-3">
                    <div className="text-center font-bold mt-5 Borders">
                        <p>Product Name</p>
                    </div>
                    <div className="text-center font-bold mt-5 Borders">
                        <p>Quantity</p>
                    </div>
                    <div className="text-center font-bold mt-5 Borders">
                        <p>Shop</p>
                    </div>
                    <div className="text-center font-bold mt-5 Borders">
                        <p>Price</p>
                    </div>
                    <div className="text-center font-bold mt-5 Borders">
                        <p>Status</p>
                    </div>
                    <div className="text-center font-bold mt-5 Borders">
                        <p>Order date</p>
                    </div>
                </section>
                <hr />
                {/* Details */}
                <section className="grid md:grid-cols-6">
                    <div className="text-center mt-5">
                        <p>Example</p>
                    </div>
                    <div className="text-center mt-5">
                        <p>8</p>
                    </div>
                    <div className="text-center  mt-5">
                        <p>StarletBD</p>
                    </div>
                    <div className="text-center mt-5">
                        <p>$300</p>
                    </div>
                    <div className="text-center mt-5">
                        <p>Pending</p>
                    </div>
                    <div className="text-center mt-5 mb-3">
                        <p>6/1/2021</p>
                    </div>
                </section>
            </section>

            {/* Back button */}
            <Link to="/main_page">
                <div className='text-center mt-10'>
                <button class="text-center bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                    Back
                </button>
                </div>
            </Link>
        </section>
    );
};

export default YourOrders;