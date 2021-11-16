import { Button, Input, TextField } from '@mui/material';
import React, { useState } from 'react';

const AddDoctor = () => {
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [image,setImage]=useState(null);
    const [success,setSuccess]=useState(false);
    console.log(name,email,image);

    const handleSubmit=(e)=>{
     e.preventDefault();
     if(!image){
         return;
     }
     const formData=new FormData();
    formData.append("name",name);
    formData.append("email",email);
    formData.append("image",image);
    fetch('https://fast-anchorage-62107.herokuapp.com/doctors', {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                setSuccess("Doctor added Successfully")
                console.log("Doctor added Successfully");
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });

    }

    return (
        <div>
            <h2>This is Add Doctor</h2>
            <form onSubmit={handleSubmit}>
                <TextField onChange={e=> setName(e.target.value)} sx={{width:"50%"}} variant="standard" required label="Name" />
                <br />
                <TextField onChange={e=> setEmail(e.target.value)} sx={{width:"50%"}} variant="standard" required label="Email" />
                <br />
                 <Input 
                 onChange={e =>setImage(e.target.files[0])}
                 accept = "image/*" 
                type="file"/>
                <Button variant="contained" color="primary" type="submit">
                    Add Doctor
                    </Button>
              
            </form> 
            {success && <Button color="success" >{success}</Button> }
        </div>
    );
};

export default AddDoctor;