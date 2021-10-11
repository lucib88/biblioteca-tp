
import { useState, useEffect } from "react";

export const SEVERITY = {
    SUCCESS: 'success',
    ERROR: 'error',
    WARNING: 'warning',
    INFO: 'info',
};

const initMessage = {
    severity: SEVERITY.SUCCESS,
    open: false,
    message: "",
};

const useSnackbar = (error) => {
    const [message, setMessage] = useState(initMessage);

    useEffect(() => {
        error && openMessage(error, SEVERITY.ERROR);
    }, [error]);


    const handleClose = () => {
        setMessage({
            ...message,
            open: false,
        });
    };

    const openMessage = (message, severity) => {
        setMessage({
            message,
            severity: severity,
            open: true,
        });
    };

    return {
        message,
        handleClose,
        openMessage

    };
};

export default useSnackbar;
