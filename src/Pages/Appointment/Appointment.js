import React from 'react';
import Navber from '../Shared/Navber/Navber';
import AppointmentHeader from './AppointmentHeader/AppointmentHeader';
import AvailableAppointment from './AvailableAppointment/AvailableAppointment';

const Appointment = () => {
      const [date, setDate] = React.useState(new Date());
      
    return (
        <div>
            <Navber></Navber>
            <AppointmentHeader date={date} setDate={setDate}></AppointmentHeader>
            <AvailableAppointment date={date}></AvailableAppointment>

        </div>
    );
};

export default Appointment;