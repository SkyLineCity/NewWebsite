import React from 'react';
import BlogCards01 from '../../Components/BlogCards/BlogCards01';
import PageHeader from '../../Components/common/PageHeader';
import Pagination from '../../Components/common/Pagination';

const Blog01 = () => {
    const BlogData01 = [
        {
            id: '1',
            img: 'images/blog/b6.png',
            blogClass: 'col-lg-4 col-md-6',
            title: 'Diversity in Building Celebrated by Builderrine',
            description: 'Builderrine will connect with 10000 people from 90 companies who work on its’ projects each day...'
        },
        {
            id: '2',
            img: 'images/blog/b7.png',
            blogClass: 'col-lg-4 col-md-6',
            title: 'Company Receives Recognition for Excellence',
            description: 'The construction industry has the capacity to absorb more people into the workforce...'
        },
        {
            id: '3',
            img: 'images/blog/b8.png',
            blogClass: 'col-lg-4 col-md-6',
            title: 'Our firm is built to tackle projects like these',
            description: 'We offer construction service to industrial, commercial, reside ntial & automotive...'
        },
        {
            id: '4',
            img: 'images/blog/bg-4.png',
            blogClass: 'col-lg-4 col-md-6',
            title: 'Completes Work on Two Projects in Georgia',
            description: 'The construction industry has the capacity to absorb more people into the workforce...'
        },
        {
            id: '5',
            img: 'images/blog/bg-3.png',
            blogClass: 'col-lg-4 col-md-6',
            title: 'Completes Work on Two Projects in Georgia',
            description: 'The construction industry has the capacity to absorb more people into the workforce...'
        },
        {
            id: '6',
            img: 'images/blog/bg-5.png',
            blogClass: 'col-lg-4 col-md-6',
            title: 'History Creating Highrise Designs Ever',
            description: 'The construction industry has the capacity to absorb more people into the workforce...'
        },
        {
            id: '7',
            img: 'images/blog/bg-6.png',
            blogClass: 'col-lg-4 col-md-6',
            title: 'History Creating Highrise Designs Ever',
            description: 'The construction industry has the capacity to absorb more people into the workforce...'
        },
        {
            id: '8',
            img: 'images/blog/bg-7.png',
            blogClass: 'col-lg-4 col-md-6',
            title: 'Contribution of Men as workers',
            description: 'The construction industry has the capacity to absorb more people into the workforce...s'
        },
        {
            id: '9',
            img: 'images/blog/bg-8.png',
            blogClass: 'col-lg-4 col-md-6',
            title: 'Contribution of Men as workers',
            description: 'The construction industry has the capacity to absorb more people into the workforce...s'
        },

    ];
    return (
        <div className="main_wrapper">
            <PageHeader activeClass01='active' activeClass02='d-none' routeName01='Blogs' heading='Blogs' />
            <div className="blog section">
                <div className="container">
                    <div className="blog_grid">
                        <div className="row">
                            {
                                BlogData01.map(data => <BlogCards01
                                    key={data.id}
                                    data={data}
                                />)
                            }
                            <Pagination />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog01;