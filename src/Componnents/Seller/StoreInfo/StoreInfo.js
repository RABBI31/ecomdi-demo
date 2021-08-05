import React from 'react';
import { Link } from 'react-router-dom';
import './StoreInfo.css';

const StoreInfo = () => {
    return (
        <div className="flex justify-center m-10 Roboto">
            <section className="SellerInfo">
                {/* Heading */}
                <p className="text-xl font-bold">Store and Product Information</p>
                <p>Answer a few questions about your business so we can best assist you during onboarding. The answers you provide do not impact your ability to register for a selling account.</p>
                <hr />

                {/* Store Name */}
                <p className="font-bold mb-1 mt-2">Store name</p>
                <input className="Seller_Info_Inputs" type="text" name="" id="" placeholder="Enter a name for your store" />
                <div className="grid grid-cols-4">
                    {/* previous Button */}
                    <Link to="sellerInfo">
                        <button className="Seller_Info_Send_Button mt-3" type="submit">Previous</button>
                    </Link>
                    {/* next Button */}
                    <Link to="mainHome">
                        <button className="Seller_Info_Send_Button mt-3" type="submit">Next</button>
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default StoreInfo;