import { takeEvery } from "redux-saga/effects";
import { persistUserInfoAction } from "./profileSlice";
import { State } from "./store";
import { ProfileApiFactory, UserProfile } from "@/generated-api";
import { appSelect } from "./hooks";

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* saveProfileInfoEffect(action: any) {
  let info: UserProfile = yield appSelect(state => state.profile.info);
  ProfileApiFactory()
    .putUpdateProfile(info)
    .catch((reason) => console.log("Failed to update user profile: " + reason));
}

function* appSaga() {
  yield takeEvery(persistUserInfoAction.type, saveProfileInfoEffect);
}

export default appSaga;
