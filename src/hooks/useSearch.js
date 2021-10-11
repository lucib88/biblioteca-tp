import { useCallback, useEffect, useReducer } from "react";
import { ACTIONS } from "../actions/search";
import { API } from "../API.js";
import { searchReducer, initialState } from "../reducers/search";

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
    return `${url}?${endpoint}&_page=${page}&_limit=${rowsPerPage}&_sort=nombre,id`;
}

export const useSearch = ({ url, params, page, rowsPerPage }) => {
    const [state, dispatch] = useReducer(searchReducer, initialState);

    const getData = useCallback(async () => {
        try {
            dispatch({ type: ACTIONS.SET_LOADING });
            const urlCompleta = getUrl(url, params, page, rowsPerPage);
            const { data, headers } = await API.get(urlCompleta);
            dispatch({ type: ACTIONS.SET_DATA, payload: { results: data, total: +headers["x-total-count"] } });
        } catch (e) {
            dispatch({ type: ACTIONS.SET_ERROR });
            console.error(e);
        }
    }, [url, params, page, rowsPerPage]);

    useEffect(() => {
        getData(url, params, page, rowsPerPage);
    }, [url, params, page, rowsPerPage, getData]);

    return state;
};
