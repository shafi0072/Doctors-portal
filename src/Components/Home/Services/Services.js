import React from 'react';
import floride from '../../../images/Fluoride.png';
import cavity from '../../../images/Cavity.png';
import whiting from '../../../images/Whiting.png'
import ServiceDetails from '../ServiceDetails/ServiceDetails';
const serviceData = [
    {
        id:1,
        name: 'Fluoride Treatment',
        img:floride,

    },
    {
        id:2,
        name: 'Cavity Feeling',
        img:cavity,
        
    },
    {
        id:3,
        name: 'Teeth Whitening',
        img:whiting,
        
    }
]
const Services = () => {
    return (
        <section className="services-container mt-5" id="service">
            <div className="text-center">
                <h5 style={{color: "#1CC7C1"}}>OUR SERVICES</h5>
                <h2>Services We Provide</h2>
            </div>
            <div className="d-flex justify-content-center">
            <div className='w-75 row mt-5 pt-5'>
            {
              serviceData.map(service => <ServiceDetails key={service.id} service={service}/>) 
            }
            </div>
        </div>
        </section>
    );
};

export default Services;