import { TableRow, TableCell } from '@material-ui/core'
import { Edit } from '@material-ui/icons';
import { IconButton } from '@material-ui/core'
import { Link } from 'react-router-dom';

export const columnas = ["NOMBRE"];

const AutorRow = ({ autor }) => {
    const { nombre, id } = autor;

    return <TableRow key={id}>
        <TableCell>{nombre}</TableCell>
        <TableCell>
            <>
                <IconButton aria-label="Editar" color="primary" component={Link} to={`/autores/${id}`}>
                    <Edit fontSize="small" />
                </IconButton>
            </>
        </TableCell>
    </TableRow>
}

export default AutorRow;