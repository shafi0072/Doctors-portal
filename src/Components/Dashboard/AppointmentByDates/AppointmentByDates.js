import React from 'react';

const AppointmentByDates = ({appointments}) => {
    console.log(appointments)
    return (
        <div>
            <h1>Appointments: {appointments.length} </h1>
            {
                appointments.map(app => <li key={app._id}>{app.name}</li>)
            }
        </div>
    );
};

export default AppointmentByDates;