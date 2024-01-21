import React from 'react';

const Slider = () => {
    return (
        <div className="theme_slider_1">
            <div className="slider">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="slide_content">
                                <h5 className="sub_heading">CALL US ANYTIME<span> +718-775-8511</span></h5>
                                <h2 className="heading">Where You Find Best Builders</h2>
                                <p className="desc">Safe, Reliable and Cost Effective Construction company. We offer best construction Services.</p>
                                <div className="slider_button">
                                    <a href="/about" className="button">Learn More</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 d-flex align-items-end">
                            <div className="layer_object">
                                <img src="images/slider/layer_2.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slider;