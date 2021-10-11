import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function SnackbarWrapper({ info, handleClose }) {
    const { open, severity, message } = info;
    const onClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        handleClose();
    };

    return (
        <Snackbar
            open={open}
            autoHideDuration={6000}
            onClose={onClose}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left'
            }}>
            <Alert onClose={onClose} severity={severity}>
                {message}
            </Alert>
        </Snackbar>
    );
}