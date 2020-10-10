import React, { useState } from 'react';
import AppointForm from '../AppointmentForm/AppointForm';

const BookingCard = ({book, selectedDate}) => {

    const [modalIsOpen, setIsOpen] =useState(false);
    function openModal() {
        setIsOpen(true);
    }

   

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div className="col-md-4 mb-5">
            <div className="card p-3 border-0">
                <div className="card-body text-center">
                    <h5 className="card-title text-primary">{book.subject}</h5>
                    <h6>{book.visitingHours}</h6>
                    <p>{book.totalSpace} Spaces Available</p>
                    <button onClick={openModal} className="btn btn-primary text-uppercase">Book Appointment</button>
                    <AppointForm modalIsOpen={modalIsOpen} appointmentOn={book.subject} selectedDate={selectedDate}  closeModal={closeModal}/>
                </div>
            </div>
        </div>
    );
};

export default BookingCard;