import styled from 'styled-components';

export const LandingPageContainer = styled.div `
    width: 100%;
    height: 100%;
    margin: 40px 0 0 0;
    position: absolute;
`;

export const LandingPageContent = styled.div `
    width: 100%;
    height: 100%;
    @media (max-width: 768px) {
        //background-image:  linear-gradient(90deg, rgba(117,70,138,1) 0%, rgba(117,70,138,0) 100%, rgba(255,255,255,1) 100%), url('../../assets/images/appBackground.jpg');
        display: flex;
        justify-content: center;
        background-size: cover;
        align-items: center;
    }  
`;

export const LandingPageDiv = styled.div `
    padding: 10px;
    border-radius: 30px;
    width: inherit;
    height: auto;
    margin: auto auto;
    box-shadow: 6px 15px 100px 0 rgba(0,0,0,0.16);
    box-sizing: content-box;
    background: #9AFFEA;
    @media (max-width: 768px) {
        font-size: 14px;
    }
`;

export const Welcome = styled.div `
    font-size: 25px;
    color: #000000;
    font-weight: bold;
    @media (max-width: 768px) {
        font-size: 14px;
    }
`;

export const LandingPageLower = styled.div `
    align-items: center;
    background: #CBCBCB;
    border-radius: 30px;
    display: flex;
    font-size: 18px;
    flex-direction: column;
    height: 50%;
    justify-content: center;
    margin: auto;
    width: 50%;
    @media (max-width: 768px) {
        align-items: center;
        font-size: 14px;
        height: 60%;
        width: 60%;
    }
`;

export const SwitchLabel = styled.div `
    position: absolute;
    top: 0;
    left: 0;
    width: 40px;
    height: 30px;
    border-radius: 15px;
    background: #bebebe;
    cursor: pointer;
    &::after {
        content: "";
        display: block;
        border-radius: 50%;
        width: 18px;
        height: 18px;
        margin: 3px;
        background: #ffffff;
        box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
        transition: 500ms;
    }
`;

export const Switch = styled.div `
    opacity: 0;
    z-index: 1;
    border-radius: 15px;
    width: 40px;
    height: 30px;
    &:checked + ${ SwitchLabel } {
        background: #4fbe79;
        &::after {
            content: "";
            display: block;
            border-radius: 50%;
            width: 18px;
            height: 18px;
            margin-left: 21px;
            transition: 500ms;
        }
    }

    @media (max-width: 768px) {

    }
`;

export const SwitchWraper = styled.div `
    position: relative;
`;

export const ThemeProvider = styled.div `
    background: #FFFFFF;
    align-items: center;
    border: 0px;
    border-radius: 20px;
    color: #000000;
    cursor: pointer;
    display: flex;
    height: auto;
    font-family: Arial;
    font-weight: bold;
    justify-content: center;
    margin: auto;
    margin-bottom: 6px;
    margin-top: 10px;
    padding: 5px 0px 5px 0px;
    text-align: center;
    width: 100px;
    @media (max-width: 768px) {
        padding: 0px 0px 5px 0px;
    }
`;
