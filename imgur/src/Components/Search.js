import React from 'react';
import './styling.scss';

function Search () {
    return (
        <div className="search">
            <div className="search-motor">
                <input type="text" placeholder="Item"></input>
                <input type="number" placeholder="Price"></input>
                <button type="button">Save</button>
            </div>
        </div>
    )
}

export default Search;