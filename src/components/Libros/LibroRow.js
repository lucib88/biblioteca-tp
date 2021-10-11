import { TableRow, TableCell } from '@material-ui/core'
import { Edit } from '@material-ui/icons';
import { IconButton } from '@material-ui/core'
import { Link } from 'react-router-dom';
import IconButtonRemove from '../common/IconButtonRemove';

export const columnas = ["NOMBRE", "AUTOR", "UBICACION"];

const removeParameters = {
    accion: "BORRAR",
    pregunta: '\xBFBorrar libro?',
    contenido: 'Confirme que desea borrar el libro seleccionado'
};

export const LibroRow = ({ libro, handleDelete }) => {
    const { nombre, autor, ubicacion, id } = libro;

    return <TableRow key={id}>
        <TableCell>{nombre}</TableCell>
        <TableCell>{autor?.nombre}</TableCell>
        <TableCell>{ubicacion}</TableCell>
        <TableCell>
            <>
                <IconButton aria-label="Editar" color="primary" component={Link} to={`/libros/${id}`}>
                    <Edit fontSize="small" />
                </IconButton>
                <IconButtonRemove elemento={libro} handleDelete={handleDelete} {...removeParameters}>
                </IconButtonRemove>
            </>
        </TableCell>
    </TableRow>
}
