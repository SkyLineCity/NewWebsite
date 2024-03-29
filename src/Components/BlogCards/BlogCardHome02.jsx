import React from 'react';

const BlogCardHome02 = ({ data }) => {
    const { title, img } = data;

    return (
        <div className="item">
            <article className="blog_post blog_post2">
                <div className="post_img">
                    <a href="/blog-1"><img src={img} alt="img" /></a>
                    <div className="calendar position_two">
                        <a href="/about"><span className="date">30</span><br />May</a>
                    </div>
                </div>
                <div className="post_content">
                    <div className="post_header">
                        <div className="post_subtitle">
                            <img src="images/blog/icon_b.png" alt="icon" />
                            <h6>Jonathon Hall</h6>
                        </div>
                        <h3 className="post_title">
                            <a href="/blog-2">{title}</a>
                        </h3>
                    </div>
                    <div className="post_footer">
                        <div className="read_more">
                            <a href="/blog-details"><span>Read Article</span></a>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    );
};

export default BlogCardHome02;
