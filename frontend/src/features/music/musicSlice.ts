import { createSlice } from "@reduxjs/toolkit";
import { GetMusicType, Music } from "../../types/types";

interface MusicState {
  musics: GetMusicType[];
  music: GetMusicType | undefined;
  isUpdate: boolean;
  loading: boolean;
  success: boolean;
  error: string | null;
  deleting: boolean;
}

const initialState: MusicState = {
  musics: [],
  music: undefined,
  isUpdate: false,
  loading: false,
  success: false,
  error: null,
  deleting: false,
};

export const musicSlice = createSlice({
  name: "music",
  initialState: initialState,
  reducers: {
    // create music
    createMusicAction: (state, action) => {
      state.loading = true;
    },
    createMusicSuccessAction: (state, action) => {
      state.musics = [...state.musics, action.payload];
      state.loading = false;
    },
    createMusicErrorAction: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    // updatemusic
    updateMusicAction: (state, action) => {
      state.loading = true;
    },

    updateMusicSuccessAction: (state, action) => {
      state.loading = false;
      const data = action.payload;
      const index = state.musics.findIndex((item) => item._id === data._id);
      if (index !== -1) {
        state.musics[index] = { ...state.musics[index], ...data };
      }
    },

    updateMusicErrorAction: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    // get music
    getMusicAction: (state) => {
      state.loading = true;
    },
    getMusicSuccessAction: (state, action) => {
      state.musics = action.payload;
      state.loading = false;
      state.success = true;
    },
    getMusicErrorAction: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    // search music
    searchMusicAction: (state, action) => {
      state.loading = true;
    },
    searchMusicSuccessAction: (state, action) => {
      state.musics = action.payload;
      state.loading = false;
      state.success = true;
    },
    searchMusicErrorAction: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    getMusicByIdAction: (state, action) => {
      state.loading = true;
    },
    getMusicByIdSuccessAction: (state, action) => {
      state.music = action.payload;
      state.loading = false;
      state.success = true;
    },
    getMusicByIdErrorAction: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    //delete music
    deleteMusicAction: (state) => {
      state.deleting = true;
    },
    deleteMusicSuccessAction: (state, action) => {
      state.musics = state.musics.filter(
        (music) => music._id !== action.payload
      );
      state.deleting = false;
      state.success = true;
    },
    deleteMusicErrorAction: (state, action) => {
      state.deleting = false;
      state.error = action.payload;
    },

    // setSelectedmusic
    setselectedMusic: (state, action) => {
      state.music = action.payload;
    },

    //setUpdate
    setUpdate: (state, action) => {
      state.isUpdate = action.payload;
    },
  },
});

export const {
  createMusicAction,
  createMusicSuccessAction,
  createMusicErrorAction,
  updateMusicAction,
  updateMusicSuccessAction,
  updateMusicErrorAction,
  getMusicAction,
  getMusicSuccessAction,
  getMusicErrorAction,
  setselectedMusic,
  setUpdate,
  deleteMusicAction,
  deleteMusicErrorAction,
  deleteMusicSuccessAction,
  searchMusicAction,
  searchMusicErrorAction,
  searchMusicSuccessAction,
  getMusicByIdAction,
  getMusicByIdErrorAction,
  getMusicByIdSuccessAction
} = musicSlice.actions;
