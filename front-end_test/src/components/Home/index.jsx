import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import ListItemText from '@material-ui/core/ListItemText';
import Swal from 'sweetalert2'
import { useStyles } from './styles.js';
import axios from 'axios';

export default function Home() {
    const classes = useStyles();
    const [api, setApi] = useState('');
    const [query, setQuery] = useState('');
    const [list, setList] = useState([]);
    const [name, setName] = useState('');
    let inputStyle = query.length < 4 ? 'warning' : 'normal';

    const handleChange = (event) => {
        setApi(event.target.value);
        if (event.target.value === 'github') {
            setName('login')
        };
        if (event.target.value === 'gitlab') {
            setName('username')
        };
    };

    const handleInput = (event) => {
        setQuery(event.target.value);
    };

    const handleSearch = async (event) => {
        event.preventDefault();
        if(query === 'osana-salud') {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Search not allowed',
            })
            return;
        }
        if (api === 'github') {
            const resp = await axios.get(`https://api.github.com/search/users?q=${query}+in:user`);
            setList(resp.data.items.slice(0, 5));
        };
        if (api === 'gitlab') {
            const resp = await axios.get(`https://gitlab.com/api/v4/search?scope=users&search=${query}`, {
                headers: {
                    'PRIVATE-TOKEN': 'szk5Mfd8q6sG-g6CdGXy'
                }
            });
            setList(resp.data.slice(0, 5));
        };
        if (api === '') {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Please select an Api first',
            })
        }
    };

    return (
        <div>
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
                        className={classes[inputStyle]}
                        onChange={handleInput}
                        placeholder="Search for user..."
                        inputProps={{ 'aria-label': 'search google maps' }}
                    />
                    <IconButton type="submit" aria-label="search" onClick={handleSearch}>
                        <SearchIcon />
                    </IconButton>
                </Paper>
            </div>
            {query.length < 4 && <p className={classes.span}>Type more than 4 characters</p>}
            <Grid item xs={12} md={6} className={classes.grid}>
                <div >
                    <List className={classes.demo}>
                        {list.map(item =>
                            <ListItem key={item.id} className={classes.item}>
                                <ListItemAvatar>
                                    <Avatar>
                                        <img src={item.avatar_url} alt='user avatar' className={classes.avatar} />
                                    </Avatar>
                                </ListItemAvatar>
                                <div className={classes.info}>
                                    <ListItemText
                                        primary={item[name]}
                                    />
                                </div>
                                <div className={classes.info}>
                                    <ListItemText
                                        primary={'id #' + item.id}
                                    />
                                </div>
                            </ListItem>
                        )}
                    </List>
                </div>
            </Grid>
        </div>
    );
};