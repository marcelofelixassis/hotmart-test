import { createStore, applyMiddleware } from 'redux';
import rootReducer from './ducks/rootReducer';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { HeaderState } from './ducks/header/types';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './ducks/rootSaga';
import { TimelineState } from './ducks/timeline/types';
import { SidebarState } from './ducks/sidebar/types';

export interface AppState {
    header: HeaderState,
    timeline: TimelineState,
    sidebar: SidebarState,
}

const persistConfig = {
    key: 'persistredux',
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

const sagaMiddleware = createSagaMiddleware();

const store = createStore(persistedReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

const persistor = persistStore(store);

export {store, persistor};