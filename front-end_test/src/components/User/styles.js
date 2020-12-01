import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        width: 'min-content',
        justifyContent: 'space-between',
        margin: 'auto',
        marginTop: 50,
    },
    avatar: {
        marginRight: 50
    }
}));