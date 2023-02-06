import React from 'react';
import fluoride from '../../../images/fluoride.png';
import cavity from '../../../images/cavity.png';
import whitening from '../../../images/whitening.png';
import ServiceDetail from '../ServiceDetail/ServiceDetail';

const serviceData = [
    {
        name: 'Fluoride Treatment',
        img: fluoride,
        description: 'Once your child has a tooth, your doctor may recommend that your child receive fluoride varnish treatments in the pediatricians office to help prevent tooth decay',
    },
    {
        name: 'Cavity Filling',
        img: cavity,
        description: 'Treatments include fluoride, fillings, and crowns. Severe cases may need a root canal or removal.',
    },
    {
        name: 'Teeth Whitening',
        img: whitening,
        description: 'Whitening treatments include in-office bleaching procedures, dentist-supplied products for use at home, and over-the-counter (OTC) whiteners.',
    }
]

const Services = () => {
    return (
        <section className='services-container mt-5'>
            <div className='text-center'>
                <h5 style={{ color: '#1CC7C1' }}>OUR SERVICES</h5>
                <h1>Services We Provide</h1>
            </div>
            <div className='d-flex justify-content-center'>
                <div className='w-75 row mt-3 pt-5'>
                    {
                        serviceData.map(service => <ServiceDetail service={service}></ServiceDetail>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;