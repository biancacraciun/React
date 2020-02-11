import React from 'react';
import './SideDrawer_Style/DrawerToggleButton.scss';

const DrawerToggleButton  = (props) => {
    return (
        <button className="toggle-button" onClick={props.click}>
            <div className="toggle-button__line"/>
            <div className="toggle-button__line"/>
            <div className="toggle-button__line"/>
        </button>
    )
}

export default DrawerToggleButton;
