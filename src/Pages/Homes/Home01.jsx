import React from 'react';
import Partners01 from '../../Components/Partners/Partners01';
import Banner from '../../Containers/Banner';
import Blog from '../../Containers/Blogs/Blog';
import Experience from '../../Containers/Experiences/Experience';
import FunFact01 from '../../Containers/Funfacts/FunFact01';
import ProjectHome01 from '../../Containers/ProjectContainers/ProjectHome01';
import ServiceHome01 from '../../Containers/ServiceContainers/ServiceHome01';
import Testimonial01 from '../../Containers/Testimonials/Testimonial01';
import Slider from '../../Containers/ThemeSliders/Slider';

const Home01 = () => {
    return (
        <div className="main_wrapper">
            <Slider />
            <ServiceHome01 />
            <Experience />
            <FunFact01 />

            <ProjectHome01 />

            <Banner
                title='Builderrine is proud to serve you 24/7. Just Call Us when you need'
                heading='Call Us Anytime'
                phone='(917)-561-8956'
                bannerType='banner type_3'
            />

            <Testimonial01 pb='pd_btom_80' />

            <Blog />
            <Partners01 />

        </div>
    );
};

export default Home01;
