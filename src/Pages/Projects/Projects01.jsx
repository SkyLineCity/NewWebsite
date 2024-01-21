import React, { Suspense } from 'react';
import Loader from '../../Components/common/Loader';
import PageHeader from '../../Components/common/PageHeader';
// import ProjectsContainers01 from '../../Containers/ProjectContainers/ProjectsContainers01';

const ProjectsContainers01 = React.lazy(() => import("../../Containers/ProjectContainers/ProjectsContainers01"));

const Projects01 = () => {
    return (
        <>
            <PageHeader activeClass01='active' activeClass02='d-none' routeName01='Projects' heading='Projects' />

            <Suspense fallback={<Loader />}>

                <ProjectsContainers01 />
            </Suspense>
        </>
    );
};

export default Projects01;