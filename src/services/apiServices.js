import { API } from "../API.js";
import bcrypt from 'bcryptjs'

const salt = bcrypt.genSaltSync(10)

export const endpoints = {
    libros: "libros",
    usuarios: "usuarios",
    autores: "autores"
}

const nombreParametros = {
    nombre: "nombre_like",
    autor: "autor.nombre_like",
    ubicacion: "ubicacion"
}

const paramsToString = (params) => {
    return Object.keys(params)
        .filter((k) => !!params[k])
        .map(param => `${encodeURIComponent(nombreParametros[param])}=${encodeURIComponent(params[param])}`)
        .join('&');
}

const getUrl = (url, params, page, rowsPerPage) => {
    const endpoint = paramsToString(params);
    return `${url}?${endpoint}&_page=${page + 1}&_limit=${rowsPerPage}&_sort=nombre,id`;
}

const remove = (url, id) => {
    return API.delete(`${url}/${id}`);
}

const get = (url, id) => {
    return API.get(`${url}/${id}`);
}

const getAllPaginated = (url, params, page, rowsPerPage, token) => {
    const urlCompleta = getUrl(url, params, page, rowsPerPage);
    return API.get(urlCompleta, {
        cancelToken: token
    });
}

const getAll = (url) => {
    return API.get(`${url}?_sort=nombre,id`);
}

const getAllByNombre = (url, nombre) => {
    return getAllByProperty(url, "nombre", nombre);
}

const getAllByProperty = (url, property, valor) => {
    return API.get(`${url}?${property}_like=${encodeURIComponent(valor)}&_sort=nombre,id`);
}

const getUsuario = async (email, password) => {
    const { data } = await API.get(`${endpoints.usuarios}?email=${email}`);

    if (data.length !== 1) {
        return null;
    }

    if (bcrypt.compareSync(password, data[0].password)) {
        return data[0];
    }

    return null;
}

const save = (url, values) => {

    if (values.password) {
        values.password = bcrypt.hashSync(values.password, salt)
    }

    if (values.id) {
        return API.put(`${url}/${values.id}`, values);
    }

    return API.post(url, values);
}

export { remove, save, get, getAll, getAllByNombre, getAllPaginated, getAllByProperty, getUsuario };