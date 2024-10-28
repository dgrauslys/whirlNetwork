import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { accent, secondary, secondaryAccent, white } from "../../constants";
import { Snackbar } from "@mui/material";

function JustForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isNameError, setNameError] = useState(false);
  const [isEmailError, setEmailError] = useState(false);
  const [isMessageError, setMessageError] = useState(false);
  const [snackOpen, setSnackOpen] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    setNameError(name === "" ? true : false);
    setEmailError(email === "" || !email.match(emailRegex) ? true : false);
    setMessageError(message === "" ? true : false);

    if ((!isNameError || !isEmailError || !isMessageError)) {
      console.log({ name, email, message });
      setName("");
      setEmail("");
      setMessage("");
      setSnackOpen(true);
    }
  };

  const handleClose = () => {
    setSnackOpen(false);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        marginLeft: "20px",
        padding: 3,
        backgroundColor: `${secondaryAccent}`,
        borderRadius: 2,
        boxShadow: 1,
      }}
    >
      <TextField
        label="Name"
        variant="outlined"
        fullWidth
        required
        value={name}
        onChange={(e) => {
          setName(e.target.value);
          setNameError(false);
        }}
        error={isNameError}
      />
      <TextField
        label="Email"
        variant="outlined"
        fullWidth
        required
        type="email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value), setEmailError(false);
        }}
        error={isEmailError}
      />
      <TextField
        label="Message"
        variant="outlined"
        fullWidth
        required
        multiline
        rows={4}
        value={message}
        onChange={(e) => {
          setMessage(e.target.value);
          setMessageError(false);
        }}
        error={isMessageError}
      />
      <Button variant="contained" color="primary" type="submit">
        Submit
      </Button>
      <Snackbar
        open={snackOpen}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Thank you! Email sent!"
      />
    </Box>
  );
}

export default JustForm;
