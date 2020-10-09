import React from 'react';
import wilson from '../../../images/Wilson.png';
import ema from '../../../images/Ema.png';
import aliza from '../../../images/Aliza.png';
import BlogDetails from '../BlogDetails/BlogDetails';
const Blog = () => {
    const blogData = [
        {
            name: 'Wilson',
            title: '2 times brush can keep you healthy',
            des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam delectus, es' +
                    'se voluptate illo vitae molestiae nihil porro non amet iusto accusamus magnam ' +
                    'qui quibusdam, sapiente ipsum suscipit numquam. Temporibus, dolorum?',
            img: wilson

        }, {
            name: 'Ema Gomez',
            title: '2 times brush can keep you healthy',
            des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam delectus, es' +
                    'se voluptate illo vitae molestiae nihil porro non amet iusto accusamus magnam ' +
                    'qui quibusdam, sapiente ipsum suscipit numquam. Temporibus, dolorum?',
            img: ema

        }, {
            name: 'Aliza',
            title: '2 times brush can keep you healthy',
            des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam delectus, es' +
                    'se voluptate illo vitae molestiae nihil porro non amet iusto accusamus magnam ' +
                    'qui quibusdam, sapiente ipsum suscipit numquam. Temporibus, dolorum?',
            img: aliza

        }
    ]
    return (
        <section className="testimonials my-5 py-5" id='blog'>
            <div className="container">
                <div className="section-header">
                    <div className="text-center">
                        <h5 className="text-primary">Our blog</h5>
                        <h1>From Our News</h1>
                    </div>
                </div>
                <div className="card-deck mt-5">
                    {blogData.map(data => <BlogDetails data={data}/>)}
                </div>
            </div>
        </section>
    );
};

export default Blog;