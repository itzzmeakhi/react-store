import { createStore, applyMiddleware } from "redux";
import { persistStore } from 'redux-persist';

import rootReducer from "./rootReducer";


const middlewares = [];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

const persistor = persistStore(store);

export { store, persistor };