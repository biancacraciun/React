import React from 'react';
import './Header.scss';

const header = (props) => {
    return (
        <div className="header">
            <p>{props.name}</p>
            <p>{props.occupation}</p>
        </div>
    )
}

export default header;