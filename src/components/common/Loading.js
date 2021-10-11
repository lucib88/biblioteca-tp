import { CircularProgress } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        marginTop: theme.spacing(2),
        justifyContent: 'center',
        '& > * + *': {
            marginLeft: theme.spacing(2),
        },
    },
}));

const Loading = () => {
    const classes = useStyles();

    return <div className={classes.root}>
        <CircularProgress />
    </div>
}


export default Loading;