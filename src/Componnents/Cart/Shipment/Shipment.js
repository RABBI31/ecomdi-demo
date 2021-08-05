import React from 'react';
import './Shipment.css';

const Shipment = () => {
    return (
        <div className="bg-blue-50 mt-0">
            <section className="ml-10 mr-10">
                <p className="font-bold text-2xl text-center pt-5">Shipping from <b>ecomdi</b></p>
                <hr />
                <div className="grid md:grid-cols-2 gap-4 mt-5 mb-3">
                    <div>
                        <p className="text-gray-400 text-base Roboto mb-2">Shipping to: Yusuf Islam, Airport Road, KS Mansion, Barishal, Barishal Sadar, Bangladesh</p>
                        <hr />
                        <div>
                            <p className="font-bold mb-1">iphone 11 pro, 128GB, grey</p>
                            <p className="text-sm text-blue-400 mb-0">$450 - <span className="text-gray-600">quantity: 1</span></p>
                            <p>Sold by: <span>The mega store</span></p>
                        </div>
                        <hr />
                        <div>
                            <p className="font-bold mb-1">iphone 11 pro max, 128GB, grey</p>
                            <p className="text-sm text-blue-400 mb-0">$550 - <span className="text-gray-600">quantity: 1</span></p>
                            <p>Sold by: <span>The mega store</span></p>
                        </div>
                        <hr />
                    </div>
                    <div>
                        <p className="font-bold text-lg">Choose a delivery option:</p>
                        <p>
                            You can track your shipment and view any applicable import fees deposit before placing your order. Note: If you select “Standard International shipping – no tracking” you cannot track your shipment and may be charged import fees ahead of delivery. <span className="text-blue-400">Learn more.</span>
                        </p>
                        <p className="text-green-600 font-bold mb-1">Wednesday, July 14</p>
                        <p className="text-gray-400">$1250 - AmazonGlobal Priority Shipping</p>
                    </div>
                </div>
                <div className="">
                    <button className="Shipment_Continue_Button mb-10">Continue</button>
                </div>
            </section>
        </div>
    );
};

export default Shipment;