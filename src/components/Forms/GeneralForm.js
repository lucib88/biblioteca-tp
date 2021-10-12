import { useParams, useHistory } from "react-router-dom";
import { Formik, Form } from "formik";
import { Loading, Snackbar } from "../common";
import { save } from "../../services/apiServices";
import useSnackbar, { SEVERITY } from '../../hooks/useSnackbar';
import useGet from "../../hooks/useGet";

const GeneralForm = ({ children, url, goBackUrl, emptyValues, validationSchema }) => {
    const history = useHistory();
    const { id } = useParams();
    const { data, loading, error } = useGet(url, id, emptyValues);
    const { message, handleClose, openMessage } = useSnackbar(error);

    const handleCreate = (values, { setSubmitting }) => {
        save(url, values)
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
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                enableReinitialize={true}
                onSubmit={handleCreate}
            >
                <Form autoComplete="off">{children}</Form>
            </Formik>
            <Snackbar info={message} handleClose={handleClose} />
        </>
    );
};

export default GeneralForm;