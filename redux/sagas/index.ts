import { all } from 'redux-saga/effects';
import { watchJoin } from "./userSaga.ts";
import { watchAdd } from './todoSaga.ts';

export default function* rootSaga() {
    yield all([watchJoin(), watchAdd()]);
} 
