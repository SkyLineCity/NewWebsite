import React from 'react';
import AboutBelowContent from '../../Components/ExperienceBlocks/AboutBelowContent';

const Experience = () => {
    const headerData = {
        img: 'images/about/shadow_icon1.png',
        heading: 'Building A New Era in world of Construction',
        subheading: 'ABOUT BUILDERRINE CONSTRUCTION',
    };

    const ExpericenData = [
        {
            id: '1',
            title: 'Most Reliable',
            description: 'More than 200 Company trusted us'

        },
        {
            id: '2',
            title: 'Cost Effective',
            description: 'Builderrine is famous for its cost effectiveness'
        },
    ];

    return (
        <div className="experience section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="group_image_holder type_1">
                            <div className="expe_box">
                                <div className="expe_box_inner">
                                    <h1>35</h1>
                                    Years of Experience
                                </div>
                            </div>
                            <div className="image_object">
                                <img src="images/about/1.png" alt="" />
                                <div className="object">
                                    <img src="images/about/3.png" alt="About" />
                                    <img src="images/about/3.png" alt="About" />
                                    <img src="images/about/3.png" alt="About" />
                                    <img src="images/about/s1.png" alt="About" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <div className="experience_content">
                            <div className="section_header">
                                <div className="shadow_icon"><img src={headerData.img} alt="" /></div>
                                <h6 className="section_sub_title">{headerData.subheading}</h6>
                                <h1 className="section_title">{headerData.heading}</h1>
                                <p className="section_desc">Builderrine is the safe, reliable and cost effective construction company. We offer best construction Services. We have more than 35 years of experience in the field of building & construction. If you want to build any highrise or housing projects, you are in the best palce right now</p>
                                <div className="about_below">
                                    {
                                        ExpericenData.map(data =>
                                            <AboutBelowContent
                                                key={data.id}
                                                data={data}
                                            />
                                        )
                                    }

                                </div>
                            </div>
                            <a className="button" href="/about">Learn More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experience;