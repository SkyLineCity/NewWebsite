import React from 'react';
import BannerPhone from '../Components/BannerElements/BannerPhone';
import BannerText from '../Components/BannerElements/BannerText';

const Banner = (props) => {

    return (
        <div className={props.bannerType}>
            <div className="container">
                <div className="banner_content">
                    <div className="row">
                        <div className="col-lg-8">
                            <BannerText title={props.title} />
                        </div>
                        <div className="col-lg-4">
                            <BannerPhone heading={props.heading} phone={props.phone} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;