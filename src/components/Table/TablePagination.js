import { TablePagination, TableFooter, TableRow } from '@material-ui/core'
import { ACTIONS } from "../../actions/search"

const TablePaginationWrapper = ({ cantidad = 0, filasPorPagina = 10, pagina = 0, dispatch, colSpan }) => {

    const handleChangePagina = (event, pagina) => {
        dispatch({ type: ACTIONS.SET_PAGE, payload: pagina });
    };

    const handleChangeFilasPorPagina = (event) => {
        dispatch({ type: ACTIONS.SET_ROW_PER_PAGE, payload: Number(event.target.value) });
    };

    return <TableFooter>
        <TableRow>
            <TablePagination
                labelRowsPerPage="Cantidad de filas"
                labelDisplayedRows={({ from, to, count }) => `${from}-${to} de ${count}`}
                rowsPerPageOptions={[10, 25, 50]}
                colSpan={colSpan}
                count={cantidad}
                rowsPerPage={filasPorPagina}
                page={pagina}
                onPageChange={handleChangePagina}
                onRowsPerPageChange={handleChangeFilasPorPagina}
                SelectProps={{
                    inputProps: { 'aria-label': 'rows per page' },
                    native: true,
                }}
            />
        </TableRow>
    </TableFooter>

}

export default TablePaginationWrapper;