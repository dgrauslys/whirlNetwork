import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { accent, secondaryAccent, white } from '../../constants';

function JustForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');


  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission, e.g., send the data to an API
    console.log({ name, email, message });
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        marginLeft: '20px',
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
        onChange={(e) => setName(e.target.value)}
      />
      <TextField
        label="Email"
        variant="outlined"
        fullWidth
        required
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        label="Message"
        variant="outlined"
        fullWidth
        required
        multiline
        rows={4}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <Button variant="contained" color="primary" type="submit">
        Submit
      </Button>
    </Box>
  );
}

export default JustForm;