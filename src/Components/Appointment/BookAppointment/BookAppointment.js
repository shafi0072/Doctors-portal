import React from 'react';
import BookingCard from '../BookingCard/BookingCard';
const availableDate = [
    {
        id:1,
        subject:'Teeth Orthodontics',
        visitingHours:'8:00 AM - 9:00 AM',
        totalSpace:10
    },
    {
        id:2,
        subject:'Cosmetic Dentistry',
        visitingHours:'10:05 AM - 11:30 AM',
        totalSpace:10
    },
    {
        id:3,
        subject:'Teeth Cleaning',
        visitingHours:'5:00 PM - 6:30 PM',
        totalSpace:10
    },
    {
        id:4,
        subject:'Cavity Protection',
        visitingHours:'7:00 AM - 8:30',
        totalSpace:10
    },
    {
        id:5,
        subject:'Teeth Orthodontics',
        visitingHours:'8:30 AM - 9:00 AM',
        totalSpace:10
    },
    {
        id:6,
        subject:'Teeth Orthodontics',
        visitingHours:'8:00 AM - 9:00 AM',
        totalSpace:10
    }
];
const BookAppointment = ({selectedDate}) => {
    return (
        <section className="container">
            <h2 className="text-center text-primary mb-5">Available Appointments on {selectedDate.toDateString()}</h2>
            <div className="row">
                {
                    availableDate.map(book => <BookingCard selectedDate={selectedDate}  book={book} />)
                }
            </div>
        </section>
    );
};

export default BookAppointment;