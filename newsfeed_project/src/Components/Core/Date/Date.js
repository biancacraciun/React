import React from 'react';
import moment from 'moment';
import './Date_style/Time.scss';

class Date extends React.Component {
    render () {
        let now = moment().format("DD/MM/YYYY");
        return (
            <div id="data">{now}</div>
        )
    }
}

export default Date;