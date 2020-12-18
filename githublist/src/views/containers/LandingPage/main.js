import React, {
    useState
} from 'react';
import {
	LandingPageContainer,
	LandingPageContent,
    LandingPageDiv,
    LandingPageLower,
    Welcome
} from './styled';
import { 
    Redirect
} from 'react-router-dom';

import Backdrop from '@material-ui/core/Backdrop';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

import Button from '../../../commons/Button/main';
import NavBarH from '../../../commons/NavBarH/main';

const useStyles = makeStyles(theme => ({
	backdrop: {
		zIndex: 2,
		color: '#fff',
	},
}));

const LandingPage = () => {

    const [color, setColor] = useState(false);
    const [ isLoading, setIsLoading ] = useState(false);
    const [ goToGithubList, setGoToGithubList ] = useState(false);
    
    const classes = useStyles();
    const open = true;

    const stopIsLoading = () => {
		setIsLoading(false);
	}

    const handleOnClick = ({ target: { innerText }}) => {
        console.log('Click: ', innerText);
        setTimeout(() => stopIsLoading(), 1000);
        setIsLoading(true);
        innerText === 'GithubList' && setTimeout(() => setGoToGithubList(true), 1000);
    }
    
    let styleButton = color ? "#FFFFFF" :"#000000";
    let styleColor = color ? "#000000" : "#FFFFFF";
    return (
        <>
            <NavBarH />
            { goToGithubList && <Redirect to='/githubList'/> }
            
            <LandingPageContainer>
                <LandingPageContent>
                    <LandingPageLower>
                        <Welcome>¡BIENVENIDO!</Welcome>
                        <LandingPageDiv>
                                <Button
                                    backgroundColor= { styleButton }
                                    text='GithubList'
                                    handleOnClick={ handleOnClick }
                                    color={ styleColor }
                                />
                                {
                                    isLoading &&
                                        <Backdrop open={ open } className={classes.backdrop}>
                                            <CircularProgress color="inherit" />
                                        </Backdrop>
                                }
                        </LandingPageDiv>
                    </LandingPageLower>
                </LandingPageContent>
            </LandingPageContainer>
        </>
	);
};

export default LandingPage;
