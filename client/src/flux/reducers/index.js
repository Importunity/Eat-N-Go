import {combineReducers} from 'redux';
import error from './error';
import auth from './auth';
import shop from './shop';
import review from './review';
export default combineReducers({
    error: error,
    auth: auth,
    shop: shop,
    review: review,
})