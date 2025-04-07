import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import profileReducer from "./profileSlice";
import feedReducer from "./feedSlice";
import createSagaMiddleWare from "redux-saga"
import appSaga from "./effects";

export const sagaMiddleWare = createSagaMiddleWare();

export const store = configureStore({
    reducer: { 
        user: userReducer,
        profile: profileReducer,
        feed: feedReducer
    },
    devTools: process.env.NODE_ENV !== 'production',
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleWare)
})

sagaMiddleWare.run(appSaga)

export type State = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store