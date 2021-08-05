import React from 'react';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';
import Scrollup from '../ScrollUp/Scrollup'

const Home_Page = () => {
    return (
        <div className="BG3_2 home">
            <Banner />
            <Products />
            {/* <Scrollup />  */}
        </div>
    );
};

export default Home_Page;