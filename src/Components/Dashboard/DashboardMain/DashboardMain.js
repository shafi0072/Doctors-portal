import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import AppointmentByDates from '../AppointmentByDates/AppointmentByDates';
import Sidebar from '../Sidebar/Sidebar';
import 'react-calendar/dist/Calendar.css';

const containerStyle = {
    
    backgroundColor: '#F4FDFB',
    height:'100%'
}

const DashboardMain = () => {

    const [selectedDate, setSelectedDate] = useState(new Date());
    const [appointments, setAppointments] = useState([]); 
    const handleDateChange = date => {
        setSelectedDate(date);
    }

    function getFormattedDate(d) {
        let today = new Date(d);
        const dd = String(today.getDate()).padStart(2, '0');
        const mm = String(today.getMonth() + 1).padStart(2, '0');
        const yyyy = today.getFullYear();
        today = `${dd}-${mm}-${yyyy}`;
        return today;
    }
    useEffect(() => {
        const date = getFormattedDate(selectedDate)
        fetch('http://localhost:5000/appointmentByDates',{
            method:'POST',
            headers:{'content-type':'application/json'},
            body:JSON.stringify({date: date})
        })
        .then(res => res.json())
        .then(data => setAppointments(data))
    },[selectedDate])

    return (
        <main>
            <div style={containerStyle} className="container-fluid row">
                <div className="col-md-2">
                    <Sidebar/>
                </div>
                <div className="col-md-5">
                <Calendar className="border-0" onChange={handleDateChange} value={new Date()}/>
                </div>
                <div className="col-md-5">
                    <AppointmentByDates appointments={appointments}/>
                </div>
            </div>

        </main>
    );
};

export default DashboardMain;