import { useState } from 'react';
import { useAlert } from '../../Providers/AlertProvider';

function AlertMessage() {
    const {alert, hideAlert} = useAlert();

    return (
        alert && <div className="alert alert-warning alert-dismissible fade show" role="alert">
        <strong style={{
            color:'white'
        }}>{alert}</strong>
        <button type="button" className="btn-close" onClick={hideAlert} aria-label="Close"><strong style={{
            color:'white'
        }}>X</strong></button>
    </div>
    );
}

export default AlertMessage;