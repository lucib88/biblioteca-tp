import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    divider: {
        height: theme.spacing(1) / 5,
        background: '#3f51b5',
        margin:  theme.spacing(1)
    },
}));

export default function Line() {
  const classes = useStyles();

  return <Divider className={classes.divider}/>
 
}