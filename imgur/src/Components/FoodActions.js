import React from 'react';

function FoodActions ({name, price, about, more}) {
console.log(name)
    return (
        <div>
            <div>
                <h2>{name}</h2>
                <span>{price}</span>
            </div> 

            <p>{about}</p> 
            <a href={more} target="_blank">For more info click here!</a>
        </div> 
    )
}

export default FoodActions;