import React, { Component } from 'react'; 
import Card from './Card';
import AOS from 'aos'; 
import 'aos/dist/aos.css';

import './Resume.scss';

class Resume extends Component { 
    constructor(props) {
        super(props); 
        
        this.state = {
            name: props.name,
            period: props.period,
            profile: props.profile,
            program: props.program
        }
    }

    componentDidMount(){
        AOS.init({
          duration : 2000
        })
    } 

    render() {
        return (
            <div className="study" data-aos="zoom-in-right">
                <Card
                    name={this.state.name}
                    period={this.state.period}
                    profile={this.state.profile}
                    program={this.state.program}
                />
            </div>  
    )
    }

};

export default Resume;