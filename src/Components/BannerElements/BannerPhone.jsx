import React from 'react';

const BannerPhone = (props) => {
    return (
        <div className="banner_phone">
            <h4>{props.heading}</h4>
            <span>{props.phone}</span>
        </div>
    );
};

export default BannerPhone;