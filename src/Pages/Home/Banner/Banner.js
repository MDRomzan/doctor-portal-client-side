import React from 'react';
import Box from '@mui/material/Box';

import Grid from '@mui/material/Grid';
import chair from "../../../images/chair.png"
import bg from "../../../images/bg.png" 
import { Button, Typography,Container } from '@mui/material';


const bannerBg={
    background:`url(${bg})`,
    
}
const verticalCenter={
    display:"flex",
    alignItems:"center",
    height: 400
}
const Banner = () => {
    return (
        <Container style={bannerBg} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
         
        <Grid item  sx={{...verticalCenter, textAlign:"left",mt:5 }} xs={12} md={6}>
            <Box>
            
            <Typography variant="h2">
                Your New Smile Starts Here
            </Typography>
             <Typography style={{fontSize:14,color:"gray" ,fontWeight:300}} sx={{my:3}} variant="h6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt excepturi dolorum necessitatibus minus veniam aperiam accusantium rerum illo, dignissimos sit?
            </Typography>
            <Button style={{backgroundColor:"rgb(42, 192, 158 )"}} variant="contained">GET APPOINTMENT</Button>
             </Box>
        </Grid>
      
        <Grid item xs={12} style={verticalCenter}  sx={{}} md={6}>
          <img style={{width:"400px",}} src={chair} alt="" />
        </Grid>
        
        
      </Grid>
    </Container>
    );
};

export default Banner;