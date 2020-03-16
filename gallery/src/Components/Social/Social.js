import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faFacebookSquare,
    faGithub,
    faLinkedin
} from '@fortawesome/free-brands-svg-icons';
import './Social.scss';

const social = (props) => {
    return (
        <div className="social">
            <a href={props.github} target="_blank">
                <FontAwesomeIcon className="icon" icon={faGithub} size="2x" />
            </a>
            <a href={props.linkedin} target="_blank">
                <FontAwesomeIcon className="icon" icon={faLinkedin} size="2x" />
            </a>
            <a href={props.github} target="_blank">
                <FontAwesomeIcon className="icon" icon={faFacebookSquare} size="2x"/>
            </a>
        </div>
    )
}

export default social;