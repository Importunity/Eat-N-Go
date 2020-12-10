import React, { Fragment, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Button, IconButton, Menu, MenuItem, TextField, Toolbar, Typography } from '@material-ui/core';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import '../../styles/navbar.css';
import Login from '../login/Login';
import { AutoRotatingCarousel, Slide } from "material-auto-rotating-carousel";
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Logout from '../login/Logout';
import Shop from '../body/shop/Shop';
import CreateShop from '../body/shop/CreateShop.js';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    search: {
      flexGrow: 1,
      paddingRight: "20vw",
      paddingLeft: "20vw"
    }
  }));

function Navbar(props) {
    const classes = useStyles();
    const[anchorEl, setAnchorEl] = useState(null);
    const [open, setOpen] = useState(false);


    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };


    const handleClose = () => {
      setAnchorEl(null);
    };

    const handleOpenModal = () => {
      setOpen(true);
    };
    
    const handleCloseModal = () => {
      setOpen(false);
    };

    return (
            <div className={classes.root}>
                <Router>
                    <AppBar position="static" color="inherit" elevation={0} style={{backgroundColor: "inherit"}}> 
                        <Toolbar>
                            <Typography style={{fontWeight: "bolder"}} variant="h6" className={classes.title}>
                                <Link className="navbar-button" to="/">EAT N GO</Link>
                            </Typography>
                            {window.location.pathname === "/shops" ? <TextField variant="filled" className={classes.search} placeholder="search restaurant"></TextField> : <div className={classes.search}></div>}
                            <Link className="navbar-button" to="/shops" ><Button className="navbar-button" type="button">Shop</Button></Link>
                            <IconButton className="navbar-button" onClick={handleClick}><MenuRoundedIcon /></IconButton>
                            <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
                              {!props.isAuthenticated? 
                                <MenuItem onClick={handleClose}><Link className="navbar-button" to="/login"><Button className="navbar-button" color="inherit">Login</Button></Link></MenuItem>
                                : 
                                <div>
                                  <MenuItem><Logout /></MenuItem>
                                  <MenuItem><Button onClick={handleOpenModal}>Create Shop</Button></MenuItem>
                                  <CreateShop open={open} openModal={handleOpenModal} handleCloseModal={handleCloseModal} />
                                </div>
                              }
                            </Menu>
                        </Toolbar>
                    </AppBar>

                    <Switch>
                        <Route exact path="/login" component={Login}></Route>
                        <Route exact path="/shops" component={Shop}></Route>
                    </Switch>
                </Router>
            </div>
    );
}

Navbar.propTypes = {
  isAuthenticated: PropTypes.bool
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps)(Navbar);
