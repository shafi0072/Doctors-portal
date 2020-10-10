import React from 'react';
import Blog from '../Blog/Blog';
import Contract from '../Contract/Contract';
import Doctores from '../Doctores/Doctores';
import FeaturedService from '../FeaturedService/FeaturedService';
import Footer from '../../Shared/Footer/Footer';
import Header from '../Header/Header';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Header/>
            <Services/>
            <FeaturedService/>
            <MakeAppointment/>
            <Testimonial/>
            <Blog/>
            <Doctores/>
            <Contract/>
            <Footer/>
        </div>
    );
};

export default Home;