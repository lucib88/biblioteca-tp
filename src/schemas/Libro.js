import * as Yup from "yup";
import { getAllByNombre, endpoints } from "../services/apiServices";

export const initialState = {
    id: '',
    nombre: '',
    autor: null,
    descripcion: '',
    ubicacion: ''
}

export const isSameName = (nombre1, nombre2) => {
    return nombre1.localeCompare(nombre2, undefined, { sensitivity: 'accent' }) === 0
}

function validaLibro(message) {
    const msg = message || 'Libro ya existente';
    return this.test('validaLibro', msg, async function (value) {

        const autor = this.parent.autor;
        const id = this.parent.id || 0;

        if (!value || !autor) {
            return true;
        }

        const response = await getAllByNombre(endpoints.libros, value);
        const mismoLibro = response.data.filter(libro => isSameName(libro.nombre, value) && autor.id === libro.autor.id && id !== libro.id);

        return mismoLibro.length === 0
    });
}

Yup.addMethod(Yup.mixed, "validaLibro", validaLibro);


export const validationSchema = Yup.object({
    nombre: Yup.string("Ingresa el nombre").required(
        "El nombre es requerido"
    ).validaLibro(),
    autor: Yup.mixed().required("Debe seleccionar un autor"),
    ubicacion: Yup.string().required("Debe seleccionar una ubicacion"),

})

