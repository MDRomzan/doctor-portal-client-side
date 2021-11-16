import { Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import login from "../../images/login.png"
import Alert from '@mui/material/Alert';

const Register = () => {
    const {user,registerUser,isLoading,authError}=useAuth();
    const [loginData,setLoginData]=useState({});
    const navigate=useNavigate()
    const handleOnBlur=(e)=>{
        const field=e.target.name;
        const value=e.target.value;
        console.log(field,value) ;
        const newLoginData={...loginData}
        newLoginData[field]=value;
        console.log(newLoginData)
        setLoginData(newLoginData);
    }
    const handleLoginSubmit=(e)=>{
        if(loginData.password !== loginData.password2){
            alert("Your Password  did not match")
            return
        }
        registerUser(loginData.email,loginData.password,loginData.name,navigate)

        
        e.preventDefault();
    }
    return (
<Container>
            <Grid container spacing={2}>
            <Grid sx={{mt:8}}  item xs={12} md={6}>
                <Typography variant="body1" gutterBottom>
                    Register
                </Typography>
                {!isLoading &&<form onSubmit={handleLoginSubmit}>
                    <TextField sx={{width:"75%",m:1}} id="standard-basic" type="text"  onBlur={handleOnBlur} name="name" label="Your " variant="standard" />

                     <TextField sx={{width:"75%",m:1}} id="standard-basic" type="email"  onBlur={handleOnBlur} name="email" label="Your E-mail" variant="standard" />

                    <TextField sx={{width:"75%",m:1}} type="password" id="standard-basic" 
                    label="Your Password" name="password" variant="standard" onBlur={handleOnBlur}  />
                    <TextField sx={{width:"75%",m:1}} type="password" id="standard-basic" 
                    label="Re-Type Your Password" name="password2" variant="standard" onBlur={handleOnBlur}  />

                    <Button  type="submit" style={{backgroundColor:"rgb(42, 192, 158 )"}} sx={{width:"75%",m:1}} variant="contained">
                        Register
                    </Button>
                     <NavLink style={{textDecoration:"none"}} to="/login">
                        <Button variant="text">Already Registered? Please Login</Button>
                    </NavLink>
                </form> }
                {isLoading && <CircularProgress />}
                {user?.email && <Alert severity="success"> User created successfully !</Alert> }
                {authError && <Alert severity="error">{authError}</Alert>}
            </Grid>  
            <Grid item xs={12} md={6}>
                <img style={{width:"100%"}} src={login} alt="" />
            </Grid>

            
            </Grid>
        </Container>
    );
};

export default Register;