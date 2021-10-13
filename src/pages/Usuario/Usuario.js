import { validationSchema, initialState } from "../../schemas/Usuario"
import GeneralForm from "../../components/Forms/GeneralForm";
import UsuarioForm from "../../components/Forms/UsuarioForm";

const Usuario = () => {
    return (
        <GeneralForm url="usuarios"
            goBackUrl="/usuarios/login/new"
            emptyValues={initialState}
            validationSchema={validationSchema}>
            <UsuarioForm />

        </GeneralForm>
    );
};

export default Usuario;