import React from 'react'
import './Aboutecomdi.css';
import { Card, Row, Col } from 'antd';
import { Carousel } from 'antd';
import { Layout, Menu, Breadcrumb } from 'antd';

const { Header, Content, Footer } = Layout;



const { Meta } = Card;


const Aboutecomdi = () => {
    return (
        <div className=''>
            <div>
                <Row>
                    <Col span={12} className=' md:grid grid-cols-2 ml-6'>
                        <Card

                            style={{ width: 550, backgroundColor: '#F7F7F7' }}
                            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                        >
                            <div>
                                <a href='#' style={{ color: '#000', textDecoration: 'underline', fontSize: '20px' }}>
                                    “Alexa helped me save my house from burning down”
                                </a>
                                <div>
                                    <a href='#' style={{ color: '#000', marginTop: '15px' }}>
                                        As machine learning remakes global industries, developers need a diversity of brain power. A partnership involving Amazon Web Services (AWS), Udacity, Girls in Tech, and the National Society of Black Engineers developed a free class on the foundations of machine learning, the AWS Machine Learning Foundations Course.
                                    </a>
                                </div>
                                <a href='#' style={{ color: '#000' }}>
                                    Read more
                                </a>
                            </div>
                        </Card>
                    </Col>
                    <Col span={11} className=''>
                        <Card title="Top Stories" extra={<a href="#"></a>} style={{ width: 500, backgroundColor: '#F7F7F7' }}>
                            <Row>
                                <Col span={12}>
                                    <img alt="example" src="https://photoshop-kopona.com/uploads/posts/2020-04/1585737788_1-2.jpg" style={{ width: 150 }} />
                                </Col>
                                <Col span={12} >
                                    <a href='#' style={{ color: '#000' }}>
                                        “Alexa helped me save my house from burning down”
                                    </a>
                                </Col>
                            </Row>
                        </Card>
                        <Card style={{ width: 500, backgroundColor: '#F7F7F7' }}>
                            <Row>
                                <Col span={12}>
                                    <img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" style={{ width: 100 }} />
                                </Col>
                                <Col span={12} >
                                    <a href='#' style={{ color: '#000', textAlign: 'center' }}>
                                        “Alexa helped me save my house from burning down”
                                    </a>
                                </Col>
                            </Row>
                        </Card>
                        <Card style={{ width: 500, backgroundColor: '#F7F7F7' }}>
                            <Row>
                                <Col span={12}>
                                    <img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" style={{ width: 100 }} />
                                </Col>
                                <Col span={12} >
                                    <a href='#' style={{ color: '#000', textAlign: 'center' }}>
                                        “Alexa helped me save my house from burning down”
                                    </a>
                                </Col>
                            </Row>
                        </Card>
                        <Card style={{ width: 500, backgroundColor: '#F7F7F7' }}>
                            <Row>
                                <Col span={12}>
                                    <img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" style={{ width: 100 }} />
                                </Col>
                                <Col span={12} >
                                    <a href='#' style={{ color: '#000', textAlign: 'center' }}>
                                        “Alexa helped me save my house from burning down”
                                    </a>
                                </Col>
                            </Row>
                        </Card>
                        <Card style={{ width: 500, backgroundColor: '#F7F7F7' }}>
                            <Row>
                                <Col span={12}>
                                    <img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" style={{ width: 100 }} />
                                </Col>
                                <Col span={12} >
                                    <a href='#' style={{ color: '#000', textAlign: 'center' }}>
                                        “Alexa helped me save my house from burning down”
                                    </a>
                                </Col>
                            </Row>
                        </Card>
                        <Card title="See more Stories" extra={<a href="#"></a>} style={{ width: 500, backgroundColor: '#F7F7F7' }}>

                        </Card>
                    </Col>
                </Row>

            </div>
            <div className='mt-10'>
                <Row>
                    <Col span={24}>
                        <Card title="NEWSFEED" extra={<a href="#">More news come</a>} style={{ width: 'fill-width' }}>
                            <Carousel autoplay>
                                <div>
                                    <Card size="small" title="Small size card" extra={<a href="#">More</a>} style={{ width: 300 }}>
                                        <p>Card content</p>
                                        <p>Card content</p>
                                        <p>Card content</p>
                                    </Card>
                                </div>
                                <div>
                                    <Card size="small" title="Small size card" extra={<a href="#">More</a>} style={{ width: 300 }}>
                                        <p>Card content</p>
                                        <p>Card content</p>
                                        <p>Card content</p>
                                    </Card>
                                </div>
                                <div>
                                    <Card size="small" title="Small size card" extra={<a href="#">More</a>} style={{ width: 300 }}>
                                        <p>Card content</p>
                                        <p>Card content</p>
                                        <p>Card content</p>
                                    </Card>
                                </div>
                                <div>
                                    <Card size="small" title="Small size card" extra={<a href="#">More</a>} style={{ width: 300 }}>
                                        <p>Card content</p>
                                        <p>Card content</p>
                                        <p>Card content</p>
                                    </Card>
                                </div>
                            </Carousel>
                        </Card>
                    </Col>
                </Row>
            </div>
            <div className='mt-5 ml-6 mr-6 p-7 px-10 rounded md:grid grid-col-3' style={{ backgroundColor: '#18202A' }}>
                <Row className=''>
                    <Col span={6} push={16}>
                        <form className="w-full max-w-sm">
                            <div className="flex items-center border-b border-teal-500 py-2">
                                <input className="appearance-none bg-transparent border-none w-full text-black-700 mr-3 py-1 px-2 leading-tight focus:outline-none placeholder-opacity-200 placeholder-white" style={{ color: '#fff' }} type="email" placeholder='Enter Email' aria-label='Email' />
                                <button className="flex-shrink-0 text-white text-sm  text-black py-1 px-2 rounded hidden md:block" type="button">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>

                                </button>
                            </div>
                            <div className=' flex-wrap text-white mt-5 text-sm'>
                                <p>
                                    Protected by reCAPTCHA. The Google
                                    <a href='#' className='underline text-white'> Privacy Policy </a>  and
                                    <a href='#' className='underline text-white'>Terms of Service </a> apply.
                                </p>
                                <p>
                                    <a href='#' className='underline text-white'> Privacy Policy </a> ! Opt out anytime
                                </p>
                            </div>
                        </form>
                    </Col>
                    <Col span={15} pull={6} className='text-xl mt-5 p-5'>
                        <div>
                            <h3 className='' style={{ color: '#FF9900' }}>
                                Amazon News
                            </h3>
                            <p className='' style={{ color: '#fff' }}>
                                Sign up for the latest news, facts, analysis, and original stories about Amazon delivered to you.
                            </p>
                        </div>
                    </Col>
                </Row>
            </div>
            <div className='mt-5 bg-white'>
                <Layout className=" bg-white">
                    <Header className='m-10 bg-white'>
                        <Menu className='bg-white' mode="horizontal" defaultSelectedKeys={['1']}>
                            <Menu.Item id='#trending' key="1">Trending</Menu.Item>
                            <Menu.Item id='#watch-video' key="2">Watch Video</Menu.Item>
                            <Menu.Item id='#meetus' key="3">Meet US</Menu.Item>
                        </Menu>
                    </Header>
                    <div className=''>
                        <Row className='m-10'>
                            <Col id='#trending' span={8}>
                                <Card
                                    hoverable
                                    style={{ width: 240 }}
                                    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                                >
                                    <Meta title="Europe Street beat" description="www.instagram.com" />
                                </Card>
                            </Col>
                            <Col id='#meetus' span={8}>
                                <Card
                                    hoverable
                                    style={{ width: 240 }}
                                    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                                >
                                    <Meta title="Europe Street beat" description="www.instagram.com" />
                                </Card>
                            </Col>
                            <Col id='#watch-video' span={8}>
                                <Card
                                hoverable
                                style={{ width: 240 }}
                                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                            >
                                <Meta title="Europe Street beat" description="www.instagram.com" />
                            </Card></Col>
                        </Row>
                        <Row className='m-10'>
                            <Col id='#trending' span={8}>
                                <Card
                                    hoverable
                                    style={{ width: 240 }}
                                    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                                >
                                    <Meta title="Europe Street beat" description="www.instagram.com" />
                                </Card>
                            </Col>
                            <Col id='#meetus' span={8}>
                                <Card
                                    hoverable
                                    style={{ width: 240 }}
                                    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                                >
                                    <Meta title="Europe Street beat" description="www.instagram.com" />
                                </Card>
                            </Col>
                            <Col id='#watch-video' span={8}>
                                <Card
                                hoverable
                                style={{ width: 240 }}
                                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                            >
                                <Meta title="Europe Street beat" description="www.instagram.com" />
                            </Card></Col>
                        </Row>

                    </div>
                </Layout>
            </div>
        </div>
    )
}

export default Aboutecomdi
