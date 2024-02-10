import * as React from "react";
import Button from "@mui/joy/Button";
import FormControl from "@mui/joy/FormControl";
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

  return (
    <React.Fragment>
      <Modal
        open={isOpen}
        onClose={() => dispatch(closeModal())}
      >
        <ModalDialog sx={{backgroundColor: '#14252f', border:'none', color:'white'}}>
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
              sx={{ width: "100%", margin: "1.2rem 0 ", padding:'0', boxShadow: 'none', backgroundColor:"#009688"}}
            >
              <input style={{padding: '.75rem'}} type="file" />
            </MUButton>
            <Stack spacing={5} sx={{color:'white'}}>
              <Stack
                sx={{ display: "flex", color:'white', flexDirection: "row", gap: "1rem" }}
              >
                <FormControl>
                  <Input placeholder="Title" sx={{ padding: "1rem", bgcolor: "#14252f", color: "#a3a3a3", border: "1px solid #293e49", borderRadius: "10px" }} autoFocus required />
                </FormControl>
                <FormControl>
                  <Input placeholder="Artist" sx={{ padding: "1rem", bgcolor: "#14252f", color: "#a3a3a3", border: "1px solid #293e49", borderRadius: "10px" }} autoFocus required />
                </FormControl>
              </Stack>
              <Stack
                sx={{ display: "flex", flexDirection: "row", gap: "1rem" }}
              >
                <FormControl>
                  <Input placeholder="Genre" sx={{ padding: "1rem", bgcolor: "#14252f", color: "#a3a3a3", border: "1px solid #293e49", borderRadius: "10px" }} autoFocus required />
                </FormControl>
                <FormControl>
                  <Input placeholder="Album" sx={{ padding: "1rem", bgcolor: "#14252f", color: "#a3a3a3", border: "1px solid #293e49", borderRadius: "10px" }} autoFocus required />
                </FormControl>
              </Stack>
              <Button sx={{padding: '.75rem', bgcolor:"#009688"}} type="submit">Submit</Button>
            </Stack>
          </form>
        </ModalDialog>
      </Modal>
    </React.Fragment>
  );
}
