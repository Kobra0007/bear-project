import { fork } from 'redux-saga/effects';

import user from './user';
import jogs from './jogs';


export default function* rootSags() {
  yield fork(user);
  yield fork(jogs);
}