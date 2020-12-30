import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Button, IconButton, Menu, MenuItem, Toolbar, Typography } from '@material-ui/core';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import '../../styles/navbar.css';
import Login from '../login/Login';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import PropTypes from 'prop-types';
import {connect, useDispatch, useSelector} from 'react-redux';
import Logout from '../login/Logout';
import Shop from '../body/shop/Shop';
import CreateShop from '../body/shop/CreateShop.js';
import Search from '../body/Search';
import Home from '../Home';
import { loadShops } from '../../flux/actions/shop';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1
    },
    menuButton: {
      marginRight: theme.spacing(2),
    }
  }));

function Navbar(props) {
    const dispatch = useDispatch();
    const classes = useStyles();
    const[anchorEl, setAnchorEl] = useState(null);
    const [open, setOpen] = useState(false);
    const[showSearch, setShowSearch] = useState(false);
    const[navColor, setNavColor] = useState("");

    useEffect(() => {
      dispatch(loadShops());
    },[dispatch])


    const {shops} = useSelector(state => state.shop);

    const showSearchHandler = (value) => {
      setShowSearch(value);
    }

    const changeNavColor = (color) => {
      setNavColor(color)
    }


    const handleMenuClick = (event) => {
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
                    <AppBar position="static" color="inherit" elevation={0} style={{backgroundColor: navColor === null? "inherit" : navColor}}> 
                        <Toolbar>
                            <Typography style={{fontWeight: "bolder"}} variant="h6" className={classes.title}>
                                <Link className="navbar-button" to="/" >EAT N GO</Link>
                            </Typography>
                            {showSearch? <Search /> : <div className="search"></div>}
                            <Link className="navbar-button" to="/shops" ><Button className="navbar-button" type="button">Shop</Button></Link>
                            <IconButton className="navbar-button" onClick={handleMenuClick}><MenuRoundedIcon /></IconButton>
                            <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose} >
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
                        <Route path="/login"><Login showSearchHandler={showSearchHandler} /></Route>
                        <Route path="/shops"><Shop shops={shops} showSearchHandler={showSearchHandler} changeNavColor={changeNavColor} /></Route>
                        <Route path="/"><Home showSearchHandler={showSearchHandler} changeNavColor={changeNavColor} /></Route>
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
