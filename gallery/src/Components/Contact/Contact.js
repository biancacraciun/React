import React from 'react';
import './Contact.scss';
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const contact = (props) => {
    return (
        <div className="contact">
            <div className="contact-me">
                <h1>Contact</h1>
                <div id="line"/>
                <p>Reach me at:</p>
                <ul>
                    <li>
                        <FontAwesomeIcon className="icon" icon={faAngleDoubleRight} />
                        <a href="mailto:craciunbiancas@yahoo.com?Subject=front-end%20developer" target="_top">{props.email}</a>
                    </li>
                    <li>
                        <FontAwesomeIcon className="icon" icon={faAngleDoubleRight} />
                        <span>{props.phoneNr}</span>
                    </li>
                    <li>
                        <FontAwesomeIcon className="icon" icon={faAngleDoubleRight} />
                        <a href={props.cv} title="" download>Download my CV</a>
                    </li>
                </ul>
            </div>
        </div>
    )
};

export default contact;