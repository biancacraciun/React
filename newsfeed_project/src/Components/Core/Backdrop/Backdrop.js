import React from 'react';
import './Backdrop_Style/Backdrop.scss';

const Backdrop = props => {
    return (
        <div className="backdrop" onClick={props.click}/>
    )
}

export default Backdrop;