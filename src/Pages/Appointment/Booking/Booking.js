import { Button, Grid, Typography } from '@mui/material';
import React from 'react';
import Paper from '@mui/material/Paper';
import BookingModal from '../BookingMadal/BookingModal';

const Booking = ({booking,date,setBookingSuccess}) => {
    const {name,space,time}=booking;
     const [openBooking, setBookingOpen] = React.useState(false);
     const handleBookingOpen = () => setBookingOpen(true);
     const handleBookingClose = () => setBookingOpen(false);
    return (
            <>
            <Grid item xs={12} sm={6} md={4}>
                <Paper  sx={{ py:5 }} elevation={3} >
                     <Typography  sx={{ fontWeight:500, color:"rgb(42, 192, 158 )" }}  gutterBottom component="div" variant="h5">
                      {name}
                </Typography>  
                <Typography variant="h6">
                      {time}
                </Typography>
                <Typography style={{fontSize:12,color:"gray"}} variant="h6">
                    AVILABLE SPACE   {space}
                </Typography>
                 <Button onClick={handleBookingOpen} style={{backgroundColor:"rgb(42, 192, 158 )"}} variant="contained"> Book Appointment</Button>
                </Paper>
            </Grid> 
            <BookingModal
            booking={booking}
            openBooking={openBooking}
            handleBookingClose={handleBookingClose}
            date={date}
            setBookingSuccess={setBookingSuccess}
            
            >
            </BookingModal>
            </>
       
    );
};

export default Booking;

/* */