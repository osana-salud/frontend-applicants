import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

export default function Home() {

    return(
        <div>
            <AppBar position="static">
                <Toolbar variant="dense">
                    <Typography variant="h6" color="inherit">
                        Osana Salud Front-End Test
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
};