import React from 'react';
import doctore from '../../../images/Doctore.png';
import './MakeAppointment.css';
const MakeAppointment = () => {
    return (
        <section className="make-appointment">
            <div className="container">
                <div className="row">
                    <div className="col-md-5 d-none d-md-block">
                        <img src={doctore} alt="" className="img-fluid"/>
                    </div>
                    <div className="col-md-7 text-white py-5">
                        <h5 className="text-primary text-uppercase">Appointment</h5>
                        <h1 className="my-4">Make an appointment <br/> today</h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae, reiciendis facilis alias ab natus voluptates ipsum debitis doloremque sapiente obcaecati.</p>
                        <button className="btn btn-primary">Learn More</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAppointment;