import { Grid } from '@mui/material';
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const Service = ({service}) => {
    const {name,img,description}=service;
    return (
        
             <Grid item xs={12} sm={4} md={4}>
                <Card sx={{border:0,boxShadow:0,textAlign:"center" , minWidth: 275 }}>
                    
                    <CardMedia
                        component="img"
                        style={{width:"auto" ,height:"80px",margin:"0 auto"}}
                        image={img}
                        alt="green iguana"
                    />

                <CardContent>
                
                    
                    <Typography  variant="h5" component="div">
                        {name}
                        
                    </Typography>
                    <Typography  sx={{ mb: 1.5 }} color="text.secondary">
                     {description}
                    </Typography>
                </CardContent>
                
                </Card>

            </Grid>
       
    );
};

export default Service;