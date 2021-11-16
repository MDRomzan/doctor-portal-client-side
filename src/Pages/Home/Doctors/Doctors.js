import { Container, Grid } from '@mui/material';
import React,{useState,useEffect} from 'react';
import Doctor from '../Doctor/Doctor';

const Doctors = () => {
    const[doctors,setDoctors]=useState([]);
    useEffect(()=>{
        fetch("https://fast-anchorage-62107.herokuapp.com/doctors")
        .then(res=>res.json())
        .then(data =>setDoctors(data));
    },[]);
    return (
        <div>
           <h3>Our all Doctors:{doctors.length}</h3> 
           <Container>
               <Grid container spacing={2}>
                {
                    doctors.map(doctor=><Doctor
                    key={doctor._id}
                    doctor={doctor}
                    ></Doctor>)
                }
               
                </Grid>
           </Container>
        </div>
    );
};

export default Doctors;