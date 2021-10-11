import { ACTIONS } from "../actions/search";

export const initialState = {
    loading: true,
    error: false,
    data: {},
};

// ...action: ({type : ACTIONS.SET_DATA, payload : {info : ... , results : ...}})
export const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTIONS.SET_DATA:
            return {
                ...state,
                loading: false,
                data: {
                    total: action.payload.total,
                    results: action.payload.results,
                },
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