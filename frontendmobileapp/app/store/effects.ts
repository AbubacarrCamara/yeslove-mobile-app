import { call, put, putResolve, takeEvery } from "redux-saga/effects";
import { persistUserInfoAction } from "./profileSlice";
import { State } from "./store";
import { AuthApiFactory, LoginRequest, ProfileApiFactory, TokenResponse, UserProfile, UserQueryResponse } from "@/generated-api";
import { appSelect } from "./hooks";
import { attemptRefreshFromLocalStorageAction, logInAction, setLoggedInAction } from "./authSlice";
import axios, { AxiosResponse } from "axios";
import { TOKEN_REFRESH_SERVICE } from "@/ts/token-service";
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
    TOKEN_REFRESH_SERVICE.saveRefreshTokenToLocalStorage(loginResponse.refresh_token ?? "");
    const userQueryResponse: UserQueryResponse  = ((yield call(ProfileApiFactory().postGetUserKeycloakIdFlexible, request)) as AxiosResponse<UserQueryResponse>).data as UserQueryResponse;
    TOKEN_REFRESH_SERVICE.saveUserIdToLocalStorage(userQueryResponse.keycloak_id ?? "")
    yield put(setUserId(userQueryResponse.keycloak_id));
    yield put(setLoggedInAction(true));
  }catch (error) {
    console.error('Login failed:', error);
  }
}

function* refreshFromLocalStorage(action: PayloadAction<void>){
  const refreshToken = ((yield call(TOKEN_REFRESH_SERVICE.loadRefreshTokenFromLocalStorage))) as string | null;
  if(!!refreshToken){
    try{
      yield put(setLoggedInAction(true));
      const refreshResponse = ((yield call(AuthApiFactory().postRefreshToken, {refresh_token: refreshToken})) as AxiosResponse<TokenResponse>).data as TokenResponse;
      axios.defaults.headers.common['Authorization'] = refreshResponse.access_token ?? "";
      TOKEN_REFRESH_SERVICE.startRefreshingToken(refreshResponse.refresh_token ?? "");
      TOKEN_REFRESH_SERVICE.saveRefreshTokenToLocalStorage(refreshResponse.refresh_token ?? "");
      yield put(setUserId(((yield call(TOKEN_REFRESH_SERVICE.loadUserIdFromLocalStorage))) as string | null));
    }catch (error){
      yield put(setLoggedInAction(false));
    }
  }
}


function* appSaga() {
  yield takeEvery(persistUserInfoAction.type, saveProfileInfoEffect);
  yield takeEvery(logInAction.type, handleLoginRequest);
  yield takeEvery(attemptRefreshFromLocalStorageAction.type, refreshFromLocalStorage);
}

export default appSaga;
