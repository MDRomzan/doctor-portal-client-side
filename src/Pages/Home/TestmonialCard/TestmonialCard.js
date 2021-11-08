import React from 'react';
import people1 from "../../../images/people-1.png"
import people2 from "../../../images/people-2.png"
import people3 from "../../../images/people-3.png";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Testmonial from '../Testmonial/Testmonial';
import { Container } from '@mui/material';
const testmonials=[
  {
    name:"Winson",
    description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia sapiente doloremque hic ipsum quod repellat deleniti in ad voluptates aut?",
    address:"New York",
    img:people1

  },
  {
    name:" Evan Merry  ",
    description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia sapiente doloremque hic ipsum quod repellat deleniti in ad voluptates aut?",
    address: "California",
    img:people2

  },
  {
    name:"Mr. Michel",
    description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia sapiente doloremque hic ipsum quod repellat deleniti in ad voluptates aut?",
    address: "London",
    img:people3

  }
]

const TestmonialCard = () => {
    return (
        <Container >
 <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 4 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          
        {
        testmonials.map(testmonial=><Testmonial
        key={testmonial.name}
        testmonial={testmonial}
        ></Testmonial>)
        }
        
      </Grid>
    </Box>
    </Container>
    );
};

export default TestmonialCard;