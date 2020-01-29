import React from 'react';
import Rater from 'react-rater';
import 'react-rater/lib/react-rater.css';
import '../Styles.scss';

function ApartamentRating ({stars, number, comfort}) {
    
    return (
        <div className="rating">
            <span><Rater total={5} rating={stars} /></span> 
            <span>{number}</span> 
            <span>{comfort}</span>
        </div>
    )
}

export default ApartamentRating; 