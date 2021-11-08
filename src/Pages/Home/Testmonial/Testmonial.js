import { Box, Grid, Typography } from '@mui/material';
import React from 'react';

const Testmonial = ({testmonial}) => {
    const {name,img,description,address}=testmonial;
    return (
   
        <Grid sx={{ boxShadow: 3,my:5 }}  item xs={12} sm={6} md={4}>
            <Typography   gutterBottom component="div" sx={{my:5}}  style={{color:"gray",fontSize:14,}} variant="h6">
                {description}

            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'space-around',alignItems: 'center' }}>
            <Typography variant="">
                <img src={img} alt="" />

            </Typography>
            <Box sx={{my:5}}>
            <Typography style={{mx:4,color:"rgb(42, 192, 158 )"}} variant="h5">
               {name}
            </Typography>
            <Typography style={{color:"gray"}}>{address}</Typography>
            </Box>
            </Box>
        </Grid>
      
    
    );
};

export default Testmonial;