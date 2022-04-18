import { all } from 'redux-saga/effects';
import { watchJoin } from "./userSaga.ts";
import { watchAdd } from './todoSaga.ts';
import {watchBoard} from './boardSaga.ts'

export default function* rootSaga() {
    yield all([watchJoin(), watchAdd(), watchBoard()]);
} 
