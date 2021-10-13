import { Grid, Button, TextField, FormControl, InputLabel, FormHelperText, MenuItem, Select } from "@material-ui/core";
import { useFormikContext } from "formik";
import { CircularProgress } from '@material-ui/core'
import { Save } from '@material-ui/icons';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { useEffect, useState } from "react";
import { getAll } from "../../services/apiServices";
import { useSelector } from "react-redux";

const ubicaciones = ["1-2", "2-2", "4-2", "5", "casa"];

const LibroForm = () => {
    const { values, touched, errors, handleChange, handleBlur, setFieldValue, isSubmitting, isValid } = useFormikContext();
    const [autores, setAutores] = useState([]);
    const disabled = useSelector(state => !state?.nombre)

    useEffect(() => {
        getAll("autores").then(({ data }) => {
            setAutores(data);
        })
    }, []);

    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <TextField
                    id="nombre"
                    name="nombre"
                    fullWidth
                    label="Nombre"
                    disabled={disabled}
                    value={values.nombre}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.nombre && Boolean(errors.nombre)}
                    helperText={touched.nombre && errors.nombre}
                    variant="outlined"
                />
            </Grid>

            <Grid item xs={6}>

                <Autocomplete
                    options={autores}
                    getOptionLabel={(option) => option.nombre || ""}
                    id="autor"
                    noOptionsText="Sin opciones"
                    name="autor"
                    value={values.autor}
                    autoSelect={true}
                    disabled={disabled}
                    autoHighlight={true}
                    onBlur={handleBlur}
                    getOptionSelected={(option, value) => option.id === value.id}
                    onChange={(event, newValue) => {
                        setFieldValue("autor", newValue)
                    }} renderInput={(params) =>
                        <TextField {...params}
                            label="Autor"
                            variant="outlined"
                            error={touched.autor && Boolean(errors.autor)}
                            helperText={touched.autor && errors.autor}
                        />}
                />

            </Grid>

            <Grid item xs={4}>
                <FormControl variant="outlined" fullWidth error={touched.ubicacion && Boolean(errors.ubicacion)}>
                    <InputLabel id="ubicacionLabel">Ubicación</InputLabel>
                    <Select
                        labelId="ubicacionLabel"
                        id="ubicacion"
                        name="ubicacion"
                        value={values.ubicacion}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        disabled={disabled}
                        label="Ubicación">
                        {ubicaciones.map((ubicacion) => {
                            return (
                                <MenuItem key={ubicacion} value={ubicacion}>
                                    {ubicacion}
                                </MenuItem>
                            );
                        })}
                    </Select>
                    {touched.ubicacion && <FormHelperText>{errors.ubicacion}</FormHelperText>}

                </FormControl>
            </Grid>

            <Grid item xs={12}>
                <TextField
                    id="descripcion"
                    name="descripcion"
                    fullWidth
                    label="Descripción"
                    value={values.descripcion}
                    onChange={handleChange}
                    disabled={disabled}
                    variant="outlined"
                    multiline
                    rows={4}
                />
            </Grid>

            <Grid item xs={12}>
                <Button
                    style={{ float: 'right' }}
                    color="primary"
                    variant="contained"
                    type="submit"
                    size="large"
                    disabled={disabled || !isValid || isSubmitting}
                    startIcon={isSubmitting ? <CircularProgress size="0.8rem" /> : <Save />}
                >
                    {isSubmitting ? "Guardando" : "Guardar"}
                </Button>
            </Grid>

        </Grid >
    );
};

export default LibroForm;