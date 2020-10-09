import React from 'react';
import wilson from '../../../images/Wilson.png';
import ema from '../../../images/Ema.png';
import aliza from '../../../images/Aliza.png';
import './Testimonials.css';
import TestimonialsDetails from '../TestimonialDetails/TestimonialsDetails';
const Testimonial = () => {
    const testimonialsDetails =[
        {
            quote: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores alias deleniti placeat sint voluptate voluptas veritatis fugiat dolores odit? Cum dignissimos enim quod. ' ,
            name:'Wilson Harry',
            from:'California',
            img:wilson
        },
        {
            quote:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores alias deleniti placeat sint voluptate voluptas veritatis fugiat dolores odit? Cum dignissimos enim quod. ',
            name:'Ema Gomez',
            from:'California',
            img: ema
        },
        {
            quote:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores alias deleniti placeat sint voluptate voluptas veritatis fugiat dolores odit? Cum dignissimos enim quod. ',
            name:'Aliza',
            from:'California',
            img:aliza
        }
    ]
    return (
        <section className="testimonials my-5 py-5" id='review'>
            <div className="container">
                <div className="section-header">
                    <h5 className="text-primary">Testimonials</h5>
                    <h1>What Our Patients <br/> Saying</h1>
                </div>
                <div className="card-deck mt-5">
                    {
                        testimonialsDetails.map(data => <TestimonialsDetails data={data} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default Testimonial;