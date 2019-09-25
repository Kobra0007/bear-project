import {push} from 'connected-react-router';
import {put, select, takeEvery} from 'redux-saga/effects';


import {
    clearState,
    
    userEdit,
    userEditFail,
    userEditSuccess,
    
    userLogin,
    userLoginFail,
    userLoginSuccess,
    
    userRegister,
    userRegisterFail,
    userRegisterSuccess,

} from '../modules/user';



function* login({payload}) {
    try {

    } catch (response) {

    }
}
export default function* userSaga() {
	yield takeEvery(userLogin.toString(), login);
}
