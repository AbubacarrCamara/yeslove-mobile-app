import { call, put, putResolve, takeEvery } from "redux-saga/effects";
import { persistUserInfoAction } from "./profileSlice";
import { State } from "./store";
import { AuthApiFactory, LoginRequest, ProfileApiFactory, TokenResponse, UserProfile, UserQueryResponse } from "@/generated-api";
import { appSelect } from "./hooks";
import { logInAction, setLoggedInAction } from "./authSlice";
import axios, { AxiosResponse } from "axios";
import { TOKEN_REFRESH_SERVICE } from "@/ts/token-refresh-service";
import { setUserId } from "./userSlice";
import { PayloadAction } from "@reduxjs/toolkit";
import { Router } from "expo-router";

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* saveProfileInfoEffect(action: any) {
  let info: UserProfile = yield appSelect(state => state.profile.info);
  ProfileApiFactory()
    .putUpdateProfile(info)
    .catch((reason) => console.log("Failed to update user profile: " + reason));
}

function* handleLoginRequest(action: PayloadAction<LoginRequest>) {
  let request = action.payload;

  try{
    const loginResponse = ((yield call(AuthApiFactory().postLogin, request)) as AxiosResponse<TokenResponse>).data as TokenResponse;
    axios.defaults.headers.common['Authorization'] = loginResponse.access_token ?? "";
    TOKEN_REFRESH_SERVICE.startRefreshingToken(loginResponse.refresh_token ?? "");
    const userQueryResponse: UserQueryResponse  = ((yield call(ProfileApiFactory().postGetUserKeycloakIdFlexible, request)) as AxiosResponse<UserQueryResponse>).data as UserQueryResponse;
    yield put(setUserId(userQueryResponse.keycloak_id));
    yield put(setLoggedInAction(true));
  }catch (error) {
    console.error('Login failed:', error);
  }
}


function* appSaga() {
  yield takeEvery(persistUserInfoAction.type, saveProfileInfoEffect);
  yield takeEvery(logInAction.type, handleLoginRequest);
}

export default appSaga;
