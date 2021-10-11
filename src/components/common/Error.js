import { makeStyles } from '@material-ui/core/styles';
import { Alert, AlertTitle } from '@material-ui/lab';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(2),
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function Error() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Alert severity="error">
        <AlertTitle>Error</AlertTitle>
        Hubo un error al cargar los datos. 
      </Alert>
    </div>
  );
}