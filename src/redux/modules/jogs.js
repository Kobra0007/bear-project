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
    updateJogSuccess,

    setCurrentJog,

    setSortedJogs,
    delSortedJogs

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

    'SET_CURRENT_JOG',

    'SET_SORTED_JOGS',
    'DEL_SORTED_JOGS'

);


const defaultState = {
    error: null,
    jogsArr: [],

    current: {
        id: '',
        userId: '',
        distance:'',
        time: '',
        date: ''
    },
    sorted: []
};

export default handleActions (
    {
        
        [clearState]: state => ({
            ...defaultState
        }),

        [getJogs]: state => ({
            ...state,
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
            ...state,
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
            ...state,
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
            ...state,
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

        [setCurrentJog]: (state, {payload}) => ({
            ...state,
            current: payload
        }),

        [setSortedJogs]: (state, {payload}) => ({
            ...state,
            sorted: payload
        }),

        [delSortedJogs]: (state, {payload}) => ({
            ...state,
            sorted: []
        })
    },
    defaultState
);