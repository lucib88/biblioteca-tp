import React, { useState } from "react";
import { useFormik } from "formik";
import { TextField, Button, Grid } from '@material-ui/core'
import { useDispatch } from 'react-redux';
import { signIn } from '../../actions/logged';
import { validationSchema, initialState } from "../../schemas/Login"
import { Link } from "react-router-dom";
import { getUsuario } from "../../services/apiServices";
import { AlertMessage } from "../common";
import { useHistory } from 'react-router';

const LoginForm = () => {
    const [error, setError] = useState(false);
    const dispatch = useDispatch()
    const history = useHistory();

    const handleSubmit = (values, { resetForm }) => {
        getUsuario(values.email, values.password).then(({ data }) => {
            if (data && data.length > 0) {
                dispatch(signIn(data[0]))
                history.push("/libros")
            } else {
                resetForm();
                setError(true);
            }
        }).catch(error => {

        })
    }

    const formik = useFormik({
        initialValues: initialState,
        validationSchema: validationSchema,
        onSubmit: handleSubmit
    });

    return (
        <>
            {error && <AlertMessage title="" message="Usuario o contraseña incorrecta" />}
            <form onSubmit={formik.handleSubmit}>
                <Grid container spacing={3} justifyContent="center" alignItems="center" direction="column">
                    <Grid item xs={12}>
                        <TextField
                            id="email"
                            name="email"
                            label="Email"
                            style={{ minWidth: "400px" }}
                            fullWidth
                            size="medium"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            error={formik.touched.email && Boolean(formik.errors.email)}
                            helperText={formik.touched.email && formik.errors.email}
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            id="password"
                            name="password"
                            label="Contraseña"
                            style={{ minWidth: "400px" }}
                            type="password"
                            value={formik.values.password}
                            size="medium"
                            onChange={formik.handleChange}
                            error={formik.touched.password && Boolean(formik.errors.password)}
                            helperText={formik.touched.password && formik.errors.password}
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                            color="primary"
                            variant="contained"
                            size="large"
                            type="submit"
                        >
                            Entrar
                        </Button>

                        <Button
                            style={{ marginLeft: "20px" }}
                            color="default"
                            variant="contained"
                            size="large"
                            type="submit"
                            component={Link}
                            to="/usuarios/add"
                        >
                            Registrarse
                        </Button>

                    </Grid>
                </Grid>
            </form>
        </>
    );
};

export default LoginForm;