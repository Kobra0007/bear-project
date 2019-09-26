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
};

export default handleActions (
    {
        
        [clearState]: state => ({
            ...defaultState
        }),

        [getJogs]: state => ({

        }),

        [getJogsFail]: (state, {payload}) => ({
            ...state,
            error
        }),

        [getJogsSuccess]: (state, {payload}) => ({
            ...state,

        }),

        [addJog]: state => ({

        }),

        [addJogFail]: (state, {payload}) => ({
            ...state,
            error
        }),

        [addJogSuccess]: (state, {payload}) => ({
            ...state,

        }),

        [deleteJog]: state => ({

        }),

        [deleteJogFail]: (state, {payload}) => ({
            ...state,

        }),

        [deleteJogSuccess]: (state, {payload}) => ({
            ...state,

        }),

        [updateJog]: state => ({

        }),

        [updateJogFail]: (state, {payload}) => ({
            ...state,

        }),

        [updateJogSuccess]: (state, {payload}) => ({
            ...state,

        }),
    },
    defaultState
);