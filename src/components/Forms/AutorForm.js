import { Grid, Button, TextField } from "@material-ui/core";
import { useFormikContext } from "formik";
import { CircularProgress } from '@material-ui/core'
import { Save } from '@material-ui/icons';

const AutorForm = () => {
    const { values, errors, touched, handleChange, handleBlur, isSubmitting, isValid } = useFormikContext();

    console.log(touched, errors);
    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <TextField
                    id="nombre"
                    name="nombre"
                    fullWidth
                    label="Nombre"
                    value={values.nombre}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.nombre && Boolean(errors.nombre)}
                    helperText={touched.nombre && errors.nombre}
                    variant="outlined"
                />
            </Grid>

            <Grid item xs={12}>
                <Button
                    style={{ float: 'right' }}
                    color="primary"
                    variant="contained"
                    size="large"
                    type="submit"
                    disabled={!isValid || isSubmitting}
                    startIcon={isSubmitting ? <CircularProgress size="0.8rem" /> : <Save />}
                >
                    {isSubmitting ? "Guardando" : "Guardar"}
                </Button>
            </Grid>

        </Grid>
    );
};

export default AutorForm;