import React, { Component } from 'react';

const userInputOutput = (props) => {
    return (
        <input type="text" onChange={props.change} value={props.currentName} />
    )
}

export default userInputOutput;