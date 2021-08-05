import React from 'react';
import './sidernav.css';
import 'antd/dist/antd.css';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
const { Sider } = Layout;
const { SubMenu } = Menu;
// function for sidebar

function handleClick(e) {
    console.log('click', e);
}
const Sidenav = () => {
    return (
        <div className=''>
            <section className="md:w-52 w-0 bg-gray-800 md:sticky sticky">
                <Layout>
                    <Sider
                        breakpoint="lg"
                        collapsedWidth="0"
                        onBreakpoint={broken => {
                            console.log(broken);
                        }}
                        onCollapse={(collapsed, type) => {
                            console.log(collapsed, type);
                        }}
                    >
                        <Menu theme="" mode="vertical" defaultSelectedKeys={['1']}>
                            <SubMenu mode="inline" title="Products">
                                {/* <Menu.Item className="loll">
                                    <Link to='/manage-product'>
                                        Manage Products
                                    </Link>

                                </Menu.Item> */}
                                <Menu.Item className="loll">
                                    <Link to='/add-product'>
                                        Add products
                                    </Link>
                                </Menu.Item>
                                <Menu.Item className="loll">
                                    <Link to='/media-center'>
                                        Media Center
                                    </Link>
                                </Menu.Item>
                                <Menu.Item className="loll">
                                    <Link to='/manage-image'>
                                        Manage Image
                                    </Link>
                                </Menu.Item>
                            </SubMenu>

                            <SubMenu title="Orders & Reviews">
                                <Menu.Item >
                                    <Link to='/manage-order'>
                                        Manage Order
                                    </Link>
                                </Menu.Item>
                                <Menu.Item >
                                    <Link to='/manage-review'>
                                        Manage Review
                                    </Link>
                                </Menu.Item>
                                {/* <Menu.Item >
                                    Schedule Drop-offs
                                </Menu.Item> */}
                            </SubMenu>
                            <SubMenu title="Promotions">
                                <Menu.Item >
                                    <Link to='/campaign'>
                                        Campaign
                                    </Link>
                                </Menu.Item>
                                <Menu.Item >
                                    <Link to='/bundles'>
                                        Bundles
                                    </Link>
                                </Menu.Item>
                                <Menu.Item >
                                    <Link to='/seller-voucher'>
                                        Seller Voucher
                                    </Link>
                                </Menu.Item>
                                <Menu.Item >
                                    <Link to='/free-shipping'>
                                        Free Shipping
                                    </Link>
                                </Menu.Item>
                                <Menu.Item >
                                    <Link to='/seller-picks'>
                                        Seller Picks
                                    </Link>
                                </Menu.Item>
                            </SubMenu>
                            {/* <Menu.Item >
                                Store Decoration
                            </Menu.Item> */}
                            <SubMenu title="Growth Center">
                                <Menu.Item >
                                    <Link to='/policy-compliance'>
                                        Policy Compliance
                                    </Link>
                                </Menu.Item>
                            </SubMenu>
                            <Menu.Item >
                                <Link to='/assortment-growth'>
                                    Assortment Growth
                                </Link>
                            </Menu.Item>
                            {/* <Menu.Item >
                                Business Advisor
                            </Menu.Item> */}
                            <SubMenu title="Finance">
                                <Menu.Item >
                                    <Link to='/account-statements'>
                                        Account Statements
                                    </Link>
                                </Menu.Item>
                                <Menu.Item >
                                    <Link to='/order-overview'>
                                        Order Overview
                                    </Link>
                                </Menu.Item>
                                <Menu.Item >
                                    <Link to='/transaction-overview'>
                                        Transaction overview
                                    </Link>
                                </Menu.Item>
                            </SubMenu>
                            <SubMenu title="Seller Support">
                                <Menu.Item >
                                    <Link to='/help-center'>
                                        Help Center
                                    </Link>
                                </Menu.Item>
                                <Menu.Item >
                                    <Link to='/contact-us'>
                                        Contact Us
                                    </Link>
                                </Menu.Item>
                            </SubMenu>
                            {/* <SubMenu title="Account & Settings">
                                <Menu.Item >
                                    Profile
                                </Menu.Item>
                                <Menu.Item >
                                    User Management
                                </Menu.Item>
                                <Menu.Item >
                                    Account Settings
                                </Menu.Item>
                                <Menu.Item >
                                    Chat settings
                                </Menu.Item>
                            </SubMenu> */}
                            {/* <SubMenu title="Seller Documents">
                                <Menu.Item >
                                    Templates
                                </Menu.Item>
                                <Menu.Item >
                                    API Documents
                                </Menu.Item>
                                <Menu.Item >
                                    API Test Tools
                                </Menu.Item>
                            </SubMenu> */}
                        </Menu>
                    </Sider>
                </Layout>
            </section>
        </div>
    )
}

export default Sidenav
