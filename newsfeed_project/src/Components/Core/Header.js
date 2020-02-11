import React from 'react';
import "./Header_Style/header.scss";
import Time from './Date/Time';
import DrawerToggleButton from './SideDrawer/DrawerToggleButton';

const Header = props => {
    return (
        <div className="title">
            <div className="name">
                <img src="https://cdn.dribbble.com/users/1272091/screenshots/6735365/hot-news.jpg" name="newspaper" alt="newspaper"></img>
                <div className="button">
                    <DrawerToggleButton click={props.drawerClickHandler}/>
                </div>
                <h1>The News</h1>
            </div>
            <Time /> 
        </div> 
    )
}

export default Header;