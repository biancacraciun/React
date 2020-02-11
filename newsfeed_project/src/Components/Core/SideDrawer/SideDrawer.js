import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import './SideDrawer_Style/SideDrawer.scss';

const SideDrawer = (props) => {
    let drawerClasses = 'side-drawer';

    if(props.show) {
        drawerClasses = 'side-drawer open';
    }
    
    return (
        <nav className={drawerClasses}>
            <ul>
                <li>
                    <a className="link" id="home" href="/">Home</a>
                </li>
                <li>
                    <a className="link" href="/nature">Nature</a>
                </li>
                <li>
                    <a className="link" href="/health">Health</a>
                </li>
                <li>
                    <a className="link" href="/sport">Sport</a>
                </li>
                <li>
                    <a className="link" href="/travel">Travel</a>
                </li>
                <li>
                    <a className="link" href="/tech">Tech</a>
                </li>
                <li>
                    <a className="link" href="/science">Science</a>
                </li>
                <li>
                    <a className="link" href="/education">Education</a>
                </li>
            </ul>
        </nav>
    )
}

export default SideDrawer;