import { Alert, Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import useAuth from '../../../Hooks/useAuth';

const MakeAdmin = () => {
    const [email,setEmail]=useState("");
    const [adminSuccess,setAdminSuccess]=useState(false);
    const {token}=useAuth();
    const handleOnBlur=(e)=>{
        setEmail(e.target.value);
    }
   
    const handleAdminSubmit=(e)=>{
        const user={email};
        fetch("https://fast-anchorage-62107.herokuapp.com/users/admin",{
            method:"PUT",
            headers:{
                "authorization":`Bearer ${token}`,
                "content-type":"application/json"
            },
            body:JSON.stringify(user)
        })
        .then(res=>res.json())
        .then(data =>{
         if(data.modifiedCount){
            console.log(data);
            
            setAdminSuccess(true);
         }
            
        })
        e.preventDefault()
    }
    return (
        <div>
            <h3>This is Make Admin</h3>
            <form onSubmit={handleAdminSubmit}>
                <TextField sx={{width:"50%"}} type="email" label="E-mail" variant="standard" onBlur={handleOnBlur} />
                <Button type="submit" variant="contained">Make Admin</Button>

            </form>
            {adminSuccess && <Alert severity="success">Make a Admin  created successfully !</Alert> }
        </div>
    );
};

export default MakeAdmin;