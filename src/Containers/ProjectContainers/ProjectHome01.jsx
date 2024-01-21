import Isotope from 'isotope-layout';
import React, { useEffect, useState } from 'react';
import ProjectCard02 from '../../Components/ProjectElements/ProjectCard02';

const ProjectHome01 = () => {
    const ProjectHomeData01 = [
        {
            id: '1',
            img: 'images/team/Project_2_Images/3.png',
            tag: 'residential business',
            title: 'Large Garden Lodge',
            city: 'NEW YORK',
        },
        {
            id: '2',
            img: 'images/team/Project_2_Images/4.png',
            tag: 'highrise',
            title: 'Commercial Building',
            city: 'NEW YORK',
        },
        {
            id: '3',
            img: 'images/team/Project_2_Images/5.png',
            tag: 'residential commercial',
            title: 'Modern Pent House',
            city: 'NEW YORK',
        },
        {
            id: '4',
            img: 'images/team/Project_2_Images/1.png',
            tag: 'highrise commercial',
            title: 'Large Swiming Pool',
            city: 'NEW YORK',
        },
        {
            id: '5',
            img: 'images/team/Project_2_Images/2.png',
            tag: 'business highrise',
            title: 'Highrise Architecture',
            city: 'NEW YORK',
        },

    ];

    const [filterKey, setFilterKey] = useState('*')

    useEffect(() => {
        Isotope.current = new Isotope('.grid', {
            itemSelector: '.element-item',
            percentPosition: true,
            // layoutMode: 'packery',
            // masonry: {
            //     columnWidth: '.grid-sizer'
            // },
            transformsEnabled: true,
            transitionDuration: "700ms",
            resize: true,
            fitWidth: true,
            // columnWidth: '.grid-sizer',
        })

        // cleanup
        return () => Isotope.current.destroy()
    }, []);

    // handling filter key change
    useEffect(() => {
        filterKey === '*'
            ? Isotope.current.arrange({ filter: `*` })
            : Isotope.current.arrange({ filter: `.${filterKey}` })
    }, [filterKey]);

    const handleFilterKeyChange = key => () => setFilterKey(key);

    return (
        <div className="section project_iso project_iso1">
            <div className="container-fluid g-0">
                <div className="section_header text-center">
                    <div className="shadow_icon"><img src="images/about/shadow_icon1.png" alt="" /></div>
                    <h6 className="section_sub_title">ABOUT BUILDERRINE CONSTRUCTION</h6>
                    <h1 className="section_title">Our Most Popular Projects</h1>
                </div>
                <div className="row g-0">
                    <div className="col">
                        {/* <Tabs>
                            <TabList className="button-group filters-button-group">
                                <Tab className="button is-checked" data-filter="*">All</Tab>
                                <Tab className="button" data-filter=".commercial">Commercial</Tab>
                                <Tab className="button" data-filter=".highrise">Highrise</Tab>
                                <Tab className="button" data-filter=".residential">Residential</Tab>
                                <Tab className="button" data-filter=".business">Business</Tab>
                            </TabList>


                            <div className="grid grid-5">
                                <TabPanel>
                                    <div className="element-item highrise">
                                        <div className="teambox">
                                            <img src="images/team/Project_2_Images/3.png" alt="" />
                                            <div className="teambox_inner">
                                                <div className="team_social">
                                                    <div className="share"><i className="ion-android-share-alt"></i></div>
                                                    <ul>
                                                        <li className="facebook"><a href="#"><i className="ion-social-facebook"></i></a></li>
                                                        <li className="twitter"><a href="#"><i className="ion-social-twitter"></i></a></li>
                                                        <li className="instagram"><a href="#"><i className="ion-social-instagram-outline"></i></a></li>
                                                        <li className="linkedin"><a href="#"><i className="ion-social-linkedin-outline"></i></a></li>
                                                    </ul>
                                                </div>
                                                <div className="teambox_intro">
                                                    <div className="team_flex">
                                                        <h6>NEW YORK</h6>
                                                        <h5><a href="/project-details">Multistored Building</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </TabPanel>
                                <TabPanel>
                                    <div className="element-item business highrise">
                                        <div className="teambox">
                                            <img src="images/team/Project_2_Images/4.png" alt="" />
                                            <div className="teambox_inner">
                                                <div className="team_social">
                                                    <div className="share"><i className="ion-android-share-alt"></i></div>
                                                    <ul>
                                                        <li className="facebook"><a href="#"><i className="ion-social-facebook"></i></a></li>
                                                        <li className="twitter"><a href="#"><i className="ion-social-twitter"></i></a></li>
                                                        <li className="instagram"><a href="#"><i className="ion-social-instagram-outline"></i></a></li>
                                                        <li className="linkedin"><a href="#"><i className="ion-social-linkedin-outline"></i></a></li>
                                                    </ul>
                                                </div>
                                                <div className="teambox_intro">
                                                    <div className="team_flex">
                                                        <h6>NEW YORK</h6>
                                                        <h5><a href="/project-details">Highrise Architecture</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </TabPanel>
                                <TabPanel>
                                    <div className="element-item residential ">
                                        <div className="teambox">
                                            <img src="images/team/Project_2_Images/5.png" alt="" />
                                            <div className="teambox_inner">
                                                <div className="team_social">
                                                    <div className="share"><i className="ion-android-share-alt"></i></div>
                                                    <ul>
                                                        <li className="facebook"><a href="#"><i className="ion-social-facebook"></i></a></li>
                                                        <li className="twitter"><a href="#"><i className="ion-social-twitter"></i></a></li>
                                                        <li className="instagram"><a href="#"><i className="ion-social-instagram-outline"></i></a></li>
                                                        <li className="linkedin"><a href="#"><i className="ion-social-linkedin-outline"></i></a></li>
                                                    </ul>
                                                </div>
                                                <div className="teambox_intro">
                                                    <div className="team_flex">
                                                        <h6>NEW YORK</h6>
                                                        <h5><a href="/project-details">Large Swiming Pool</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </TabPanel>
                                <TabPanel>
                                    <div className="element-item commercial">
                                        <div className="teambox">
                                            <img src="images/team/Project_2_Images/1.png" alt="" />
                                            <div className="teambox_inner">
                                                <div className="team_social">
                                                    <div className="share"><i className="ion-android-share-alt"></i></div>
                                                    <ul>
                                                        <li className="facebook"><a href="#"><i className="ion-social-facebook"></i></a></li>
                                                        <li className="twitter"><a href="#"><i className="ion-social-twitter"></i></a></li>
                                                        <li className="instagram"><a href="#"><i className="ion-social-instagram-outline"></i></a></li>
                                                        <li className="linkedin"><a href="#"><i className="ion-social-linkedin-outline"></i></a></li>
                                                    </ul>
                                                </div>
                                                <div className="teambox_intro">
                                                    <div className="team_flex">
                                                        <h6>NEW YORK</h6>
                                                        <h5><a href="/project-details">Large City Tower</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </TabPanel>
                                <TabPanel>
                                    <div className="element-item residential">
                                        <div className="teambox">
                                            <img src="images/team/Project_2_Images/2.png" alt="" />
                                            <div className="teambox_inner">
                                                <div className="team_social">
                                                    <div className="share"><i className="ion-android-share-alt"></i></div>
                                                    <ul>
                                                        <li className="facebook"><a href="#"><i className="ion-social-facebook"></i></a></li>
                                                        <li className="twitter"><a href="#"><i className="ion-social-twitter"></i></a></li>
                                                        <li className="instagram"><a href="#"><i className="ion-social-instagram-outline"></i></a></li>
                                                        <li className="linkedin"><a href="#"><i className="ion-social-linkedin-outline"></i></a></li>
                                                    </ul>
                                                </div>
                                                <div className="teambox_intro">
                                                    <div className="team_flex">
                                                        <h6>NEW YORK</h6>
                                                        <h5><a href="/project-details">Curve Sky Tower</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </TabPanel>

                            </div>


                        </Tabs> */}

                        <div className="button-group filters-button-group">
                            <button className="button" onClick={handleFilterKeyChange('*')}>All <sup className="filter-count"></sup></button>
                            <button className="button" onClick={handleFilterKeyChange('commercial')}>Commercial <sup className="filter-count"></sup></button>
                            <button className="button" onClick={handleFilterKeyChange('highrise')}>Highrise <sup className="filter-count"></sup></button>
                            <button className="button" onClick={handleFilterKeyChange('residential')}>Residential <sup className="filter-count"></sup></button>
                            <button className="button" onClick={handleFilterKeyChange('business')}>Business <sup className="filter-count"></sup></button>

                        </div>

                        <div class="grid grid-5">
                            {
                                ProjectHomeData01.map(data => <ProjectCard02
                                    key={data.id}
                                    data={data}
                                />)
                            }

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectHome01;