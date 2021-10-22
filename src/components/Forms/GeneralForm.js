import { useParams, useHistory } from "react-router-dom";
import { Formik, Form } from "formik";
import { Loading, Snackbar } from "../common";
import { save } from "../../services/apiServices";
import useSnackbar, { SEVERITY } from '../../hooks/useSnackbar';
import useGet from "../../hooks/useGet";
import { Alert } from "@material-ui/lab";
import { useSelector } from "react-redux";

const GeneralForm = ({ children, url, goBackUrl, emptyValues, validationSchema, showDisabled = true }) => {
    const history = useHistory();
    const { id } = useParams();
    const { data, loading, error } = useGet(url, id, emptyValues);
    const { message, handleClose, openMessage } = useSnackbar(error);
    const disabled = useSelector(state => !state?.nombre) && showDisabled

    const handleCreate = (values, { setSubmitting }) => {
        save(url, { ...values })
            .then(() => {
                history.push(goBackUrl);
            })
            .catch(function (err) {
                const errorMessage = "Hubo un error al al guardar los datos (" + err + ")";
                openMessage(errorMessage, SEVERITY.ERROR);
                setSubmitting(false);
            });
    };

    const initialValues = data && !error ? { ...data } : { ...emptyValues };

    if (loading) return <Loading />;

    return (
        <>

            {disabled && <Alert variant="outlined" severity="warning" style={{ marginBottom: '20px' }}>
                Solo usuarios registrados pueden modificar los datos
            </Alert>
            }
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                enableReinitialize={true}
                validateOnChange={false}
                validateOnBlur={true}
                onSubmit={handleCreate}
            >
                <Form autoComplete="off">{children}</Form>
            </Formik>
            <Snackbar info={message} handleClose={handleClose} />
        </>
    );
};

export default GeneralForm;