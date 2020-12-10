const { CLEAR_ERRORS, GET_ERRORS } = require("../actions/types");


const initialState = {
    msg: {},
    status: null,
    id: null
}


function error(state = initialState, action){
    switch(action.type){
        case GET_ERRORS:
            return {
                // msg from the server
                msg: action.payload.msg,
                status: action.payload.status,
                id: action.payload.id
            };
        case CLEAR_ERRORS:
            return {
                msg: {},
                status: null,
                id: null
            };
        default:
            return state;
    }
}

export default error;