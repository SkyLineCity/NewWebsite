import React from 'react';
import ServiceCard02_01 from '../../Components/ServiceCards/ServiceCard02_01';
import PaginationDiv from '../../Components/TeamElements/PaginationDiv';

const ServiceContainer01 = () => {
    const ServiceData01 = [
        {
            id: '1',
            img: 'images/services/s4.png',
            img02: 'images/services/Service_Hover_images/1.jpg',
            tag: 'COMMERTIAL DESIGN',
            title: 'Builderrine is the safe, reliable & cost effective construction company.'
        },
        {
            id: '2',
            img: 'images/services/s5.png',
            img02: 'images/services/Service_Hover_images/2.jpg',
            tag: 'REAL ESTATE',
            title: 'Builderrine Construction Company Receives Industry Recognition.'
        },
        {
            id: '3',
            img: 'images/services/s7.png',
            img02: 'images/services/Service_Hover_images/3.jpg',
            tag: 'DEMOLITION',
            title: 'Extraordinary projects demand a strategic and intelligent approach, finely.'
        },
        {
            id: '4',
            img: 'images/services/s6.png',
            img02: 'images/services/Service_Hover_images/4.jpg',
            tag: 'HIGHRISE BUILDING',
            title: 'Builderrine is the safe, reliable & cost effective construction company.'
        },
        {
            id: '5',
            img: 'images/services/s4.png',
            img02: 'images/services/Service_Hover_images/5.jpg',
            tag: 'HIGHRISE BUILDING',
            title: 'Builderrine is proud to join other companies and organizations.'
        },
        {
            id: '6',
            img: 'images/services/s9.png',
            img02: 'images/services/Service_Hover_images/6.jpg',
            tag: 'INDUSTRIAL PLANT',
            title: 'Builderrine is the safe, reliable & cost effective construction company.'
        },
        {
            id: '7',
            img: 'images/services/s11.png',
            img02: 'images/services/Service_Hover_images/8.jpg',
            tag: 'RENEWABLE ENERGY',
            title: 'Builderrine Construction Company Receives Industry Recognition.'
        },
        {
            id: '8',
            img: 'images/services/s4.png',
            img02: 'images/services/Service_Hover_images/5.jpg',
            tag: 'CIVIL ENGINEERING',
            title: 'Extraordinary projects demand a strategic and intelligent approach, finely.'
        },
        {
            id: '9',
            img: 'images/services/s12.png',
            img02: 'images/services/Service_Hover_images/9.jpg',
            tag: 'BLUEPRINT DESIGN',
            title: 'Builderrine is proud to join other companies and organizations.'
        },
    ];

    return (
        <div className="main_wrapper">
            <div className="section service services_inner_page">
                <div className="container">
                    <div className="row">
                        {
                            ServiceData01.map(data =>
                                <ServiceCard02_01
                                    key={data.id}
                                    data={data}
                                />
                            )
                        }

                        <PaginationDiv />

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceContainer01;