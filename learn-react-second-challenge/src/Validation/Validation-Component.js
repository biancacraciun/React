import React from 'react'; 

const Validation = (props) => {
    let validationMessage = "Text long enough";

    if (props.inputLength <= 5) {
        validationMessage = "Text too short!"
    } 

    return (
        <div>
            {/* {
                // props.inputLength > 5 ? 
                // <p>Text long enough!</p> :
                // <p>Text too short!</p>
            } */}
            <p>{validationMessage}</p>
        </div>
    )
};

export default Validation;