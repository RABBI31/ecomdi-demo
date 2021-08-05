import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import laptop from '../FakeData/Laptop_Data.json';
import Mobile from '../FakeData/Mobile_data.json';
import Bikes from '../FakeData/Bicks_data.json';
import babies_toys from '../FakeData/BTData.json';
import TVS_data from '../FakeData/Tvsdata.json';
import Security_Camera from '../FakeData/SCdata.json'
import Groceries from '../FakeData/Groceries_data.json'
import Television from '../FakeData/Tvdata.json';
import sports from '../FakeData/Sportsdata.json'
import women_fashion from '../FakeData/WFdata.json';
import men_fashion from '../FakeData/MFdata.json';
import Electronics_Devices from '../FakeData/Blackberry.json';
import blackberry from '../FakeData/Blackberry.json';
import comuter_bike from '../FakeData/Comdata.json';
import health_and_beauty from '../FakeData/HBdata.json'
import hero from '../FakeData/Herodata.json'
import honda from '../FakeData/Hondadata.json'
import Nacked_Bike from '../FakeData/Nacdata.json'
import Scooter from '../FakeData/Scooter_data.json'
import smart_gadgets from '../FakeData/SMGData.json'
import Sports_Bike from '../FakeData/Sportdata.json';
import suzuki from '../FakeData/Suzukidata.json'
import touring from '../FakeData/Tourdata.json';
import Tvs from '../FakeData/Tvsdata.json';
import yamaha from '../FakeData/Yamdata.json';
import Android from '../FakeData/Addata.json';
import Iphone from '../FakeData/Ipdata.json';
import nokia from '../FakeData/Nokiadata.json';
import Realme from '../FakeData/Rmdata.json';
import Samsung from '../FakeData/Smdata.json';
import Walton from '../FakeData/Wldata.json';
import Hp from '../FakeData/HpData.json';
import Asus from '../FakeData/Asusdata.json';
import Dell from '../FakeData/DellData.json';
import Lenovo from '../FakeData/LvData.json';
import Macbook from '../FakeData/Macdata.json';
import blender from '../FakeData/Blenderdata.json';
import water_filter from '../FakeData/WaterFdata.json';
import kitchen from '../FakeData/Kitchendata.json';
import home_accecories from '../FakeData/HCdata.json';
import doormats from '../FakeData/Doormatdata.json';
import chair_table from '../FakeData/CTdata.json'
import spices from '../FakeData/Spicesdata.json'
import oil from '../FakeData/Oildata.json'
import dry_fruits from '../FakeData/Dfdata.json'
import chal from '../FakeData/Chaldata.json'

import './SingleCategory.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import CategoriesNavigation from '../../../Categories/CategoriesNavigation/CategoriesNavigation';

const CategoryDataList={
    chal,oil,spices,dry_fruits,home_accecories,kitchen,Macbook,Lenovo,Dell,Asus,Hp,Walton,yamaha,Iphone,
    Samsung,Realme,nokia,Android,Tvs,touring,suzuki,smart_gadgets,Sports_Bike,Scooter,comuter_bike,health_and_beauty,
    hero,honda,Nacked_Bike,blender,chair_table,blackberry,water_filter,doormats,laptop, Security_Camera, Mobile,
    Groceries,Electronics_Devices,women_fashion, Bikes,men_fashion,Television,babies_toys,sports,
}

const SingleCategory = () => {
    const{categoryName,subCategoryName}=useParams();
    const [CategoryData, setCategoryData] = useState([]);
    useEffect(() => {
        setCategoryData(CategoryDataList[subCategoryName?subCategoryName:categoryName]);
    }, [subCategoryName?subCategoryName:categoryName])
    console.log(CategoryData)
    return (
        <section className="flex ">
        <div className="text-center ml-5 mr-2">
            <CategoriesNavigation/>
        </div>
        <div className="container">
            <p className="grid font-bold text-2xl ml-5 test mt-5">{subCategoryName?CategoryData[0]?.type:"All "+CategoryData[0]?.type}</p>

            <section className="grid md:grid-cols-5 grid-cols-1 mb-10">
                {
                    CategoryData.map((e) => { 
                        return (
                            <div className="flex justify-center ">
                                <div className="mb-3 mt-5 bg-white shadow-md hover:shadow-lg Products_Cards ">
                                    <img className="mb-2 Products_Images" src={e.image} alt="" />
                                    <p className="text-center font-bold text-xl">{e.name}</p>
                                    <div className="grid grid-cols-3 mb-2 text-center mt-3 flex justify-center">
                                        <p className="Font1 Product_Price">{e.price}</p>
                                        <p className="Product_Discount Font1">-35%</p>
                                        <p className="Product_Cart_Icon flex justify-center"><FontAwesomeIcon icon={faCartPlus} /></p>
                                    </div>
                                </div>
                            </div>)
                    })
                }
            </section>
            </div>
            
            </section>
    );
};

export default SingleCategory;