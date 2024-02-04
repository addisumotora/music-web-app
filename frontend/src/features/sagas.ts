import { all } from "redux-saga/effects";
import { watchUserActions } from "./user/userSaga";

export default function* rootSaga() {
  yield all([
    watchUserActions()
  ]);
}