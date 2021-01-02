import { Button, TextField, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import '../../styles/login.css';
import { useDispatch, useSelector } from 'react-redux'
import {register} from '../../flux/actions/auth';
import { Alert } from '@material-ui/lab';

function Register(props){
    const[info, setInfo] = useState({username: '', email: '', password: ''});
    const[submitted, setSubmitted] = useState(false);
    const[msg, setMsg] = useState(null);
    const {error} = useSelector(state => state);
    const dispatch = useDispatch();
    const registerSubmit = (event) => {
        event.preventDefault();
        dispatch(register(info));
        setSubmitted(true);
        event.target.reset();
    }

    useEffect(() => {
        if (error.id === 'LOGIN_FAIL') {
            setMsg(error.msg.msg);
        } else {
            setMsg(null);
        }
    }, [error])

    const infoChange = (event) => {
        setInfo({...info, [event.target.name]: event.target.value});
    }
    return(
        <div>
            <form id="register-form" onSubmit={registerSubmit}>
                <Typography style={{textAlign: "center", fontWeight: "bold", fontSize: "25px"}}>REGISTER FORM</Typography>
                <TextField fullWidth label="Username" variant="outlined" className="input-login" placeholder="username" name="username" onChange={infoChange}/>
                <TextField fullWidth label="Email" variant="outlined" className="input-login" placeholder="example@gmail.com" name="email" onChange={infoChange} />
                <TextField fullWidth label="Password" type="password" variant="outlined" className="input-login" placeholder="password" name="password" onChange={infoChange} />
                {msg !== null && submitted? <Alert className="input-login" color="error">{msg}</Alert> : null}
                <Button className="form-button" form="register-form" type="submit" variant="outlined" style={{float: "right"}}>Register</Button>
            </form>
        </div>
    );
}

export default Register;