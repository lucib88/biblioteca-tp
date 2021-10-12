import { validationSchema, initialState } from "../../schemas/Libro"
import GeneralForm from "../../components/Forms/GeneralForm";
import LibroForm from "../../components/Forms/LibroForm";

const Libro = () => {
    return (
        <GeneralForm url="libros"
            goBackUrl="/libros"
            emptyValues={initialState}
            validationSchema={validationSchema}>

            <LibroForm />

        </GeneralForm>
    );
};

export default Libro;