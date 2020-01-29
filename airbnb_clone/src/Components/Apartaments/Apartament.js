import React from 'react';
import ApartamentDetails from './ApartamentDetails';
import ApartamentRating from './ApartamentRating';


function Apartament ({details}) {
    return (
        <div>
            <ApartamentDetails info={details}/>
            <ApartamentRating stars={details.stars} number={details.number} comfort={details.comfort} />
        </div>
    )
} 

export default Apartament;  