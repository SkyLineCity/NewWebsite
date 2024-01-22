import React from 'react';
import PageHeader from '../Components/common/PageHeader';
import Partners02 from '../Components/Partners/Partners02';
import TopFeatures from '../Components/TopFeatures';
import Banner from '../Containers/Banner';
import ExperienceAbout from '../Containers/Experiences/ExperienceAbout';
import FunFactAbout from '../Containers/Funfacts/FunFactAbout';
import Team from '../Containers/Team';
import Testimonial01 from '../Containers/Testimonials/Testimonial01';

const About = () => {
    const AboutBannerData = {
        title: 'Builderrine is proud to serve you 24/7. Just Call Us when you need',
        heading: 'Call Us Anytime',
        phone: '(+917)-561-8956'
    }
    return (
        <>
            <PageHeader activeClass01='active' activeClass02='d-none' routeName01='About Us' heading='About Company' />

            <div className="main_wrapper">
                <TopFeatures />

                <ExperienceAbout />

                <FunFactAbout />

                <Team pb='pd_btom_110' />

                <Banner
                    title={AboutBannerData.title}
                    heading={AboutBannerData.heading}
                    phone={AboutBannerData.phone}
                    bannerType='banner type_3'
                />

                <Testimonial01 pb='pd_btom_110' />
                <Partners02 pt='pd_tp_110' />
            </div>
        </>
    );
};

export default About;
