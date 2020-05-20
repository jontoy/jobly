import React from 'react';

function Alert({type="danger", msgs=[]}) {
    return (
        <div className={`alert alert-${type}`} role="alert">
            {msgs.map(msg => (
                <p className="small">
                    {msg}
                </p>
            ))}
        </div>
    );
}

export default Alert;