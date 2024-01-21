import Isotope from 'isotope-layout';
import React, { useEffect, useState } from 'react';
import ProjectCard01 from '../../Components/ProjectElements/ProjectCard01';
import PaginationDiv from '../../Components/TeamElements/PaginationDiv';


const ProjectsContainers01 = () => {
    const ProjectData01 = [
        {
            id: '1',
            img: 'images/team/1.png',
            tag: 'residential business',
            title: 'Large Garden Lodge',
            city: 'NEW YORK',
        },
        {
            id: '2',
            img: 'images/team/2.png',
            tag: 'highrise',
            title: 'Commercial Building',
            city: 'NEW YORK',
        },
        {
            id: '3',
            img: 'images/team/3.png',
            tag: 'residential commercial',
            title: 'Modern Pent House',
            city: 'NEW YORK',
        },
        {
            id: '4',
            img: 'images/team/5.png',
            tag: 'highrise commercial',
            title: 'Large Swiming Pool',
            city: 'NEW YORK',
        },
        {
            id: '5',
            img: 'images/team/9.png',
            tag: 'business highrise',
            title: 'Highrise Architecture',
            city: 'NEW YORK',
        },
        {
            id: '6',
            img: 'images/team/10.png',
            tag: 'residential',
            title: 'Curve Sky Tower',
            city: 'NEW YORK',
        },
        {
            id: '7',
            img: 'images/team/11.png',
            tag: 'residential',
            title: 'Shopping Mall',
            city: 'NEW YORK',
        },
        {
            id: '8',
            img: 'images/team/12.png',
            tag: 'business residential',
            title: 'Wonderful Bridge',
            city: 'NEW YORK',
        },
        {
            id: '9',
            img: 'images/team/13.png',
            tag: 'commercial residential',
            title: 'Small House Area',
            city: 'NEW YORK',
        },
        {
            id: '10',
            img: 'images/team/14.png',
            tag: 'highrise residential',
            title: 'Modern Architecture',
            city: 'NEW YORK',
        },
        {
            id: '11',
            img: 'images/team/16.png',
            tag: 'business highrise',
            title: 'Large Swiming Pool',
            city: 'NEW YORK',
        },
        {
            id: '12',
            img: 'images/team/15.png',
            tag: 'residential',
            title: 'Modern Pent House',
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
        <div className="main_wrapper">
            <div className="project_iso section">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="button-group filters-button-group button_color">
                                <button className="button" onClick={handleFilterKeyChange('*')}>All <sup className="filter-count"></sup></button>
                                <button className="button" onClick={handleFilterKeyChange('commercial')}>Commercial <sup className="filter-count"></sup></button>
                                <button className="button" onClick={handleFilterKeyChange('highrise')}>Highrise <sup className="filter-count"></sup></button>
                                <button className="button" onClick={handleFilterKeyChange('residential')}>Residential <sup className="filter-count"></sup></button>
                                <button className="button" onClick={handleFilterKeyChange('business')}>Business <sup className="filter-count"></sup></button>

                            </div>

                            <div className="grid grid-4 gutter-15">
                                {
                                    ProjectData01.map(data => <ProjectCard01
                                        key={data.id}
                                        data={data}
                                    />)
                                }

                            </div>

                        </div>

                        <PaginationDiv />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectsContainers01;