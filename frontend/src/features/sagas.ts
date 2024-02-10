import { all } from "redux-saga/effects";
import { watchUserActions } from "./user/userSaga";
import { watchMusicActions } from "./music/musicSaga";

export default function* rootSaga() {
  yield all([
    watchUserActions(),
    watchMusicActions()
  ]);
}