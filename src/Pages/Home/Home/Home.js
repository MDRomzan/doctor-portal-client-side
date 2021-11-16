import React from 'react';
import Navber from '../../Shared/Navber/Navber';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import Banner from '../Banner/Banner';
import Doctors from '../Doctors/Doctors';
import ExceptionalCare from '../ExceptionalCare/ExceptionalCare';

import Services from '../Services/Services';
import TestmonialCard from '../TestmonialCard/TestmonialCard';

const Home = () => {
    return (
        <div>
           
            <Navber></Navber>
             <Banner></Banner>
            <Services></Services>
            <ExceptionalCare></ExceptionalCare>
            <AppointmentBanner></AppointmentBanner>
            <Doctors></Doctors>
            <TestmonialCard></TestmonialCard>
        </div>
    );
};

export default Home;