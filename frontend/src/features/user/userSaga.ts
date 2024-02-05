import { PayloadAction } from "@reduxjs/toolkit";
import { IRegisterUser, ILoginUser} from "../../types/types";
import { call, put, takeLatest } from "redux-saga/effects";
import { login, createUser } from "../../api";
import {
  createUserErrorAction,
  createUserSuccessAction,
  userLoginErrorAction,
  userLoginSuccessAction,
} from "./userSlice";
import { toast } from "react-toastify";

function* registerUser({
  payload: user,
}: PayloadAction<IRegisterUser>): Generator<any, void, any> {
  try {
    const data  = yield call(createUser, user);
    yield put(createUserSuccessAction(data));
  } catch (error: any) {
    toast.error(`${error?.response?.data?.message || "Something went wrong! try again"}`, {
      position: "top-right",
      autoClose: 3000,
    });
    yield put(
      createUserErrorAction(
        error?.response?.data?.message || "Something went wrong! try again"
      )
    );
  }
}

function* userLogin({
  payload: user,
}: PayloadAction<ILoginUser>): Generator<any, void, any> {
  try {
    const data  = yield call(login, user);
    console.log(data, 'data')
    yield put(userLoginSuccessAction(data));
  } catch (error: any) {
    toast.error(`${error?.response?.data?.message || "Something went wrong! try again"}`, {
      position: "top-right",
      autoClose: 3000,
    });
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
