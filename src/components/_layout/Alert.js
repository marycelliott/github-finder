import React, { useContext } from 'react';
import AlertContext from '../../context/alert/Context';

const Alert = () => {
    const alertContext = useContext(AlertContext);
    const { alert } = alertContext;
    if(alert !== null){
        return (
            <div className={`alert w-50 container p-1 mt-2 mb-0 alert-${alert.type}`} role="alert">
            <i className="fas fa-info-circle" /> {alert.msg}
            </div>
        )
    } else {
        return null
    }
    
}

export default Alert;