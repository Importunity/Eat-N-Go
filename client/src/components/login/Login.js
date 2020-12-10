import { Backdrop, Button,  Fade,  makeStyles,  Modal,  TextField, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import '../../styles/login.css';
import Register from './Register';
import propTypes from 'prop-types';
import {connect} from 'react-redux';
import { login } from '../../flux/actions/auth';
import { clearErrors } from '../../flux/actions/error';
import { Alert } from '@material-ui/lab';


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

function Login(props){

    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const[msg, setMsg] = useState(null);
    const[info, setInfo] = useState({email:'', password:''});
    const[submitted, setSubmitted] = useState(false);
    const{error, isAuthenticated} = props

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const loginSubmit = (event) => {
        event.preventDefault();
        props.login(info);
        setSubmitted(true);
        event.target.reset();
    }

    const infoChange = (event) => {
        setInfo({...info, [event.target.name]: event.target.value})
    }

    useEffect(() => {
        if (error.id === 'LOGIN_FAIL') {
            setMsg(error.msg.msg);
        } else {
            setMsg(null);
        }
    }, [error])
    

    return(
        <div className="form-container">
            <form className="input-form" onSubmit={loginSubmit}>
                <Typography style={{textAlign: "center", fontWeight: "bold", fontSize: "25px"}}>LOGIN FORM</Typography>
                <TextField fullWidth name="email" label="Email" variant="outlined" className="input-login" placeholder="example@gmail.com" onChange={infoChange} />
                <TextField fullWidth name="password" label="Password" variant="outlined" className="input-login" placeholder="password" onChange={infoChange} />
                <Button type="submit" className="form-button" variant="outlined">Login</Button>
                <Button style={{float: "right"}} className="form-button" variant="outlined" onClick={handleOpen}>Register</Button>
                {msg !== null && submitted? <Alert className="input-login" color="error">{msg}</Alert> : null}
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

Login.propTypes = {
    isAuthenticated: propTypes.bool,
    login: propTypes.func.isRequired,
    clearErrors: propTypes.func.isRequired
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error
})


export default connect(mapStateToProps, {login, clearErrors})(Login);