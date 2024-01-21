import React from 'react';
import { EffectCoverflow, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import SliderCard02 from '../../Components/SliderCards/SliderCard02';
const Slider02 = () => {
    const SwiperSlideData02 = [
        {
            id: '1',
            bg: 'images/slider/bg3.jpg',
            heading: 'Best Constructors To Make your Dream Project Into Reality',
            description: 'Safe, Reliable and Cost Effective Construction company. We offer best construction Services.',
            obj1: 'floating_object_3',
            obj2: 'floating_object_4',
            obj3: 'floating_object_5',
            obj4: 'floating_object_6',
            img1: 'images/slider/objects/3.png',
            img2: 'images/slider/objects/4.png',
            img3: 'images/slider/objects/5.png',
            img4: 'images/slider/objects/6.png',
        },
        {
            id: '2',
            bg: 'images/slider/bg2.jpg',
            heading: 'Great Planning to Build Your Dream into Real Word.',
            description: 'Safe, Reliable and Cost Effective Construction company. We offer best construction Services.',
            obj1: 'floating_object_1',
            obj2: 'floating_object_2',
            obj3: 'floating_object_5',
            obj4: 'floating_object_6',
            img1: 'images/slider/objects/1.png',
            img2: 'images/slider/objects/2.png',
            img3: 'images/slider/objects/5.png',
            img4: 'images/slider/objects/6.png',
        },
    ]
    return (
        <div className="theme_slider_2">
            <div className="swiper-container">
                {/* <div className="swiper-wrapper"> */}
                <Swiper
                    // className='swiper-wrapper'
                    modules={[Pagination, Navigation, EffectCoverflow]}
                    effect={"coverflow"}

                    slidesPerView={1}
                    // loop={true}
                    // centeredSlides={true}
                    // controller={{ inverse: true }}
                    pagination={{
                        el: 'swiper-pagination',
                        clickable: true,
                    }}
                    navigation={{
                        prevEl: '.swiper-button-prev',
                        nextEl: '.swiper-button-next',
                    }}
                >
                    {
                        SwiperSlideData02.map(data => <SwiperSlide> <SliderCard02
                            key={data.id}
                            data={data}
                        /></SwiperSlide>)
                    }


                </Swiper>
                {/* <!-- Add Pagination --> */}
                <div className="swiper-pagination"></div>

                {/* <!-- Add Buttons --> */}
                <div className="swiper-navigation">
                    <div className="swiper-button-prev"></div>
                    <div className="swiper-button-next"></div>
                </div>
            </div>
        </div>
    );
};

export default Slider02;