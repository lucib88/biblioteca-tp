import { useSearch } from "../../hooks/useSearch"
import { TableSearch } from "../../components/Table"
import { Error } from "../../components/common"
import { AutoresSearch, AutorRow, columnas } from "../../components/Autores";

export default function Autores() {
    const { data: autores, total, loading, error, page, rowsPerPage, dispatch } = useSearch({ url: "autores" });

    return (
        <>
            <AutoresSearch dispatch={dispatch} loading={loading} />

            {error && <Error />}

            {autores && <TableSearch
                columnas={columnas}
                totalElements={total}
                filasPorPagina={rowsPerPage}
                pagina={page}
                dispatch={dispatch}
            >
                {autores.map(autor =>
                    <AutorRow key={autor.id} autor={autor} />
                )}
            </TableSearch>
            }
        </>
    );
}
