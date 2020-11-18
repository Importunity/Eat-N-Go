import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Button, Toolbar, Typography } from '@material-ui/core';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import '../../styles/navbar.css';
import Login from '../login/Login';
import { AutoRotatingCarousel, Slide } from "material-auto-rotating-carousel";


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1
    },
  }));

function Navbar() {
    const classes = useStyles();
    return (
            <div className={classes.root}>
                <Router>
                    <AppBar position="static" color="inherit" elevation={0} style={{backgroundColor: "inherit"}}> 
                        <Toolbar>
                            <Typography style={{fontWeight: "bolder"}} variant="h6" className={classes.title}>
                                <Link className="navbar-button" to="/">EAT N GO</Link>
                            </Typography>
                            <Link className="navbar-button" to="/login"><Button className="navbar-button" color="inherit">Login</Button></Link>
                        </Toolbar>
                    </AppBar>
                    <Switch>
                        <Route path="/login" component={Login}></Route>
                    </Switch>
                </Router>
                
            </div>
    );
}

export default Navbar;
