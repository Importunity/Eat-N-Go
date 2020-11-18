import { Backdrop, Button,  Fade,  makeStyles,  Modal,  TextField, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import '../../styles/login.css';
import Register from './Register';

const useStyles = makeStyles((theme) => ({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: "#DADED4",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));

function Login(){

    const classes = useStyles();
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const loginSubmit = (event) => {
        event.preventDefault();
        console.log("hello");
    }
    return(
        <div className="form-container">
            <form className="input-form" onSubmit={loginSubmit}>
                <Typography style={{textAlign: "center", fontWeight: "bold", fontSize: "25px"}}>LOGIN FORM</Typography>
                <TextField fullWidth label="Email" variant="outlined" className="input-login" placeholder="example@gmail.com"  />
                <TextField fullWidth label="Password" variant="outlined" className="input-login" placeholder="password" />
                <Button type="submit" className="form-button" variant="outlined">Login</Button>
                <Button style={{float: "right"}} className="form-button" variant="outlined" onClick={handleOpen}>Register</Button>
            </form>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
            >
                <Fade in={open}>
                    <div className={classes.paper}>
                        <Register />
                    </div>
                </Fade>
            </Modal>
            </div>    
    )
}

export default Login;