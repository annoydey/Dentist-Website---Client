import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Appointmentbanner from '../Appointmentbanner/Appointmentbanner';
import Blogs from '../Blogs/Blogs';
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
            <Blogs></Blogs>
            <Footer></Footer>
        </div>
    );
};

export default Home;