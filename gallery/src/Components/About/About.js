import React from 'react';

import './About.scss';

const about = (props) => {

    return (
        <div className="about">
            <div className="content">
                <h1>About</h1>
                <div className="line" />
                {props.aboutMe.map((index, id) => {
                    return <p className="aboutMe" key={id}>
                        {index}</p>
                })}
                <p className="words">
                    I am a <strong>newbie front-end developer</strong> who entered intro programming world
                    six months ago, when I started front-end programming course at <strong>Wantsome
                    Academy</strong>. <br />
                    I am currently looking to work in a learning and challenging environment,
                    utilizing my skills and knowledge I've gained during the Front-End basics course,
                    to be the best of my abilities and contribute positively to my personal growth
                    and gain real practical experience on large projects.
                </p>
            </div>
        </div>
    )
};

export default about;