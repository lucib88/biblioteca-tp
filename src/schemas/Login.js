import * as Yup from "yup";

export const initialState = {
    email: '',
    password: ''
}

export const validationSchema = Yup.object({
    email: Yup.string("Ingresa el email")
        .email("Ingresa un email válido")
        .required("El email es requerido"),
    password: Yup.string("Ingresa la contraseña")
        .required("La contraseña es requerida"),
})


