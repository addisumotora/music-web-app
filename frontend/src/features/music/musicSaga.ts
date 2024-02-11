import { PayloadAction } from "@reduxjs/toolkit";
import { all, call, delay, put, takeLatest } from "redux-saga/effects";
import { createIMusic, deleteIMusic, getIMusic, updateIMusic } from "../../api";
import { Music } from "../../types/types";
import {
  createMusicErrorAction,
  createMusicSuccessAction,
  deleteMusicErrorAction,
  deleteMusicSuccessAction,
  getMusicAction,
  getMusicErrorAction,
  getMusicSuccessAction,
  setUpdate,
  setselectedMusic,
  updateMusicErrorAction,
  updateMusicSuccessAction,
} from "./musicSlice";
import { closeModal } from "../modal/modalSlice";
import { toast } from "react-toastify";

function* createMusic({
  payload: music,
}: PayloadAction<{ music: Music }>): Generator<any, void, any> {
  try {
    const data = yield call(createIMusic, music);
    yield all([
      put(createMusicSuccessAction(data)),
      put(getMusicAction()),
      put(closeModal()),
    ]);
    toast.success("Music created successfully", {
      position: "top-right",
      autoClose: 3000,
    });
  } catch (error: any) {
    toast.error(
      `${error?.response?.data?.message || "Something went wrong! try again"}`,
      {
        position: "top-right",
        autoClose: 3000,
      }
    );

    yield all([
      put(
        createMusicErrorAction(
          error?.response?.data?.message || "Something went wrong! try again"
        )
      ),
      put(closeModal()),
    ]);
  }
}

function* getMusic(): Generator<any, void, any> {
  try {
    const data = yield call(getIMusic);
    yield put(getMusicSuccessAction(data));
  } catch (error: any) {
    toast.error(
      `${error?.response?.data?.message || "Something went wrong! try again"}`,
      {
        position: "top-right",
        autoClose: 3000,
      }
    );
    yield put(
      getMusicErrorAction(
        error?.response?.data?.message || "Something went wrong! try again"
      )
    );
  }
}

function* updateMusic({
  payload: music,
}: PayloadAction<{ music: any }>): Generator<any, void, any> {
  try {
    const data = yield call(updateIMusic, music);
    toast.success("Music updated successfully", {
      position: "top-right",
      autoClose: 3000,
    });
    yield all([
      put(updateMusicSuccessAction(data)),
      put(closeModal()),
      put(setUpdate(false)),
    ]);
  } catch (error: any) {
    toast.error(
      `${error?.response?.data?.message || "Something went wrong! try again"}`,
      { position: "top-right", autoClose: 3000 }
    );
    yield all([
      put(
        updateMusicErrorAction(
          error?.response?.data?.message || "Something went wrong! try again"
        )
      ),
      put(closeModal()),
      put(setUpdate(false)),
    ]);
  }
}

function* deleteMusic({
  payload: id,
}: PayloadAction<{ id: string }>): Generator<any, void, any> {
  try {
    yield call(deleteIMusic, id as any);
    yield put(deleteMusicSuccessAction(id));
    toast.success("music deleted successfully", {
      position: "top-right",
      autoClose: 3000,
    });
  } catch (error: any) {
    toast.error(
      `${error?.response?.data?.message || "Something went wrong! try again"}`,
      { position: "top-right", autoClose: 3000 }
    );
    yield all([
      put(
        deleteMusicErrorAction(
          error?.response?.data?.message || "Something went wrong! try again"
        )
      ),
    ]);
  }
}

export function* watchMusicActions() {
  yield takeLatest("music/createMusicAction", createMusic);
  yield takeLatest("music/getMusicAction", getMusic);
  yield takeLatest("music/updateMusicAction", updateMusic);
  yield takeLatest("music/deleteMusicAction", deleteMusic);
}
