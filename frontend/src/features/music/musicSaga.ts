import { PayloadAction } from "@reduxjs/toolkit";
import { call, put, takeLatest } from "redux-saga/effects";
import {createIMusic } from "../../api";
import { Music } from "../../types/types";
import { createMusicErrorAction, createMusicSuccessAction } from "./musicSlice";
import { closeModal } from "../modal/modalSlice";
import { toast } from "react-toastify";

function* createMusic({payload: imusic}: PayloadAction<{ imusic: Music}>): Generator<any, void, any> {
  console.log(imusic,'imusic')
    try {
      const data = yield call(createIMusic, imusic);
      yield put(createMusicSuccessAction(data));
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

  export function* watchMusicActions() {
    yield takeLatest("music/createMusicAction", createMusic);
  }
  

