import { get } from "../services/apiServices";
import { useCallback, useEffect, useReducer } from "react";
import { ACTIONS } from "../actions/search";
import { searchReducer, initialState } from "../reducers/search";

const useGet = (url, id, emptyValues) => {
    const [state, dispatch] = useReducer(searchReducer, initialState);

    const getData = useCallback(() => {
        if (id === "add") {
            dispatch({ type: ACTIONS.SET_DATA, payload: { result: emptyValues } });
            return;
        }

        dispatch({ type: ACTIONS.SET_LOADING });

        get(url, id)
            .then(({ data }) => {
                dispatch({
                    type: ACTIONS.SET_DATA,
                    payload: { result: data },
                });
            })
            .catch((err) => {
                dispatch({
                    type: ACTIONS.SET_ERROR,
                });
                console.log(err.message);
            });
        // eslint-disable-next-line
    }, [url, id]);

    useEffect(() => {
        getData();
    }, [getData]);

    return state;
};

export default useGet;
