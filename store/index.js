import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
// TODO remove persistStore, because server init redux state conflict with storaged state
import { persistStore, persistReducer } from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import storage from 'redux-persist/lib/storage';
import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

const bindMiddlewares = middlewares => {
	if (process.env.NODE_ENV !== 'production') {
		const { composeWithDevTools } = require('redux-devtools-extension');
		return composeWithDevTools(applyMiddleware(...middlewares));
	}
	return applyMiddleware(...middlewares);
};

const makeConfiguredStore = (reducer, initialState, middlewares) => {
	return createStore(reducer, initialState, bindMiddlewares(middlewares))
}

export const initStore = (initialState, { isServer }) => {
	const sagaMiddleware = createSagaMiddleware();
	const middlewaresArray = process.env.NODE_ENV !== 'production' ? [sagaMiddleware] : [sagaMiddleware];
	let store;
	if (isServer) {
		store = makeConfiguredStore(rootReducer, initialState, middlewaresArray);
	} else {
		const persistConfig = {
			key: 'farm',
			stateReconciler: autoMergeLevel2,
			storage
		};
		const persistedReducer = persistReducer(persistConfig, rootReducer);
		store = makeConfiguredStore(persistedReducer, initialState, middlewaresArray);
		store.__persistor = persistStore(store);
	}
	store.sagaTask = sagaMiddleware.run(rootSaga);
	return store;
};
