import { Reducer } from 'redux';
import { HeaderState, HeaderTypes, Header } from './types';

const INITIAL_STATE: HeaderState = {
    data: {} as Header
};

const reducer: Reducer<HeaderState> = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case HeaderTypes.LOAD_SUCCCES:
            return { ...state, data: action.payload };
        default:
            return state;
    }
}

export default reducer;