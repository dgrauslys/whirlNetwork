import React, { useEffect, useRef, useState } from "react";
import { BodyWrapper } from "../components/bodyWrapper/bodyWrapper";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar/NavBar";
import { ContactContext } from "../hooks/contexts";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Box, Typography } from "@mui/material";
import { HeaderText } from "../components/constants";
import Event from "../components/Event/Event";
import TextSection from "../components/TextSection/TextSection";
import ContactUsForm from "../components/ContactUsForm/ContactUsForm";

function AboutUs() {
  const eventRef = useRef<HTMLDivElement | null>(null);
  const skillsetRef = useRef<HTMLDivElement | null>(null);
  const clientsRef = useRef<HTMLDivElement | null>(null);

  const [value, setValue] = React.useState("0");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    const isMatch = value == index;

    return (
      <div
        role="tabpanel"
        hidden={!isMatch}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {isMatch && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  const pastEvents = [
    {
      ref: useRef<HTMLDivElement | null>(null),
      title: "Event One - MM/DD/YYYY",
    },
    {
      ref: useRef<HTMLDivElement | null>(null),
      title: "Event Two - MM/DD/YYYY",
    },
    {
      ref: useRef<HTMLDivElement | null>(null),
      title: "Event Three - MM/DD/YYYY",
    },
  ];

  const aboutText =
    "Welcome to our vibrant and supportive women's networking group, where relationships are at the heart of everything we do! We are dedicated to empowering women by fostering connections that inspire, uplift, and create lasting friendships. Our community is all about building each other up, sharing experiences, and growing together. Below, you'll find a glimpse of the exciting and meaningful events we've hosted in the past—each one a testament to the power of women coming together to support and celebrate one another!";
  const placeHolder = [
    {
      title: "Mauris semper libero",
      copy: "Nunc et orci in ipsum aliquam cursus eu at mi. Sed rutrum at ex id malesuada. Aliquam erat volutpat. Mauris semper libero rutrum, suscipit eros et, blandit felis. Duis vel finibus elit. Donec commodo, sem ut pellentesque consequat, metus nibh molestie libero, ut rutrum ante eros ut eros. Nulla a suscipit metus, sed ornare nulla. Praesent mollis arcu congue eros rutrum, at tempus enim sagittis. Duis id blandit tortor. Aliquam enim risus, pellentesque ut venenatis id, congue id erat.",
    },
    {
      title: "Mauris semper libero",
      copy: "Nunc et orci in ipsum aliquam cursus eu at mi. Sed rutrum at ex id malesuada. Aliquam erat volutpat. Mauris semper libero rutrum, suscipit eros et, blandit felis. Duis vel finibus elit. Donec commodo, sem ut pellentesque consequat, metus nibh molestie libero, ut rutrum ante eros ut eros. Nulla a suscipit metus, sed ornare nulla. Praesent mollis arcu congue eros rutrum, at tempus enim sagittis. Duis id blandit tortor. Aliquam enim risus, pellentesque ut venenatis id, congue id erat.",
    },
    {
      title: "Mauris semper libero",
      copy: "Nunc et orci in ipsum aliquam cursus eu at mi. Sed rutrum at ex id malesuada. Aliquam erat volutpat. Mauris semper libero rutrum, suscipit eros et, blandit felis. Duis vel finibus elit. Donec commodo, sem ut pellentesque consequat, metus nibh molestie libero, ut rutrum ante eros ut eros. Nulla a suscipit metus, sed ornare nulla. Praesent mollis arcu congue eros rutrum, at tempus enim sagittis. Duis id blandit tortor. Aliquam enim risus, pellentesque ut venenatis id, congue id erat.",
    },
    {
      title: "Mauris semper libero",
      copy: "Nunc et orci in ipsum aliquam cursus eu at mi. Sed rutrum at ex id malesuada. Aliquam erat volutpat. Mauris semper libero rutrum, suscipit eros et, blandit felis. Duis vel finibus elit. Donec commodo, sem ut pellentesque consequat, metus nibh molestie libero, ut rutrum ante eros ut eros. Nulla a suscipit metus, sed ornare nulla. Praesent mollis arcu congue eros rutrum, at tempus enim sagittis. Duis id blandit tortor. Aliquam enim risus, pellentesque ut venenatis id, congue id erat.",
    },
    {
      title: "Mauris semper libero",
      copy: "Nunc et orci in ipsum aliquam cursus eu at mi. Sed rutrum at ex id malesuada. Aliquam erat volutpat. Mauris semper libero rutrum, suscipit eros et, blandit felis. Duis vel finibus elit. Donec commodo, sem ut pellentesque consequat, metus nibh molestie libero, ut rutrum ante eros ut eros. Nulla a suscipit metus, sed ornare nulla. Praesent mollis arcu congue eros rutrum, at tempus enim sagittis. Duis id blandit tortor. Aliquam enim risus, pellentesque ut venenatis id, congue id erat.",
    },
    {
      title: "Mauris semper libero",
      copy: "Nunc et orci in ipsum aliquam cursus eu at mi. Sed rutrum at ex id malesuada. Aliquam erat volutpat. Mauris semper libero rutrum, suscipit eros et, blandit felis. Duis vel finibus elit. Donec commodo, sem ut pellentesque consequat, metus nibh molestie libero, ut rutrum ante eros ut eros. Nulla a suscipit metus, sed ornare nulla. Praesent mollis arcu congue eros rutrum, at tempus enim sagittis. Duis id blandit tortor. Aliquam enim risus, pellentesque ut venenatis id, congue id erat.",
    },
  ];
  return (
    <BodyWrapper>
      <ContactContext.Provider value={true}>
        <NavBar skillset={skillsetRef} work={eventRef} clients={clientsRef} />
        <Tabs value={value} onChange={handleChange}>
          <Tab value="0" label="About Us" color="primary" />
          <Tab value="1" label="Rules" />
          <Tab value="2" label="FAQ" />
          <Tab value="3" label="Contact Us" />
        </Tabs>
        <TabPanel value={value} index={0}>
          <TextSection
            title="Empowering women, one step at a time"
            content={aboutText}
          ></TextSection>
          {pastEvents.map((item, index) => (
            <Event innerRef={item.ref} isPast={true} title={item.title}></Event>
          ))}
        </TabPanel>
        <TabPanel value={value} index={1}>
          {placeHolder.map((item, index) => (
            <TextSection title={item.title} content={item.copy}></TextSection>
          ))}
        </TabPanel>
        <TabPanel value={value} index={2}>
          {placeHolder.map((item, index) => (
            <TextSection title={item.title} content={item.copy}></TextSection>
          ))}
        </TabPanel>
        <TabPanel value={value} index={3}>
          <ContactUsForm/>
        </TabPanel>
        <Footer />
      </ContactContext.Provider>
    </BodyWrapper>
  );
}

export default AboutUs;
