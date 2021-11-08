import { Alert, Container, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import Booking from '../Booking/Booking';

const bookings=[
    {
        id:1,
        name:"Oral Surgery",
        time:"05.00 PM - 06.00PM",
        space:10,
    },
    {
        id: 2,
        name: "Teeth Orthodontices",
        time: "07.00 PM - 08.00PM",
        space: 10,
    },
    {
        id: 3,
        name: "Cosmentic Dentistry",
        time: "08.00 PM - 09.00PM",
        space: 10,
    },
    {
        id: 4,
        name: "Cavity Protection",
        time: "09.00 PM - 10.00PM",
        space: 10,
    },
    {
        id: 5,
        name: "Teeth Whrntic ",
        time: "10.00 PM - 11.00PM",
        space: 10,
    },
    {
        id: 6,
        name: "Teeth Cleaing",
        time: "11.00 PM - 12.00PM",
        space: 10,
    },
] 


const AvailableAppointment = ({date}) => {

    const [bookingSuccess,setBookingSuccess]=useState(false);
    return (
        <Container>
            <Typography sx={{my:4,color:"rgb(42, 192, 158 )"}} variant="h3">
                  Available Appointment Date On:{date.toDateString()}
            </Typography>
            {bookingSuccess&& <Alert severity="success"> Appointment successfully !</Alert> }
            <Grid container spacing={2}>
               {
                   bookings.map(booking =><Booking key={booking.id}
                    booking={booking}
                    date={date}
                    setBookingSuccess={setBookingSuccess}
                   ></Booking>)
               }
            </Grid>

        </Container>
    );
};

export default AvailableAppointment;