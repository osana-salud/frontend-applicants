import React, { useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import { useStyles } from './styles.js';

export default function Home(props) {
    const classes = useStyles();
    const [name, setName] = useState('');
    const [url, setUrl] = useState('');
    const [extra, setExtra] = useState('');

    useEffect(() => {
        if (props.data.api === 'github') {
            setName('login');
            setUrl('html_url');
            setExtra('type')
        };
        if (props.data.api === 'gitlab') {
            setName('username');
            setUrl('web_url');
            setExtra('state')
        };
    })

    const Text = (propis) => {
        return (
            <Typography variant={propis.variant} gutterBottom className={propis.style}>
                {propis.text}
            </Typography>
        )
    }

    return (
        <div className={classes.container}>
            <img src={props.data.avatar_url} alt='avatar' className={classes.avatar}/>
            <div>
                <Text variant='h2' text={props.data[name]} />
                <Text variant='h5' text={'id #' + props.data.id} />
                <a href={props.data.url}><Text variant='h5' text={props.data[url]} /></a>
                <Text variant='h5' text={props.data[extra]} />
                <br></br>
                <br></br>
                <Text variant='h6' text={props.data.api + ' api'} />
            </div>
        </div>
    );
};