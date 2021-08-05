import React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import './CategoriesNavigation.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBaby, faBiking, faCamera, faChargingStation, faFemale, faFutbol, faMobileAlt, faMountain, faShoppingBasket, faTshirt, faTv, faUserMd, faUtensils } from '@fortawesome/free-solid-svg-icons';

const { SubMenu } = Menu;

function handleClick(e) {
    console.log('click', e);
}

const CategoriesNavigation = () => {
    return (
        <section className="mt-5">
            <Menu onClick={handleClick} mode="vertical">
                <SubMenu title={<div>
                    <FontAwesomeIcon icon={faMobileAlt} className="CategoriesNavigation_Icons" />Mobile & Laptop
                </div>}>
                    <Menu.Item className="loll">
                        <Link to='/category/Mobile'>All Phone</Link>
                    </Menu.Item>
                    <Menu.Item className="loll">
                        <Link to='/category/laptop'>All Laptops</Link>
                    </Menu.Item>
                    <Menu.Item className="loll">
                        <Link to='/category/Mobile/nokia'>Nokia</Link>
                    </Menu.Item>
                    <Menu.Item className="loll">
                        <Link to='/category/blackberry'> Blackberry</Link>
                    </Menu.Item>
                    <Menu.Item className="loll">
                        <Link to='/category/Mobile/Realme'>Realme</Link>
                    </Menu.Item>
                    <Menu.Item >
                        <Link to='/category/Mobile/Samsung'>SamSung</Link>
                    </Menu.Item>
                    <Menu.Item >
                        <Link to='/category/Mobile/Walton'>Walton</Link>
                    </Menu.Item>
                    <Menu.Item >
                        <Link to='/category/Mobile/Iphone'>
                            Iphone
                        </Link>
                    </Menu.Item>
                    <Menu.Item >
                        <Link to='/category/Mobile/Android'>
                            Android
                        </Link>
                    </Menu.Item>
                    <Menu.Item >
                        <Link to='/category/laptop/Asus'>
                            Asus
                        </Link>
                    </Menu.Item>
                    <Menu.Item >
                        <Link to='/category/laptop/Lenovo'>
                            Lenovo
                        </Link>
                    </Menu.Item>
                    <Menu.Item >
                        <Link to='/category/laptop/Macbook'>
                            Mabook
                        </Link>
                    </Menu.Item>
                    <Menu.Item >
                        <Link to='/category/laptop/Dell'>
                            Dell
                        </Link>
                    </Menu.Item>
                    <Menu.Item >
                        <Link to='/category/laptop/Hp'>
                            Hp
                        </Link>
                    </Menu.Item>
                </SubMenu>
                <SubMenu title=
                    {<div>
                        <FontAwesomeIcon icon={faBiking} className="CategoriesNavigation_Icons2" /> Bick & Scooter
                    </div>}>
                    <SubMenu title="Bicks">
                        <Menu.Item >
                            <Link to='/category/Bikes'>
                                All Bicks
                            </Link>
                        </Menu.Item>
                        <Menu.Item >
                            <Link to='/category/Bikes/Tvs'>
                                TVS
                            </Link>
                        </Menu.Item>
                        <Menu.Item >
                            <Link to='/category/Bikes/suzuki'>
                                Suzuki
                            </Link>
                        </Menu.Item>
                        <Menu.Item >
                            <Link to='/category/Bikes/hero'>
                                Hero
                            </Link>
                        </Menu.Item>
                        <Menu.Item >
                            <Link to='/category/Bikes/yamaha'>
                                Yamaha
                            </Link>
                        </Menu.Item>
                        <Menu.Item >
                            <Link to='/category/Bikes/honda'>
                                Honda
                            </Link>
                        </Menu.Item>
                        <Menu.Item >
                            <Link to='/category/Bikes/comuter-bike'>
                                Comuter Bike
                            </Link>
                        </Menu.Item>
                        <Menu.Item >
                            <Link to='/category/Bikes/Sports_Bike'>
                                Sports Bike
                            </Link>
                        </Menu.Item>
                        <Menu.Item >
                            <Link to='/category/Bikes/Nacked_Bike'>
                                Nacked Bike
                            </Link>
                        </Menu.Item>
                    </SubMenu>
                    <Menu.Item >
                        <Link to='/category/Bikes/Scooter'>
                            Scooter
                        </Link>
                    </Menu.Item>
                </SubMenu>
                <SubMenu title=
                    {<div>
                        <FontAwesomeIcon icon={faShoppingBasket} className="CategoriesNavigation_Icons2" /> Groceries
                    </div>}>
                    <Menu.Item >
                        <Link to='/category/Groceries'>
                            All Groceries
                        </Link>
                    </Menu.Item>
                    <Menu.Item >
                        <Link to='/category/Groceries/oil'>
                            Oil
                        </Link>
                    </Menu.Item>
                    <Menu.Item >
                        <Link to='/category/Groceries/chal'>
                            Chal
                        </Link>
                    </Menu.Item>
                    <Menu.Item >
                        <Link to='/category/Groceries./spices'>
                            Spices
                        </Link>
                    </Menu.Item>
                    <Menu.Item >
                        <Link to='/category/Groceries./dry_fruits'>
                            Dry Fruits
                        </Link>
                    </Menu.Item>
                </SubMenu>
                <Menu.Item >
                    <Link to='/category/Television'>
                        <div>
                            <FontAwesomeIcon icon={faTv} className="CategoriesNavigation_Icons2" /> Television
                        </div>
                    </Link>
                </Menu.Item>
                <Menu.Item >
                    <Link to='/category/Security_Camera'>
                        <div>
                            <FontAwesomeIcon icon={faCamera} className="CategoriesNavigation_Icons2" /> Security Camera
                        </div>
                    </Link>
                </Menu.Item>
                <Menu.Item >
                    <Link to='/category/smart_gadgets'>
                        <div>
                            <FontAwesomeIcon icon={faChargingStation} className="CategoriesNavigation_Icons2" /> Smart Gadgets
                        </div>
                    </Link>
                </Menu.Item>
                <Menu.Item >
                    <Link to='/category/health_and_beauty'>
                        <div>
                            <FontAwesomeIcon icon={faUserMd} className="CategoriesNavigation_Icons2" /> Health & Beauty
                        </div>
                    </Link>
                </Menu.Item>
                <Menu.Item >
                    <Link to='/category/men_fashion'>
                        <div>
                            <FontAwesomeIcon icon={faTshirt} className="CategoriesNavigation_Icons2" /> Men's Fashion
                        </div>
                    </Link>
                </Menu.Item>
                <Menu.Item >
                    <Link to='/category/women_fashion'>
                        <div>
                            <FontAwesomeIcon icon={faFemale} className="CategoriesNavigation_Icons2" /> Women's Fashion
                        </div>
                    </Link>
                </Menu.Item>

                <SubMenu title={<div>
                    <FontAwesomeIcon icon={faUtensils} className="CategoriesNavigation_Icons2" /> Home & Lifestyle
                </div>}>
                    <   Menu.Item >
                        <Link to='/category/Home_Lifestyle/home_accecories'>
                            Home Accecories
                        </Link>
                    </Menu.Item>
                    <Menu.Item >
                        <Link to='/category/Home_Lifestyle/kitchen'>
                            Kitchen
                        </Link>
                    </Menu.Item>
                    <Menu.Item >
                        <Link to='/category/Home_Lifestyle/blender'>
                            Blender
                        </Link>
                    </Menu.Item>
                    <Menu.Item >
                        <Link to='/category/Home_Lifestyle/water_filter'>
                            Water Filter
                        </Link>
                    </Menu.Item>
                    <Menu.Item >
                        <Link to='/category/Home_Lifestyle/chair_table'>
                            Chairs & Tables
                        </Link>
                    </Menu.Item>
                    <Menu.Item >
                        <Link to='/category/Home_Lifestyle/doormats'>
                            Doormats
                        </Link>
                    </Menu.Item>
                </SubMenu>
                <Menu.Item >
                    <Link to='/category/babies_toys'>
                        <div>
                            <FontAwesomeIcon icon={faBaby} className="CategoriesNavigation_Icons2" /> Babies & Toys
                        </div>
                    </Link>
                </Menu.Item>
                <Menu.Item >
                    <Link to='/category/sports'>
                        <div>
                            <FontAwesomeIcon icon={faFutbol} className="CategoriesNavigation_Icons2" /> Sports
                        </div>
                    </Link>
                </Menu.Item>
                <Menu.Item >
                    <Link to='/category/touring'>
                        
                        <div>
                            <FontAwesomeIcon icon={faMountain} className="CategoriesNavigation_Icons2" /> Touring
                        </div>
                    </Link>
                </Menu.Item>


            </Menu>
        </section>
    );
};

export default CategoriesNavigation;