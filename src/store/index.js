import createSagaMiddleare from 'redux-saga';
import { persistStore } from 'redux-persist';

import createStore from './createStore';

import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

import persistReducers from './persistReducers';

const sagaMonitor = __DEV__ ? console.tron.createSagaMonitor() : null;

const sagaMiddleare = createSagaMiddleare({ sagaMonitor });

const middleares = [sagaMiddleare];

const store = createStore(persistReducers(rootReducer), middleares);
const persistor = persistStore(store);

sagaMiddleare.run(rootSaga);

export { store, persistor };
