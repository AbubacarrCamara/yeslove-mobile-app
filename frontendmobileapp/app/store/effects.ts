import { select, takeEvery } from "redux-saga/effects";
import { persistUserInfoAction } from "./profileSlice";
import { State } from "./store";
import { ProfileApiFactory, UserProfile } from "@/generated-api";

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* saveProfileInfoEffect(action: any) {
  let info: UserProfile = yield select((state: State) => state.profile.info);
  ProfileApiFactory()
    .putUpdateProfile(info)
    .catch((reason) => console.log("Failed to update user profile: " + reason));
}

function* mySaga() {
  yield takeEvery(persistUserInfoAction.type, saveProfileInfoEffect);
}

export default mySaga;
