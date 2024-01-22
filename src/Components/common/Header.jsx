import React, { useState } from 'react';
import MobileNav from './MobileNav/MobileNav';

const Header = () => {
    // Hide header on scroll down
    window.onscroll = function () { myFunction() }; function myFunction() {
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            document.querySelector('header').classList.add('dark_mode');
            document.querySelector('header .top_bar').classList.add('top-up');
        } else {
            document.querySelector('header').classList.remove('dark_mode');
            document.querySelector('header .top_bar').classList.remove('top-up');
        }
    }

    const [isActive, setActive] = useState("false");
    const handleToggle = () => {
        setActive(!isActive);
    };

    return (
        <>
            <header className="header">
                {/* <PreHeader /> */}

                <div className="top_bar" id='top-bar'>
                    <div className="container">
                        <div className="top_bar_inner">
                            <div className="header_social">
                                <h6>Follow Us</h6>
                                <ul className="top_social">
                                    <li className="facebook"><a href="https://www.instagram.com/skylinecity_team/"><i className="ion-social-facebook"></i></a></li>
                                    <li className="twitter"><a href="https://www.instagram.com/skylinecity_team/"><i className="ion-social-twitter"></i></a></li>
                                    <li className="dribbble"><a href="https://www.instagram.com/skylinecity_team/"><i className="ion-social-dribbble-outline"></i></a></li>
                                    <li className="instagram"><a href="https://www.instagram.com/skylinecity_team/"><i className="ion-social-instagram-outline"></i></a></li>
                                    <li className="linkedin"><a href="https://www.instagram.com/skylinecity_team/"><i className="ion-social-linkedin"></i></a></li>
                                </ul>
                            </div>
                            <div className="header_info">
                                <div className="schedule">
                                    <div className="hide_icon d-md-none" data-text="Monday - Friday (9.00am - 9.00pm)"> <span><i className="fa fa-clock-o"></i></span></div>
                                    <div className="d-none d-md-block"><span><i className="fa fa-clock-o"></i></span> Monday - Friday <strong>(9.00am - 9.00pm)</strong></div>
                                </div>
                                <div className="schedule">
                                    <div className="hide_icon d-md-none" data-text="builderrine@gmail.com"> <span><i className="fa fa-envelope"></i></span></div>
                                    <div className="d-none d-md-block"><span><i className="fa fa-envelope"></i></span> skylinecityny@gmail.com</div>
                                </div>
                                <div className="free_contact">
                                    <a href="/contact" className="btn">Request Free Quote</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="middle_bar">
                    <div className="container">
                        <div className="middle_bar_inner">
                            <div className="logo">
                                <a href="/" className="light_mode_logo"><img src="images/Skct_logo.jpg" alt="logo" /></a>
                                <a href="/" className="dark_mode_logo"><img src="images/Skct_logo.jpg" alt="logo" /></a>
                            </div>

                            <div className="header_right_part">
                                <div className="mainnav">
                                    <ul className="main_menu">
                                        <li className="menu-item menu-item-has-children active"><a href="/">Home</a>
                                            <ul className="sub-menu">
                                                <li className="menu-item active"><a href="/">Home One</a></li>
                                                <li className="menu-item"><a href="/home-2">Home Two</a></li>
                                            </ul>
                                        </li>
                                        <li className="menu-item menu-item-has-children"><a href="/services">Services</a>
                                            <ul className="sub-menu">
                                                <li className="menu-item"><a href="/services">Service One</a></li>
                                                <li className="menu-item"><a href="/services-2">Service Two</a></li>
                                                <li className="menu-item"><a href="/service-details">Service Details</a></li>
                                            </ul>
                                        </li>
                                        <li className="menu-item menu-item-has-children"><a href="/project">Projects</a>
                                            <ul className="sub-menu">
                                                <li className="menu-item"><a href="/project">Projects One</a></li>
                                                <li className="menu-item"><a href="/project-2">Peojects Two</a></li>
                                                <li className="menu-item"><a href="/project-details">Peojects Details</a></li>
                                            </ul>
                                        </li>
                                        <li className="menu-item menu-item-has-children"><a href="/">Pages</a>
                                            <ul className="sub-menu">
                                                <li className="menu-item"><a href="/about">About</a></li>
                                                <li className="menu-item"><a href="/team">Team</a></li>
                                                <li className="menu-item"><a href="/faq">FAQ</a></li>
                                                <li className="menu-item menu-item-has-children"><a href="/project">Shop</a>
                                                    <ul className="sub-menu">
                                                        <li className="menu-item"><a href="/shop-1">Shop One</a></li>
                                                        <li className="menu-item"><a href="/shop-2">Shop Two</a></li>
                                                        <li className="menu-item"><a href="/shop-3">Shop Three</a></li>
                                                        {/* <li className="menu-item"><a href="/shop-4">Shop Four</a></li> */}
                                                        <li className="menu-item"><a href="/product">Product Details</a></li>
                                                        <li className="menu-item"><a href="/cart">Cart</a></li>
                                                        <li className="menu-item"><a href="/checkout">Checkout</a></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="menu-item menu-item-has-children"><a href="/">Blog</a>
                                            <ul className="sub-menu">
                                                <li className="menu-item"><a href="/blog-1">Blog One</a></li>
                                                <li className="menu-item"><a href="/blog-2">Blog Two</a></li>
                                                <li className="menu-item"><a href="/blog-details">Blog Details</a></li>
                                            </ul>
                                        </li>
                                        <li className="menu-item"><a href="/contact">Contact</a></li>
                                    </ul>
                                </div>
                                <div className="phone">
                                    <i className="fa fa-phone" aria-hidden="true"></i>
                                    <div><span>Call Us Anytime</span><br /><span className="phn_number">(917)-561-8956</span></div>
                                </div>
                                <div className='header_search' onClick={handleToggle}>
                                    <button type="submit" className="form-control-submit"><i className="ion-ios-search"></i></button>
                                </div>
                                <div id='open_search' className={isActive ? null : "active"}>
                                    <form className="search_form" action="search.php">
                                        <input type="text" name="search" className="keyword form-control" placeholder="Search..." />
                                        <button type="submit" className="form-control-submit"><i className="ion-ios-search"></i></button>
                                    </form>
                                </div>

                                <button className="ma5menu__toggle position-relative d-lg-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasHome" aria-controls="offcanvasHome"
                                >
                                    <i className="ion-android-menu"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <MobileNav />

        </>
    );
};

export default Header;
