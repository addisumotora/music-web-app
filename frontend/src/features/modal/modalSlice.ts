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

    openSidebar: (state) => {
      state.isSideBaropen = true;
    },
    
    closeSidebar: (state) => {
      state.isSideBaropen = true;
    }
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice;
