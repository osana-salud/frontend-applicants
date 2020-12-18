import styled from 'styled-components';

export const SearchButtonContainer = styled.div `
    ${ ({ styleBackground }) => styleBackground ? `background: ${ styleBackground };` : 'background: #000000;' }
    ${ ({ styleColor }) => styleColor ? `color: ${ styleColor };` : 'color: #FFFFFF' }
    display: flex;
    justify-content: center;
    padding: 10px 0;
    border-radius: 20px;
    margin: 0px 100px 20px 30px;
    cursor: pointer;
    display: flex;
    font-family: Arial;
    font-weight: bold;
    transition: 900ms;
    @media (max-width: 768px) {
        margin: 0px 130px 10px 40px;
    }
`;
