import * as Yup from "yup";
import { getAllByNombre, endpoints } from "../services/apiServices";
import { isSameName } from "./Libro";

export const initialState = {
    id: '',
    nombre: ''
}

function validaNombre(message) {
    const msg = message || 'Nombre ya existente';
    return this.test('validaNombre', msg, async function (value) {

        if (!value) {
            return true;
        }

        const id = this.parent.id || 0

        const response = await getAllByNombre(endpoints.autores, value);
        const mismoAutor = response.data.filter(autor => isSameName(autor.nombre, value) && id !== autor.id);

        return mismoAutor.length === 0

    });
}

Yup.addMethod(Yup.mixed, "validaNombre", validaNombre);

export const validationSchema = Yup.object({
    nombre: Yup.string("Ingresa el nombre").required(
        "El nombre es requerido"
    ).validaNombre()

})

