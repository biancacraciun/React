import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import '../Styles.scss';

function Header () {
    return (
        <div className="header">
            <div className="left-section">
                <img src="https://lh3.googleusercontent.com/BQnvuZR500pg2ulvv3FBmRI93ODz3AjNfbz92hCieuJLvmbGY36AKhETMTTfTDgpPQI" alt="Airbnb Logo" />
            
                <div className="search">
                    <FontAwesomeIcon id="icon" icon={faSearch} />
                    <input type="text" placeholder="Try ”Athens”"></input>
                </div>
            </div>

            <ul>
                <li>
                    <a href="/">Become a host</a>
                </li>
                <li>
                    <a href="/">Help</a>
                </li>
                <li>
                    <a href="/">Sign up</a>
                </li>
                <li>
                    <a href="/">Log in</a>
                </li>
            </ul>
        </div>
    )
}

export default Header;