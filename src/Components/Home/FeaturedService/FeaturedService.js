import React from 'react';
import Featured from '../../../images/Featured.png'
const FeaturedService = () => {
    return (
        <section className="features-service pb-0 pb-md-5 my-5">
            <div className="container mb-5">
                <div className="row mb-5">
                    <div className="col-md-5 mb-4 m-md-0">
                        <img src={Featured} alt="" className="img-fluid"/>
                    </div>
                    <div className="col-md-7 align-self-center">
                        <h1>Exceptional Dental Care</h1>
                        <p className="text-secondary">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae repellendus culpa ex voluptatum quo nostrum molestiae perferendis possimus laborum ratione, qui id amet sed quod illum dolore veniam neque aut ipsum eveniet consequuntur. Iure vero eos debitis fugit, laborum non nesciunt ullam officiis pariatur expedita et iusto sed dolorem sunt hic quis, quod saepe deleniti, temporibus provident a cupiditate! Doloribus nobis nam, iste similique voluptas sed repellat minus voluptate veniam velit, dolore neque, corrupti iure laboriosam dolorum deleniti fugiat consequuntur ab minima magni. Maiores aperiam at perspiciatis porro omnis fuga, quasi eligendi optio ipsum libero officia possimus dolores qui blanditiis.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturedService;