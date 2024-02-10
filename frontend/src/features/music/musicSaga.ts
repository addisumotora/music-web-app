import { PayloadAction } from "@reduxjs/toolkit";
import { call, put, takeLatest } from "redux-saga/effects";
import {createIMusic, getIMusic } from "../../api";
import { Music } from "../../types/types";
import { createMusicErrorAction, createMusicSuccessAction, getMusicErrorAction, getMusicSuccessAction } from "./musicSlice";
import { closeModal } from "../modal/modalSlice";
import { toast } from "react-toastify";

function* createMusic({payload: music}: PayloadAction<{ music: Music}>): Generator<any, void, any> {
    try {
      const data = yield call(createIMusic, music);
      yield put(createMusicSuccessAction(data));
      yield put(getMusicAction())
      yield put(closeModal());
    } catch (error: any) {
      toast.error(`${error?.response?.data?.message || "Something went wrong! try again"}`, {
        position: "top-right",
        autoClose: 3000,
      });
      yield put(
        createMusicErrorAction(
          error?.response?.data?.message || "Something went wrong! try again"
        )
      );
    }
  }

  function* getMusic(): Generator<any, void, any> {
    try {
      const data = yield call(getIMusic);
      yield put(getMusicSuccessAction(data));
    } catch (error: any) {
      toast.error(`${error?.response?.data?.message || "Something went wrong! try again"}`, {
        position: "top-right",
        autoClose: 3000,
      });
      yield put(
        getMusicErrorAction(
          error?.response?.data?.message || "Something went wrong! try again"
        )
      );
    }
  }

  export function* watchMusicActions() {
    yield takeLatest("music/createMusicAction", createMusic);
    yield takeLatest("music/getMusicAction", getMusic);
  }
  

function getMusicAction(): any {
  throw new Error("Function not implemented.");
}

