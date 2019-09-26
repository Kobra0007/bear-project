import {push} from 'connected-react-router';
import {put, select, takeEvery} from 'redux-saga/effects';

import {get, del, post, put as putAxios} from './effects/fetch';

import {
    clearState,

    userLogin,
    userLoginFail,
    userLoginSuccess,

    userFetchSettingsFail,
    userFetchSettingsSuccess,

} from '../modules/user';

function* login({payload}) {
    try {
        const res = yield* post('/auth/uuidLogin', {
            uuid: 'hello'
        });
        yield put(userLoginSuccess(res.data.response));

        yield* fetchAuthorizedSettings();

        yield put(push('/jogs'));

    } catch (response) {
        yield put(userLoginFail(response.data.errorMessage));
    }
}

function* fetchAuthorizedSettings() {
    try {
        const res = yield* get('/auth/user/');
        yield put(userFetchSettingsSuccess(res.data.response));
    } catch (response) {
        yield put(userFetchSettingsFail(response.data.errorMessage));
    }
}

export default function* userSaga() {
	yield takeEvery(userLogin.toString(), login);
}
