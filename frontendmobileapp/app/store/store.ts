import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import profileReducer from "./profileSlice";
import createSagaMiddleWare from "redux-saga"
import mySaga from "./effects";

export const sagaMiddleWare = createSagaMiddleWare();

export const store = configureStore({
    reducer: { 
        user: userReducer,
        profile: profileReducer,
    },
    devTools: process.env.NODE_ENV !== 'production',
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleWare)
})

sagaMiddleWare.run(mySaga)

export type State = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store