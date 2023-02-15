import React from 'react';
import people1 from '../../../images/doctor-small.png';
import Blogdoctors from './Blogdoctors';

const Blogs = () => {
    const doctors = [
        { 
            name: 'Winson Herry',
            img: people1,
            phone: 'xxxxxxxxx'
        },
        {
            name: 'Carolex',
            img: people1,
            phone: 'xxxxxxxxx'
        },
        {
            name: 'Robin',
            img: people1,
            phone: 'xxxxxxxxx'
        },
    ]
    return (
        <section>
            <div className='text-center'>
                <div className='mt-5'>
                    <h4 className="text-xl text-primary font-bold">Our Doctors</h4>
                </div>
            </div>
            <div className='d-flex justify-content-center'>
                <div className='w-75 row mt-3 pt-5'>
                    {
                        doctors.map(doctor =><Blogdoctors
                            doctor={doctor}
                        >
                        </Blogdoctors>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Blogs;