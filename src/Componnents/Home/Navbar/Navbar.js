import React from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDolly, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import Image2 from "./cover-removebg.png";
import { Link, useHistory } from 'react-router-dom';
import Categories from '../Categories/Categories';
import bikes from '../../Home/Categories/FakeData/Bicks_data.json'

const category = {bikes}

const Navbar = () => {
   const [searchTerm, setSearchTerm] = React.useState("");
   const [searchResults, setSearchResults] = React.useState([]);
   const history = useHistory()
   const handleChange = event => {
      setSearchTerm(event.target.value);
      
    };

    const handleSearch =e =>{
        sessionStorage.removeItem('searchTerm')
       sessionStorage.setItem('searchTerm', searchTerm);
        history.push('/categories')
    }
    
    return (
        <div>
            <section className="pb-1 pt-1 Main_Navbar">
                <section className="grid flex grid-cols-3 justify-items-center">
                    {/* Company Name/Logo */}
                    <section className="flex justify-items-center ImageSection">
                        <div className="flex flex-wrap content-center">
                            <Link to="/">
                                <img className="Logo" src={Image2} alt="" />
                            </Link>
                        </div>
                    </section>
                    {/* Search bar */}
                    <section className="SearchSection">
                        <div className="flex flex-wrap content-center justify-center mb-2 w-full">
                            <input type="text"
                            type="text"
                            onChange={handleChange}
                            value={searchTerm}
                            className="Navbar__Search Font2" placeholder="Search in ecomdi.." />
                            <button onClick={handleSearch} className="Navbar_Search_Button mt-4">Search</button>
                        </div>
                    </section>
                    {/* Others(account, cart, login) */}
                    <section className="grid flex grid-cols-3 gap-y-4 justify-items-center mb-2 mt-2 Icons">
                        {/* Account */}
                        <div className="flex flex-wrap content-center">
                            <Link to="/main_page">
                                <FontAwesomeIcon className="Navbar__Icons pt-2 Profile_Icon" icon={faUserCircle} />
                            </Link>
                        </div>
                        {/* Cart */}
                        <Link className="flex Cart_Icon" to="/cart">
                            <div className="flex flex-wrap content-center ">
                                <FontAwesomeIcon className="Navbar__Icons pt-2" icon={faDolly} />
                                <p className="Navbar__Cart__Count flex grid justify-items-center flex-wrap content-center">0</p>
                            </div>
                        </Link>
                        {/* Login option */}
                        <div className="flex flex-wrap content-center">
                            <button className="Navbar_Login_Button ">Login</button>
                        </div>
                    </section>
                </section>
            </section>
            <Categories />
        </div>
    );
};

export default Navbar;