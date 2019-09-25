import { createActions, handleActions } from 'redux-actions';

export const {
    clearState,
    userLogin,
    userLogout,
    userLoginFail,
    userLoginSuccess,
    
} = createActions(
	'CLEAR_STATE',
	'USER_LOGIN',
	'USER_LOGOUT',
	'USER_LOGIN_FAIL',
	'USER_LOGIN_SUCCESS',
);


const defaultState = {
	info: {
		lastName: '',
		firstName: '',
	},
    
    loggedIn: false,
	loginingIn: false,
	loggedUser: {},


	settings: {},
	fetchingSettings: false,
    


	editing: false,

	error: null,

	token: '',
};

export default handleActions (
    {
        
        [clearState]: state => ({
            ...defaultState
        }),

        [userLogin]: state => ({
            ...state,
            token: '',
            error: null,
            loginingIn: true
        }),

        [userLogout]: state => ({
            ...state,
            info: {
                lastName: '',
                firstName: ''
            },
            private: {
                password: ''
            },
            loggedUser: {},
            error: null,
            token: '',
            loggedIn: false,
            loginingIn: false
        }),

        [userLoginFail]: (state, {payload}) => ({
            ...state,
            error: payload,
            token: '',
            loggedIn: false,
            loginingIn: false
        }),

        [userLoginSuccess]: (state, {payload}) => ({
            ...state,
            error: null,
            token: payload,
            loggedIn: true,
            loginingIn: false
        }),
    },
    defaultState
);