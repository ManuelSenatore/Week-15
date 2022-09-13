import { GET_JOBS, SET_QUERY, SET_PARAMS, GET_JOBS_COMPANY, SET_JOBS_ERROR, SET_JOBS_LOADER } from "../actions"

const initialState = {
    jobsList: [],
    query: '',
    params: '',
    jobsCompany: [],
    loading: false,
    error: false,
}

const jobsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_JOBS:
            return {
                ...state,
                jobsList: action.payload
            }
        case SET_QUERY:
            return {
                ...state,
                query: action.payload
            }    
        case SET_PARAMS:
            return {
                ...state,
                params: action.payload
            }    
        case GET_JOBS_COMPANY:
            return {
                ...state,
                jobsCompany: action.payload
            }    
        case SET_JOBS_LOADER:
            return {
                ...state,
                loading: !state.loading
            }    
        case SET_JOBS_ERROR:
            return {
                ...state,
                error: !state.error
            }
        default:
            return state
    }
}

export default jobsReducer

