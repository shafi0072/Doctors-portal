import React from 'react';
import chair from '../../../images/Chair.png';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
const AppointmentHeader = ({handleDateChange}) => {
    
    return (
        <main
            style={{
                height: "800px"
            }}
            className="row d-flex align-items-center">
            <div className="col-md-4 offset-md-1">
                <h1 style={{
                        color: "#3A4256"
                    }}>Appointment</h1>
                <Calendar className="border-0" onChange={handleDateChange} value={new Date()}/>
            </div>
            <div className="col-md-6">
                <img src={chair} className="img-fluid" alt=""/>
            </div>
        </main>
    );
};

export default AppointmentHeader;