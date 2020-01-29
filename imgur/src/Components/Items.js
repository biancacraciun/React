import React from 'react';
import FoodInfo from './FoodInfo';
import './styling.scss';

function Items ({foodData}) {
    return (
        <div className="box">   
            <FoodInfo id="food-info" about={foodData}/>
         </div>
    )
}

export default Items;