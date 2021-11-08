import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Button, Container, Typography } from '@mui/material';
import treatment from "../../../images/treatment.png"

const ExceptionalCare = () => {
    return (
        <Container>

        
        <Box sx={{ width: '100%' }}>
      <Grid sx={{}} container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12} md={4}>
            <img style={{width:300}} src={treatment} alt="" />
        </Grid>
        <Grid item sx={{textAlign:"left"}} xs={12} md={8}>
          <Typography variant="h3">
             Exceptional Dental Care,On Yours Terms
         </Typography>
         <Typography sx={{my:4}} style={{fontSize:14,color:"gray"}} variant="h6">
            Definition of medical treatment.Medical treatment means the  disorder.
            adapted to the special disease being treated.substance use treatment in the nursing interventions classification, a nursing intervention defined as
            treatment in the nursing interventions classification, a nursing intervention defined as supportive care.
         </Typography>
         <Button  style={{backgroundColor:"rgb(42, 192, 158 )",}} variant="contained" >Learn More</Button>
        </Grid>

      </Grid>
    </Box>
    </Container>
    );
};

export default ExceptionalCare;