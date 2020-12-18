import styled from 'styled-components';

export const NavMenu = styled.div `
    background-color: ${ ({ styleBackground }) => styleBackground };
    padding: 20px;
    display: flex;
    transition: 900ms;
    font-size: 16px;
    @media (max-width: 768px) {
        font-size: 12px;
    }
`;

export const Info = styled.div `
    font-family: Arial;
    font-weight: bold;
`;