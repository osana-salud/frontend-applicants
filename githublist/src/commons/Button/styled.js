import styled from 'styled-components';

export const ButtonLogin = styled.div `
    align-items: center;
    appearance: none;
    ${ ({ styleBackground }) => styleBackground ? `background: ${ styleBackground };` : 'background: #000000;' }
    border: 0px;
    border-radius: 20px;
    ${ ({ styleColor }) => styleColor ? `color: ${ styleColor };` : 'color: #FFFFFF' }
    cursor: pointer;
    display: flex;
    font-family: Arial;
    font-weight: bold;
    height: auto;
    justify-content: center;
    margin: auto;
    margin-bottom: 6px;
    margin-top: 10px;
    padding: 6px 10px;
    text-align: center;
    transition: 850ms;
    width: 100px;
`;
