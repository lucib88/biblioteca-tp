import { CardContent, Table, TableBody } from '@material-ui/core'
import { TableHeader, TablePagination, } from "../../components/Table"

const TableSearch = ({ columnas, totalElements, filasPorPagina, pagina, dispatch, children }) => {
    return <CardContent>
        <Table >
            <TableHeader columnas={columnas} />
            <TableBody>
                {children}
            </TableBody>

            <TablePagination
                cantidad={totalElements}
                filasPorPagina={filasPorPagina}
                pagina={pagina}
                dispatch={dispatch}
                colSpan={columnas.length + 1}
            />
        </Table>
    </CardContent>
}

export default TableSearch;