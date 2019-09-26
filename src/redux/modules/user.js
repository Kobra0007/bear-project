import { createActions, handleActions } from 'redux-actions';

export const {
    clearState,

    userLogin,
    userLogout,
    userLoginFail,
    userLoginSuccess,

    userFetchSettingsFail,
    userFetchSettingsSuccess,
    
} = createActions(
	'CLEAR_STATE',
    
	'USER_LOGIN',
	'USER_LOGOUT',
	'USER_LOGIN_FAIL',
    'USER_LOGIN_SUCCESS',
    
    'USER_FETCH_SETTINGS_FAIL',
    'USER_FETCH_SETTINGS_SUCCESS',
);


const defaultState = {
    info: {
        id: '',
        email: '',
        phone: '',
        role: '',
        firstName: '',
        lastName: ''
    },
    loggedIn: false,
	loginingIn: false,
	loggedUser: {},

	error: null,

	accessToken: '',
};

export default handleActions (
    {
        
        [clearState]: state => ({
            ...defaultState
        }),

        [userLogin]: state => ({
            ...state,
            error: null,
            loginingIn: true
        }),

        [userLoginFail]: (state, {payload}) => ({
            ...state,
            error: payload,
            accessToken: '',
            loggedIn: false,
            loginingIn: false
        }),

        [userLoginSuccess]: (state, {payload}) => ({
            ...state,
            ...payload,
            error: null,
            loggedIn: true,
            loginingIn: false
        }),

        [userFetchSettingsFail]: (state, {payload}) => ({
            ...state,
            error: payload
        }),

        [userFetchSettingsSuccess]: (state, {payload}) => ({
            ...state,
            info: payload,
            error: null
        }),
    },
    defaultState
);