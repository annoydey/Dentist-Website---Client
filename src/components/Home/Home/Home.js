import React from 'react';
import Footer from '../../Footer/Footer';
import Appointmentbanner from '../Appointmentbanner/Appointmentbanner';
import Exceptionbanner from '../Exceptionbanner/Exceptionbanner';
import Header from '../Header/Header';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <Exceptionbanner></Exceptionbanner>
            <Appointmentbanner></Appointmentbanner>
            <Testimonials></Testimonials>
            <Footer></Footer>
        </div>
    );
};

export default Home;