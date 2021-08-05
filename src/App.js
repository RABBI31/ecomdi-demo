
 import {
   BrowserRouter as Router,
   Switch,
   Route,
 } from "react-router-dom";
 import React, { Suspense,lazy } from 'react' ; 
 import './App.css';    
 import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
 import Loader from "react-loader-spinner";

const Main_Page=lazy(() => import('./Componnents/My_Account/Main_Page/Main_Page'));
const YourOrders= lazy(() => import('./Componnents/My_Account/YourOrders/YourOrders'));
const Name = lazy(() => import('./Componnents/My_Account/SecurityLogin/Name/Name'));
const SecurityLogin =lazy(() => import('./Componnents/My_Account/SecurityLogin/SecurityLoginPage/SecurityLogin' ));
const Email =lazy(() => import( './Componnents/My_Account/SecurityLogin/Email/Email'));
const EmailOTP =lazy(() => import('./Componnents/My_Account/SecurityLogin/EmailOTP/EmailOTP'));
const MailChangeConfirm =lazy(() => import('./Componnents/My_Account/SecurityLogin/MailChangeConfirm/MailChangeConfirm' ));

const Mobile =lazy(() => import('./Componnents/My_Account/SecurityLogin/Mobile/Mobile'));
const MobileOTP =lazy(() => import( './Componnents/My_Account/SecurityLogin/MobileOTP/MobileOTP'));
const Password =lazy(() => import('./Componnents/My_Account/SecurityLogin/Password/Password'));
const Country =lazy(() => import('./Componnents/My_Account/SecurityLogin/Country/Country'));
const TwoStepVerification =lazy(() => import('./Componnents/My_Account/SecurityLogin/TwoStepVerification/TwoStepVerification'));
const Address =lazy(() => import('./Componnents/My_Account/SecurityLogin/Address/Address' ));
const Step1 =lazy(() => import('./Componnents/My_Account/SecurityLogin/Step1/Step1'));
const TwoStepMobileOTP =lazy(() => import('./Componnents/My_Account/SecurityLogin/TwoStepMobileOTP/TwoStepMobileOTP'));
const Step2  =lazy(() => import( './Componnents/My_Account/SecurityLogin/Step2/Step2'));
const SecureYourAccount  =lazy(() => import('./Componnents/My_Account/SecurityLogin/SecureYourAccount/SecureYourAccount' ));
const Vouchers  =lazy(() => import( './Componnents/My_Account/Voucher/Vouchers/Vouchers'));
const YourPayments  =lazy(() => import('./Componnents/My_Account/Payments/YourPayments/YourPayments' ));
const YourProfiles  =lazy(() => import( './Componnents/My_Account/Profiles/YourProfiles/YourProfiles'));
const ManageYourProfiles =lazy(() => import( './Componnents/My_Account/Profiles/ManageYourProfiles/ManageYourProfiles'));
const Devices  =lazy(() => import('./Componnents/My_Account/DeviceAndContents/Devices/Devices'));
const ManageDevices  = lazy(() => import('./Componnents/My_Account/DeviceAndContents/ManageDevices/ManageDevices'));
const Navbar  = lazy(() => import('./Componnents/Home/Navbar/Navbar'));
const Home_Page  =lazy(() => import('./Componnents/Home/Home_Page/Home_Page'));
const Banner  =lazy(() => import('./Componnents/Home/Banner/Banner'));
const Products  =lazy(() => import( './Componnents/Home/Products/Products'));
const AllCategories  =lazy(() => import( './Componnents/Categories/AllCategories/AllCategories'));
const DetailsPage  =lazy(() => import('./Componnents/DetailsPage/DetailsPage' ));
const Footer  =lazy(() => import( './Componnents/Home/Footer/Footer'));
const Categories  =lazy(() => import( './Componnents/Home/Categories/Categories'));
const Cart  =lazy(() => import('./Componnents/Cart/Cart/Cart'));
const Checkout  =lazy(() => import('./Componnents/Cart/Checkout/Checkout'));
const Shipment  =lazy(() => import( './Componnents/Cart/Shipment/Shipment'));
const SwitchToSellerPage  =lazy(() => import('./Componnents/Seller/SwitchToSellerPage/SwitchToSellerPage'));
const SellerInfo  =lazy(() => import('./Componnents/Seller/SellerInfo/SellerInfo'));
const StoreInfo  =lazy(() => import('./Componnents/Seller/StoreInfo/StoreInfo'));
const Career  =lazy(() => import( './Componnents/Career/Careers/Career'));
const JobByCategories  =lazy(() => import('./Componnents/Career/JobByCategories/JobByCategories' ));
const JobsNavigation  =lazy(() => import( './Componnents/Career/JobsNavigation/JobsNavigation'));
const JobsByTeam  =lazy(() => import( './Componnents/Career/JobsByTeam/JobsByTeam'));
const JobsByLocation  =lazy(() => import( './Componnents/Career/JobsByLocation/JobsByLocation'));
const Aboutecomdi  =lazy(() => import('./Componnents/Footerpages/About/Aboutecomdi' ));
const InvestRelation  =lazy(() => import('./Componnents/Footerpages/InvRel/InvRel'));
const SellonProduct  =lazy(() => import('./Componnents/Footerpages/SellProduct/Sellpro'));
const SelerHome  =lazy(() => import( './Componnents/SellerHome/SelerHome'));
const Account  =lazy(() => import('./Componnents/Finance/Account Statements/Account' ));
const OrderOverview  =lazy(() => import( './Componnents/Finance/Order Overview/OrderOverview'));
const TransOver  =lazy(() => import( './Componnents/Finance/Transaction Overview/TransOver'));
const ProductImage  =lazy(() => import( './Componnents/Products/ProductImages/ProductImage'));
const OrderView  =lazy(() => import( './Componnents/Orders&Reviews/Manage Order/OrderView'));
const ManageReview  =lazy(() => import( './Componnents/Orders&Reviews/Manage Review/ManageReview'));
const Campaign  =lazy(() => import('./Componnents/Promotions/Campaign/Campaign' ));
const Bundles  =lazy(() => import( './Componnents/Promotions/Bundles/Bundles'));
const SellerVoucher  =lazy(() => import( './Componnents/Promotions/Seller Voucher/SellerVoucher'));
const Freeshipping  =lazy(() => import( './Componnents/Promotions/Free Shipping/Freeshipping'));
const Sellerpicks  =lazy(() => import('./Componnents/Promotions/Seller Picks/Sellerpicks'));
const PolicyCom  =lazy(() => import('./Componnents/Growth Center/PolicyCom'));
const Assortment  =lazy(() => import('./Componnents/Assortment Growth/Assortment'));
const HelpCenter  =lazy(() => import( './Componnents/Seller Help/Help Center/HelpCenter'));
const Contact  =lazy(() => import('./Componnents/Seller Help/Contact Us/Contact'));
const MediaCenter  =lazy(() => import('./Componnents/Products/Media Center/MediaCenter'));
const AddProduct  =lazy(() => import( '../src/Componnents/Products/AddProduct/AddProduct'));
const Manage  =lazy(() => import('../src/Componnents/Products/Manage Product/Manage' ));
const SingleCategory  =lazy(() => import('./Componnents/Home/Categories/SingleCategory/SingleCategory' ));
const Scrollup  =lazy(() => import( './Componnents/Home/ScrollUp/Scrollup'));
function App() {
  return (
    <Router>
     
      <Suspense fallback={<div style={{display:"flex",alignItems:"center", justifyContent:"center", marginTop:"10%", }}>
        <Loader type="Audio" color="#00BFFF" timeout={3000}  height={80} width={80} />
      </div>}>
      <Navbar />
      
      <Switch>
        <Route path="/navbar" component={Navbar}/>
        <Route path="/banner" component={Banner}/>
        <Route path="/products" component={Products}/>         
        <Route path="/main_page" component={Main_Page}/>         
        <Route path="/category/:categoryName/:subCategoryName" component={SingleCategory}/>
        <Route path="/category/:categoryName" component={SingleCategory}/>
        <Route path="/categories" component={AllCategories}/>         
        <Route path="/categorie" component={Categories}/>        
        {/* Current... */}
        <Route path="/product/:id" component={DetailsPage}/>         
        <Route path="/yourOrders" component={YourOrders}/>        
        <Route path="/switchToSellerPage" component={SwitchToSellerPage}/>         
        <Route path="/securityLogin" component={SecurityLogin}/>       
        <Route path="/cart" component={Cart}/>        
        <Route path="/sellerInfo" component={SellerInfo}/>         
        <Route path="/name" component={Name}/>         
        <Route path="/email" component={Email}/>         
        <Route path="/emailOTP" component={Email}/>        
        <Route path="/mailChangeConfirm" component={MailChangeConfirm}/>       
        <Route path="/mobile" component={Mobile}/>          
        <Route path="/mobileOTP" component={MobileOTP}/>          
        <Route path="/password" component={Password}/>          
        <Route path="/country" component={Country}/>        
        <Route path="/twoStepVerification" component={TwoStepVerification}/>        
        <Route path="/address" component={Address}/>       
        <Route path="/step1" component={Step1}/>         
        <Route path="/twoStepMobileOTP" component={TwoStepMobileOTP}/>         
        <Route path="/step2" component={Step2}/>         
        <Route path="/secureYourAccount" component={SecureYourAccount}/>        
        <Route path="/vouchers" component={Vouchers}/>        
        <Route path="/payments" component={YourPayments}/>        
        <Route path="/profiles" component={YourProfiles}/>        
        <Route path="/manageYourProfiles" component={ManageYourProfiles}/>       
        <Route path="/devices" component={Devices}/>       
        <Route path="/checkout" component={Checkout}/>     
        <Route path="/shipment" component={Shipment}/>         
        <Route path="/manageDevices" component={ManageDevices}/>         
        <Route path="/career" component={Career}/>         
        <Route path="/jobByCategories" component={JobByCategories}/>        
        <Route path="/jobsByTeam" component={JobsByTeam}/>        
        <Route path="/jobsByLocation" component={JobsByLocation}/>         
        <Route path="/jobsNavigation" component={JobsNavigation}/>         
        {/* Seller page */}
        <Route path="/seller-home" component={SelerHome}/>          
        <Route path='/manage-product' component={Manage}/>          
        <Route path='/add-product' component={AddProduct}/>        
        <Route path='/media-center' component={MediaCenter}/>        
        <Route path='/manage-image' component={ProductImage}/>        
        <Route path='/manage-order' component={OrderView}/>        
        <Route path='/manage-review' component={ManageReview}/>
        <Route path='/campaign' component={Campaign}/>
        <Route path='/bundles' component={Bundles}/>
        <Route path='/seller-voucher' component={SellerVoucher}/>         
        <Route path='/free-shipping' component={Freeshipping}/>         
        <Route path='/seller-picks' component={Sellerpicks}/>         
        <Route path='/policy-compliance' component={PolicyCom}/>        
        <Route path='/assortment-growth' component={Assortment}/>         
        <Route path='/account-statements' component={Account}/>      
        <Route path='/order-overview' component={OrderOverview}/>        
        <Route path='/transaction-overview' component={TransOver}/>       
        <Route path='/help-center' component={HelpCenter}/>        
        <Route path='/contact-us' component={Contact}/>      
        {/* seller page end */}
        <Route path="/about-ecomdi" component={Aboutecomdi}/>     
        <Route path="/investor-relation" component={InvestRelation}/>    
        <Route path='/sell-on-product' component={SellonProduct}/>
        <Route exact path="/" component={Home_Page}/>
        </Switch>
        <Footer />
        <Scrollup />
    </Suspense>
    </Router>
  );
}

export default App;