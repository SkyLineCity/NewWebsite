import React from 'react';
import AboutBelowContent02 from '../../Components/ExperienceBlocks/AboutBelowContent02';

const ExperienceAbout = () => {
    const headerData = {
        heading: 'Building Dream into Reality',
        subheading: 'ABOUT BUILDERRINE CONSTRUCTION',
    };

    const ExpericenData = [
        {
            id: '1',
            title: 'Our Mission',
            description: 'Builderrine is the safe, reliable and cost effective builder company. We offer best construction Services.',
            img: 'images/about/t1.png'

        },
        {
            id: '2',
            title: 'Our Vision',
            description: 'Builderrine is the safe, reliable and cost effective builder company. We offer best construction Services.',
            img: 'images/about/t2.png'
        },
    ];
    return (
        <div className="experience">
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
                            <img src="images/about/1.png" alt="" />
                            <div className="object">
                                <img src="images/about/3.png" alt="About" />
                                <img src="images/about/3.png" alt="About" />
                                <img src="images/about/3.png" alt="About" />
                                <img src="images/about/s1.png" alt="About" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <div className="experience_content about">
                            <div className="section_header">
                                <h6 className="section_sub_title">{headerData.subheading}</h6>
                                <h1 className="section_title">{headerData.heading}</h1>
                                <p className="section_desc">Builderrine is the safe, reliable and cost effective construction company. We offer best construction Services. We have more than 35 years of experience in the field of building & construction. If yo</p>
                                <div className="about_below">
                                    {
                                        ExpericenData.map(data =>
                                            <AboutBelowContent02
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

export default ExperienceAbout;