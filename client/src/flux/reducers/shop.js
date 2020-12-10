import { ADD_SHOP, GET_SHOPS, SHOPS_LOADING } from "../actions/types";

const initialState = {
    shops: [], 
    loading: false
};

function shop(state = initialState, action){
    switch(action.type){
        case GET_SHOPS:
            return{
                ...state,
                shops: action.payload,
                loading: false
            };
        case ADD_SHOP:
            return{
                ...state,
                shops: [action.payload, ...state.shops]
            };
        case SHOPS_LOADING:
            return {
                ...state, 
                loading: true
            }
        default: 
            return state
    }
}

export default shop;
