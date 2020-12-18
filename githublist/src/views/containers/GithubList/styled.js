import styled from 'styled-components';

export const GithubListContainer = styled.div `
    display: inline-block;
    position: relative;
    font-family: Arial;
    font-weight: bold;
    transition: 900ms;
    font-size: 16px;
    @media (max-width: 768px) {
        font-size: 12px;
    }
`;

export const GithubListSearch = styled.div `
    padding: 0;
    margin: 0 0 0 20px;
    @media (max-width: 768px) {

    }
`;

export const Input = styled.input `
    background: ${ ({ theme: { lightColor } }) => lightColor };
    box-shadow: none;
    border: solid;
    border-radius: 10px;
    color: ${ ({ theme: { textColor } }) => textColor };
    flex-wrap: wrap;
    height: 30px;
    max-width: 150px;
    outline: none;
    padding: 0px;
    width: 100%;
    margin: 10px 0px 10px 0px;
    &::placeholder {
        color: ${ ({ theme: { labelColor } }) => labelColor };
        font-weight: 500;
    }
    transition: 900ms;
    @media (max-width: 768px) {
        height: 25px;
        width: 110px;
    }
`;

export const GithubListCard = styled.div `

   @media (max-width: 768px) {

    }
`;

export const Header = styled.div `
    
    @media (max-width: 768px) {

    }
`;

export const GithubListCardContent = styled.div `
    
    @media (max-width: 768px) {

    }
`;

export const Text = styled.div `
    border: ${ ({ styleBorder }) => `1.5px solid ${ styleBorder }` };
    border-radius: 25px;
    box-sizing: content-box;
    height: auto;
    margin: 10px;
    outline: none;
    padding: 5px 10px;
    text-align: center;
    width: auto;
`;