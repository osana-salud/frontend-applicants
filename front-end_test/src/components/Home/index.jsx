import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { useStyles } from './styles.js';

export default function Home() {
    const classes = useStyles();
    const [api, setApi] = useState('');

    const handleChange = (event) => {
        setApi(event.target.value);
    };

    return (
        <div className={classes.container}>
            <FormControl >
                <InputLabel id="demo-simple-select-label">Api</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={api}
                    onChange={handleChange}
                >
                    <MenuItem value='github'>Github Api</MenuItem>
                    <MenuItem value='gitlab'>Gitlab Api</MenuItem>
                </Select>
            </FormControl>
            <Paper component="form" >
                <InputBase
                    placeholder="Search for user..."
                    inputProps={{ 'aria-label': 'search google maps' }}
                />
                <IconButton type="submit" aria-label="search" >
                    <SearchIcon />
                </IconButton>
            </Paper>
        </div>
    );
};