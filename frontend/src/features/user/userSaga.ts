import { PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../types/types";
import { call, put, takeLatest } from "redux-saga/effects";
import { login, createUser } from "../../api";
import {
  createUserErrorAction,
  createUserSuccessAction,
  userLoginErrorAction,
  userLoginSuccessAction,
} from "./userSlice";

function* registerUser({
  payload: user,
}: PayloadAction<User>): Generator<any, void, any> {
  try {
    const { data } = yield call(login, user);
    yield put(createUserSuccessAction(data));
  } catch (error: any) {
    yield put(
      createUserErrorAction(
        error?.response?.data?.message || "Something went wrong! try again"
      )
    );
  }
}

function* userLogin({
  payload: user,
}: PayloadAction<User>): Generator<any, void, any> {
  try {
    const { data } = yield call(createUser, user);
    yield put(userLoginSuccessAction(data));
  } catch (error: any) {
    yield put(
      userLoginErrorAction(
        error?.response?.data?.message || "Something went wrong! try again"
      )
    );
  }
}

export function* watchUserActions() {
  yield takeLatest("user/createUserAction", registerUser);
  yield takeLatest("user/userLoginAction", userLogin);
}
