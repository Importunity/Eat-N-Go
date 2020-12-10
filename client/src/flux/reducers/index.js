import {combineReducers} from 'redux';
import error from './error';
import auth from './auth';
import shop from './shop';

export default combineReducers({
    error: error,
    auth: auth,
    shop: shop
})