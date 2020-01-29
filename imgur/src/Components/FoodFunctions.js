import React from 'react';
import './styling.scss';

function FoodFunctions () {
    return (
        <div className="food-functions">
            <button>
                <a href="/">Edit</a>
            </button>

            <button>
                <a href="/">Delete</a>
            </button>
        </div>
    )
}

export default FoodFunctions;