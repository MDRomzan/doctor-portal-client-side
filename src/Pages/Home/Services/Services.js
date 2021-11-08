import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Service from '../Service/Service';
import Typography from '@mui/material/Typography';
import fluoride from "../../../images/fluoride.png"
import Whitening from "../../../images/whitening.png"
import Cavity from "../../../images/cavity.png"

const services=[
  {
    name:"Fluoride Treatment",
    description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia sapiente doloremque hic ipsum quod repellat deleniti in ad voluptates aut?",
    img:fluoride

  },
  {
    name:" Teeth Whitening  ",
    description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia sapiente doloremque hic ipsum quod repellat deleniti in ad voluptates aut?",
    img:Whitening

  },
  {
    name:"Cavity Filling",
    description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia sapiente doloremque hic ipsum quod repellat deleniti in ad voluptates aut?",
    img:Cavity

  }
]



const Services = () => {
    return (
<Box sx={{ flexGrow: 1 }}>
      <Container>
         
          <Typography sx={{fontWeight:500,m:2,textAlign:"center"}}  variant="h6" component="div">
                Our Services we Provaide     
            </Typography>

            <Typography sx={{fontWeight:600,m:2
              ,textAlign:"center" }}  variant="h4" component="div"  >
                     Our Services 
            </Typography>
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {
              services.map(service=><Service 
                key={service.name}
                service={service}
              >

              </Service>)
            }
           
          </Grid>
      </Container>
    </Box>
    );
};

export default Services;