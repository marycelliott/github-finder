import { SEND_ALERT } from '../Types';

export default (state,action) =>{
    switch(action.type) {
        case SEND_ALERT:
            if(action.payload.length > 1) {
                var [msg,type] = action.payload;
                return {
                    ...state,
                    alert: {msg,type}
                }
            } else {
                return {
                    ...state,
                    alert: null
            }
        }
        default: return null
    }
}