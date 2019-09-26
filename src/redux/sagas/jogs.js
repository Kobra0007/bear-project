import {push} from 'connected-react-router';
import {put, select, takeEvery} from 'redux-saga/effects';

import {get, del, post, put as putAxios} from './effects/fetch';

import {
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

} from '../modules/jogs';


function* getJ({payload}) {
    try {
        const res = yield* get('/data/jog', {
            uuid: 'hello2'
        });
        
        yield put(getJogsSuccess(res.data.response));
    } catch (response) {
        yield put(getJogsFail(response.data.errorMessage));
    }
};

function* add({payload}) {
    try {
        const res = yield* post('/data/jog', {
            uuid: 'hello2'
        });
        
        yield put(addJogSuccess(res.data.response));
    } catch (response) {
        yield put(addJogFail(response.data.errorMessage));
    }
};

function* delJog({payload}) {
    try {
        const res = yield* del('/data/jog', {
            uuid: 'hello2'
        });
        
        yield put(deleteJogSuccess(res.data.response));
    } catch (response) {
        yield put(deleteJogFail(response.data.errorMessage));
    }
};

function* update({payload}) {
    try {
        const res = yield* putAxios('/data/jog', {
            uuid: 'hello2'
        });
        
        yield put(updateJogSuccess(res.data.response));
    } catch (response) {
        yield put(updateJogFail(response.data.errorMessage));
    }
};

export default function* userSaga() {
    yield takeEvery(addJog.toString(), add);
    yield takeEvery(getJogs.toString(), getJ);
	yield takeEvery(deleteJog.toString(), delJog);
	yield takeEvery(updateJog.toString(), update);
}