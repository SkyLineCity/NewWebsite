import React from 'react';
import BlogCards02 from '../../Components/BlogCards/BlogCard02';
import PageHeader from '../../Components/common/PageHeader';
import Pagination from '../../Components/common/Pagination';


const Blog02 = () => {
    const BlogData02 = [
        {
            id: '1',
            img: 'images/blog/b3.png',
            title: 'Use of modern Technology in Road construction',
        },
        {
            id: '2',
            img: 'images/blog/b4.png',
            title: 'History Creating Highrise Designs Ever',
        },
        {
            id: '3',
            img: 'images/blog/b5.png',
            title: 'Contribution of women in as workers',
        },
        {
            id: '4',
            img: 'images/blog/b6.png',
            title: 'Diversity in Building Celebrated by Builderrine',
        },
        {
            id: '5',
            img: 'images/blog/b7.png',
            title: 'Company Receives Recognition for Excellence',
        },
        {
            id: '6',
            img: 'images/blog/b8.png',
            title: 'Our firm is built to tackle projects like these',
        },
        {
            id: '7',
            img: 'images/blog/bg-4.png',
            title: 'Completes Work on Two Projects in Georgia',
        },
        {
            id: '8',
            img: 'images/blog/bg-3.png',
            title: 'Action to maintain a safe work environment',
        },
        {
            id: '9',
            img: 'images/blog/bg-7.png',
            title: 'Contribution of Men as workers',
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
                                BlogData02.map(data => <BlogCards02
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

export default Blog02;