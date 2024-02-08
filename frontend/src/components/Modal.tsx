import * as React from "react";
import Button from "@mui/joy/Button";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import Modal from "@mui/joy/Modal";
import ModalDialog from "@mui/joy/ModalDialog";
import DialogTitle from "@mui/joy/DialogTitle";
import DialogContent from "@mui/joy/DialogContent";
import Stack from "@mui/joy/Stack";
import Add from "@mui/icons-material/Add";
import { styled } from "@mui/material/styles";
import { Button as MUButton } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

export default function FormModal() {
  const [open, setOpen] = React.useState<boolean>(true);
  return (
    <React.Fragment>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
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
              setOpen(false);
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
