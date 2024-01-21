import React from 'react';
import PageHeader from '../../Components/common/PageHeader';
import ServiceContainer01 from '../../Containers/ServiceContainers/ServiceContainer01';

const Services01 = () => {
    return (
        <>
            <PageHeader activeClass01='active' activeClass02='d-none' routeName01='Services' heading='Services' />
            <ServiceContainer01 />

        </>
    );
};

export default Services01;