import React, { useContext, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { accent, white } from "../../constants";
import { ContactUsContent, ContactUsWrapper, ImageWrapper } from "./styles";
import TextSection from "../TextSection/TextSection";
import { DesktopContext } from "../../hooks/contexts";
import JustForm from "./JustForm";

function ContactUsForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const isDesktop = useContext(DesktopContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission, e.g., send the data to an API
    console.log({ name, email, message });
  };
  const contactCopy =
    "Whether you have a question, feedback, or just want to say hello, we're all ears! Fill out the form and we will get back to you as soon as possible. We're here to help and can't wait to connect with you. Your thoughts and inquiries mean the world to us, so don't hesitate to reach out. Let's chat soon!";

  return (
    <ContactUsWrapper>
      {isDesktop ? (
      <ContactUsContent>
          <div style={{ width: "100%" }}>
            <ImageWrapper />
            <TextSection title="Connect With Us!" content={contactCopy} />
          </div>
        <JustForm />
      </ContactUsContent>
      ) : (
        <div style={{ width: "100%" }}>
        <JustForm />
        </div>
      )}
    </ContactUsWrapper>
  );
}

export default ContactUsForm;
