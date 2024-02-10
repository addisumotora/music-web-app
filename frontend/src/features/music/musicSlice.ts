import { createSlice } from "@reduxjs/toolkit";
import { GetMusicType, Music } from "../../types/types";

interface MusicState {
  musics: GetMusicType[];
  music: Music | undefined;
  loading: boolean;
  success: boolean;
  error: string | null;
}

const initialState: MusicState = {
  musics: [],
  music: undefined,
  loading: false,
  success: false,
  error: null,
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
    updateMusicAction: (state) => {
      state.loading = true;
    },

    updateMusicSuccessAction: (state, action) => {
      state.loading = false;
      const { id, updatedData } = action.payload;
      const index = state.musics.findIndex((item) => item.id === id);
      if (index !== -1) {
        state.musics[index] = { ...state.musics[index], ...updatedData };
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

    //delete music
    deleteMusicAction: (state) => {
      state.loading = true;
    },
    deleteMusicSuccessAction: (state, action) => {
      state.musics = state.musics.filter(
        (music) => music.id !== action.payload
      );
      state.loading = false;
      state.success = true;
    },
    deleteMusicErrorAction: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    // setSelectedmusic
    setselectedMusic: (state, action) => {
      state.music = action.payload
    },
  },
});

export const {createMusicAction, createMusicSuccessAction, createMusicErrorAction, getMusicAction, getMusicSuccessAction,getMusicErrorAction} = musicSlice.actions;