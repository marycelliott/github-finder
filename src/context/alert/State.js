import React, { useReducer } from 'react';
import AlertContext from './Context';
import AlertReducer from './Reducer';
import {
    SEND_ALERT 
} from '../Types';

const AlertState = (props) => {
    const initialState = {
        alert: null
    }
    const [state,dispatch] = useReducer(AlertReducer,initialState);

    // SEND ALERT
    const sendAlert = (...args) => {
        dispatch({type: SEND_ALERT, payload: args});
    }

    return <AlertContext.Provider
        value ={{
            alert: state.alert,
            sendAlert
        }}
    >
        {props.children}
    </AlertContext.Provider>
}
export default AlertState;