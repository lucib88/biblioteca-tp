import { validationSchema, initialState } from "../../schemas/Autor"
import GeneralForm from "../../components/Forms/GeneralForm";
import AutorForm from "../../components/Forms/AutorForm";
import { endpoints } from "../../services/apiServices";
import { routes } from "../../data";

const Autor = () => {
    return (
        <GeneralForm url={endpoints.autores}
            goBackUrl={routes.autores}
            emptyValues={initialState}
            validationSchema={validationSchema}>

            <AutorForm />

        </GeneralForm>
    );
};

export default Autor;