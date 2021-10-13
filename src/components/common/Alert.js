import { makeStyles } from '@material-ui/core/styles';
import { Alert, AlertTitle } from '@material-ui/lab';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(2),
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
    marginBottom: theme.spacing(4)
  },
}));

export default function AlertMessage({ severity = "error", title = "Error", message = "Hubo un error al cargar los datos." }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Alert severity={severity}>
        <AlertTitle>{title}</AlertTitle>
        {message}
      </Alert>
    </div>
  );
}