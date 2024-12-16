import React from "react";
import {
  Container,
  Box,
  Typography,
  TextField,
  Grid,
  Paper,
} from "@mui/material";

import CardContainer from "../../components/CardContainer/CardContainer";
import { Copy, SuperHeaderText } from "../../components/constants";
import { Button } from "../../components/Button";

export default function Contact() {
  return (
    <Container>
      <Grid container spacing={4}>
        {/* Contact Form */}
        <Grid item xs={12} md={6}>
          <CardContainer>
            <SuperHeaderText>Send Me a Message</SuperHeaderText>
            <Box
              component="form"
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                label="Your Name"
                variant="outlined"
                fullWidth
                required
              />
              <TextField
                label="Your Email"
                variant="outlined"
                type="email"
                fullWidth
                required
              />
              <TextField
                label="Your Message"
                variant="outlined"
                multiline
                rows={4}
                fullWidth
                required
              />
              <Button size="large" variant="contained" fullWidth>Send</Button>
            </Box>
          </CardContainer>
        </Grid>

        {/* Contact Information */}
        <Grid item xs={12} md={6}>
          <CardContainer>
            <SuperHeaderText>Get in Touch</SuperHeaderText>
            <Copy>
              Feel free to reach out via email or phone. I'm here to help!
            </Copy>
            <Box sx={{ mb: 2 }}>
              <Copy variant="body2" color="text.secondary">
                <strong>Email:</strong> zugy.organizer@gmail.com 
              </Copy>
            </Box>
            <Copy variant="body2" color="text.secondary">
              Follow me on social media:
            </Copy>
            <Copy variant="body2" color="text.secondary">
              Facebook | Twitter | Instagram
            </Copy>
          </CardContainer>
        </Grid>
      </Grid>
    </Container>
  );
}
