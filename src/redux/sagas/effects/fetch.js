import axios from 'axios';
import camelcaseKeys from 'camelcase-keys';
import {push} from 'react-router-redux';
import {put as sPut, select} from 'redux-saga/effects';
// import {history} from '../../../index';

const instance = axios.create({
	baseURL: 'https://jogtracker.herokuapp.com/api/v1/',
	headers: {'Access-Control-Allow-Origin': '*'}
});

function* processResponseErrors(response) {
	if (response.status >= 500) {
		console.log('500');
	} else if (response.status === 401) {
		// if (history.location.pathname !== '/login') {
            console.log('401');
		// }
	} else if (response.status == 404) {
        // yield sPut(push('/404'));
        console.log('404');
	}
}

function* getOptions(options = {}) {
	const {user} = yield select();

	if (user.accessToken) {
		return {
			...options,
			headers: {
				...(options.headers || {}),
				Authorization: `Bearer ${user.accessToken}`
			}
		};
	}

	return options;
}

export function* get(url, options = {}) {
	try {
		const opts = yield* getOptions(options);
		const res = yield instance.get(url, opts);

		return {...res, data: camelcaseKeys(res.data, {deep: true})};
	} catch ({ response }) {
		const newResponse= {...response, data: camelcaseKeys(response.data, {deep: true})};
		yield* processResponseErrors(response);

		throw newResponse;
	}
}

export function* put(url, data, options) {
	try {
		const opts = yield* getOptions(options);

		const res = yield instance.put(url, data, opts);

		return {...res, data: camelcaseKeys(res.data, {deep: true})};
	} catch ({ response }) {
		const newResponse= {...response, data: camelcaseKeys(response.data, {deep: true})};
		yield* processResponseErrors(response);

		throw newResponse;
	}
}

export function* del(url, options = {}) {
	try {
		const opts = yield* getOptions(options);
		const res = yield instance.delete(url, opts);

		return {...res, data: camelcaseKeys(res.data, {deep: true})};
	} catch ({ response }) {
		const newResponse= {...response, data: camelcaseKeys(response.data, {deep: true})};
		yield* processResponseErrors(response);

		throw newResponse;
	}
}

export function* post(url, data, options) {
	try {
		const opts = yield* getOptions(options);
		const res = yield instance.post(url, data, opts);
		return {...res, data: camelcaseKeys(res.data, {deep: true})};
	} catch ({ response }) {   
		const newResponse= {...response, data: camelcaseKeys(response.data, {deep: true})};
		yield* processResponseErrors(response);

		throw newResponse;
	}
}