import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import PageHeader from '../Components/common/PageHeader';
import CommunicationCard from '../Components/ContactElements/CommunicationCard';
import Map from '../Components/ContactElements/Map';
import Banner from '../Containers/Banner';

const ContactPage = () => {
    const form = useRef();
    const [showThankYouMessage, setShowThankYouMessage] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_0j8m605', 'template_0klrds9', form.current, 'JFtgB05IWgYJsvA2M')
            .then((result) => {
                console.log(result.text);
                setShowThankYouMessage(true);
            }, (error) => {
                console.log(error.text);
            });
    };


    const ContactData = [
        {
            id: '1',
            iconClass: 'ion-ios-telephone-outline',
            infoBody01: 'Phone No',
            infoBody02: '+33 987 654 321',
            infoBody03: '+33 123 456 789',
        },
        {
            id: '2',
            iconClass: 'fa fa-envelope-o',
            infoBody01: 'Email Address',
            infoBody02: 'builderrine@gmail.com',
            infoBody03: 'care@builderrine.com',
        },
        {
            id: '3',
            iconClass: 'fa fa-map-marker',
            infoBody01: 'Office Address',
            infoBody02: 'Gr. Benjamin Street 609<br /> Florida, USA',
            infoBodyClass: 'd-none',
        },
    ];

    return (
        <>
            <PageHeader activeClass01='active' activeClass02='d-none' routeName01='Contact Us' heading='Contact Us' />

            <div className="main_wrapper">
                <div className="section">
                    <div className="container">
                        <div className="gmapbox">
                            <div id="googleMap" className="map">
                                <Map />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="contact_inner">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-5">
                                <div className="keepintouch_3">
                                    {
                                        ContactData.map(data => <CommunicationCard
                                            key={data.id}
                                            data={data}
                                        />)
                                    }
                                </div>
                            </div>
                            <div className="col-lg-7 col-md-7 offset-lg-1">
                                <div className="contact_us_1">
                                    <div className="section_header">
                                        <h6 className="section_sub_title">Contact Us</h6>
                                        <h1 className="section_title">Want to Ask anything?<br />
                                            Send Us a Mail Anytime</h1>
                                    </div>
                                    <form className="contact_form" ref={form} onSubmit={sendEmail}>
                                        <div className="form-container">
                                            <div className="row">
                                                <div className="col-md-6 col-lg-6">
                                                    <div className="form-group">
                                                        <input type="text" name="user_name" className="form-control" placeholder="Your Name*" required="" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-lg-6">
                                                    <div className="form-group">
                                                        <input type="email" name="user_email" className="form-control" placeholder="Email Address*" required="" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-lg-6">
                                                    <div className="form-group">
                                                        <input type="text" name="to_name" className="form-control" placeholder="Phone No" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-lg-6">
                                                    <div className="form-group">
                                                        <input type="text" name="subject" className="form-control" placeholder="Subject" />
                                                    </div>
                                                </div>
                                                <div className="col-md-12 col-lg-12">
                                                    <div className="form-group">
                                                        <textarea name="message" className="form-control" placeholder="Message Here*" required=""></textarea>
                                                    </div>
                                                </div>
                                                <div className="col-md-12 col-lg-12">
                                                    <div className="form-group">
                                                        <input className="button" type="submit" value="Send" name="submit" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                    {showThankYouMessage && (
                                        <p style={{ marginTop: '20px', color: 'green' }}>
                                            Thank you for contacting us! We will get in touch with you shortly.
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Banner
                    title='Is Your House Secured Enough? Call Us to install Security Devices'
                    heading='Call Us Anytime'
                    phone='(917-561-8956)'
                    bannerType='banner banner_bg_color'
                />
            </div>

        </>
    );
};

export default ContactPage;
