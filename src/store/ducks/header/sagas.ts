import { call, put } from 'redux-saga/effects';
import api from '../../../services/api';
import { loadSuccess } from './actions';
import { Header } from './types';
export function* loadHeader() {
    try {
        const response = yield call(api.get, '/header');
        const header = {
            id: response.data.id,
            name: response.data.collaborator.name,
            email: response.data.collaborator.email,
            project: response.data.project.title,
            purpose: response.data.purpose,
            justification: response.data.justification,
            amountOfPeople: response.data.accountabilityExtraInfo.amountOfPeople,
            budgetForBreakfast: response.data.accountabilityExtraInfo.budgetForBreakfast,
            createdOn: response.data.createdOn
        } as Header;
        yield put(loadSuccess(header));
    } catch (error) {
        console.error("Error!");
    }
}