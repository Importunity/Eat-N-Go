import axios from 'axios';
import { getErrors } from './error';
import { AUTH_ERROR, LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT_SUCCESS, REGISTER_FAIL, REGISTER_SUCCESS, USER_LOADED, USER_LOADING } from './types';

export const loadUser = () => (dispatch, getState) => {
    dispatch({type: USER_LOADING});
    axios.get('/api/auth/user', tokenConfig(getState))
        .then(response => dispatch({
            type: USER_LOADED,
            payload: response.data
        }))
        .catch(error => {
            dispatch(getErrors(error.response.data, error.response.status));
            dispatch({
                type: AUTH_ERROR
            });
        })
}

export const register = ({username, email, password}) => dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const requestBody = JSON.stringify({username, email, password});
    axios.post('/api/auth/register', requestBody, config)
        .then(response => dispatch({
            type: REGISTER_SUCCESS,
            payload: response.data
        }))
        .catch(error => {
            //console.log(error);
            dispatch(getErrors(error.response.data, error.response.status, 'REGISTER_FAIL'));
            dispatch({
                type: REGISTER_FAIL
            })
        })
}

export const login = ({email, password}) => dispatch => {
    const config = {
        headers:{
            'Content-Type': 'application/json'
        }
    }

    const requestBody = JSON.stringify({email, password});
    axios.post('/api/auth/login', requestBody, config)
        .then(response => dispatch({
            type: LOGIN_SUCCESS,
            payload: response.data
        }))
        .catch(error => {
            dispatch(getErrors(error.response.data, error.response.status, 'LOGIN_FAIL'));
            dispatch({
                type: LOGIN_FAIL
            })
        })
}

export const logout = () => {
    return{
        type: LOGOUT_SUCCESS
    }
}


export const tokenConfig = getState => {
    const token = getState().auth.token;
    const config = {
        headers:{
            'Content-Type': 'application/json'
        }
    }

    // add the token
    if(token){
        config.headers['x-auth-token'] = token;
    }
    return config;
}