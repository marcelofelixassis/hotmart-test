import { combineReducers } from 'redux';
import header from './header';
import timeline from './timeline';
import sidebar from './sidebar';

export default combineReducers({
    header,
    timeline,
    sidebar
});