import { call, put } from 'redux-saga/effects';
import api from '../../../services/api';
import { loadSuccess } from './actions';

export function* loadSidebar() {
    try {
        const response = yield call(api.get, '/sidebar');
        yield put(loadSuccess(response.data.content));
    } catch (error) {
        console.error("Error!");
    }
}