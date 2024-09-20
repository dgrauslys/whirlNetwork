import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { accent, white } from '../../constants';
import { ContactUsContent, ContactUsWrapper, ImageWrapper } from './styles';
import TextSection from '../TextSection/TextSection';

function ContactUsForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission, e.g., send the data to an API
    console.log({ name, email, message });
  };
  const contactCopy = "Whether you have a question, feedback, or just want to say hello, we're all ears! Fill out the form and we will get back to you as soon as possible. We're here to help and can't wait to connect with you. Your thoughts and inquiries mean the world to us, so don't hesitate to reach out. Let's chat soon!";


  return (
    <ContactUsWrapper><ContactUsContent>
        <div style={{width: '100%'}}><ImageWrapper/><TextSection title="Connect With Us!" content={contactCopy}/></div>
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        marginLeft: '20px',
        padding: 3,
        backgroundColor: `${white}`,
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
    </ContactUsContent></ContactUsWrapper>
  );
}

export default ContactUsForm;