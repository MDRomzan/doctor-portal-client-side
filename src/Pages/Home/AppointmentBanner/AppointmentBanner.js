import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button, Typography } from '@mui/material';
import doctor from "../../../images/doctor.png"
import bg from "../../../images/appointment-bg.png"
const appointmentBanner={
    background:`url(${bg})`,
    backgroundBlendMode: "darken",
    backgroundColor: "rgba(42, 57, 95,0.9)",
    marginTop: 165
}
const AppointmentBanner = () => {
    return (
         <Box style={appointmentBanner} sx={{ flexGrow: 1 }}>
      <Grid sx={{my:5}} container spacing={2}>
        <Grid item xs={12} md={6}>
            <img style={{width:400,marginTop:"-110px"}} src={doctor} alt="" />
        </Grid>
        <Grid item xs={12} md={6} sx={{display:"flex",justifyContent:"flex-start",textAlign:"left",alignItems:"center"}}>
            <Box>
            <Typography sx={{m:3}}style={{color:"rgb(42, 192, 158 )"}} variant="h6">
                Appointment
            </Typography>
            <Typography style={{color:"white"}}  variant="h4">
                Make an Appointment Today
            </Typography>
            <Typography sx={{my:5}} style={{color:"white", fontSize:16,fontWeight:300}}  variant="h6">
                Make an Appointment Today Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore ea mollitia veritatis tempora non!
            </Typography>
            <Button sx={{mb:2}} style={{backgroundColor:"rgb(42, 192, 158 )",}} variant="contained">Learn More</Button>
            </Box>
        </Grid>

      </Grid>
    </Box>
    );
};

export default AppointmentBanner;