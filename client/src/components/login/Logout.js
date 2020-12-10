import React, {Fragment} from 'react';
import { Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {logout} from '../../flux/actions/auth';
import { connect } from 'react-redux';
import '../../styles/login.css';
import { Button } from '@material-ui/core';



function Logout(props){
    return(
        <Fragment>
            <Link className="navbar-button" to="/" onClick={props.logout}><Button className="navbar-button" color="inherit">Logout</Button></Link> 
        </Fragment>
    )
}

Logout.propTypes = {
    logout: PropTypes.func.isRequired
}

export default connect(null, {logout})(Logout);