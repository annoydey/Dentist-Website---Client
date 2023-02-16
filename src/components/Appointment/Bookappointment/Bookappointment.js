import React from 'react';
import BookingCard from '../BookingCard/BookingCard';

const Bookappointment = ({date}) => {
    const appointmentbookingDate = [
    {
        subject: "Teeth Orthodontics",
        visitingHour: "8:00 AM - 9:00 AM",
        totalSpace: 10
    },
    {
        subject: "Root Canel",
        visitingHour: "8:00 AM - 9:00 AM",
        totalSpace: 10
    },
    {
        subject: "Teeth Scaling",
        visitingHour: "8:00 AM - 9:00 AM",
        totalSpace: 10
    },
    {
        subject: "Cosmetic Surgery",
        visitingHour: "8:00 AM - 9:00 AM",
        totalSpace: 10
    },
    {
        subject: "Consultant Hours",
        visitingHour: "8:00 AM - 9:00 AM",
        totalSpace: 10
    },
    {
        subject: "Prescription",
        visitingHour: "8:00 AM - 9:00 AM",
        totalSpace: 10
    },
    ]
    return (
        <section>
            <h2 className='text-center mt-5' style={{ color: '#1CC7C1' }}>Available Appointments on {date.toDateString()}</h2>
            <div className='row mt-5'>
                {
                   appointmentbookingDate.map(booking => <BookingCard booking={booking} date={date}></BookingCard>) 
                }
            </div>
        </section>
    );
};

export default Bookappointment;