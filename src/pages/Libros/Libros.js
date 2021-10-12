import useSnackbar, { SEVERITY } from '../../hooks/useSnackbar';
import { useSearch } from "../../hooks/useSearch"
import { TableSearch } from "../../components/Table"
import { Snackbar, Error } from "../../components/common"
import { LibrosSearch, LibroRow, columnas } from "../../components/Libros";
import { remove } from '../../services/apiServices';

export default function Libros() {
    const { data: libros, total, loading, error, page, rowsPerPage, getData, dispatch } = useSearch({ url: "libros" });
    const { message, handleClose, openMessage } = useSnackbar(error);

    const handleDelete = (libro) => {
        remove('libros', libro.id).then(response => {
            openMessage("Libro borrado exitosamente", SEVERITY.SUCCESS);
            getData();
        }).catch(err => {
            openMessage("No se pudo borrar el libro", SEVERITY.ERROR);
        });
    }

    return (
        <>
            <LibrosSearch dispatch={dispatch} loading={loading} />

            {error && <Error />}

            {libros && <TableSearch
                columnas={columnas}
                totalElements={total}
                filasPorPagina={rowsPerPage}
                pagina={page}
                dispatch={dispatch}
            >
                {libros.map(libro =>
                    <LibroRow key={libro.id} libro={libro} handleDelete={handleDelete} />
                )}
            </TableSearch>
            }

            <Snackbar info={message} handleClose={handleClose} />
        </>
    );
}
