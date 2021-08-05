import React from 'react';
import { Link } from 'react-router-dom';
import './SellerInfo.css';

const SellerInfo = () => {
    return (
        <div className="flex justify-center m-10 Roboto">
            <section className="SellerInfo">
                {/* Heading */}
                <p className="text-xl">Personal Information for <b>Yusuf Islam</b></p>
                <hr />
                {/* Country */}
                <p className="font-bold mb-1 mt-5">Country or Citizenship</p>
                <select id="Seller_Info_Select" name="">
                    <option value="" className="Seller_Info_Option1">Bangladesh</option>
                    <option value="" className="Seller_Info_Option2">England</option>
                    <option value="" className="Seller_Info_Option1">Canada</option>
                    <option value="" className="Seller_Info_Option2">UAE</option>
                    <option value="" className="Seller_Info_Option1">USA</option>
                    <option value="" className="Seller_Info_Option2">India</option>
                    <option value="" className="Seller_Info_Option1">China</option>
                    <option value="" className="Seller_Info_Option2">Japan</option>
                    <option value="" className="Seller_Info_Option1">Hongkong</option>
                    <option value="" className="Seller_Info_Option2">North Korea</option>
                    <option value="" className="Seller_Info_Option1">South Korea</option>
                    <option value="" className="Seller_Info_Option2">Bhutan</option>
                    <option value="" className="Seller_Info_Option1">Island</option>
                    <option value="" className="Seller_Info_Option2">Malayashia</option>
                    <option value="" className="Seller_Info_Option1">Pakistan</option>
                </select>
                {/* Birth country */}
                <p className="font-bold mb-1">Country of birth</p>
                <select id="Seller_Info_Select" name="">
                    <option value="" className="Seller_Info_Option1">Bangladesh</option>
                    <option value="" className="Seller_Info_Option2">England</option>
                    <option value="" className="Seller_Info_Option1">Canada</option>
                    <option value="" className="Seller_Info_Option2">UAE</option>
                    <option value="" className="Seller_Info_Option1">USA</option>
                    <option value="" className="Seller_Info_Option2">India</option>
                    <option value="" className="Seller_Info_Option1">China</option>
                    <option value="" className="Seller_Info_Option2">Japan</option>
                    <option value="" className="Seller_Info_Option1">Hongkong</option>
                    <option value="" className="Seller_Info_Option2">North Korea</option>
                    <option value="" className="Seller_Info_Option1">South Korea</option>
                    <option value="" className="Seller_Info_Option2">Bhutan</option>
                    <option value="" className="Seller_Info_Option1">Island</option>
                    <option value="" className="Seller_Info_Option2">Malayashia</option>
                    <option value="" className="Seller_Info_Option1">Pakistan</option>
                </select>
                {/* Date of birth */}
                <p className="font-bold mb-1">Date of birth</p>
                <div className="grid md:grid-cols-3 gap-4 mb-5">
                    <input className="Seller_Info_Date_Inputs" type="number" name="date" id="date" placeholder="28 DD" />
                    <input className="Seller_Info_Date_Inputs" type="number" name="month" id="month" placeholder="10 MM" />
                    <input className="Seller_Info_Date_Inputs" type="number" name="year" id="year" placeholder="2021 YYYY" />
                </div>
                <hr />
                {/* Business Address */}
                <p className="font-bold mb-1 mt-5">Business Address:</p>
                <p className="text-gray-400 mb-5">Dhaka, Dhaka City, Bangladesh.</p>
                <hr />
                {/* Confirmation */}
                <form action="">
                    <p className="font-bold mb-1 mt-5">Receive PIN through</p>
                    <div className="flex">
                        <input type="radio" name="radio" id="radio" />
                        <label for="radio">
                            <p className="font-bold -mt-1 text-sm ml-1"> SMS</p>
                        </label>
                    </div>
                    {/* Phone number */}
                    <p className="font-bold mb-1">Phone number for verify</p>
                    <input className="Seller_Info_Inputs" type="text" name="" id="" placeholder="+8801674729222" />
                    {/* Send Button */}
                    <Link to="/seller-home">
                    <button className="Seller_Info_Send_Button mt-3" type="submit">Send SMS</button>
                    </Link>
                </form>
            </section>
        </div>
    );
};

export default SellerInfo;