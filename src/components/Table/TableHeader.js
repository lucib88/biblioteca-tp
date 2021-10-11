import React from 'react';
import { TableCell, TableRow, TableHead } from '@material-ui/core'
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    accionCell: {
        minWidth: 150
    },
    head: {
        backgroundColor: "#f5f5f5",
        fontSize: 14,
        color: '#3f51b5',
        textAlign: "center"
    },
    table: {
        minWidth: 2048,
        padding: 16,
        borderTopWidth: 2,
        borderTopColor: '#3f51b5',
        borderTopStyle: 'solid',
        borderBottomWidth: 2,
        borderBottomColor: '#3f51b5',
        borderBottomStyle: 'solid'
    },
});

export default function TableHeader({ columnas = [], actionCell = true }) {
    const classes = useStyles();

    return (
        <TableHead className={classes.table}>
            <TableRow>
                {columnas.map(columna =>
                    <TableCell key={columna} className={classes.head}>{columna}</TableCell>
                )}
                {actionCell && <TableCell className={clsx(classes.accionCell, classes.head)}></TableCell>}
            </TableRow>
        </TableHead>
    );
}