import { faBitbucket } from '@fortawesome/free-brands-svg-icons';
import { faBaby, faBiking, faCamera, faFemale, faFutbol, faLaptop, faMobileAlt, faShoppingBasket, faThLarge, faThList, faTv, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Menu, Dropdown, Button } from 'antd';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Categories.css';



const menu = (
    <div className='mt-5'>
    <Menu className=''>
       
        <Menu.Item>
            <Link to="/category/Electronics_Devices">
                <a target="" rel="noopener noreferrer" href="#" className="categories_hover_items  ">
                    <FontAwesomeIcon icon={faThList} /> Electronics Devices
                </a>
            </Link>
        </Menu.Item>
        <Menu.Item>
            <Link to="/category/Mobile">
                <a target="" rel="noopener noreferrer" href="#" className="categories_hover_items ">
                    <FontAwesomeIcon icon={faMobileAlt} className="" /> Mobile
                </a>
            </Link>
        </Menu.Item>
        <Menu.Item>
            <Link to="/category/laptop">
                <a target="" rel="noopener noreferrer" href="#" className="categories_hover_items">
                    <FontAwesomeIcon icon={faLaptop} className="" />  Laptop
                </a>
            </Link>
        </Menu.Item>
        <Menu.Item>
            <Link to="/category/Television">
                <a target="" rel="noopener noreferrer" href="#" className="categories_hover_items">
                    <FontAwesomeIcon icon={faTv} className="" /> Television
                </a>
            </Link>
        </Menu.Item>
        <Menu.Item>
            <Link to="/category/Security_Camera">
                <a target="" rel="noopener noreferrer" href="#" className="categories_hover_items">
                    <FontAwesomeIcon icon={faCamera} className="" />  Security Cameras
                </a>
            </Link>
        </Menu.Item>
        <Menu.Item>
            <Link to="/category/Bikes">
                <a target="" rel="noopener noreferrer" href="#" className="categories_hover_items">
                    <FontAwesomeIcon icon={faBiking} className="" /> Bick and Scooter
                </a>
            </Link>
        </Menu.Item>
        <Menu.Item>
            <Link to="/category/Groceries">
                <a target="" rel="noopener noreferrer" href="#" className="categories_hover_items">
                    <FontAwesomeIcon icon={faShoppingBasket} className="" />  Groceries
                </a>
            </Link>
        </Menu.Item>
        <Menu.Item>
            <Link to="/category/women_fashion">
                <a target="" rel="noopener noreferrer" href="#" className="categories_hover_items">
                    <FontAwesomeIcon icon={faFemale} className="" />  Women's Fasion
                </a>
            </Link>
        </Menu.Item>
        <Menu.Item>
            <Link to="/category/men_fashion">
                <a target="" rel="noopener noreferrer" href="#" className="categories_hover_items">
                    <FontAwesomeIcon icon={faUser} className="" />  Men's Fasion
                </a>
            </Link>
        </Menu.Item>
        <Menu.Item>
            <Link to="/category/babies_toys">
                <a target="" rel="noopener noreferrer" href="#" className="categories_hover_items">
                    <FontAwesomeIcon icon={faBaby} className="" />  Babies and Toy's
                </a>
            </Link>
        </Menu.Item>
        <Menu.Item>
            <Link to="/category/sports">
                <a target="" rel="noopener noreferrer" href="#" className="categories_hover_items">
                    <FontAwesomeIcon icon={faFutbol} className="" />  Sports
                </a>
            </Link>
        </Menu.Item>
    </Menu>
    </div>
);

const Categories = () => {
    
    return (
        <section className="mt-1 mb-1 ml-2 mb-10">
            <div className="grid md:grid-cols-7 Categories grid-cols-1 Font2 text-center pl-10 pr-10 gap-2">
                <div className="flex justify-center ">
                    <Dropdown overlay={menu} placement="bottomRight" arrow className=''>
                        <Link to="/categories">
                            <button className="All_Categories py-1 pl-3 pr-3   "><FontAwesomeIcon icon={faThList} /> All Categories</button>
                        </Link>
                    </Dropdown>
                </div>
                <button className="Categories_Button py-3 px-2">Mobile</button>
                <button className="Categories_Button py-3">Laptop</button>
                <button className="Categories_Button py-3">Bick & Scooter</button>
                <button className="Categories_Button py-3">Groceries</button>
                <button className="Categories_Button py-3">Television</button>
                <Link to="/switchToSellerPage">
                    <button className="Categories_Button Roboto text-2xl Sell py-3"><b>Sell</b></button>
                </Link>
            </div>
        </section>
    );
};

export default Categories;