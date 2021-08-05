import React from 'react';
import { Link } from 'react-router-dom';
import './Checkout.css';

const Checkout = () => {
    return (
        <div>
            <section className="m-10">
                <p className="font-bold text-3xl mb-3">Select a shipping address</p>
                <p>Please enter a shipping address for this order. Please also indicate whether your billing address is the same as the shipping address entered. When finished, click the "Continue" button.  Or, if you're sending items to more than one address, click the "Add another address" button to enter additional addresses.</p>
            </section>
            <hr />
            <section className="m-10 flex justify-center">
                <form action="">
                    <p className="font-bold text-2xl mb-5">Add a new address</p>
                    <p className="font-bold mb-1">Country/Region</p>
                    <select id="Checkout_Country_Select" name="">
                        <option value="" className="Checkout_Country_Option1">Bangladesh</option>
                        <option value="" className="Checkout_Country_Option2">England</option>
                        <option value="" className="Checkout_Country_Option1">Canada</option>
                        <option value="" className="Checkout_Country_Option2">UAE</option>
                        <option value="" className="Checkout_Country_Option1">USA</option>
                        <option value="" className="Checkout_Country_Option2">India</option>
                        <option value="" className="Checkout_Country_Option1">China</option>
                        <option value="" className="Checkout_Country_Option2">Japan</option>
                        <option value="" className="Checkout_Country_Option1">Hongkong</option>
                        <option value="" className="Checkout_Country_Option2">North Korea</option>
                        <option value="" className="Checkout_Country_Option1">South Korea</option>
                        <option value="" className="Checkout_Country_Option2">Bhutan</option>
                        <option value="" className="Checkout_Country_Option1">Island</option>
                        <option value="" className="Checkout_Country_Option2">Malayashia</option>
                        <option value="" className="Checkout_Country_Option1">Pakistan</option>
                    </select>
                    <p className="font-bold mb-1">Full name (First name and Last name):</p>
                    <input className="Checkout_Inputs" type="text" name="" id="" />
                    <p className="font-bold mb-1">Street address:</p>
                    <input className="Checkout_Inputs" type="text" name="" id="" placeholder="Street name, P.O" /> <br />
                    <input className="Checkout_Inputs" type="text" name="" id="" placeholder="Apartment, Building, Floor" />
                    <p className="font-bold mb-1">City:</p>
                    <input className="Checkout_Inputs" type="text" name="" id="" />
                    <p className="font-bold mb-1">State:</p>
                    <input className="Checkout_Inputs" type="text" name="" id="" />
                    <p className="font-bold mb-1">Zip code:</p>
                    <input className="Checkout_Inputs" type="text" name="" id="" />
                    <p className="font-bold mb-1">Phone Number:</p>
                    <input className="Checkout_Inputs" type="text" name="" id="" /> <br />
                    <Link to="/shipment">
                        <button className="Checkout_Confirm_Button">Confirm</button>
                    </Link>
                </form>
            </section>
        </div>
    );
};

export default Checkout;