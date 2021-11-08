import { Button, CircularProgress, Container, Grid, TextField, Typography,Alert } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import login from "../../images/login.png"

const Login = () => {
    const [loginData,setLoginData]=useState({});
    const {user,signInWithGoogle,loginUser,isLoading,authError}=useAuth();
    const history=useHistory();
    const location=useLocation();
    const handleonChange=(e)=>{
        const field=e.target.name;
        const value=e.target.value;
        // console.log(field,value) ;
        const newLoginData={...loginData}
        newLoginData[field]=value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit=(e)=>{
        loginUser(loginData.email,loginData.password,location,history)
        e.preventDefault();
    }
    const handleGoogleSignIn=()=>{
        signInWithGoogle(location,history);
    }
    return (
        <Container>
            <Grid container spacing={2}>
            <Grid sx={{mt:8}}  item xs={12} md={6}>
                <Typography variant="body1" gutterBottom>
                    Login
                </Typography>
                <form onSubmit={handleLoginSubmit}>
                    <TextField   type="email" sx={{width:"75%",m:1}} id="standard-basic" onChange={handleonChange} name="email" label="Your E-mail" variant="standard" />
                    <TextField   sx={{width:"75%",m:1}} type="password" id="standard-basic" 
                    label="Your Password" name="password" variant="standard" onChange={handleonChange}  />

                    <Button  type="submit" style={{backgroundColor:"rgb(42, 192, 158 )"}} sx={{width:"75%",m:1}} variant="contained">
                        Login
                    </Button>
                                        <NavLink style={{textDecoration:"none"}} to="/register">
                        <Button variant="text">NeW User? Please Register</Button>
                    </NavLink>
                     {isLoading && <CircularProgress />}
                {user?.email && <Alert severity="success"> User created successfully !</Alert> }
                {authError && <Alert severity="error">{authError}</Alert>}
                </form>
                <p>--------------------------</p> 
                 <Button onClick={handleGoogleSignIn} variant="contained">Google Sogn In</Button>
            </Grid>
            <Grid item xs={12} md={6}>
                <img style={{width:"100%"}} src={login} alt="" />
            </Grid>

            
            </Grid>
        </Container>
    );
};

export default Login;