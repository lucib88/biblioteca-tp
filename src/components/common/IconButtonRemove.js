import { useState } from 'react';
import { IconButton } from '@material-ui/core'
import { DeleteSweep } from '@material-ui/icons';
import AlertDialog from './AlertDialog';

export default function IconButtonRemove({ elemento, handleDelete, accion, pregunta, contenido }) {
    const [open, setOpen] = useState(false);


    const handleCloseDialog = () => {
        setOpen(false);
    }

    const handleActionDialog = () => {
        setOpen(false);
        handleDelete(elemento);
    }

    const handleOpenDialog = () => {
        setOpen(true);
    }

    return (
        <>
            <IconButton aria-label="Anular" color="primary"
                onClick={handleOpenDialog}
                onKeyPress={handleOpenDialog}>
                <DeleteSweep
                    fontSize="small" />
            </IconButton>
            <AlertDialog open={open} action={accion} pregunta={pregunta} contenido={contenido} handleClose={handleCloseDialog} handleAction={handleActionDialog} />
        </>
    );
}