import { call, put } from 'redux-saga/effects';
import api from '../../../services/api';
import { loadSuccess } from './actions';

export function* loadTimeline() {
    try {
        const response = yield call(api.get, '/timeline');
        yield put(loadSuccess(response.data.content));
    } catch (error) {
        console.error("Error!");
    }
}