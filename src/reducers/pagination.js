import { ACTIONS } from "../actions/pagination";

export const initialState = {
    page: 1,
    rowsPerPage: 10,
    params: {},
};

// ...action: ({type : ACTIONS.SET_DATA, payload : {info : ... , results : ...}})
export const paginationReducer = (state = initialState, action) => {
    console.log(state, action)
    switch (action.type) {
        case ACTIONS.SET_PARAMS:
            return {
                ...state,
                page: 1,
                params: action.payload,
            };
        case ACTIONS.SET_ROW_PER_PAGE:
            return {
                ...state,
                rowsPerPage: action.payload,
                page: 1,
            };
        case ACTIONS.SET_PAGE:
            return {
                ...state,
                page: action.payload,
            };
        default:
            return state;
    }
};