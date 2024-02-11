import { createSlice } from "@reduxjs/toolkit";

export interface ModalState {
  isOpen: boolean;
}

const initState: ModalState = {
  isOpen: false,
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
    }
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice;
