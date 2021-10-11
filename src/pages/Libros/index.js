import { useReducer } from 'react';
import useSnackbar, { SEVERITY } from '../../hooks/useSnackbar';
import { useSearch } from "../../hooks/useSearch"
import { paginationReducer, initialState } from "../../reducers/pagination"
import { TableSearch } from "../../components/Table"
import { Snackbar } from "../../components/common"
import { LibrosSearch, emptyParametros } from "../../components/Libros/LibrosSearch";
import { LibroRow, columnas } from "../../components/Libros/LibroRow";
import Error from "../../components/common/Error";
import remove from '../../services/remove';

const initialStateReducer = {
    ...initialState,
    params: emptyParametros
}

export default function Libros() {
    const [state, dispatch] = useReducer(paginationReducer, initialStateReducer);
    const { data, loading, error } = useSearch({ ...state, url: "libros" });
    const { results: libros, total } = data;
    const { message, handleClose, openMessage } = useSnackbar(error);
    const { page, rowsPerPage } = state;

    const handleDelete = (libro) => {
        remove('libros', libro.id).then(response => {
            openMessage("Libro borrado exitosamente", SEVERITY.SUCCESS);
            //   getData();
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
