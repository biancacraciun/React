import React from 'react';
import '../Styles.scss';

function ApartamentDetails({info: { image, type, location, title }}) {
    return(
        <div className="place">
            <img src={image} alt={title} name={title} /> 
            <p>{type} - {location}</p>
            <p>{title}</p>
        </div>
    )
}

export default ApartamentDetails; 