import { all, takeLatest } from 'redux-saga/effects';
import { HeaderTypes } from './header/types';
import { TimelineTypes } from './timeline/types';
import { loadHeader } from './header/sagas';
import { loadTimeline } from './timeline/sagas';
import { loadSidebar } from './sidebar/sagas';
import { SidebarTypes } from './sidebar/types';

export default function* rootSaga() {
    return yield all([
        takeLatest(HeaderTypes.LOAD_HEADER, loadHeader),
        takeLatest(TimelineTypes.LOAD_TIMELINE, loadTimeline),
        takeLatest(SidebarTypes.LOAD_SIDEBAR, loadSidebar)
    ])
}