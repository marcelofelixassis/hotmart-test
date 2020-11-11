import { Reducer } from 'redux';
import { SidebarState, SidebarTypes } from './types';

const INITIAL_STATE: SidebarState = {
    data: [],
};

const reducer: Reducer<SidebarState> = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case SidebarTypes.LOAD_SUCCCES:
            return { ...state, data: action.payload };
        default:
            return state;
    }
}

export default reducer;