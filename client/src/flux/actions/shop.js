import axios from 'axios';
import { tokenConfig } from './auth';
import { getErrors } from './error';
import { ADD_SHOP, GET_SHOPS, SHOPS_LOADING } from './types';

export const loadShops = () => (dispatch) =>  {
    dispatch(setShopLoading());
    axios.get('/api/shops')
        .then(response => {
            dispatch({
                type: GET_SHOPS,
                payload: response.data
            })
        }).catch(error => {
            dispatch(
                getErrors(error.response.data, error.response.status)
            )
        })
}

export const addShop = (shop, id) => (dispatch, getState) => {
    const config = {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
    }
    console.log(id);
    axios.post(`/api/shops/${id}`, shop, tokenConfig(getState), config)
        .then(response => dispatch({
            type: ADD_SHOP,
            payload: response.data
        })).catch(error => {
            dispatch(
                getErrors(error.response.data, error.response.status)
            )
        })
}

export const setShopLoading = () => {
    return {
        type: SHOPS_LOADING
    }
}