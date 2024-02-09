import * as React from "react";
import Button from "@mui/joy/Button";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import Modal from "@mui/joy/Modal";
import ModalDialog from "@mui/joy/ModalDialog";
import DialogTitle from "@mui/joy/DialogTitle";
import Stack from "@mui/joy/Stack";
import { Button as MUButton } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { useDispatch, useSelector } from "react-redux";
import {closeModal } from "../features/modal/modalSlice";


export default function FormModal() {
  const { isOpen } = useSelector((state: any) => state.modalReducer);
  const dispatch = useDispatch()
  console.log(isOpen, 'open');
  return (
    <React.Fragment>
      <Modal
        open={isOpen}
        onClose={() => dispatch(closeModal())}
        sx={{
          background: "none",
          backdropFilter: "none" 
        }}
      >
        <ModalDialog>
          <DialogTitle>Create new Music</DialogTitle>
          <form
            onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
              event.preventDefault();
              dispatch(closeModal());
            }}
          >
            <MUButton
              component="label"
              variant="contained"
              startIcon={<CloudUploadIcon />}
              sx={{
                width: "100%",
                margin: "1rem 0",
                padding: "10px",
                boxShadow: 'none'
              }}
            >
              <input type="file" />
            </MUButton>
            <Stack spacing={2}>
              <Stack
                sx={{ display: "flex", flexDirection: "row", gap: "1rem" }}
              >
                <FormControl>
                  <FormLabel>Title</FormLabel>
                  <Input autoFocus required />
                </FormControl>
                <FormControl>
                  <FormLabel>Artist</FormLabel>
                  <Input autoFocus required />
                </FormControl>
              </Stack>
              <Stack
                sx={{ display: "flex", flexDirection: "row", gap: "1rem" }}
              >
                <FormControl>
                  <FormLabel>Genre</FormLabel>
                  <Input required />
                </FormControl>
                <FormControl>
                  <FormLabel>Album</FormLabel>
                  <Input required />
                </FormControl>
              </Stack>
              <Button type="submit">Submit</Button>
            </Stack>
          </form>
        </ModalDialog>
      </Modal>
    </React.Fragment>
  );
}
