import React from 'react';
import "./blog.css";
import blog1 from "../../Images/blog-1.jpeg"
import blog2 from "../../Images/blog-2.jpeg"
import blog3 from "../../Images/blog-3.jpeg"
import blog4 from "../../Images/blog-4.jpeg"
import blog5 from "../../Images/blog-5.jpeg"
import blog6 from "../../Images/blog-6.jpeg"

const Blog = () => {
  return (
    <section className="app_blog body-padding">
        <div className="app_blog_container">
            <div className="app_blog_split-header">
                <h3>From the blog</h3>
                <button className='button-light'>More posts</button>
            </div>

            <div className="app_blog_list">
                {/* card 1 */}
                <div className="app_blog_list-item">
                    <div className="app_blog_list-card">
                        <img src={blog1} alt="" />
                        <div className="blog_list-card-content">
                            <p className="pre-headline">Blog Post</p>
                            <h4>The Truth About Finding Your First Engineering Job</h4>
                            <p className="blog-desc">Even for senior engineers, job searches can be confusing, frustrating affairs. When you're a junior engineer looking for your first job...</p>
                            <button className="button-light">
                                Read more
                            </button>
                        </div>
                    </div>
                </div>
{/* card 1 */}
                <div className="app_blog_list-item">
                    <div className="app_blog_list-card">
                        <img src={blog2} alt="" />
                        <div className="blog_list-card-content">
                            <p className="pre-headline">Blog Post</p>
                            <h4>The Truth About Finding Your First Engineering Job</h4>
                            <p className="blog-desc">Even for senior engineers, job searches can be confusing, frustrating affairs. When you're a junior engineer looking for your first job...</p>
                            <button className="button-light">
                                Read more
                            </button>
                        </div>
                    </div>
                </div>
                {/* card 1 */}
                <div className="app_blog_list-item">
                    <div className="app_blog_list-card">
                        <img src={blog3} alt="" />
                        <div className="blog_list-card-content">
                            <p className="pre-headline">Blog Post</p>
                            <h4>The Truth About Finding Your First Engineering Job</h4>
                            <p className="blog-desc">Even for senior engineers, job searches can be confusing, frustrating affairs. When you're a junior engineer looking for your first job...</p>
                            <button className="button-light">
                                Read more
                            </button>
                        </div>
                    </div>
                </div>
                {/* card 1 */}
                <div className="app_blog_list-item">
                    <div className="app_blog_list-card">
                        <img src={blog4} alt="" />
                        <div className="blog_list-card-content">
                            <p className="pre-headline">Blog Post</p>
                            <h4>The Truth About Finding Your First Engineering Job</h4>
                            <p className="blog-desc">Even for senior engineers, job searches can be confusing, frustrating affairs. When you're a junior engineer looking for your first job...</p>
                            <button className="button-light">
                                Read more
                            </button>
                        </div>
                    </div>
                </div>
                {/* card 1 */}
                <div className="app_blog_list-item">
                    <div className="app_blog_list-card">
                        <img src={blog5} alt="" />
                        <div className="blog_list-card-content">
                            <p className="pre-headline">Blog Post</p>
                            <h4>The Truth About Finding Your First Engineering Job</h4>
                            <p className="blog-desc">Even for senior engineers, job searches can be confusing, frustrating affairs. When you're a junior engineer looking for your first job...</p>
                            <button className="button-light">
                                Read more
                            </button>
                        </div>
                    </div>
                </div>
                {/* card 1 */}
                <div className="app_blog_list-item">
                    <div className="app_blog_list-card">
                        <img src={blog6} alt="" />
                        <div className="blog_list-card-content">
                            <p className="pre-headline">Blog Post</p>
                            <h4>The Truth About Finding Your First Engineering Job</h4>
                            <p className="blog-desc">Even for senior engineers, job searches can be confusing, frustrating affairs. When you're a junior engineer looking for your first job...</p>
                            <button className="button-light">
                                Read more
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Blog
