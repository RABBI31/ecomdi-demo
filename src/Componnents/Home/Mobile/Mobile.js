import React from 'react';
import './Mobile.css';
import Image from './97036a3ef3b60f99a34cf0e16fb867896146a6e2.jpeg';
import Image2 from './12.jpg';
import Image3 from './C15.jpg';
import Image4 from './Galaxy A11.jpg';
import Image5 from './IphoneX.jpg';
import Image6 from './Oppo.jpg';
import Image7 from './X50.jpg';
import Image8 from './Xpro.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

const Mobile = () => {
    return (
        <section className="">

            <p className="Mobile_Heading">Mobile</p>

            <Carousel responsive={responsive} >
                {/* ------------------Part------------------ */}
                <div className="grid grid-cols-3 gap-1 mt-3 mb-3 ml-3">

                    {/* Card1 */}
                    <div className="Mobile_Cards flex justify-center">
                        {/* Image */}
                        <img src={Image} className="Mobiles_Image" alt="" />
                        {/* Details */}
                        <div className="Mobiles_Detail">
                            {/* Name */}
                            <p className="text-center Mobiles_Name">Never Settle</p>
                            {/* Ratings */}
                            <div className="flex justify-center mb-1 Mobiles_Rating">
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                            </div>
                            {/* Stock and Price */}
                            <p className="text-center Mobiles_Stock">Stock: 8</p>
                            <p className="text-center Mobiles_Price">$220</p>
                            {/* Add to Cart Button */}
                            <button className="Mobiles_AddToCart_Button">Add to cart</button>
                        </div>
                    </div>

                    {/* Card2 */}
                    <div className="Mobile_Cards flex justify-center">
                        {/* Image */}
                        <img src={Image2} className="Mobiles_Image" alt="" />
                        {/* Details */}
                        <div className="Mobiles_Detail">
                            {/* Name */}
                            <p className="text-center Mobiles_Name">iphone 12</p>
                            {/* Ratings */}
                            <div className="flex justify-center mb-1 Mobiles_Rating">
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                            </div>
                            {/* Stock and Price */}
                            <p className="text-center Mobiles_Stock">Stock: 2</p>
                            <p className="text-center Mobiles_Price">$480</p>
                            {/* Add to Cart Button */}
                            <button className="Mobiles_AddToCart_Button">Add to cart</button>
                        </div>
                    </div>

                    {/* Card3 */}
                    <div className="Mobile_Cards flex justify-center">
                        {/* Image */}
                        <img src={Image3} className="Mobiles_Image" alt="" />
                        {/* Details */}
                        <div className="Mobiles_Detail">
                            {/* Name */}
                            <p className="text-center Mobiles_Name">Realme c15</p>
                            {/* Ratings */}
                            <div className="flex justify-center mb-1 Mobiles_Rating">
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                            </div>
                            {/* Stock and Price */}
                            <p className="text-center Mobiles_Stock">Stock: 12</p>
                            <p className="text-center Mobiles_Price">$120</p>
                            {/* Add to Cart Button */}
                            <button className="Mobiles_AddToCart_Button">Add to cart</button>
                        </div>
                    </div>

                </div>

                {/* -------------------Part------------------- */}
                <div className="grid grid-cols-3 gap-1 mt-3 mb-3 ml-1 mr-1">

                    {/* Card4 */}
                    <div className="Mobile_Cards flex justify-center">
                        {/* Image */}
                        <img src={Image4} className="Mobiles_Image" alt="" />
                        {/* Details */}
                        <div className="Mobiles_Detail">
                            {/* Name */}
                            <p className="text-center Mobiles_Name">Galaxy A11</p>
                            {/* Ratings */}
                            <div className="flex justify-center mb-1 Mobiles_Rating">
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                            </div>
                            {/* Stock and Price */}
                            <p className="text-center Mobiles_Stock">Stock: 18</p>
                            <p className="text-center Mobiles_Price">$320</p>
                            {/* Add to Cart Button */}
                            <button className="Mobiles_AddToCart_Button">Add to cart</button>
                        </div>
                    </div>

                    {/* Card5 */}
                    <div className="Mobile_Cards flex justify-center">
                        {/* Image */}
                        <img src={Image5} className="Mobiles_Image" alt="" />
                        {/* Details */}
                        <div className="Mobiles_Detail">
                            {/* Name */}
                            <p className="text-center Mobiles_Name">iphone X</p>
                            {/* Ratings */}
                            <div className="flex justify-center mb-1 Mobiles_Rating">
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                            </div>
                            {/* Stock and Price */}
                            <p className="text-center Mobiles_Stock">Stock: 7</p>
                            <p className="text-center Mobiles_Price">$360</p>
                            {/* Add to Cart Button */}
                            <button className="Mobiles_AddToCart_Button">Add to cart</button>
                        </div>
                    </div>

                    {/* Card6 */}
                    <div className="Mobile_Cards flex justify-center">
                        {/* Image */}
                        <img src={Image6} className="Mobiles_Image" alt="" />
                        {/* Details */}
                        <div className="Mobiles_Detail">
                            {/* Name */}
                            <p className="text-center Mobiles_Name">Oppo A5</p>
                            {/* Ratings */}
                            <div className="flex justify-center mb-1 Mobiles_Rating">
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                            </div>
                            {/* Stock and Price */}
                            <p className="text-center Mobiles_Stock">Stock: 12</p>
                            <p className="text-center Mobiles_Price">$370</p>
                            {/* Add to Cart Button */}
                            <button className="Mobiles_AddToCart_Button">Add to cart</button>
                        </div>
                    </div>

                </div>

                {/* -------------------Part------------------- */}
                <div className="grid grid-cols-3 gap-1 mt-3 mb-3 ml-1 mr-1">

                    {/* Card7 */}
                    <div className="Mobile_Cards flex justify-center">
                        {/* Image */}
                        <img src={Image7} className="Mobiles_Image" alt="" />
                        {/* Details */}
                        <div className="Mobiles_Detail">
                            {/* Name */}
                            <p className="text-center Mobiles_Name">Realme X15</p>
                            {/* Ratings */}
                            <div className="flex justify-center mb-1 Mobiles_Rating">
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                            </div>
                            {/* Stock and Price */}
                            <p className="text-center Mobiles_Stock">Stock: 288</p>
                            <p className="text-center Mobiles_Price">$180</p>
                            {/* Add to Cart Button */}
                            <button className="Mobiles_AddToCart_Button">Add to cart</button>
                        </div>
                    </div>

                    {/* Card8 */}
                    <div className="Mobile_Cards flex justify-center">
                        {/* Image */}
                        <img src={Image8} className="Mobiles_Image" alt="" />
                        {/* Details */}
                        <div className="Mobiles_Detail">
                            {/* Name */}
                            <p className="text-center Mobiles_Name">Realme X Pro</p>
                            {/* Ratings */}
                            <div className="flex justify-center mb-1 Mobiles_Rating">
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                            </div>
                            {/* Stock and Price */}
                            <p className="text-center Mobiles_Stock">Stock: 23</p>
                            <p className="text-center Mobiles_Price">$380</p>
                            {/* Add to Cart Button */}
                            <button className="Mobiles_AddToCart_Button">Add to cart</button>
                        </div>
                    </div>



                    {/* Extra..... */}


                    {/* Card6 */}
                    <div className="Mobile_Cards flex justify-center">
                        {/* Image */}
                        <img src={Image6} className="Mobiles_Image" alt="" />
                        {/* Details */}
                        <div className="Mobiles_Detail">
                            {/* Name */}
                            <p className="text-center Mobiles_Name">Oppo A5</p>
                            {/* Ratings */}
                            <div className="flex justify-center mb-1 Mobiles_Rating">
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                            </div>
                            {/* Stock and Price */}
                            <p className="text-center Mobiles_Stock">Stock: 12</p>
                            <p className="text-center Mobiles_Price">$370</p>
                            {/* Add to Cart Button */}
                            <button className="Mobiles_AddToCart_Button">Add to cart</button>
                        </div>
                    </div>

                </div>

                {/* -------------------Part------------------- */}
                <div className="grid grid-cols-3 gap-1 mt-3 mb-3 ml-1 mr-1">

                    {/* Card4 */}
                    <div className="Mobile_Cards flex justify-center">
                        {/* Image */}
                        <img src={Image4} className="Mobiles_Image" alt="" />
                        {/* Details */}
                        <div className="Mobiles_Detail">
                            {/* Name */}
                            <p className="text-center Mobiles_Name">Galaxy A11</p>
                            {/* Ratings */}
                            <div className="flex justify-center mb-1 Mobiles_Rating">
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                            </div>
                            {/* Stock and Price */}
                            <p className="text-center Mobiles_Stock">Stock: 18</p>
                            <p className="text-center Mobiles_Price">$320</p>
                            {/* Add to Cart Button */}
                            <button className="Mobiles_AddToCart_Button">Add to cart</button>
                        </div>
                    </div>

                    {/* Card5 */}
                    <div className="Mobile_Cards flex justify-center">
                        {/* Image */}
                        <img src={Image5} className="Mobiles_Image" alt="" />
                        {/* Details */}
                        <div className="Mobiles_Detail">
                            {/* Name */}
                            <p className="text-center Mobiles_Name">iphone X</p>
                            {/* Ratings */}
                            <div className="flex justify-center mb-1 Mobiles_Rating">
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                            </div>
                            {/* Stock and Price */}
                            <p className="text-center Mobiles_Stock">Stock: 7</p>
                            <p className="text-center Mobiles_Price">$360</p>
                            {/* Add to Cart Button */}
                            <button className="Mobiles_AddToCart_Button">Add to cart</button>
                        </div>
                    </div>

                    {/* Card6 */}
                    <div className="Mobile_Cards flex justify-center">
                        {/* Image */}
                        <img src={Image6} className="Mobiles_Image" alt="" />
                        {/* Details */}
                        <div className="Mobiles_Detail">
                            {/* Name */}
                            <p className="text-center Mobiles_Name">Oppo A5</p>
                            {/* Ratings */}
                            <div className="flex justify-center mb-1 Mobiles_Rating">
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                            </div>
                            {/* Stock and Price */}
                            <p className="text-center Mobiles_Stock">Stock: 12</p>
                            <p className="text-center Mobiles_Price">$370</p>
                            {/* Add to Cart Button */}
                            <button className="Mobiles_AddToCart_Button">Add to cart</button>
                        </div>
                    </div>

                </div>
            </Carousel>
        </section>
    );
};

export default Mobile;