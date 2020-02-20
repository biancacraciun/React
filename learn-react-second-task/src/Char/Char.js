import React from 'react';

const Char = (props) => {
    const styles = {
        display: 'inline-block',
        padding: '16px',
        margin: '16px',
        border: '1px solid black',
        textAlign: 'center'
    }

    return (
        <div style={styles} onClick={props.clicked}>
            <p>{props.character}</p>
        </div>
    );
}

export default Char;