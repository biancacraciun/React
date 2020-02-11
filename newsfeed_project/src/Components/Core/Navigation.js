import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import "./Navigation_Style/Navigation.scss";


const Navigation = props => {
    return (
        <div className="navigation">
            <nav>
                <div></div>
                <ul>
                    <li>
                        <a href="/" className="link" id="home">Home</a> 
                    </li>
                    <li>
                        <a href="/nature" className="link" id="nature">Nature</a>
                    </li>
                    <li>
                        <a href="/health" className="link" id="health">Health</a>
                    </li>
                    <li>
                        <a href="/sport" className="link">Sport</a>
                    </li>
                    <li>
                        <a href="/travel" className="link">Travel</a>
                    </li>
                    <li>
                        <a href="/tech" className="link">Tech</a>
                    </li>
                    <li>
                        <a href="/science" className="link">Science</a>
                    </li>
                    <li>
                        <a href="/education" className="link" to="/education">Education</a>
                    </li>
                </ul>
            </nav>

            <div className="search">
                <FontAwesomeIcon id="search-logo" icon={faSearch} />
                <input type="search"  placeholder="Search.." area-label="Search through site content"
                name="q"></input>
            </div>
        </div>
    )
}

export default Navigation;