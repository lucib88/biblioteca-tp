import { Grid, Button, TextField } from "@material-ui/core";
import { useFormikContext } from "formik";
import { CircularProgress } from '@material-ui/core'
import { Save } from '@material-ui/icons';

const UsuarioForm = () => {
    const { values, touched, errors, handleChange, handleBlur, isSubmitting, isValid } = useFormikContext();

    return (
        <Grid container spacing={3}>
            <Grid item xs={6}>
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

            <Grid item xs={6}>
                <TextField
                    id="apellido"
                    name="apellido"
                    fullWidth
                    label="Apellido"
                    value={values.apellido}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.apellido && Boolean(errors.apellido)}
                    helperText={touched.apellido && errors.apellido}
                    variant="outlined"
                />
            </Grid>

            <Grid item xs={6}>
                <TextField
                    id="email"
                    name="email"
                    fullWidth
                    label="Email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.email && Boolean(errors.email)}
                    helperText={touched.email && errors.email}
                    variant="outlined"
                />
            </Grid>

            <Grid item xs={6}>
                <TextField
                    id="password"
                    name="password"
                    fullWidth
                    type="password"
                    label="Contraseña"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.password && Boolean(errors.password)}
                    helperText={touched.password && errors.password}
                    variant="outlined"
                />
            </Grid>

            <Grid item xs={12}>
                <Button
                    style={{ float: 'right' }}
                    color="primary"
                    variant="contained"
                    type="submit"
                    size="large"
                    disabled={!isValid || isSubmitting}
                    startIcon={isSubmitting ? <CircularProgress size="0.8rem" /> : <Save />}
                >
                    {isSubmitting ? "Guardando" : "Guardar"}
                </Button>
            </Grid>

        </Grid >
    );
};

export default UsuarioForm;