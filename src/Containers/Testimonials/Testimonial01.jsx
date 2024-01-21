import React from 'react';
import { Controller, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import TestimonialCard01 from '../../Components/TestimonialCards/TestimonialCard01';
// import './Testimonial.css';

const Testimonial01 = (props) => {
    const TestimonialData01 = [
        {
            id: '1',
            img: 'images/reviewer1.png',
            country: 'MIAMI',
            name: 'Johnathon Doe'
        },
        {
            id: '2',
            img: 'images/reviewer4.png',
            country: 'New York',
            name: 'Marina Samuel'
        },
        {
            id: '3',
            img: 'images/reviewer3.png',
            country: 'UTAH',
            name: 'Oakland Gardner'
        },
        {
            id: '4',
            img: 'images/reviewer1.png',
            country: 'New York',
            name: 'Johnathon Doe'
        },
        {
            id: '5',
            img: 'images/reviewer1.png',
            country: 'New York',
            name: 'Johnathon Doe'
        },

    ]
    return (
        <div className={`testimonial ${props.pb} `}>
            <div className="container">
                <div className="section_header text-center">
                    <div className="shadow_icon"><img src="images/shadow_icon3.png" alt="" /></div>
                    <h6 className="section_sub_title">Clients testimonial</h6>
                    <h1 className="section_title">What our clients say about us</h1>
                    <p className="section_desc">Builderrine is the best construction company. It has best team who are provideing best service possible.</p>
                </div>
                <div className="row">
                    <div className="col-12">
                        <Swiper
                            className="owl_testimonial1 owl-carousel owl-theme"
                            modules={[Pagination, Controller]}
                            effect={"slide"}
                            breakpoints={{
                                640: {
                                    width: 640,
                                    slidesPerView: 1,
                                },
                                768: {
                                    width: 768,
                                    slidesPerView: 2,
                                },
                            }}
                            loop={true}
                            controller={{ inverse: true }}
                            spaceBetween={50}
                            // centeredSlides={true}
                            pagination={{
                                el: '.testimonial-pagination',
                                clickable: true,
                                // dynamicBullets: true,
                            }}
                        >

                            {
                                TestimonialData01.map(data =>
                                    <SwiperSlide>
                                        <TestimonialCard01
                                            key={data.id}
                                            data={data}
                                        /></SwiperSlide>)
                            }


                        </Swiper>

                        {/* <!-- Add Pagination --> */}
                        <div className="testimonial-pagination"></div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial01;