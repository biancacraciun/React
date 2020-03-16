import React, { Component } from 'react';

import './Menu.scss';

const menu = () => {
    return (
        <ul className="menu">
            <li>
                <a href="#">Home</a>
            </li>
            <li>
                <a href="/about">About</a>
            </li>
            <li>
                <a href="/resume">Resume</a>
            </li>
            <li>
                <a href="/portfolio">Knowledge and skills</a>
            </li>
            <li>
                <a href="contact">Contact</a>
            </li>
        </ul>
    )
}

export default menu;