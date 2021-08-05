import React, { useState } from 'react';
import Images1 from './download (1).jpg';
import './DetailsPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus, faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons';
import Products from '../Home/Products/Products';
import {
    Col,
    Container,
    Jumbotron,
    Row
} from 'react-bootstrap'; 
import Basic from './Basic';
//import something from somelibrary
import watchImg300 from './img/watch300.jpg';
import watchImg1200 from './img/wristwatch_1200.jpg';

const DetailsPage = () => {
    const [count, setCount] = useState(12);
    const handleDecrease = () => {
        const newCount = count - 1;
        setCount(newCount)
        if (count <= 0) {
            setCount(0)
        }
    };
    const handleIncrease = () => {
        const newCounts = count + 1;
        setCount(newCounts);
    }

    return (
        <section className="m-10 pb-10">
            {/* Top section */}
            <section className="grid md:grid-cols-2 mb-10">
                {/* Images */}
                <div className="flex">
                    <div className="flex-none mr-3">
                        <img className="Extra_Images" src={watchImg1200} alt="" />
                        <img className="Extra_Images" src={watchImg1200} alt="" />
                        <img className="Extra_Images" src={watchImg1200} alt="" />
                        <img className="Extra_Images" src={watchImg1200} alt="" />
                    </div>
                    <div className="flex-auto">
                    <div style={{width:'342px', height:'500px'}}>
                            <Container className=''>
                                <Row>
                                    <Col sm={12}>
                                    </Col>
                                </Row>
                            </Container>
                            <Container className=''>
                                <Row>
                                    <Col sm={12}>
                                        <Basic />
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </div>
                </div>
                {/* Details */}
                <div className="">
                    {/* Title */}
                    <p className="text-2xl p-0 mb-2 mt-2 Font2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, reprehenderit?</p>
                    {/* Shop name */}
                    <a href="#"><p className="mb-1 p-0">The Mega Store</p></a>
                    {/* Ratings */}
                    <div className="m-0 p-0 flex">
                        <p className="flex Details_Page_Ratings">
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStarHalf} /></p>
                        {/* Ratings Count */}
                        <p className="Details_Page_Ratings_Number text-xs">123457+ Ratings</p>
                    </div>
                    {/* About */}
                    <p className="m-0 p-0 font-bold mt-2">About this item:</p>
                    <p className="m-0 pb-1">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab officia hic dignissimos. Earum a eos iure repellat, fugiat molestias architecto voluptatum repellendus aliquam incidunt saepe officiis beatae quod corrupti numquam id quisquam sequi rerum sed quam doloribus consequuntur nostrum. Architecto.</p>
                    {/* Comment and Report */}
                    <div className="flex">
                        <a href=""><p className="Details_Comment">Comment</p></a>
                        <a href=""><p className="Details_Report">Report</p></a>
                    </div>
                    {/* Price, Quantity, Add to cart and Buy now button */}
                    <div className="flex grid md:grid-cols-2 grid-cols-1">
                        <div className="grid grid-cols-3 mt-5">
                            <p className="Details_Page_Price">$450</p>
                            <div className="flex Details_Page_Increase Font2 border-1 text-center justify-center">
                                <FontAwesomeIcon onClick={handleIncrease} className="Details_Page_Item_Icons" icon={faPlus} />
                                <p className="Details_Page_Item_Count">{count}</p>
                                <FontAwesomeIcon onClick={handleDecrease} className="Details_Page_Item_Icons" icon={faMinus} />
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-2 mt-5">
                            <button className="Details_Page_Cart_Button">Add to cart</button>
                            <button className="Details_Page_Buy_Button">Buy now</button>
                        </div>
                    </div>
                </div>
            </section>

            <hr />



            {/* second section */}
            <section className="pb-5 mb-5">
                <p className="text-xl mt-5 text-gray-400 mb-2"><b>Details:</b></p>
                <div className="grid md:grid-cols-5 gap-1 grid-cols-2 mb-0">
                    <div className="border Details_Details">
                        <p><b>Brand:</b> Samsung</p>
                    </div>
                    <div className="border Details_Details">
                        <p className=" "><b>Ram & Rom:</b> 8GB/128GB</p>
                    </div>
                    <div className="border Details_Details">
                        <p><b>SIM:</b> 	Dual Nano SIM</p>
                    </div>
                    <div className="border Details_Details">
                        <p><b>USB:</b> 2.0v</p>
                    </div>
                    <div className="border Details_Details">
                        <p><b>Network:</b>2G, 3G, 4G</p>
                    </div>
                    <div className="border Details_Details">
                        <p><b>Dimensions:</b> 159x75.1x8.9 mm</p>
                    </div>
                    <div className="border Details_Details">
                        <p><b>Weight:</b>188 grams</p>
                    </div>
                    <div className="border Details_Details">
                        <p><b>Size:</b> 6.4 inches</p>
                    </div>
                    <div className="border Details_Details">
                        <p><b>Battery:</b> 6000 mAh Li-Po</p>
                    </div>
                    <div className="border Details_Details">
                        <p><b>Processor:</b> Octa core, 2.3 GHz</p>
                    </div>
                    <div className="border Details_Details">
                        <p><b>Fingerprint:</b> Yes(On the Back)</p>
                    </div>
                    <div className="border Details_Details">
                        <p><b>OS:</b> Android 10 (One UI 2)</p>
                    </div>
                    <div className="border Details_Details">
                        <p><b>Charging:</b> 15W Fast Charging</p>
                    </div>
                </div>
            </section>

            <hr />

            {/* third Section */}
            <section className="grid md:grid-cols-2 mt-5 mb-5">
                <div>
                    <a href="#"><p className="mb-1 p-0 font-bold text-lg">The Mega Store- <span className="text-xs">(free shipping)*</span></p></a>
                    <p className="font-bold text-xs m-0 mb-2 text-gray-500">USA, NewYork City.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius voluptate pariatur ex eligendi, incidunt alias ea voluptatem architecto repellendus perferendis corrupti veniam amet laudantium in suscipit cupiditate. Reprehenderit, cupiditate animi chitecto repellendus perferendis corrupti veniam amet laudantium in suscipit cupiditate. Reprehenderit?</p>
                </div>
                <div>
                    <p className="text-blue-400 font-bold text-xl text-center">Have any Question..?</p>
                    <input type="text" name="vendorSerchBar" id="vendorSearchBar" placeholder="Ask anything you want to know . . ." />
                </div>
            </section>

            <hr />

            {/* Fourth section */}
            {/* Review */}
            <p className="text-xl mt-10 text-gray-400 mb-2"><b>Reviews</b></p>
            <a href=""><p className="text-sm text-blue-600 mb-2 text-right"><b>All Reviews</b></p></a>
            <section className="grid md:grid-cols-3 gap-2 mt-10 mb-10">
                <div className="Reviews">
                    <div className="flex">
                        {/* Image */}
                        <img className="Reviews_Image" src={Images1} alt="" />
                        {/* Name */}
                        <p className="ml-3 mr-3 font-bold">Omar Faruq</p>
                        {/* Ratings */}
                        <div>
                            <FontAwesomeIcon className="Details_Page_Review_Stars" icon={faStar} />
                            <FontAwesomeIcon className="Details_Page_Review_Stars" icon={faStar} />
                            <FontAwesomeIcon className="Details_Page_Review_Stars" icon={faStar} />
                            <FontAwesomeIcon className="Details_Page_Review_Stars" icon={faStar} />
                            <FontAwesomeIcon className="Details_Page_Review_Stars" icon={faStar} />
                        </div>
                    </div>
                    {/* Review description */}
                    <p className="ml-10">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit velit quos sunt blanditiis quae, quod consectetur.</p>
                </div>
                <div className="Reviews">
                    <div className="flex">
                        {/* Image */}
                        <img className="Reviews_Image" src={Images1} alt="" />
                        {/* Name */}
                        <p className="ml-3 mr-3 font-bold">MD Ali</p>
                        {/* Ratings */}
                        <div>
                            <FontAwesomeIcon className="Details_Page_Review_Stars" icon={faStar} />
                            <FontAwesomeIcon className="Details_Page_Review_Stars" icon={faStar} />
                            <FontAwesomeIcon className="Details_Page_Review_Stars" icon={faStar} />
                            <FontAwesomeIcon className="Details_Page_Review_Stars" icon={faStar} />
                            <FontAwesomeIcon className="Details_Page_Review_Stars" icon={faStar} />
                        </div>
                    </div>
                    {/* Review description */}
                    <p className="ml-10">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit velit quos sunt blanditiis quae, quod consectetur.</p>
                </div>
                <div className="Reviews">
                    <div className="flex">
                        {/* Image */}
                        <img className="Reviews_Image" src={Images1} alt="" />
                        {/* Name */}
                        <p className="ml-3 mr-3 font-bold">Osman</p>
                        {/* Ratings */}
                        <div>
                            <FontAwesomeIcon className="Details_Page_Review_Stars" icon={faStar} />
                            <FontAwesomeIcon className="Details_Page_Review_Stars" icon={faStar} />
                            <FontAwesomeIcon className="Details_Page_Review_Stars" icon={faStar} />
                            <FontAwesomeIcon className="Details_Page_Review_Stars" icon={faStar} />
                            <FontAwesomeIcon className="Details_Page_Review_Stars" icon={faStarHalf} />
                        </div>
                    </div>
                    {/* Review description */}
                    <p className="ml-10">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit velit quos sunt blanditiis quae, quod consectetur.</p>
                </div>
                <div className="Reviews">
                    <div className="flex">
                        {/* Image */}
                        <img className="Reviews_Image" src={Images1} alt="" />
                        {/* Name */}
                        <p className="ml-3 mr-3 font-bold">Belal</p>
                        {/* Ratings */}
                        <div>
                            <FontAwesomeIcon className="Details_Page_Review_Stars" icon={faStar} />
                            <FontAwesomeIcon className="Details_Page_Review_Stars" icon={faStar} />
                            <FontAwesomeIcon className="Details_Page_Review_Stars" icon={faStar} />
                            <FontAwesomeIcon className="Details_Page_Review_Stars" icon={faStar} />
                            <FontAwesomeIcon className="Details_Page_Review_Stars" icon={faStar} />
                        </div>
                    </div>
                    {/* Review description */}
                    <p className="ml-10">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit velit quos sunt blanditiis quae, quod consectetur.</p>
                </div>
                <div className="Reviews">
                    <div className="flex">
                        {/* Image */}
                        <img className="Reviews_Image" src={Images1} alt="" />
                        {/* Name */}
                        <p className="ml-3 mr-3 font-bold">Malik</p>
                        {/* Ratings */}
                        <div>
                            <FontAwesomeIcon className="Details_Page_Review_Stars" icon={faStar} />
                            <FontAwesomeIcon className="Details_Page_Review_Stars" icon={faStar} />
                            <FontAwesomeIcon className="Details_Page_Review_Stars" icon={faStar} />
                            <FontAwesomeIcon className="Details_Page_Review_Stars" icon={faStar} />
                            <FontAwesomeIcon className="Details_Page_Review_Stars" icon={faStarHalf} />
                        </div>
                    </div>
                    {/* Review description */}
                    <p className="ml-10">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit velit quos sunt blanditiis quae, quod consectetur.</p>
                </div>
                <div className="Reviews">
                    <div className="flex">
                        {/* Image */}
                        <img className="Reviews_Image" src={Images1} alt="" />
                        {/* Name */}
                        <p className="ml-3 mr-3 font-bold">Habib</p>
                        {/* Ratings */}
                        <div>
                            <FontAwesomeIcon className="Details_Page_Review_Stars" icon={faStar} />
                            <FontAwesomeIcon className="Details_Page_Review_Stars" icon={faStar} />
                            <FontAwesomeIcon className="Details_Page_Review_Stars" icon={faStar} />
                            <FontAwesomeIcon className="Details_Page_Review_Stars" icon={faStar} />
                            <FontAwesomeIcon className="Details_Page_Review_Stars" icon={faStarHalf} />
                        </div>
                    </div>
                    {/* Review description */}
                    <p className="ml-10">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit velit quos sunt blanditiis quae, quod consectetur.</p>
                </div>
            </section>

            <hr />

            <p className="font-bold text-2xl text-gray-600 mt-10">More items like this-</p>
            <Products />
        </section>
    );
};

export default DetailsPage;