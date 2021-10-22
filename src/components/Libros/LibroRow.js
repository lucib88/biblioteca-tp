import { TableRow, TableCell } from '@material-ui/core'
import { Edit } from '@material-ui/icons';
import { IconButton } from '@material-ui/core'
import { Link } from 'react-router-dom';
import IconButtonRemove from '../common/IconButtonRemove';
import { getRouteId, routes } from '../../data';

export const columnas = ["NOMBRE", "AUTOR", "UBICACION"];

const removeParameters = {
    accion: "BORRAR",
    pregunta: '\xBFBorrar libro?',
    contenido: 'Confirme que desea borrar el libro seleccionado'
};

const LibroRow = ({ libro, handleDelete, disabled = false }) => {
    const { nombre, autor, ubicacion, id } = libro;

    return <TableRow key={id}>
        <TableCell>{nombre}</TableCell>
        <TableCell>{autor?.nombre}</TableCell>
        <TableCell>{ubicacion}</TableCell>
        <TableCell>
            <>
                <IconButton aria-label="Editar" color="primary" component={Link} to={getRouteId(routes.libro, id)}>
                    <Edit fontSize="small" />
                </IconButton>
                {!disabled &&
                    <IconButtonRemove elemento={libro} handleDelete={handleDelete} {...removeParameters}>
                    </IconButtonRemove>
                }
            </>
        </TableCell>
    </TableRow>
}

export default LibroRow;