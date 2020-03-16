import React, { Component } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import './Job.scss';

class job extends Component {
    constructor(props) {
        super(props)

        this.state = {
            period: props.period,
            job: props.job,
            company: props.company
        }
    }

    componentDidMount(){
        AOS.init({
          duration : 2000
        })
    } 

    render() {
        return (
            <div className="job" data-aos="zoom-in-left">
                <div className="period">
                    <div />
                    <p>{this.state.period}</p>
                </div>
                <p id="job-name">{this.state.job}</p>
                <p id="company">{this.state.company}</p>
            </div>
        )
    }
};

export default job;