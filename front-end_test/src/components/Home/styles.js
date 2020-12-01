import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        width: 400,
        justifyContent: 'space-around',
        margin: 'auto',
        marginTop: 50,
    },
    avatar: {
        maxWidth: '100%',
        maxHeight: '100%',
        display: 'block',
    },
    info: {
        width: 180,
    },
    item: {
        display: 'flex',
        width: 'min-content',
        justifyContent: 'space-between',
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: 'white'
        }
    },
    grid: {
        width: 'min-content',
        height: 'min-content',
        margin: 'auto',
        marginTop: 50,
        backgroundColor: '#f7f7f7'
    },
    span: {
        color: 'red',
        width: 240,
        margin: 'auto',
        textAlign: 'right',
        marginTop: 5,
    },
    warning: {
        border: '0.5px solid red',
        paddingLeft: 5
    },
    normal: {
        border: '0px',
        paddingLeft: 5
    }
}));