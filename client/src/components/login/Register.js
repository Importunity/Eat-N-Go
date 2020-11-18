import { Button, TextField, Typography } from '@material-ui/core';
import React from 'react';
import '../../styles/login.css';


function Register(){
    const registerSubmit = (event) => {
        event.preventDefault();
        console.log('register')
    }
    return(
        <div>
            <form onSubmit={registerSubmit}>
                <Typography style={{textAlign: "center", fontWeight: "bold", fontSize: "25px"}}>REGISTER FORM</Typography>
                <TextField fullWidth label="Username" variant="outlined" className="input-login" placeholder="username"  />
                <TextField fullWidth label="Email" variant="outlined" className="input-login" placeholder="example@gmail.com"  />
                <TextField fullWidth label="Password" variant="outlined" className="input-login" placeholder="password" />
                <Button className="form-button" type="submit" variant="outlined" style={{float: "right"}}>Register</Button>
            </form>
        </div>
    );
}

export default Register;