import React from 'react';
import {
    ButtonLogin
} from './styled';

const Button = ({ handleOnClick, text, param, backgroundColor, color }) => {
    return (
        <ButtonLogin
            disabled={ param ? false : true }
            onClick={ (e) => handleOnClick(e) }
            styleBackground= { backgroundColor }
            styleColor = { color }
        >
            { text }
        </ButtonLogin>
    );
};

export default Button;
