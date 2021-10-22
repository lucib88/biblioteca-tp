import { validationSchema, initialState } from "../../schemas/Libro"
import GeneralForm from "../../components/Forms/GeneralForm";
import LibroForm from "../../components/Forms/LibroForm";
import { endpoints } from "../../services/apiServices";
import { routes } from "../../data";

const Libro = () => {
    return (
        <GeneralForm url={endpoints.libros}
            goBackUrl={routes.libros}
            emptyValues={initialState}
            validationSchema={validationSchema}>
            <LibroForm />

        </GeneralForm>
    );
};

export default Libro;