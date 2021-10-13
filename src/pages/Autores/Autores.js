import { useSearch } from "../../hooks/useSearch"
import { TableSearch } from "../../components/Table"
import { AlertMessage } from "../../components/common"
import { AutoresSearch, AutorRow, columnas } from "../../components/Autores";
import { useSelector } from "react-redux";

export default function Autores() {
    const { data: autores, total, loading, error, page, rowsPerPage, dispatch } = useSearch({ url: "autores" });
    const disabled = useSelector(state => !state?.nombre)

    return (
        <>
            <AutoresSearch dispatch={dispatch} loading={loading} disabled={disabled} />

            {error && <AlertMessage />}

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
