import { validationSchema, initialState } from "../../schemas/Usuario"
import GeneralForm from "../../components/Forms/GeneralForm";
import UsuarioForm from "../../components/Forms/UsuarioForm";
import { endpoints } from "../../services/apiServices";
import { routes } from "../../data";

const Usuario = () => {
    return (
        <GeneralForm url={endpoints.usuarios}
            goBackUrl={routes.loginNew}
            emptyValues={initialState}
            showDisabled={false}
            validationSchema={validationSchema}>
            <UsuarioForm />

        </GeneralForm>
    );
};

export default Usuario;