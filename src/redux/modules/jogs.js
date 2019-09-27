import { createActions, handleActions } from 'redux-actions';

export const {
    clearState,

    getJogs,
    getJogsFail,
    getJogsSuccess,

    addJog,
    addJogFail,
    addJogSuccess,

    deleteJog,
    deleteJogFail,
    deleteJogSuccess,

    updateJog,
    updateJogFail,
    updateJogSuccess

} = createActions(
    'CLEAR_STATE',
    
    'GET_JOGS',
    'GET_JOGS_FAIL',
    'GET_JOGS_SUCCESS',

    'ADD_JOG',
    'ADD_JOG_FAIL',
    'ADD_JOG_SUCCESS',

    'DELETE_JOG',
    'DELETE_JOG_FAIL',
    'DELETE_JOG_SUCCESS',

    'UPDATE_JOG',
    'UPDATE_JOG_FAIL',
    'UPDATE_JOG_SUCCESS',

);


const defaultState = {
    error: null,
    jogsArr: []
};

export default handleActions (
    {
        
        [clearState]: state => ({
            ...defaultState
        }),

        [getJogs]: state => ({
            error: null,
        }),

        [getJogsFail]: (state, {payload}) => ({
            ...state,
            error: payload
        }),

        [getJogsSuccess]: (state, {payload}) => ({
            ...state,
            error: null,
            jogsArr: payload
        }),

        [addJog]: state => ({
            error: null
        }),

        [addJogFail]: (state, {payload}) => ({
            ...state,
            error: payload
        }),

        [addJogSuccess]: (state, {payload}) => ({
            ...state,
            error: null
        }),

        [deleteJog]: state => ({
            error: null
        }),

        [deleteJogFail]: (state, {payload}) => ({
            ...state,
            error: payload
        }),

        [deleteJogSuccess]: (state, {payload}) => ({
            ...state,
            error: null

        }),

        [updateJog]: state => ({
            error: null
        }),

        [updateJogFail]: (state, {payload}) => ({
            ...state,
            error: payload
        }),

        [updateJogSuccess]: (state, {payload}) => ({
            ...state,
            error: null
        }),
    },
    defaultState
);