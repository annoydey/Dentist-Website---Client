import React from 'react';

const Blogdoctors = ({doctor}) => {
    return (
        <div className='col-md-4 text-center mb-5'>
            <img style={{height: '200px'}} src={doctor.img} alt=""></img>
            <h5 className='mt-3 mb-3 text-primary'>{doctor.name}</h5>
            <p className='text-secondary'>Phone: {doctor.phone}</p>
        </div>
        
    );
};

export default Blogdoctors;