import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import '../Styles.scss';

function Footer () {
    return (
        <footer className="footer">
            <button id="show-all">Show all(2000+) ></button> 
            <div id="more">
                <button>Terms, Privacy, Currency and More</button> 
                <FontAwesomeIcon id="double-right" icon={faAngleDoubleRight} />
            </div>
        </footer>
    )
}

export default Footer;
