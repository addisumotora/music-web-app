import { combineReducers, configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import userSlice from "./user/userSlice";
import rootSaga from "./sagas";
import { PersistConfig, persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { musicSlice } from "./music/musicSlice";
import logger from 'redux-logger'
import modalSlice from "./modal/modalSlice";

const rootReducer = combineReducers({
  userReducer: userSlice.reducer,
  musicReducer: musicSlice.reducer,
  modalReducer: modalSlice.reducer
});

export type RootState = ReturnType<typeof rootReducer>;

const sagaMiddleware = createSagaMiddleware();


const persistConfig: PersistConfig<RootState> = { key: "root", storage };
const persistedReducer = persistReducer(persistConfig, rootReducer);


export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(sagaMiddleware).concat(logger),
});

export const persistor = persistStore(store);
sagaMiddleware.run(rootSaga);
