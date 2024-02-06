import { createSlice } from "@reduxjs/toolkit";
import { IRegisterUser, ILoginUser } from "../../types/types";

interface UserState {
  user: ILoginUser | undefined;
  loading: boolean;
  success: boolean;
  error: string | null;
}

const initialState: UserState = {
  user: undefined,
  loading: false,
  success: false,
  error: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    createUserAction: (state, action) => {
      state.loading = true;
    },
    createUserSuccessAction: (state, action) => {
      state.loading = false;
      state.error = null;
      state.success = true;
      state.user = action.payload;
    },
    createUserErrorAction: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.success = false;
    },

    userLoginAction: (state, action) => {
      state.loading = true;
    },
    
    userLoginSuccessAction: (state, action) => {
      state.loading = false;
      state.error = null;
      state.success = true;
      state.user = action.payload;
    },
    userLoginErrorAction: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.success = false;
    },
  },
});

export const {
  createUserAction,
  createUserSuccessAction,
  createUserErrorAction,
  userLoginAction,
  userLoginSuccessAction,
  userLoginErrorAction
} = userSlice.actions;

export default userSlice;
