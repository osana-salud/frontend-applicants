import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { useHistory } from "react-router-dom";

export default function Home() {
    const history = useHistory();

    const goHome = (e) => {
        e.preventDefault();
        history.push('/');
    };

    return(
        <div>
            <AppBar position="static">
                <Toolbar variant="dense">
                    <Typography variant="h6" color="inherit" onClick={goHome} style={{cursor: 'pointer'}}>
                        Osana Salud Front-End Test
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
};