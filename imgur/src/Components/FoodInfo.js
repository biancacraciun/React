import React from 'react';
import FoodFunctions from './FoodFunctions';

function FoodInfo ({about: {img, name, price}}) {
    return (
        <div className="food-info"> 
            <img src={img} alt={name} name={name} />
            <h4>{name}</h4> 
            <div id="price"> 
                <div>Price</div>
                <span>{price}</span>
            </div> 
            <FoodFunctions /> 
        </div>
    )
}

export default FoodInfo;