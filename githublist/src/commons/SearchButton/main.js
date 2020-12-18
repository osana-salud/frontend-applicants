import React from 'react';
import {
    SearchButtonContainer
} from './styled';

const Button = ({ handleOnClick, text, param, backgroundColor, color }) => {
    return (
        <SearchButtonContainer
            onClick={ (e) => handleOnClick(e) }
            disabled={ param ? false : true }
            styleBackground= { backgroundColor }
            styleColor = { color }
        >
            { text }
        </SearchButtonContainer>
    );
};

export default Button;
