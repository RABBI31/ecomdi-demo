import React from 'react';
import './Groceries.css';
import Image from './Chal.jpg';
import Image2 from './coffee.jpg';
import Image3 from './Fresh_Chinigura_Chal_1_kg.jpg';
import Image4 from './Mosur_Dal.jpg';
import Image5 from './Musterd.jpg';
import Image6 from './Oil.jpg';
import Image7 from './712WUcysaeL._AC_SL1500_.jpg';
import Image8 from './organic-chilli-powder-500x500-1.jpeg';
import Image9 from './Turmeric-Benefits-Uses-and-Side-Effects-in-Bengali.jpg';
import Image10 from './Yellow-Kismis.jpg';
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
    Groceries: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

const Groceries = () => {
    return (
        <section className="">
            {/* Heading */}
            <p className="Groceries_Heading">Groceries</p>

            <Carousel responsive={responsive} >
                {/* ------------------Part------------------ */}
                <div className="grid grid-cols-3 gap-1 mt-3 mb-3 ml-3">

                    {/* Card1 */}
                    <div className="Groceries_Cards flex justify-center">
                        {/* Image */}
                        <img src={Image} className="Groceriess_Image" alt="" />
                        {/* Details */}
                        <div className="Groceriess_Detail">
                            {/* Name */}
                            <p className="text-center Groceriess_Name">Chal</p>
                            {/* Ratings */}
                            <div className="flex justify-center mb-1 Groceriess_Rating">
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                            </div>
                            {/* Stock and Price */}
                            <p className="text-center Groceriess_Stock">Stock: 8</p>
                            <p className="text-center Groceriess_Price">$220</p>
                            {/* Add to Cart Button */}
                            <button className="Groceriess_AddToCart_Button">Add to cart</button>
                        </div>
                    </div>

                    {/* Card2 */}
                    <div className="Groceries_Cards flex justify-center">
                        {/* Image */}
                        <img src={Image2} className="Groceriess_Image" alt="" />
                        {/* Details */}
                        <div className="Groceriess_Detail">
                            {/* Name */}
                            <p className="text-center Groceriess_Name">Coffee</p>
                            {/* Ratings */}
                            <div className="flex justify-center mb-1 Groceriess_Rating">
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                            </div>
                            {/* Stock and Price */}
                            <p className="text-center Groceriess_Stock">Stock: 2</p>
                            <p className="text-center Groceriess_Price">$480</p>
                            {/* Add to Cart Button */}
                            <button className="Groceriess_AddToCart_Button">Add to cart</button>
                        </div>
                    </div>

                    {/* Card3 */}
                    <div className="Groceries_Cards flex justify-center">
                        {/* Image */}
                        <img src={Image3} className="Groceriess_Image" alt="" />
                        {/* Details */}
                        <div className="Groceriess_Detail">
                            {/* Name */}
                            <p className="text-center Groceriess_Name">Cinigura Chal</p>
                            {/* Ratings */}
                            <div className="flex justify-center mb-1 Groceriess_Rating">
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                            </div>
                            {/* Stock and Price */}
                            <p className="text-center Groceriess_Stock">Stock: 12</p>
                            <p className="text-center Groceriess_Price">$120</p>
                            {/* Add to Cart Button */}
                            <button className="Groceriess_AddToCart_Button">Add to cart</button>
                        </div>
                    </div>

                </div>

                {/* -------------------Part------------------- */}
                <div className="grid grid-cols-3 gap-1 mt-3 mb-3 ml-1 mr-1">

                    {/* Card4 */}
                    <div className="Groceries_Cards flex justify-center">
                        {/* Image */}
                        <img src={Image4} className="Groceriess_Image" alt="" />
                        {/* Details */}
                        <div className="Groceriess_Detail">
                            {/* Name */}
                            <p className="text-center Groceriess_Name">Mosur Dal</p>
                            {/* Ratings */}
                            <div className="flex justify-center mb-1 Groceriess_Rating">
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                            </div>
                            {/* Stock and Price */}
                            <p className="text-center Groceriess_Stock">Stock: 18</p>
                            <p className="text-center Groceriess_Price">$320</p>
                            {/* Add to Cart Button */}
                            <button className="Groceriess_AddToCart_Button">Add to cart</button>
                        </div>
                    </div>

                    {/* Card5 */}
                    <div className="Groceries_Cards flex justify-center">
                        {/* Image */}
                        <img src={Image5} className="Groceriess_Image" alt="" />
                        {/* Details */}
                        <div className="Groceriess_Detail">
                            {/* Name */}
                            <p className="text-center Groceriess_Name">Musterd Oil</p>
                            {/* Ratings */}
                            <div className="flex justify-center mb-1 Groceriess_Rating">
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                            </div>
                            {/* Stock and Price */}
                            <p className="text-center Groceriess_Stock">Stock: 7</p>
                            <p className="text-center Groceriess_Price">$360</p>
                            {/* Add to Cart Button */}
                            <button className="Groceriess_AddToCart_Button">Add to cart</button>
                        </div>
                    </div>

                    {/* Card6 */}
                    <div className="Groceries_Cards flex justify-center">
                        {/* Image */}
                        <img src={Image6} className="Groceriess_Image" alt="" />
                        {/* Details */}
                        <div className="Groceriess_Detail">
                            {/* Name */}
                            <p className="text-center Groceriess_Name">Oil</p>
                            {/* Ratings */}
                            <div className="flex justify-center mb-1 Groceriess_Rating">
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                            </div>
                            {/* Stock and Price */}
                            <p className="text-center Groceriess_Stock">Stock: 12</p>
                            <p className="text-center Groceriess_Price">$370</p>
                            {/* Add to Cart Button */}
                            <button className="Groceriess_AddToCart_Button">Add to cart</button>
                        </div>
                    </div>

                </div>

                {/* -------------------Part------------------- */}
                <div className="grid grid-cols-3 gap-1 mt-3 mb-3 ml-1 mr-1">

                    {/* Card7 */}
                    <div className="Groceries_Cards flex justify-center">
                        {/* Image */}
                        <img src={Image7} className="Groceriess_Image" alt="" />
                        {/* Details */}
                        <div className="Groceriess_Detail">
                            {/* Name */}
                            <p className="text-center Groceriess_Name">Mayoniese</p>
                            {/* Ratings */}
                            <div className="flex justify-center mb-1 Groceriess_Rating">
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                            </div>
                            {/* Stock and Price */}
                            <p className="text-center Groceriess_Stock">Stock: 288</p>
                            <p className="text-center Groceriess_Price">$180</p>
                            {/* Add to Cart Button */}
                            <button className="Groceriess_AddToCart_Button">Add to cart</button>
                        </div>
                    </div>

                    {/* Card8 */}
                    <div className="Groceries_Cards flex justify-center">
                        {/* Image */}
                        <img src={Image8} className="Groceriess_Image" alt="" />
                        {/* Details */}
                        <div className="Groceriess_Detail">
                            {/* Name */}
                            <p className="text-center Groceriess_Name">Chili Powder</p>
                            {/* Ratings */}
                            <div className="flex justify-center mb-1 Groceriess_Rating">
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                            </div>
                            {/* Stock and Price */}
                            <p className="text-center Groceriess_Stock">Stock: 23</p>
                            <p className="text-center Groceriess_Price">$380</p>
                            {/* Add to Cart Button */}
                            <button className="Groceriess_AddToCart_Button">Add to cart</button>
                        </div>
                    </div>

                    {/* Card9 */}
                    <div className="Groceries_Cards flex justify-center">
                        {/* Image */}
                        <img src={Image9} className="Groceriess_Image" alt="" />
                        {/* Details */}
                        <div className="Groceriess_Detail">
                            {/* Name */}
                            <p className="text-center Groceriess_Name">Turmeric Powder</p>
                            {/* Ratings */}
                            <div className="flex justify-center mb-1 Groceriess_Rating">
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                            </div>
                            {/* Stock and Price */}
                            <p className="text-center Groceriess_Stock">Stock: 12</p>
                            <p className="text-center Groceriess_Price">$370</p>
                            {/* Add to Cart Button */}
                            <button className="Groceriess_AddToCart_Button">Add to cart</button>
                        </div>
                    </div>

                </div>

                {/* -------------------Part------------------- */}
                <div className="grid grid-cols-3 gap-1 mt-3 mb-3 ml-1 mr-1">

                    {/* Card10 */}
                    <div className="Groceries_Cards flex justify-center">
                        {/* Image */}
                        <img src={Image10} className="Groceriess_Image" alt="" />
                        {/* Details */}
                        <div className="Groceriess_Detail">
                            {/* Name */}
                            <p className="text-center Groceriess_Name">Kismis (Golden)</p>
                            {/* Ratings */}
                            <div className="flex justify-center mb-1 Groceriess_Rating">
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                            </div>
                            {/* Stock and Price */}
                            <p className="text-center Groceriess_Stock">Stock: 18</p>
                            <p className="text-center Groceriess_Price">$320</p>
                            {/* Add to Cart Button */}
                            <button className="Groceriess_AddToCart_Button">Add to cart</button>
                        </div>
                    </div>


                    {/* Extra..... */}


                    {/* Card5 */}
                    <div className="Groceries_Cards flex justify-center">
                        {/* Image */}
                        <img src={Image5} className="Groceriess_Image" alt="" />
                        {/* Details */}
                        <div className="Groceriess_Detail">
                            {/* Name */}
                            <p className="text-center Groceriess_Name">Musterd Oil</p>
                            {/* Ratings */}
                            <div className="flex justify-center mb-1 Groceriess_Rating">
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                            </div>
                            {/* Stock and Price */}
                            <p className="text-center Groceriess_Stock">Stock: 7</p>
                            <p className="text-center Groceriess_Price">$360</p>
                            {/* Add to Cart Button */}
                            <button className="Groceriess_AddToCart_Button">Add to cart</button>
                        </div>
                    </div>

                    {/* Card6 */}
                    <div className="Groceries_Cards flex justify-center">
                        {/* Image */}
                        <img src={Image6} className="Groceriess_Image" alt="" />
                        {/* Details */}
                        <div className="Groceriess_Detail">
                            {/* Name */}
                            <p className="text-center Groceriess_Name">Oil</p>
                            {/* Ratings */}
                            <div className="flex justify-center mb-1 Groceriess_Rating">
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                            </div>
                            {/* Stock and Price */}
                            <p className="text-center Groceriess_Stock">Stock: 12</p>
                            <p className="text-center Groceriess_Price">$370</p>
                            {/* Add to Cart Button */}
                            <button className="Groceriess_AddToCart_Button">Add to cart</button>
                        </div>
                    </div>

                </div>
            </Carousel>

        </section>
    );
};

export default Groceries;