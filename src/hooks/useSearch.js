import axios from "axios";
import { useEffect, useReducer } from "react";
import { ACTIONS } from "../actions/search";
import { searchReducer, initialState } from "../reducers/search";
import { getAllPaginated } from "../services/apiServices";

export const useSearch = ({ url }) => {
    const [state, dispatch] = useReducer(searchReducer, initialState);
    const { params, page, rowsPerPage, reload } = state;

    useEffect(() => {
        dispatch({ type: ACTIONS.SET_LOADING });

        const cancelToken = axios.CancelToken;
        const source = cancelToken.source();

        getAllPaginated(url, params, page, rowsPerPage, source.token).then(({ data, headers }) => {
            const payload = {
                result: data,
                total: +headers["x-total-count"]
            }
            dispatch({ type: ACTIONS.SET_DATA, payload: payload });
        }).catch((e) => {

            if (axios.isCancel(e)) {
                console.log("axios request cancelled");
                return;
            }

            dispatch({ type: ACTIONS.SET_ERROR });
            console.error(e);
        })

        return () => {
            source.cancel("cancelo request");
        };

    }, [url, params, page, rowsPerPage, reload]);

    return { ...state, dispatch };
};
