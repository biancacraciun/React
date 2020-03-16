import React from 'react';
import './Resume.scss';
 
const card = (props) => {
    return (    
        <div className="card">
            <div id="period">
                <div />
                <p>{props.period}</p>
            </div>
            <p id="name">{props.name}</p>
            <p id="profile">{props.profile}</p>
            <a 
                href={props.program} 
                target="_blank" 
                rel="noopener"
            >
                {props.program}
            </a>
        </div>
    )
};

export default card;