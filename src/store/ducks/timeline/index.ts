import { Reducer } from 'redux';
import { TimelineState, TimelineTypes } from './types';

const INITIAL_STATE: TimelineState = {
    data: [],
};

const reducer: Reducer<TimelineState> = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case TimelineTypes.LOAD_SUCCCES:
            return { ...state, data: action.payload };
        case TimelineTypes.ADD_ITEM:
            return { ...state, data: [ ...state.data, action.payload ] }
        default:
            return state;
    }
}

export default reducer;