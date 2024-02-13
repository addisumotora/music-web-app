import { createSlice } from "@reduxjs/toolkit";

export interface ModalState {
  isOpen: boolean;
  isSideBaropen: boolean;
}

const initState: ModalState = {
  isOpen: false,
  isSideBaropen: true
};

const modalSlice = createSlice({
  initialState: initState,
  name: "modal",
  reducers: {
    openModal: (state) => {
      state.isOpen = true;
    },
    closeModal: (state) => {
      state.isOpen = false;
    },

    sidebarAction: (state) => {
      state.isSideBaropen = !state.isSideBaropen
    },
    sidebarFalse: (state) => {
      state.isSideBaropen = true;
    }
  },
});

export const { openModal, closeModal, sidebarAction, sidebarFalse} = modalSlice.actions;
export default modalSlice;
