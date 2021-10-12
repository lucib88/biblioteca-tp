import { validationSchema, initialState } from "../../schemas/Autor"
import GeneralForm from "../../components/Forms/GeneralForm";
import AutorForm from "../../components/Forms/AutorForm";

const Autor = () => {
    return (
        <GeneralForm url="autores"
            goBackUrl="/autores"
            emptyValues={initialState}
            validationSchema={validationSchema}>

            <AutorForm />

        </GeneralForm>
    );
};

export default Autor;