import * as Yup from "yup";
import { getAllByProperty, endpoints } from "../services/apiServices";
import { isSameName } from "./Libro";

export const initialState = {
    id: '',
    nombre: '',
    apellido: '',
    email: '',
    password: ''
}

function validaEmail(message) {
    const msg = message || 'Usuario ya existente';
    return this.test('validaEmail', msg, async function (value) {

        if (!value) {
            return true;
        }

        const response = await getAllByProperty(endpoints.usuarios, "email", value);
        const mismoUsuario = response.data.filter(usuario => isSameName(usuario.email, value));

        return mismoUsuario.length === 0
    });
}

Yup.addMethod(Yup.mixed, "validaEmail", validaEmail);


export const validationSchema = Yup.object({
    nombre: Yup.string("Ingresa el nombre").required(
        "El nombre es requerido"
    ),
    apellido: Yup.string("Ingresa el apellido").required(
        "El apellido es requerido"
    ),
    email: Yup.string("Ingresa el email")
        .email("Ingresa un email válido")
        .required("El email es requerido").validaEmail(),
    password: Yup.string("Ingresa la contraseña")
        .matches(/(^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,15}$)/, {
            message: "La contraseña no cumple con los requisitos",
            excludeEmptyString: false,
        })
        .required("La contraseña es requerida"),
})


