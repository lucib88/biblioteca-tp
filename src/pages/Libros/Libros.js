import useSnackbar, { SEVERITY } from '../../hooks/useSnackbar';
import { useSearch } from "../../hooks/useSearch"
import { TableSearch } from "../../components/Table"
import { Snackbar, AlertMessage } from "../../components/common"
import { LibrosSearch, LibroRow, columnas } from "../../components/Libros";
import { remove } from '../../services/apiServices';
import { useSelector } from 'react-redux';
import { endpoints } from "../../services/apiServices";
import { ACTIONS } from '../../actions/search';

export default function Libros() {
    const { data: libros, total, loading, error, page, rowsPerPage, dispatch } = useSearch({ url: endpoints.libros });
    const { message, handleClose, openMessage } = useSnackbar(error);
    const disabled = useSelector(state => !state?.nombre)

    const handleDelete = (libro) => {
        remove(endpoints.libros, libro.id).then(response => {
            openMessage("Libro borrado exitosamente", SEVERITY.SUCCESS);
            dispatch({ type: ACTIONS.RELOAD });

        }).catch(err => {
            openMessage("No se pudo borrar el libro", SEVERITY.ERROR);
        });
    }

    return (
        <>
            <LibrosSearch dispatch={dispatch} loading={loading} disabled={disabled} />

            {error && <AlertMessage />}

            {libros && <TableSearch
                columnas={columnas}
                totalElements={total}
                filasPorPagina={rowsPerPage}
                pagina={page}
                dispatch={dispatch}
            >
                {libros.map(libro =>
                    <LibroRow key={libro.id} libro={libro} handleDelete={handleDelete} disabled={disabled} />
                )}
            </TableSearch>
            }

            <Snackbar info={message} handleClose={handleClose} />
        </>
    );
}
