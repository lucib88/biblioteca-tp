
import { useState } from 'react';
import { TextField, CardContent, Grid, Button, CircularProgress } from '@material-ui/core'
import { ACTIONS } from "../../actions/search"
import { Add, Search } from '@material-ui/icons';
import { Link } from "react-router-dom";

export const emptyParametros = {
    nombre: '',
    ubicacion: '',
    autor: ''
}

const LibrosSearch = ({ dispatch, loading = false, disabled = false }) => {
    const [parametros, setParametros] = useState(emptyParametros);

    const handleChangeEvent = ({ target: { name, value } }) => {
        handleChange(name, value);
    }

    const handleChange = (name, elemento) => {
        setParametros((prevParametros) => {
            return {
                ...prevParametros,
                [name]: elemento
            }
        })
    };

    const handleCreate = e => {
        e.preventDefault()
        dispatch({ type: ACTIONS.SET_PARAMS, payload: parametros });
    }

    const { nombre, ubicacion, autor } = parametros;
    return (
        <CardContent>
            <form autoComplete="off" onSubmit={handleCreate}>

                <Grid container spacing={3}>

                    <Grid item xs={4}>
                        <TextField
                            id="nombre"
                            label="Nombre"
                            name="nombre"
                            value={nombre}
                            fullWidth
                            onChange={handleChangeEvent}
                        />
                    </Grid>
                    <Grid item xs={3}>
                        <TextField
                            id="autor"
                            label="Autor"
                            name="autor"
                            value={autor}
                            fullWidth
                            onChange={handleChangeEvent}
                        />
                    </Grid>

                    <Grid item xs={2}>
                        <TextField
                            id="ubicacion"
                            label="Ubicacion"
                            name="ubicacion"
                            value={ubicacion}
                            fullWidth
                            onChange={handleChangeEvent}
                        />
                    </Grid>

                    <Grid item xs={3}>
                        <Button
                            type='submit'
                            color='primary'
                            size='large'
                            disabled={loading}
                            variant="contained"
                            startIcon={loading ? <CircularProgress size="0.8rem" /> : <Search />}>
                            {loading ? "Buscando" : "Buscar"}
                        </Button>

                        {!disabled &&
                            <Button
                                component={Link}
                                to="/libros/add"
                                color='primary'
                                size='large'
                                style={{ marginLeft: 5 }}
                                variant="contained"
                                startIcon={<Add />}>
                                NUEVO
                            </Button>
                        }
                    </Grid>

                </Grid>
            </form>

        </CardContent>
    )
}

export default LibrosSearch;