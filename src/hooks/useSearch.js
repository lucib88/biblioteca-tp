import { useCallback, useEffect, useReducer } from "react";
import { ACTIONS } from "../actions/search";
import { searchReducer, initialState } from "../reducers/search";
import { getAllPaginated } from "../services/apiServices";

export const useSearch = ({ url }) => {
    const [state, dispatch] = useReducer(searchReducer, initialState);
    const { params, page, rowsPerPage } = state;

    const getData = useCallback(async () => {
        dispatch({ type: ACTIONS.SET_LOADING });

        getAllPaginated(url, params, page, rowsPerPage).then(({ data, headers }) => {
            const payload = {
                result: data,
                total: +headers["x-total-count"]
            }
            dispatch({ type: ACTIONS.SET_DATA, payload: payload });
        }).catch((e) => {
            dispatch({ type: ACTIONS.SET_ERROR });
            console.error(e);
        })
    }, [url, params, page, rowsPerPage]);

    useEffect(() => {
        getData(url, params, page, rowsPerPage);
    }, [url, params, page, rowsPerPage, getData]);

    return { ...state, getData, dispatch };
};
