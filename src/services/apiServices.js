import { API } from "../API.js";

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

const getAllPaginated = (url, params, page, rowsPerPage) => {
    const urlCompleta = getUrl(url, params, page, rowsPerPage);
    return API.get(urlCompleta);
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

const getUsuario = (email, password) => {
    return API.get(`usuarios?email=${email}&password=${password}`);
}

const save = (url, values) => {

    if (values.id) {
        return API.put(`${url}/${values.id}`, values);
    }

    return API.post(url, values);
}

export { remove, save, get, getAll, getAllByNombre, getAllPaginated, getAllByProperty, getUsuario };