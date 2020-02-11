import React from 'react';
import Clock from 'react-live-clock';
import Date from './Date';
import './Date_style/Time.scss';

class Time extends React.Component {
    render () {
        return (
            <div className="date">
                <Date/>
                <Clock id="clock" format={'HH:mm:ss'} ticking={true} timezone={'UTC +2/Europe'}/>
            </div>
        )
    }
}

export default Time;