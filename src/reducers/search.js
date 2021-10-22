import { ACTIONS } from "../actions/search";

export const initialState = {
    page: 0,
    rowsPerPage: 10,
    params: {},
    loading: true,
    error: false,
    data: null,
    total: 0,
    reload: false
};

export const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTIONS.SET_PARAMS:
            return {
                ...state,
                page: 0,
                loading: false,
                error: false,
                reload: !state.reload,
                params: action.payload,
            };
        case ACTIONS.SET_ROW_PER_PAGE:
            return {
                ...state,
                rowsPerPage: action.payload,
                page: 0,
            };
        case ACTIONS.RELOAD:
            return {
                ...state,
                reload: !state.reload
            };
        case ACTIONS.SET_PAGE:
            return {
                ...state,
                page: action.payload,
            };
        case ACTIONS.SET_DATA:
            return {
                ...state,
                loading: false,
                error: false,
                total: action.payload.total || 0,
                data: action.payload.result,
            };
        case ACTIONS.SET_LOADING:
            return {
                ...state,
                loading: true
            };
        case ACTIONS.SET_ERROR:
            return {
                ...state,
                error: true,
                loading: false,
            };
        default:
            return state;
    }
};