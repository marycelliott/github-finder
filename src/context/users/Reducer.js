import {
    SEARCH,
    GET_USER,
    SET_LOADING 
} from '../Types';

export default (state,action) => {
    switch(action.type) {
        case SEARCH:
            return {
                ...state,
                users: action.payload,
                loading: false
            }
        case SET_LOADING:
            return {
                ...state,
                loading: true
            }
        case GET_USER:
            return {
                ...state,
                user: action.payload,
                loading: false
            }
        default: return state
    }
}