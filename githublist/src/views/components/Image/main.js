import React from 'react';
import {
    ImageContainer
} from './styled';
import {
    func,
    object
} from 'prop-types';

const Image = ({
    src
}) => {

    return (
        <ImageContainer>
            <img src={ src } />
        </ImageContainer>
    );
};

Image.propTypes = {
    items: object,
    onRemove: func,
    onUpdateRating: func
};

export default Image;
